function checkEligibility(age){
  if(age>=18){
    return true;
  }
  else{
    return false;
  }
  
}

function greetUser(obj){
  alert("Hello "+ obj.name + " from " + obj.city);
}

document.querySelector('.submit-button').addEventListener('click',function(){
  let name=document.querySelector('.name-input').value ;
  let age=document.querySelector(".age-input").value;

  const obj={
    name:name,
    age:age,
    city:"Namakkal"
  }

  greetUser(obj);

  
  if(checkEligibility(age)){
    console.log("Eligible");
  }
  else{
    console.log("Not Eligible");
  }
})