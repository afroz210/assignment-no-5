//console.log('add')
const nokhaliDonateButton = document
  .getElementById("noakhali-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliDonationAmount = getInputValueById('noakhali-donation-amount');
    const amountForNoakhali = getTextFieldValueById('amount-for-noakhali');
    const mainAmount = getTextFieldValueById('main-amount');

    // if(isNaN(noakhaliDonationAmount)){
    //     alert('')
    // }

    const totalAmountOfNoakhali = noakhaliDonationAmount + amountForNoakhali ;
    const mainAmountMinus = mainAmount - totalAmountOfNoakhali

    document.getElementById('amount-for-noakhali').innerText = totalAmountOfNoakhali;
    document.getElementById('main-amount').innerText = mainAmountMinus;

  });

const feniDonateButton = document
  .getElementById("feni-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniDonationAmount = getInputValueById('feni-donation-amount');
    const amountForFeni = getTextFieldValueById('amount-for-feni');
    const mainAmount2 = getTextFieldValueById('main-amount');

    const totalAmountOfFeni = feniDonationAmount + amountForFeni ;
    const mainAmountMinus2 = mainAmount2 - totalAmountOfFeni

    document.getElementById('amount-for-feni').innerText = totalAmountOfFeni;
    document.getElementById('main-amount').innerText = mainAmountMinus2

  });

const quotaDonateButton = document
  .getElementById("quota-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const quotaDonationAmount = getInputValueById('quota-donation-amount');
    const amountForQuota = getTextFieldValueById('amount-for-quota');
    const mainAmount3 = getTextFieldValueById('main-amount');

    const totalAmountOfQuota = quotaDonationAmount + amountForQuota ;
    const mainAmountMinus3 = mainAmount3 - totalAmountOfQuota

    document.getElementById('amount-for-quota').innerText = totalAmountOfQuota;
    document.getElementById('main-amount').innerText = mainAmountMinus3

  });

//   history items

// const historyItem = document.createElement('div'){

//     historyItem.className = 'border border-gray-500 rounded-lg p-8';
//     historyItem.innerHTML = `
//     <p>${getElementById(id)} Taka is Donated</p>
//     `
// };
