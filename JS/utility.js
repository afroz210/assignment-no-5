//console.log('hi')
function getInputValueById(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

function getTextFieldValueById(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

function getTextFieldValueByIdForText(id) {
  const textValue = document.getElementById(id).innerText;
  return textValue;
}

function createHistoryElement(amount, title) {
  const historyItemTitle = `${amount} Taka is Donated for ${title}`;
  const historyItemDate = "Date : " + new Date();
  const createHistoryElement = document.createElement('div');

  createHistoryElement.className = 'border border-gray-500 rounded-lg mt-4 lg:mx-36 p-6';

  createHistoryElement.innerHTML = `
  
  <p class='text-[20px] font-bold'>${historyItemTitle}</p>
  <p class='font-[300px] text-gray-500 mt-2'>${historyItemDate}</p>

   `
  const historyContainer = document.getElementById('dtails-history');
  historyContainer.insertBefore(createHistoryElement, historyContainer.firstChild);
}
