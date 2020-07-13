'use strict'



fetch("https://randomuser.me/api/?results=20")
.then(function(response){
  console.log("fetch response",response)
  return response.json();
}).then(function(json){
  console.log("payload is ",json)
let users = json.results;
processUser(users);


});
function processUser(users){
  users.forEach(function(user){
    processSingleUser(user);
  })
}

function processSingleUser(user){

  let firstName = user.name.first
  let lastName = user.name.last

  let li = document.createElement("li")
  li.innerText = firstName+ " "+lastName

  let ul = document.getElementById("people")
  ul.appendChild(li)
  let button = document.createElement("button")
  li.appendChild(button)
  let cell  = user.cell
  
button.innerText = "click me"
button.addEventListener("click",function(){

let mydiv = document.createElement("div")
  mydiv.innerText = cell
  li.appendChild(mydiv)


  if(div.style.display == "none"){
    div.style.display = "block"
  }else{
    div.display = "none"
  }
 

  })

  
  
  

}
