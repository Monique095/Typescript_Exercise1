//Message when clicked registered
function register(){

  let customerName: string = getInputValue('forenames');
  Forename(customerName);

  let customerSurname: string = getInputValue('surname');
  Surname(customerSurname);

  //Is undefined because it is not required.
  let customerNickname: string | undefined = getInputValue('nickname');
  Nickname(customerNickname);

  let customerEmailAddress: string = getInputValue('emailAddress');
  EmailAddress(customerEmailAddress);
  
  let customerPassword: string = getInputValue('password');
  Password(customerPassword);
    
  let customerConfirmPassword: string = getInputValue('confirmPassword');
  ConfirmPassword(customerConfirmPassword);

   //if not entered it goes in the if statement if entered it goes in the else.
  if(customerName == null){
    console.error('Invalid Forename');
   }
  if(customerSurname == null){
    console.error('Invalid Surname');
  }
  if(customerEmailAddress == null){
    console.error('Invalid Email Address');
  }
  if(customerPassword == null){
    console.error('Invalid Password');
  }
  if(customerConfirmPassword == null){
    console.error('Invalid Confirm Password');
  }
  //Check if Password and Confirm Password match.
  else if(customerPassword != customerConfirmPassword){
    console.error('Passwords does not Match')
  }
  else{
     console.log('Validated')
  } 
}

function Forename(forname):void{
  console.log(`Forname: ${forname}`);
}
function Surname(surnames):void{
  console.log(`Surname: ${surnames}`);
}
function Nickname(nickames): void{
  console.log(`Nickname: ${nickames}`);
}
function EmailAddress(email): void{
  console.log(`Email-Address: ${email}`);
}
 function Password(passwords): void{
  console.log(`Password: ${passwords}`);
}
 function ConfirmPassword(confirmPassword): void{
   console.log(`Confirm Password: ${confirmPassword}`);
}

 
function getInputValue(elementID: string): string | undefined {
   const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
   if(inputElement.value === ''){
     return undefined;
   }
   else{
     return inputElement.value;
   }
 }
//Disable and Enable the Register Button Function
function terms_changed(termsCheckBox){
  //If the checkbox has been checked
  if(termsCheckBox.checked){
      //Set the disabled property to FALSE and enable the button.
      document.getElementById("submit_button").disabled = false;
  } else{
      //Otherwise, disable the submit button.
      document.getElementById("submit_button").disabled = true;
  }
}
//AddEventListener for Register Button
document.getElementById('register').addEventListener('click', register);

//AddEventListener for Array Button
document.getElementById('array').addEventListener('click', display);

//ARRAYS
function filterMethod(number){
  //Greater than 50
  return(number > 50)
}
function display() {
  //Filter
  let ArrayFilter = [89,5,56,102,7]; 
  ArrayFilter = ArrayFilter.filter(filterMethod);
  console.log("Filter:",ArrayFilter);

  //Splice Replace
  let ArraySpliceReplace = ["John", "Sarah","Beth","Adam","Peter"]; 
  //Replace Beth and Adam with Cindy and Zoe
  let replaced = ArraySpliceReplace.splice(2, 0, "Cindy","Zoe");         
  replaced = ArraySpliceReplace.splice(4, 2);  
  console.log("After Replace: " + ArraySpliceReplace); 

  //Splice Remove
  let ArraySplice = ["John", "Sarah","Beth","Adam","Peter"]; 
  //Remove Adam from Array
  let remove = ArraySplice.splice(3,1);
  console.log("After Removed: ", ArraySplice);

  //Pop 
  let ArrayPop = [89,5,56,102,7];
  var element = ArrayPop.pop();
  console.log("Pop:", ArrayPop);

  //Push
  let ArrayPush = [89,5,56,102,7];
  var element = ArrayPush.push(78);
  console.log("Push:", ArrayPush);

  //IndexOf
  let ArrayIndexOf = [89,5,56,102,7].indexOf(5);
  console.log("IndexOf: ", ArrayIndexOf);

  //Slice
  let ArraySlice = ["John", "Sarah", "Beth", "Adam", "Peter"].slice(1,4);
  console.log("Slice: ", ArraySlice);

  //Unshift
  let ArrayUnshift = [89,5,56,102,7];
  var element = ArrayUnshift.unshift(14,67);
  console.log("Unshift: " ,ArrayUnshift);

  //Concat
  const letters = ["a", "b", "c"];
  const numbers = [1, 2, 3];
  const combine = [].concat(letters, numbers);
  console.log("Concat: ",combine);
}

 



