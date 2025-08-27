
function cheakCard(id){
    const btnCheak = document.getElementById(id);
    btnCheak.style.backgroundColor = 'rgba(8, 116, 242, 0.05)';
    btnCheak.style.border = "1px solid #0874F2";
}

function toggleCard(){
    const btnCards = document.getElementsByClassName('card');
        for(const card of btnCards){
            card.style.backgroundColor = 'white';
            card.style.border = "rgba(8,8,8,0.2)";
        }
}

function toggleBtn(currentId){
const forms = document.getElementsByClassName('forms');
 for(const form of forms){
    console.log(form);
    form.style.display = "none";
 }
const currentForm = document.getElementById(currentId);
 currentForm.style.display = 'block'
}


document.getElementById('add-money')
.addEventListener('click', function(){
    toggleBtn('add-money-form');
        toggleCard();
        cheakCard('add-money')
})
document.getElementById('cash-out-money')
.addEventListener('click', function(){
    toggleBtn('cash-out-form');
     toggleCard();
     cheakCard('cash-out-money')

})

document.getElementById('transfer-money')
.addEventListener('click', function(){
    toggleBtn('transfer-form');
     toggleCard();
     cheakCard('transfer-money')
})

document.getElementById('get-bonus')
.addEventListener('click', function(){
toggleBtn('get-bonus-form');
toggleCard();
cheakCard('get-bonus')
})