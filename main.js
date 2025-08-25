/*script for login succesfully*/
const number = '123456789';
const pin = '2580';
document.getElementById('btn-login')
.addEventListener('click', function(event){
const userNumber = document.getElementById('input-number')
    .value;
 const userPin = document.getElementById('input-pin')
 .value;
 if(userNumber === number && userPin === pin){
    window.open("homepage.html" , "block")
 }
 else{
    console.log('Wrong');
 }
})
