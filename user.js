class User {
    constructor(email, name, income, bills = [], goals = []) {
        this.email = email;
        this.name = name;
        this.income = income;
        this.bills = bills;
        this.goals = goals;
    }

    addBill(billName, billCost) {
        this.bills.push({ name: billName, cost: billCost });
    }

    addGoal(goalName, goalPercentage) {
        this.goals.push({ name: goalName, percentage: goalPercentage });
    }
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
