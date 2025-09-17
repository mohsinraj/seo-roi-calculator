document.getElementById('roiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const cost = parseFloat(document.getElementById('cost').value);
  const traffic = parseFloat(document.getElementById('traffic').value);
  const conversionRate = parseFloat(document.getElementById('conversion').value) / 100;
  const profitPerConversion = parseFloat(document.getElementById('profit').value);

  const conversions = traffic * conversionRate;
  const monthlyProfit = conversions * profitPerConversion;
  const roi = ((monthlyProfit * 12) - cost) / cost * 100; // annual ROI
  const breakEvenMonths = cost / (monthlyProfit || 1);

  document.getElementById('result').innerHTML = `
    <p><strong>Estimated Monthly Profit:</strong> $${monthlyProfit.toFixed(2)}</p>
    <p><strong>Annual ROI:</strong> ${roi.toFixed(2)}%</p>
    <p><strong>Break-even Time:</strong> ${breakEvenMonths.toFixed(1)} months</p>
  `;
});
