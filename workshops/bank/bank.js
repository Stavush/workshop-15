// Welcome to your first monday-u testing workshop!
// You just got a call from your bank!
// They need your help in analysing their client’s data.
// The bank will send you a list of clients, each with the following information:
//      1.The Client’s name
//      2.The Client’s current account balance

// For example:
// [
//     { firstName: "Ziv", lastName: "Ventura", balance: "220" },
//     { firstName: "Vlad", lastName: "Mystetskyi", balance: "54" },
//     { firstName: "Yoni", lastName: "Levin", balance: "213" }
// ]

// The output should be the average balance
// In the example above, the balance will be 162.33, because:
// (220 + 54 + 213) / 3 = "162.33"

// -------------------------> TODO: READ ME! IMPORTANT! <-------------------------
// 1.The function should return a string, with decimal precision of 2. For example: "12.34", "750.33", etc...
// 2.If an exception occurs, simply return null
// 3.To test the function's result, see file index.js
const calculateBalance = (data) => {
  // TODO: implement me!
  if (data.length === 0) {
    return 0;
  }
  if (data === null) {
    return null;
  }
  const sum = data
    .map((client) => parseFloat(client.balance))
    .reduce((i, a) => i + a);
  if (sum) {
    const avg = sum / data.length;
    const res = avg.toFixed(2).toString();
    return res;
  } else {
    return null;
  }

  // TODO: return null if an error occurs
};

module.exports = {
  calculateBalance,
};
