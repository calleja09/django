from django.http import HttpResponse
from django.contrib import messages
from django.views.generic import TemplateView, DetailView, FormView

from django.views.generic.edit import DeleteView

from .forms import PostForm
from .models import Post

class PostDeleteView(DeleteView):
    model = Post
    success_url = "/"
    template_name = "deletion.html"

class HomepageView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['posts'] = Post.objects.all().order_by('-id')
        return context
    
class PostDetailView(DetailView):
    template_name = "detail.html"
    model = Post

class AddPostView(FormView):

    template_name = "new_post.html"
    form_class = PostForm
    success_url = "/"

    def dispatch(self, request, *args, **kwargs):
        self.request = request
        return super().dispatch(request, *args, **kwargs)
    
    def form_valid(self, form) -> HttpResponse:
        new_object = Post.objects.create(
            text = form.cleaned_data['text'],
            title = form.cleaned_data['title'],
            image = form.cleaned_data['image']
        )
        messages.add_message(self.request, messages.SUCCESS, 'Posted successfully.')
        return super().form_valid(form)
    