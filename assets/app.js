// dashboard section

// capture all DOM element







document.getElementById('depositeSubmit').addEventListener('click', function(){

    const deposite = document.getElementById('deposite');
    const depositOutput = document.getElementById('depositOutput');
    const BalanceOutput = document.getElementById('BalanceOutput');
    const depositeAmount = Number(depositOutput.innerText) + Number(deposite.value);
    BalanceOutput.innerText = Number(BalanceOutput.innerText) + Number(deposite.value);
    depositOutput.innerText = depositeAmount;
    deposite.value = '';
    

})


document.getElementById('withdrawSubmit').addEventListener('click', function(){

    const BalanceOutput = document.getElementById('BalanceOutput');
    const withdrawOutput = document.getElementById('withdrawOutput');
    const withdraw = document.getElementById('withdraw').value;

    BalanceOutput.innerText = Number(BalanceOutput.innerText) - Number(withdraw);
    withdrawOutput.innerText = Number(withdraw) + Number(withdrawOutput.innerText);
    document.getElementById('withdraw').value = '';

})