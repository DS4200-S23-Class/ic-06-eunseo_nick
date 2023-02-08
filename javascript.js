// Event Handler For Click
function submitClicked() {
  
  let vals = document.getElementsByTagName("input");
  
  console.log(vals.length);
  
  for (let i = 0; i < vals.length; i++){
    
   
      if(vals[i].checked) {
        console.log(vals[i].value);
        
        let newText = "Selected Vis: " + vals[i].value;
        document.getElementById("selected-vis").innerHTML = newText;
      }
  }
}

document.getElementById("subButton")
        .addEventListener("click", submitClicked);
