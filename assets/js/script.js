"use strict";

// let rightIcon = document.querySelector(".slider-area .slider .icons i:nth-child(2)")
// let leftIcon = document.querySelector(".slider-area .slider .icons i:nth-child(1)")

// console.log(rightIcon);

// rightIcon.addEventListener("click",function(){
//     let activeSlider = document.querySelector(".active-slider");
//     if (activeSlider.nextElementSibling != null) {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.nextElementSibling.classList.add("active-slider")
//     }
//     else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider")
//     }
// })

// leftIcon.addEventListener("click",function(){
//     let activeSlider = document.querySelector(".active-slider");
//     if (activeSlider.previousElementSibling!= null) {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.previousElementSibling.classList.add("active-slider")
//     }
//     else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.lastElementChild.classList.add("active-slider")
//     }
// })


// setInterval(() => {
//     let activeSlider = document.querySelector(".active-slider");
//     if (activeSlider.nextElementSibling != null) {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.nextElementSibling.classList.add("active-slider")
//     }
//     else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider")
//     }
// }, 1000);


// Ayri bir function


// leftIcon.addEventListener("click",leftSlider)


// rightIcon.addEventListener("click",rightSlider)




// function rightSlider(){
//     let activeSlider = document.querySelector(".active-slider");
//     if (activeSlider.nextElementSibling != null) {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.nextElementSibling.classList.add("active-slider")
//     }
//     else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider")
//     }
// }

// function leftSlider(){
//     let activeSlider = document.querySelector(".active-slider");
//     if (activeSlider.nextElementSibling != null) {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.nextElementSibling.classList.add("active-slider")
//     }
//     else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider")
//     }
// }

// // setInterval(() => {
// //     rightSlider();
// // }, 1000);

// setTimeout(() => {
//     setInterval(() => {
//         rightSlider();
//     }, 1000);
// }, 3000);


// let a = document.querySelector("a");

// a.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log(e.target.innerText);
// })

// let fileInput = document.querySelector("input");

// fileInput.addEventListener("change",function(e){
//     console.log(e);
// })


// let dragElem = document.getElementById("drag-elem");
// let dropElem = document.getElementById("drop-elem");

// dragElem.ondragstart = () =>{
//     console.log("drag start");
// }

// dragElem.ondrag = () =>{
//     console.log("drag");
// }

// dragElem.ondragend = () =>{
//     console.log("drag end");
// }

// dragElem.ondragover = () =>{
//     console.log("working");
// }

// dragElem.ondragleave = () =>{
//     console.log("leave");
// }







let dragElem = document.getElementById("drag-elem");
let dropElem = document.getElementById("drop-elem");
let dropElem2 = document.getElementById("drop-elem2");

dragElem.ondragstart = (e) =>{
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id",id)
}

dropElem.ondragover = (e) =>{
    e.preventDefault();
}

dropElem.ondrop = (e) =>{
    // e.target.append(document.getElementById(e.dataTransfer.getData("id")))

    let id = e.dataTransfer.getData("id");
    let elem = document.getElementById(id);
    e.target.append(elem);

}

dropElem2.ondragover = (e) =>{
    e.preventDefault();
}

dropElem2.ondrop = (e) =>{
    e.target.append(document.getElementById(e.dataTransfer.getData("id")))
}

