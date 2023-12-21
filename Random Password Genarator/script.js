const passwordBox=document.getElementById("Password");
const length =15 ;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const specialSymbol ="@#$%^&*(){}[]-_+=!|/" ;

const allChar= number + upperCase+ lowerCase+ specialSymbol;

function GeneratePassword()
{
    let Password ='';
    //for specific char at first go for bottom code
        // upperCase[Math.floor(Math.random() * upperCase.length)] +
        // lowerCase[Math.floor(Math.random() * lowerCase.length)] +
        // number[Math.floor(Math.random() * number.length)] +
        // specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
    
    while (Password.length < length) {
        Password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    

    passwordBox.value = Password;

}

function copyPassword()
{
    if (passwordBox) {
        passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value);
    }
}