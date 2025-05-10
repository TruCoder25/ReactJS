const history = [];

function calculate() {
  const a = +document.getElementById("num1").value;
  const b = +document.getElementById("num2").value;
  const op = document.getElementById("operator").value;

  const [x, y] = [a, b];

  const result =
    op === "+"
      ? x + y
      : op === "-"
      ? x - y
      : op === "*"
      ? x * y
      : op === "/"
      ? y !== 0
        ? x / y
        : "Error: Division by 0"
      : "Invalid Operation";

  history.push({ x, y, op, result });

  document.getElementById("result").innerText = `Result: ${result}`;

  const historyHTML = history
    .map(
      (entry, index) =>
        `<li> ${index + 1}: ${entry.x} ${entry.op} ${entry.y} = ${entry.result}</li>`
    )
    

  document.getElementById("historyTitle").innerText = "Calculation History:";
  document.getElementById("historyList").innerHTML = historyHTML;

  const total = history.reduce(
    (sum, h) => (typeof h.result === "number" ? sum + h.result : sum),
    0
  );
  document.getElementById("totalSum").innerText = total;
}
