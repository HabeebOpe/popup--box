let popup = document.querySelector('#popup');
let open = document.querySelector('#open');
let close = document.querySelector('#close');


open.addEventListener('click', () => {
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)scale(1)";
        popup.style.visibility = "visible";
})
close.addEventListener('click', () => {
        popup.style.top = "0";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)scale(0.1)";
        popup.style.visibility = "hidden";
})
