//console.log('hi')
function getInputValueById(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function getTextFieldValueById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}

function getHistoryItem(noakhaliDonationAmount){
    const itemOfHistory = `${noakhaliDonationAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh`
    return itemOfHistory;
}