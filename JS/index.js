//noakhali
const nokhaliDonateButton = document
  .getElementById("noakhali-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliDonationAmount = getInputValueById("noakhali-donation-amount");
    const amountForNoakhali = getTextFieldValueById("amount-for-noakhali");
    const mainAmount = getTextFieldValueById("main-amount");
    const noakhaliTitle = getTextFieldValueByIdForText("nokhali-title-id");
//validation checking
    if (isNaN(noakhaliDonationAmount) || noakhaliDonationAmount <= 0) {
      alert("Invalid Donation Amount");
      return;
    }
    if (mainAmount < noakhaliDonationAmount) {
      alert("Not Enough Amount");
      return;
    }
//calculation
    const totalAmountOfNoakhali = noakhaliDonationAmount + amountForNoakhali;
    const mainAmountMinus = mainAmount - noakhaliDonationAmount;
//update display
    document.getElementById("amount-for-noakhali").innerText =
      totalAmountOfNoakhali;
    document.getElementById("main-amount").innerText = mainAmountMinus;

//history
    createHistoryElement(noakhaliDonationAmount, noakhaliTitle);
//modal call
    document.getElementById("modal-of-noakhali").showModal();
  });

//feni
const feniDonateButton = document
  .getElementById("feni-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniDonationAmount = getInputValueById("feni-donation-amount");
    const amountForFeni = getTextFieldValueById("amount-for-feni");
    const mainAmount2 = getTextFieldValueById("main-amount");
    const feniTitle = getTextFieldValueByIdForText("feni-title-id");

    if (isNaN(feniDonationAmount) || feniDonationAmount <= 0) {
      alert("Invalid Donation Amount");
      return;
    }
    if (mainAmount2 < feniDonationAmount) {
      alert("Not Enough Amount");
      return;
    }

    const totalAmountOfFeni = feniDonationAmount + amountForFeni;
    const mainAmountMinus2 = mainAmount2 - feniDonationAmount;

    document.getElementById("amount-for-feni").innerText = totalAmountOfFeni;
    document.getElementById("main-amount").innerText = mainAmountMinus2;

    createHistoryElement(feniDonationAmount, feniTitle);
    //modal call
    document.getElementById("modal-of-feni").showModal();
  });

//quota
const quotaDonateButton = document
  .getElementById("quota-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const quotaDonationAmount = getInputValueById("quota-donation-amount");
    const amountForQuota = getTextFieldValueById("amount-for-quota");
    const mainAmount3 = getTextFieldValueById("main-amount");
    const quotaTitle = getTextFieldValueByIdForText("quota-title-id");

    if (isNaN(quotaDonationAmount) || quotaDonationAmount <= 0) {
      alert("Invalid Donation Amount");
      return;
    }
    if (mainAmount3 < quotaDonationAmount) {
      alert("Not Enough Amount");
      return;
    }

    const totalAmountOfQuota = quotaDonationAmount + amountForQuota;
    const mainAmountMinus3 = mainAmount3 - quotaDonationAmount;

    document.getElementById("amount-for-quota").innerText = totalAmountOfQuota;
    document.getElementById("main-amount").innerText = mainAmountMinus3;

    createHistoryElement(quotaDonationAmount, quotaTitle);
    //modal call
    document.getElementById("modal-of-quota").showModal();
  });

//donation button

const donationButton = document
  .getElementById("donation-btn-id")
  .addEventListener("click", function () {
    document
      .getElementById("donation-btn-id")
      .classList.add("bg-lime-300", "text-black");
    document
      .getElementById("donation-btn-id")
      .classList.remove("text-gray-700", "border-gray-300");

    //for history btn
    document
      .getElementById("history-btn-id")
      .classList.remove("bg-lime-300", "text-black");
    document
      .getElementById("history-btn-id")
      .classList.add("text-gray-700", "border-gray-300");

    document.getElementById("donation-section-id").classList.remove("hidden");
    document.getElementById("dtails-history").classList.add("hidden");
  });

//history button

const historyButton = document
  .getElementById("history-btn-id")
  .addEventListener("click", function () {
    document
      .getElementById("history-btn-id")
      .classList.add("bg-lime-300", "text-black");
    document
      .getElementById("history-btn-id")
      .classList.remove("text-gray-700", "border-gray-300");

    // for donaion btn
    document
      .getElementById("donation-btn-id")
      .classList.add("text-gray-700", "border-gray-300");
    document
      .getElementById("donation-btn-id")
      .classList.remove("bg-lime-300", "text-black");

    document.getElementById("donation-section-id").classList.add("hidden");
    document.getElementById("dtails-history").classList.remove("hidden");
  });
