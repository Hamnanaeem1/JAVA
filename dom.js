// let elem = document.getElementById('one')
// // console.log(elem);
// elem.innerHTML = "ONCE UOPN A TIME";
// elem.style.backgroundColor = "pink";
// elem.style.textAlign = "center";
// elem.style.padding = "10px";

// elem.classList.add('hello')
// elem.classList.remove('hello')
// elemclassName = "acha";
// elem.id = "wow"

// // class
// let myDiv = document.getElementsByClassName('container');
// console.log(myDiv);
// myDiv[0].innerHTML = "apple"
// myDiv[0].style.fontSize = "50px"
// myDiv[0].style.color = "red"
// myDiv[0].id = "first"

let myDiv = document.getElementsByClassName('container');
console.log(myDiv);
myDiv[0].innerHTML = "APPLE";
myDiv[0].style.color = "purple"
myDiv[0].style.fontSize = "40px"
myDiv[0].id = "first";

let newElem = document.createElement('h4')

myDiv[0].appendChild(newElem);

let myimage = document.createElement('img')
newElem.appendChild(myimage);
myimage.src = "cat.jfif"