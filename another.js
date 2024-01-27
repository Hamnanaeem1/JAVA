let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "BYE WORLD";
elem[0].style.backgroundColor = "pink"
elem[0].style.fontSize = "90px";
elem[0].style.height = "900px"
elem[0].style.width = "1400px"
elem[0].style.textAlign = "center";


let newElem = document.createElement('button');
newElem.innerHTML = "CLICk HERE"

elem[0].appendChild(newElem);
newElem.style.display = "block";
newElem.className = "btn btn-dark";
newElem.style.boxShadow = "3px 3px 4px 4px blue";
newElem.style.fontSize = "9px";
newElem.style.letterSpacing = "10px";
newElem.style.margin = "20px auto";




let newInp = document.createElement('input');
newInp.className = "form-control mt-5";
elem[0].appendChild(newInp);

newInp.addEventListener('keyup , keyboard');
 function keyboard ( ) {
    console.log("keyboard");
 }

