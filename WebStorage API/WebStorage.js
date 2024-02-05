//Local Storage
localStorage.setItem(`name`,`Rayan`);
let name =localStorage.getItem(`name`); 
console.log(name);
//To remove
//localStorage.removeItem(`name`);
//localStorage.clear();

//Session Storage
sessionStorage.setItem(`email`,`rayanbawazeer1@hotmail.com`);
let email = sessionStorage.getItem(`email`);
console.log(email);
//To remove
//sessionStorage.removeItem(`name`);
//sessionStorage.clear();