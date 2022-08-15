document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFild = document.getElementById('user-withdraw');
    const newWithdrawFildString = withdrawFild.value;
    const newWithdrawFild = parseFloat(newWithdrawFildString);

    withdrawFild.value = '';

    if (isNaN(newWithdrawFild)) {
        alert('Please provide a valid Number !');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawFild > previousBalanceTotal) {
        alert('Bap er Bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal = newWithdrawFild + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawFild;

    balanceTotalElement.innerText = currentBalanceTotal;




})