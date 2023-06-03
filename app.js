document.addEventListener('DOMContentLoaded', () =>{

const btn = document.querySelector("#btn")

btn.addEventListener('click' , cambioColor)


function cambioColor(){
    let coin = document.querySelector('#coin')
    let head = document.querySelector('.head')
    let tail = document.querySelector('.tails')

let result
result = Math.random()


    //a.style.backgroundColor="blue";
    //a.style.width = "0%" 







if (result >= 0.5){
    head.style.width ="0%"
    tail.style.width ="100%"
    console.log(result)
} else{
    head.style.width ="100%"
tail.style.width ="0%"
}







/*
    setTimeout(function(){

    let result = Math.random()

        tail.remove()
        console.log("Heads!!")

    if (result >= 0,5){
        head.remove()
        tail.add()
        console.log("Tail!!!!s")
}



},100)


*/




}




      




    });


    












