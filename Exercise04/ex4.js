let red1 = document.querySelector('#red1')
let green1 = document.querySelector('#green1')
let blue1 = document.querySelector('#blue1')
let w = document.querySelector('#w')
let red2 = document.querySelector('#red2')
let green2 = document.querySelector('#green2')
let blue2 = document.querySelector('#blue2')
let change = document.querySelector('#button')
let paragraph = document.querySelector(".paragraph")

change.addEventListener("click", () => {
    paragraph.style.backgroundColor = 'rgb(' +red1.value + ',' + green1.value + ',' + blue1.value + ')'
    paragraph.style.borderColor = 'rgb(' +red2.value + ',' + green2.value + ',' + blue2.value + ')'
    paragraph.style.borderWidth = w.value + 'px'
})