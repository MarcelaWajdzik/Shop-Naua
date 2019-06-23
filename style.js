let activeImage = 1
const Time = 6000

//pobieranie elementów z pilku html na których bedziemy pracować

const homeImage = document.querySelector('.change')

//tablica
const image = ['imageone/imageHome.png', 'imageone/najnowszakaruzel.jpg', 'imageone/image3nowydol.png']

//Funkcja

function changeImage() {


    homeImage.src = image[activeImage]


    activeImage++



    if (activeImage == image.length) {
        activeImage = 0
    }
}

setInterval(changeImage, Time)


//search

const iSearch = document.querySelector('.fa-search')
const exit = document.querySelector('.fa-times')
const click = document.querySelector('.click')


iSearch.addEventListener('click', function () {
    click.classList.add('active')

})

exit.addEventListener('click', function () {
    click.classList.remove('active')
})

//search


//basket

const shopping = document.querySelector('.fa-shopping-cart')
const div = document.querySelector('.shopping')
const end = document.querySelector('h3 .fa-times')
const blur = document.querySelector('.blur')


shopping.addEventListener('click', function () {
    div.classList.add('show')
    blur.classList.add('grey')

})

end.addEventListener('click', function () {
    div.classList.remove('show')
    blur.classList.remove('grey')
})