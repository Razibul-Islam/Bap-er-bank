// step no-1: addEventListener to the diposite button
document.getElementById('btn-diposit').addEventListener('click', function () {
    // step no-2: get the diposit amount from the diposit input field
    const dipositFild = document.getElementById('user-diposit');
    const newDipositAmountString = dipositFild.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    // step no-3: get the current diposit total amount
    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);
    // step no-4: add numbers to the set total deposit
    const currentDipositTotal = previousDipositTotal + newDipositAmount;

    dipositTotalElement.innerText = currentDipositTotal;
    // step no-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step no-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDipositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    // step no-7: clear the diposit field
    dipositFild.value = '';
})