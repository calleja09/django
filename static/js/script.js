// let icon = document.getElementsByClassName("icon");
// icon.onclick = function toggleTheme(){
        const root = document.documentElement;
    //     root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
// }

// // icon.onclick = function(){
// //     document.body.classList.toggle("")
// // }

const toggle = document.getElementById("icon");
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill')
    if(this.classList.toggle('bi-sun-fill')){
        root.dataset.theme = 'light'
    }
    // else if(this.classList.toggle('bi-sun-fill')){
    //     root.dataset.theme = 'light'
    // }
    else{
        root.dataset.theme = 'dark'
    }
})