const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Check BMI category and display appropriate message
    if (bmi < 18.5) {
      results.innerHTML = `Your BMI is ${bmi} (Underweight)`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi} (Normal weight)`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      results.innerHTML = `Your BMI is ${bmi} (Overweight)`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} (Obese)`;
    }
  }
});
