'use strict';

// Demo Account for Practice
const account1 = {
   owner: 'Jonas Schmedtmann',
   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
   interestRate: 1.2, // %
   pin: 1111,
 };
 
 const account2 = {
   owner: 'Jessica Davis',
   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
   interestRate: 1.5,
   pin: 2222,
 };
 
 const account3 = {
   owner: 'Steven Thomas Williams',
   movements: [200, -200, 340, -300, -20, 50, 400, -460],
   interestRate: 0.7,
   pin: 3333,
 };
 
 const account4 = {
   owner: 'Sarah Smith',
   movements: [430, 1000, 700, 50, 90],
   interestRate: 1,
   pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// All necessary Elemnt select

const labelWelcome = document.querySelector('.welcome-msg');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance-value')
const labelSumIn = document.querySelector('.summary-in');
const labelSumOut = document.querySelector('.summary-out');
const labelSumInterest = document.querySelector('.summary-interest');

const containerApp     = document.querySelector('.app');
const containerMovments = document.querySelector('.movements');

const inputLoginUsername = document.querySelector('.input-username');
const inputLoginPin = document.querySelector('.input-pin');
const inputTransferTo = document.querySelector('.transfer-to');
const inputTransferAmount = document.querySelector('.transfer-amount');
const inputLoanAmount = document.querySelector('.loan-amount');
const inputCloseUsername = document.querySelector('.close-input-user');
const inputClosePin = document.querySelector('.close-input-pin');

const btnLogin = document.querySelector('.login-btn');
const btnTransfer= document.querySelector('.transfer-btn');
const btnLoan = document.querySelector('.loan-btn');
const btnClose = document.querySelector('.close-btn');
const btnSort = document.querySelector('.sort-btn');

// Dispalymovments function;

const displayMovments = function(movements){
   containerMovments.innerHTML = '';
   movements.forEach((mov , i) =>{
      const type = mov > 0 ? "deposit" : 'withdraw'
      const html = `
         <div class="movements-row">
            <div class="label-movment label-movment-${type}">${i + 1} ${type}</div>
            <div class="movment-date">3 days ago</div>
            <div class="movements-value">${mov}€</div>
         </div>
      `
      containerMovments.insertAdjacentHTML('beforeend', html)
   })
}
// displayMovments(account1.movements);

// Display balance fucntion;
const displayBalance = function(movements){
  const balance = movements.reduce((acc, curr) => acc + curr , 0);
  labelBalance.textContent = `${balance}€`;
}
// displayBalance(account1.movements);

// Display summary function
const displaySummary = function(movements){
   const income = movements.filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0);
   labelSumIn.textContent= income;

   const withdraw = movements.filter(mov => mov < 0).reduce((acc, curr) => acc + curr, 0);
   labelSumOut.textContent = `${Math.abs(withdraw)}€`;

   const interest = movements.filter(mov => mov > 0)
                             .map(mov => mov * 0.053 )
                             .filter(mov => mov >= 1)
                             .reduce((acc, curr) => acc + curr , 0)
   labelSumInterest.textContent = `${Math.round(interest)}€`;
}
// displaySummary(account1.movements);

// Create username property function
const createUsername = function(accounts){
   accounts.forEach(acc => {
      acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
   })
}
createUsername(accounts);

// Update ui funciotn
const updateUi = function(acc){
   displayMovments(acc.movements);
   displayBalance(acc.movements);
   displaySummary(acc.movements);
}

// Events Handelers ;
let currentAccount;
btnLogin.addEventListener('click', function(e){
   e.preventDefault();
   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

   if(currentAccount?.pin === Number(inputLoginPin.value)){
      // Display welcome msg
      labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`
      // display ui
      containerApp.style.opacity = 1;
      // update  Ui
      updateUi(currentAccount);
   };
   inputLoginUsername.value = inputLoginPin.value = '';

})