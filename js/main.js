const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click', countUtbkAverageScore);

const inputNames = ['kpu_input', 'kku_input', 'ppu_input', 'kmm_input', 'lbind_input', 'lbing_input', 'pm_input'];

function countUtbkAverageScore() {
    const inputValues = getInputValues(inputNames);

    const tpsAverage = calculateAverage([
        inputValues.kpu_input, 
        inputValues.kku_input, 
        inputValues.ppu_input, 
        inputValues.kmm_input
    ]);

    const literacyAverage = calculateAverage([
        inputValues.lbind_input, 
        inputValues.lbing_input,
    ]);

    const result = calculateAverage([
        tpsAverage,
        literacyAverage,
        inputValues.pm_input
    ]);

    setResult(roundToTwo(result));
}

function getInputValues(names) {
    let values = {};
    names.forEach(name => {
        const value = document.getElementById(name).value || 0;
        values[name] = parseInt(value);
    });
    return values;
}

function calculateAverage(grades) {
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
    });
    return sum / grades.length;
}

function setResult(value) {
    const result = document.getElementById('result');
    result.innerHTML = value;
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
