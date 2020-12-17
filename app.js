function addClass(el, klass) {
    el.classList.add(klass);
}

function removeClass(el, klass) {
    el.classList.remove(klass);
}

const accordionItems = document.querySelectorAll(".contentBox")
const content = document.querySelectorAll('.content');

accordionItems.forEach(function (accordion) {
    const label = accordion.firstElementChild;
    label.addEventListener('click', toggleAccordion);
});


function toggleAccordion(e) {
    content.forEach(function (text) {

        if (text.previousElementSibling === e.target) {
            addClass(text.parentElement, 'active');
        } else {
            removeClass(text.parentElement, 'active');

        }
    });
}