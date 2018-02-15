//var commentsData = ["gracias", "me gusta el front-end"]; no firebase
//var styleData = ["color:red","fontSize:30px"] ésto no es escalable

var commentsData = [
  {
    content: "hola",
    style: {
      color:"red",
      background: "blue"
    }
  },
  ,
  {
    content: "adiós",
    style:{
      color:"blue"
      background: "purple"
    }
  }
]
function drawComments(){
  //console.log(commentsData);
  for (var i=0; i < commentsData.length; i ++){
    var commentContent = commentsData[i].content;
    var commentDom= document.createElement("section");
    commentDom.innerHTML=commentContent;
    var commentContent = document.getElementById("com")
    comment
  }
}

drawComments();
