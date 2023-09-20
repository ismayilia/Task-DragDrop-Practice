let dragElem1 = document.getElementById("drag-elem1");
let dragElem2 = document.getElementById("drag-elem2");
let dragElem3 = document.getElementById("drag-elem3");
let dragElem4 = document.getElementById("drag-elem4");
let dropElem = document.getElementById("drop-elem");

dragElem1.ondragstart = (e) =>{
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id",id)
}

dragElem2.ondragstart = (e) =>{
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id",id)
}

dragElem3.ondragstart = (e) =>{
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id",id)
}

dragElem4.ondragstart = (e) =>{
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id",id)
}

dropElem.ondragover = (e) =>{
    e.preventDefault();
}

dropElem.ondrop = (e) =>{
    e.target.append(document.getElementById(e.dataTransfer.getData("id")))
}
