function item1() {
    var itemone = document.getElementsByClassName("item1")
    var itemtwo = document.getElementsByClassName("item2")
    var itemthree = document.getElementsByClassName("item3")
    var slider = document.getElementsByClassName("slider1")
    slider[0].style.backgroundImage = "url(image/slider1.png)"
    itemone[0].classList.add('active')
    itemtwo[0].classList.remove('active')
    itemthree[0].classList.remove('active')
}

function item2() {
    var itemone = document.getElementsByClassName("item1")
    var itemtwo = document.getElementsByClassName("item2")
    var itemthree = document.getElementsByClassName("item3")
    var slider = document.getElementsByClassName("slider1")
    slider[0].style.backgroundImage = "url(image/slider2.png)"
    itemtwo[0].classList.add('active')
    itemone[0].classList.remove('active')
    itemthree[0].classList.remove('active')
}

function item3() {
    var itemone = document.getElementsByClassName("item1")
    var itemtwo = document.getElementsByClassName("item2")
    var itemthree = document.getElementsByClassName("item3")
    var slider = document.getElementsByClassName("slider1")
    slider[0].style.backgroundImage = "url(image/slider3.png)"
    itemtwo[0].classList.remove('active')
    itemone[0].classList.remove('active')
    itemthree[0].classList.add('active')
}

function next1() {
    var slider1 = document.getElementsByClassName("sliderOne")
    var slider2 = document.getElementsByClassName("sliderTwo")
    slider1[0].style.display = "none"
    slider2[0].style.display = "block"
}

function prev1() {
    var slider1 = document.getElementsByClassName("sliderOne")
    var slider2 = document.getElementsByClassName("sliderTwo")
    slider1[0].style.display = "none"
    slider2[0].style.display = "block"
}

function next2() {
    var slider1 = document.getElementsByClassName("sliderOne")
    var slider2 = document.getElementsByClassName("sliderTwo")
    slider2[0].style.display = "none"
    slider1[0].style.display = "block"
}

function prev2() {
    var slider1 = document.getElementsByClassName("sliderOne")
    var slider2 = document.getElementsByClassName("sliderTwo")
    slider2[0].style.display = "none"
    slider1[0].style.display = "block"
}