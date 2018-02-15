var boton01 = document.getElementById("boton01");
var textArea = document.getElementById("textarea1");
var contenedorTexto = document.getElementById("demo");
var containerComment= document.getElementById("container-comment")
//var commentText = (event.target.value);
function writting(){
  var muestra = textArea.value;
  contenedorTexto.innerText = muestra;
}
var largeBtn = document.getElementById("large-btn");
largeBtn.addEventListener("click", largeCommit);
  function largeCommit(){
    demo.style.fontSize= "9vh";
}

var mediumBtn = document.getElementById("medium-btn");
mediumBtn.addEventListener("click", mediumCommit);
  function mediumCommit(){
    demo.style.fontSize= "5vh";
}

var smallBtn = document.getElementById("small-btn");
smallBtn.addEventListener("click", smallCommit);
  function smallCommit(){
    demo.style.fontSize= "2vh";
}

var textBtn = document.getElementById("text-btn");
textBtn.addEventListener("click", colorText);
  function colorText(){
    var colorCommit= prompt("Ingresa un color:");
    demo.style.color=colorCommit;
}

var backgBtn = document.getElementById("backg-btn");
backgBtn.addEventListener("click", colorBackg);
  function colorBackg(){
    var backgCommit= prompt("Ingresa un color:");
    demo.style.background=backgCommit;
}

var leftBtn = document.getElementById("left-btn");
leftBtn.addEventListener("click", alignLeft);
  function alignLeft(){
    demo.className ="left-align"
}

var centerBtn = document.getElementById("center-btn");
centerBtn.addEventListener("click", alignCenter);
  function alignCenter(){
    demo.className ="center-align"
}

var rightBtn = document.getElementById("right-btn");
rightBtn.addEventListener("click", alignRight);
  function alignRight(){
    demo.className = "right-align"
}



/*
$(document).ready(function()
	{
	$("#boton01").click(function () {
	var $commit = $("#textarea1").val();
  $("#demo").text($commit);
	});
});
$("#large-btn").click(function(){
  function LargeCommit(){
    $("#demo").addClass("large-comm")
  }
})
$("#text-comm").click(function(){
  $("#text-comm").click(prompt("Ingresa un color hexadecimal:"))
})
*/
//boton01.addEventListener("click", publicarComent);
textArea.addEventListener("keyup", writting);
