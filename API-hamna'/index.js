setTimeout(function(){
    console.log("hello world")
},3000)

// setInterval(function(){
//     document.write("wow")
// },1000)


let PromiseOne = new Promise(function(resolve , reject ){
    setTimeout(function(){
        console.log("This is First Promise")
    },2000)
})

//second

let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name : "ali" , email : "ali@gmail.com"})
    },4000)
})


promiseTwo.then(function(user){
    console.log(user)
}
)

//three

let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username  : "peter" , password : "123455" , email : "peter@gmail.com"})
    },5000)
})

// promiseThree.then(function(one){
//     console.log(one)
// }
// )

promiseThree.then(function(user){
    return user.username;
}).then(function(pass){
    console.log(pass)
})

//four
let promiseFour = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({myName : "hamna"  , password : "4544"})
        }
        else{
            reject("ERROR  : SOMETHING WENT WRONG")
        }
    },6000)
})
promiseFour
.then(function(myvalue){
    console.log(myvalue)
})
.catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("FINALLY")
})