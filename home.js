document.getElementById('add-money')
.addEventListener('click', function(){
    const addMoney = document.getElementById('add-money-form');
    const latestPayment = document.getElementById('latest-payment');
    addMoney.style.display = 'block';
    latestPayment.style.display = 'none';
    const addMoneyCard = document.getElementById('add-money');
    addMoneyCard.style.backgroundColor = 'rgba(8, 116, 242, 0.05';
    addMoneyCard.style.border = "1px solid #0874F2";
})

document.getElementById('cash-out-money')
.addEventListener('click', function(){
    const cashOutMoney = document.getElementById('cash-out-form');
    const latestPayment = document.getElementById('latest-payment');
    cashOutMoney.style.display = 'block';
    latestPayment.style.display = 'none';
    const cashOutMoneyCard = document.getElementById('cash-out-money');
    cashOutMoneyCard.style.backgroundColor = 'rgba(8, 116, 242, 0.05';
    cashOutMoneyCard.style.border = "1px solid #0874F2";  
})
