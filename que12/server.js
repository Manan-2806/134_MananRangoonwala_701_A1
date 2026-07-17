// task1: Fetch user details
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 1: User details fetched.");
            resolve({ id: 101, name: "John" });
        }, 1000);
    });
}

// task2: Fetch orders using user details
function task2(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Task 2: Orders fetched for ${user.name}.`);
            resolve({
                user: user,
                orders: ["Laptop", "Mouse", "Keyboard"]
            });
        }, 1000);
    });
}

// task3: Generate bill using order details
function task3(orderData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 3: Bill generated.");
            resolve({
                customer: orderData.user.name,
                totalItems: orderData.orders.length,
                amount: 50000
            });
        }, 1000);
    });
}

// Chained Promises
task1()
    .then(task2)
    .then(task3)
    .then((bill) => {
        console.log("\nFinal Result:");
        console.log(bill);
    })
    .catch((error) => {
        console.log("Error:", error);
    });