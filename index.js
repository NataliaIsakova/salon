const items=document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
    item.classList.add('selected');


    })

    removeFocus=() => {
        items.forEach(item => {
            item.classList.remove ('selected');
        })
    }
})

gsap.to(".heading",{y: 10, easy:"bounce"})
gsap.from(".item",{y: 10, easy:"bounce"})

