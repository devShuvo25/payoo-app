document.getElementById('btn-log-out')
.addEventListener('click', function(){
    window.open("index.html");
})
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


// implement money
const accountNum = 2317011;
const pinNum = 2580;
const userAccountNum = document.getElementById('add-amount').value;
const selectElement = document.getElementById('bank-acconut-name');
const value = selectElement.value; 
const  bankName =  selectElement.options[selectElement.selectedIndex].text;
const inputField = document.getElementsByClassName('input-field');
function getInputValueNumber(id){
 const input = document.getElementById(id);
 const inputValue = input.value;
 const inputNumber = parseInt(inputValue);
 return inputNumber;
}

document.getElementById('btn-for-add')
.addEventListener('click', function(){
    const acNum = getInputValueNumber('account-number');
    const userPin = getInputValueNumber('pin-number');
    const amount = getInputValueNumber('add-amount')
    console.log(typeof(amount));
    console.log(bankName);
   if(bankName !== ''){
    if(accountNum === acNum ){
        if(userPin === pinNum){
            let currentBalanceStr = document.getElementById('balance');
            console.log(currentBalanceStr);
            const balance = parseInt(currentBalanceStr.innerText);
            console.log(balance);
            const total = balance + amount;
            console.log(total);
            currentBalanceStr.innerText = '';
            currentBalanceStr.innerText = total;
        }
        else{
            console.log('Invalid pin');
        }
    }
    else{
        console.log('Invalid account number');
    }
   }else{
    console.log('Select bank account first');
   }
   for(const input of inputField){
    input.value = '' ;
    
}
})