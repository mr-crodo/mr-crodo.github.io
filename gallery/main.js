const slides = document.querySelectorAll('.slide');


for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')

    })

}

function changeImage(imageValue) {
    document.body.style.backgroundImage = document.getElementById(imageValue).dataset.image;
}

