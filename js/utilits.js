function inputValueGetElementById(id) {
  const inputNumber = Number(document.getElementById(id).value);
  return inputNumber;
}

// history list create html element

function addToList(income, totalExpenses, balance) {
  const historyItem = document.createElement('div');
  historyItem.className =
    'bg-white p-3 rounded-md border-l-2 border-indigo-500';

  historyItem.innerHTML = `
  <p class="text-xs text-gray-500">Serial: ${count}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: $${income}</p>
        <p class="text-xs text-gray-500">Expenses: $${totalExpenses}</p>
        <p class="text-xs text-gray-500">Balance: $${balance}</p>
  `;

  const historyItemList = document.getElementById('history-list');
  historyItemList.insertBefore(historyItem, historyItemList.firstChild);
}
