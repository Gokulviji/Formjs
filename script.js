//  variables declared


const username=document.querySelector(".input");
const mobile=document.getElementById("mobile")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmpassword=document.getElementById("Confirmpassword")
const url=document.getElementById("url")
const time=document.getElementById("time")
const month=document.getElementById("month")
const date=document.getElementById("date")

const userform=document.getElementById("Userform")

console.log(userform)
const inputElements=[
      username,
      mobile,
      email,
      password,
      confirmpassword,
      url,
      time,
      month,
      date
];

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



// function of error and scusses


// eror


function ShowError(element,message){
  element.className='input error'

  const formInput=element.parentElement;
  const messageinput=formInput.querySelector('.message')
  messageinput.classList.add('error')
  messageinput.innerText=message

}



// scusses


function Showsuccess(element){
  element.className='input scusses'
  const formInput=element.parentElement;

  const messageinput=formInput.querySelector('.message')
  messageinput.classList.remove('error')

}



// checkingmandatory

function checkMandatory(arrelements){
  for( let i=0; i<arrelements.length; i++){
          if(arrelements[i].value){
            Showsuccess(arrelements[i]);
          }
          else{
            ShowError(arrelements[i],`${arrelements[i].name} is mandartary`)
          }
  }
}



//check length



function checkLength(element,minlength,maxlength){

    const input=element.value;
    const name=element.name;

   if(input == ""){
     checkMandatory(input)
   }
    else if(input.length < minlength){

      ShowError(element,`${name} want to be more than 4 character`)
    }else if(input.length>maxlength){

      ShowError(element,`${name} want to be less than 12 character`)
    }

}


// checkemail


function checkemail(element){
    const value=element.value;
    const name=element.name;

    if( validateEmail(value)){
      Showsuccess(element)
    }else{
      ShowError(element,`${name}is in valid`)
    }


   


}




userform.addEventListener('submit',function(event){
      event.preventDefault();
  
checkMandatory(inputElements);

checkLength(inputElements[0],4,12)




})


