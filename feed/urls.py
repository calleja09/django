from django.urls import path
from .views import HomepageView, PostDetailView, AddPostView

app_name = 'feed'

urlpatterns = [
    path('', HomepageView.as_view() ,name='index'),
    path('detail/<int:pk>/',PostDetailView.as_view() ,name='detail'),
    path('post/', AddPostView.as_view() , name='post')
]