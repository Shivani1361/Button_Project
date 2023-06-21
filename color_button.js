const box = document.getElementsByClassName("box");

const yellow = document.getElementById("yellow");
yellow.onclick = function() {
    box[0].style.backgroundColor ="yellow";
};

const red = document.getElementById("red");
red.onclick = function() {
    box[0].style.backgroundColor = "red";
};

const blue = document.getElementById("blue");
blue.onclick = function() {
    box[0].style.backgroundColor = "blue";
};

const green = document.getElementById("green");
green.onclick = function() {
    box[0].style.backgroundColor = "green";
};

const text1 =document.getElementById("xyz");

const a =document.getElementById("clicking");
a.onclick =function(){
    text1.style.color="pink";
}    


