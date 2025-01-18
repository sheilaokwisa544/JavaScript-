function generatePassword(length,includeLowercase,includeNumbers,includeUppercase, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppecaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "012345679";
    const symbolChars = "+@%&*!?";

    let allowedChars = "";
    let password  = "";


    allowedChars += includeLowercase ? lowercaseChars: "";
    allowedChars += includeUppercase ? uppecaseChars: "";
    numberChars += includeNumbers ? includeNumbers: "";
    symbolChars += includeSymbols ? includeSymbols: "";

   if(length <=0){
    return `(password length must be atleast 1)`;

   }
   if(allowedChars.length ===0){
    return `(atleast 1 set of character needs to be selected)`
   }

   for(let i = 0; i< length; i++){
    const randomIndex =  Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
   }

    return '';
}




const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

generatePassword(passwordLength,
                includeLowercase,
                includeNumbers,
                includeUppercase,
                includeSymbols
            );
            console.log(`Generated password: ${password}`);