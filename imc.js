document.getElementById('calculateButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const weight = parseFloat(document.getElementById('weightInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    const resultMessage = document.getElementById('resultMessage');

    if (!name || isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        resultMessage.textContent = "Preencha todos os campos corretamente.";
        resultMessage.style.color = "red";
        return;
    }

    const imc = weight / (height * height);
    let classification = "";

    if (imc < 18.5) {
        classification = "abaixo do peso.";
        resultMessage.style.color = "blue";
    } else if (imc < 24.9) {
        classification = "com peso normal.";
        resultMessage.style.color = "green";
    } else if (imc < 29.9) {
        classification = "com sobrepeso.";
        resultMessage.style.color = "orange";
    } else {
        classification = "com obesidade.";
        resultMessage.style.color = "red";
    }

    resultMessage.textContent = `${name}, seu IMC é ${imc.toFixed(2)} e você está ${classification}`;
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('nameInput').value = "";
    document.getElementById('weightInput').value = "";
    document.getElementById('heightInput').value = "";
    document.getElementById('resultMessage').textContent = "";
});
