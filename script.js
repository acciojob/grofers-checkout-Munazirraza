//your code here
const table = document.querySelector("table");
const lastRow = document.createElement("tr");
// const prices = document.querySelectorAll("[data-ns-test=price]");
let allRows = document.getElementsByTagName("tr");
let sum = 0;
for (let i = 0; i < allRows.length; i++) {
  let tds = allRows[i].getElementsByTagName("td");
  sum += parseInt(tds[2].textContent);
}

// for (let i = 0; i < prices.length; i++) {
//   sum += parseInt(prices[i].textContent);
// }
const child = document.createElement("td");
child.setAttribute("data-ns-test", "grandTotal");

child.textContent = sum;
lastRow.appendChild(child);
table.appendChild(lastRow);