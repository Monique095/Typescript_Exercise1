//Message when clicked registered
function register() {
    var customerName = getInputValue('forenames');
    Forename(customerName);
    var customerSurname = getInputValue('surname');
    Surname(customerSurname);
    //Is undefined because it is not required.
    var customerNickname = getInputValue('nickname');
    Nickname(customerNickname);
    var customerEmailAddress = getInputValue('emailAddress');
    EmailAddress(customerEmailAddress);
    var customerPassword = getInputValue('password');
    Password(customerPassword);
    var customerConfirmPassword = getInputValue('confirmPassword');
    ConfirmPassword(customerConfirmPassword);
    //if not entered it goes in the if statement if entered it goes in the else.
    if (customerName == null) {
        console.error('Invalid Forename');
    }
    if (customerSurname == null) {
        console.error('Invalid Surname');
    }
    if (customerEmailAddress == null) {
        console.error('Invalid Email Address');
    }
    if (customerPassword == null) {
        console.error('Invalid Password');
    }
    if (customerConfirmPassword == null) {
        console.error('Invalid Confirm Password');
    }
    //Check if Password and Confirm Password match.
    else if (customerPassword != customerConfirmPassword) {
        console.error('Passwords does not Match');
    }
    else {
        console.log('Validated');
    }
}
function Forename(forname) {
    console.log("Forname: " + forname);
}
function Surname(surnames) {
    console.log("Surname: " + surnames);
}
function Nickname(nickames) {
    console.log("Nickname: " + nickames);
}
function EmailAddress(email) {
    console.log("Email-Address: " + email);
}
function Password(passwords) {
    console.log("Password: " + passwords);
}
function ConfirmPassword(confirmPassword) {
    console.log("Confirm Password: " + confirmPassword);
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
//Disable and Enable the Register Button Function
function terms_changed(termsCheckBox) {
    if (termsCheckBox.checked) {
        document.getElementById("register").disabled = false;
    }
    else {
        document.getElementById("register").disabled = true;
    }
}
//AddEventListener for Register Button
document.getElementById('register').addEventListener('click', register);
//AddEventListener for Array Button
document.getElementById('array').addEventListener('click', display);
//ARRAYS
function filterMethod(number) {
    //Greater than 50
    return (number > 50);
}
function display() {
    //Filter
    var ArrayFilter = [89, 5, 56, 102, 7];
    ArrayFilter = ArrayFilter.filter(filterMethod);
    console.log("Filter:", ArrayFilter);
    //Splice Replace
    var ArraySpliceReplace = ["John", "Sarah", "Beth", "Adam", "Peter"];
    //Replace Beth and Adam with Cindy and Zoe
    var replaced = ArraySpliceReplace.splice(2, 0, "Cindy", "Zoe");
    replaced = ArraySpliceReplace.splice(4, 2);
    console.log("After Replace: " + ArraySpliceReplace);
    //Splice Remove
    var ArraySplice = ["John", "Sarah", "Beth", "Adam", "Peter"];
    //Remove Adam from Array
    var remove = ArraySplice.splice(3, 1);
    console.log("After Removed: ", ArraySplice);
    //Pop 
    var ArrayPop = [89, 5, 56, 102, 7];
    var element = ArrayPop.pop();
    console.log("Pop:", ArrayPop);
    //Push
    var ArrayPush = [89, 5, 56, 102, 7];
    var element = ArrayPush.push(78);
    console.log("Push:", ArrayPush);
    //IndexOf
    var ArrayIndexOf = [89, 5, 56, 102, 7].indexOf(5);
    console.log("IndexOf: ", ArrayIndexOf);
    //Slice
    var ArraySlice = ["John", "Sarah", "Beth", "Adam", "Peter"].slice(1, 4);
    console.log("Slice: ", ArraySlice);
    //Unshift
    var ArrayUnshift = [89, 5, 56, 102, 7];
    var element = ArrayUnshift.unshift(14, 67);
    console.log("Unshift: ", ArrayUnshift);
    //Concat
    var letters = ["a", "b", "c"];
    var numbers = [1, 2, 3];
    var combine = [].concat(letters, numbers);
    console.log("Concat: ", combine);
}
//# sourceMappingURL=index.js.map