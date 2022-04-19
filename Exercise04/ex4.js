let red1 = document.querySelector('#r1')
let green1 = document.querySelector('#g1')
let blue1 = document.querySelector('#b1')
let w = document.querySelector('#w')

let red2 = document.querySelector('#r2')
let green2 = document.querySelector('#g2')
let blue2 = document.querySelector('#b2')

let change = document.querySelector('#button')
let paragraph = document.querySelector(".paragraph")

change.addEventListener("click", () => {
    paragraph.style.borderColor = 'rgb(' +red1.value + ',' + green1.value + ',' + blue1.value + ')'
    paragraph.style.borderWidth = w.value + 'px'
    paragraph.style.backgroundColor = 'rgb(' +red2.value + ',' + green2.value + ',' + blue2.value + ')'
})
