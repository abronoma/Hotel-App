const button = document.querySelector("#ham");
const menu = document.querySelector(".menu");
button.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
})

const list = document.querySelectorAll("li");
list.forEach((li) => {
    li.addEventListener('click', () => {
        menu.classList.remove('showMenu');
    })
})
