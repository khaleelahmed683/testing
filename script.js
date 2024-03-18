var h1 = document.querySelector('#nav h1');

h1.addEventListener('mouseenter',function(){

    
    document.querySelector('#nav h1').style.backgroundColor = "red";
});

h1.addEventListener('mouseleave',function(){
    
    document.querySelector('#nav h1').style.backgroundColor = "black";
}) 

function hi() {
    console.log("HELLO");
}