let count = 0;
const calculateButton = document
  .getElementById('calculate')
  .addEventListener('click', function () {
    count += 1;
    const income = inputValueGetElementById('income');
    const software = inputValueGetElementById('software');
    const course = inputValueGetElementById('courses');
    const internet = inputValueGetElementById('internet');

    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;

    const result = document
      .getElementById('results')
      .classList.remove('hidden');

    const totalExpensesResult = document.getElementById('total-expenses');
    totalExpensesResult.innerText = totalExpenses.toFixed(2);

    const balanceResult = document.getElementById('balance');
    balanceResult.innerText = balance.toFixed(2);

    addToList(income, totalExpenses, balance);
  });

const savingButton = document
  .getElementById('calculate-savings')
  .addEventListener('click', function () {
    const saving = inputValueGetElementById('savings');

    const income = inputValueGetElementById('income');
    const software = inputValueGetElementById('software');
    const course = inputValueGetElementById('courses');
    const internet = inputValueGetElementById('internet');

    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;

    const savingBalance = (balance * saving) / 100;
    const savingAmount = document.getElementById('savings-amount');
    savingAmount.innerText = savingBalance;

    const remainingBalance = balance - savingBalance;

    const remainingBalanceResult = document.getElementById('remaining-balance');
    remainingBalanceResult.innerText = remainingBalance;
  });

// history tab start
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
document.getElementById('history-tab').addEventListener('click', function () {
  historyTab.classList.add(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );

  assistantTab.classList.remove(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );

  document.getElementById('history-section').classList.remove('hidden');

  document.getElementById('expense-form').classList.add('hidden');
  // document.getElementById('results').classList.add('hidden');
});

// assistant tab start
assistantTab.addEventListener('click', function () {
  assistantTab.classList.add(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );

  historyTab.classList.remove(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );

  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('expense-form').classList.remove('hidden');
  // document.getElementById('results').classList.remove('hidden');
});
