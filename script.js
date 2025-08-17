function changeColor() {
  const element = document.querySelector("input");
  const value = element.value;
  document.body.style.backgroundColor = value;


  const newbtn = document.createElement("button");
  newbtn.innerHTML = value;
  newbtn.onclick = function() {
    document.body.style.backgroundColor = value;
   
  }
  document.querySelector("#buttons").appendChild(newbtn);
  element.value="";

}