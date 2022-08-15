document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFild = document.getElementById('user-withdraw');
    const newWithdrawFildString = withdrawFild.value;
    const newWithdrawFild = parseFloat(newWithdrawFildString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = newWithdrawFild + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - newWithdrawFild;

    balanceTotalElement.innerText = currentBalanceTotal;


    withdrawFild.value = '';

})