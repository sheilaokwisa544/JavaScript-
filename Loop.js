// repeat  same code or condition
let login = false;
let username;
let password;
while(!login){
    username = window.prompt('Enter your username:');
   password = window.prompt('Enter your password:');


   if(username==="myUsername"&&  password=== myPassword)
   {login = true
   console.log("youare logged in")}
   else{
        console.log("Invalid");
   }

}