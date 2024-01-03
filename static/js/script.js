const root = document.documentElement;
const toggle = document.getElementById("icon");

// Check the saved theme when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    let theme = localStorage.getItem("theme");
    if (theme === "enabled"){
        toggle.classList.remove('bi-moon-fill');
        toggle.classList.add('bi-sun-fill');
        root.dataset.theme = 'dark';
    } else {
        toggle.classList.remove('bi-sun-fill');
        toggle.classList.add('bi-moon-fill');
        root.dataset.theme = 'light';
    }
});

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-sun-fill');
    if(this.classList.toggle('bi-moon-fill')){
        root.dataset.theme = 'light';
        localStorage.setItem("theme", "disabled");
    }
    else{
        root.dataset.theme = 'dark';
        localStorage.setItem("theme", "enabled");
    }
});
