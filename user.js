class User {
  constructor(email, name, income, bills = [], goals = [], saving_perc) {
    this.email = email;
    this.name = name;
    this.income = income;
    this.bills = bills;
    this.goals = goals;
    this.saving_perc = saving_perc;
  }

  addBill(billName, billCost) {
    this.bills.push({ name: billName, cost: billCost });
  }

  addGoal(goalName, goalPercentage) {
    this.goals.push({ name: goalName, percentage: goalPercentage });
  }
  deleteBill(billName) {
    this.bills = this.bills.filter(bill => bill.name !== billName);
  }

  editBill(billName, newName, newCost) {
    const billIndex = this.bills.findIndex(bill => bill.name === billName);
    if (billIndex !== -1) {
      this.bills[billIndex] = { ...this.bills[billIndex], name: newName, cost: newCost };
    }
  }

  deleteGoal(goalName) {
    this.goals = this.goals.filter(goal => goal.name !== goalName);
  }

  editGoal(goalName, newName, newPercentage) {
    const goalIndex = this.goals.findIndex(goal => goal.name === goalName);
    if (goalIndex !== -1) {
      this.goals[goalIndex] = { ...this.goals[goalIndex], name: newName, percentage: newPercentage };
    }
  }
}

let netIncome = 0;
let savingCost = 0;
let personalIncome = 0;

function calculateFinancialMetrics(user) {
  const totalBillCost = user.bills.reduce((acc, bill) => acc + bill.cost, 0);
  netIncome = user.income - totalBillCost;
  savingCost = netIncome * user.saving_perc;
  personalIncome = netIncome - savingCost;
}

function addBillField() {
  const container = document.getElementById('billsContainer');
  container.innerHTML += 'Bill Name: <input type="text" class="billName"><br>Bill Cost: <input type="number" class="billCost"><br>';
}

function addGoalField() {
  const container = document.getElementById('goalsContainer');
  container.innerHTML += 'Goal Name: <input type="text" class="goalName"><br>Goal Percentage: <input type="number" class="goalPercentage"><br>';
}

function submitUserData() {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const income = parseFloat(document.getElementById('income').value);
  const user = new User(email, name, income);

  document.querySelectorAll('.billName').forEach((element, index) => {
    const billCost = parseFloat(document.querySelectorAll('.billCost')[index].value);
    if (element.value && !isNaN(billCost)) {
      user.addBill(element.value, billCost);
    }
  });

  document.querySelectorAll('.goalName').forEach((element, index) => {
    const goalPercentage = parseFloat(document.querySelectorAll('.goalPercentage')[index].value);
    if (element.value && !isNaN(goalPercentage)) {
      user.addGoal(element.value, goalPercentage);
    }
  });

  console.log(user); // Here you would typically send this data to a server or use it in your application
}

// These methods ensure that dynamic fields are added correctly but you should consider preventing the default form submission behavior to handle data with JavaScript.


let testUser = new User('test@example.com', 'Test User', 1000, [], [], 0.1);

testUser.addBill('Rent', 500);
testUser.addBill('Electricity', 100);
testUser.addGoal('Vacation', 0.2);

calculateFinancialMetrics(testUser);
console.log(`Net Income: ${netIncome}, Saving Cost: ${savingCost}, Personal Income: ${personalIncome}`);

calculateFinancialMetrics(testUser);
console.log(testUser);
