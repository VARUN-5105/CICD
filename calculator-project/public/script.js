function calculate() {
  const expression = document.getElementById('expression').value;

  fetch('/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ expression })
  })
    .then(res => res.json())
    .then(data => {
      if (data.result !== undefined) {
        document.getElementById('result').innerText = `Result: ${data.result}`;
      } else {
        document.getElementById('result').innerText = `Error: ${data.error}`;
      }
    });
}
