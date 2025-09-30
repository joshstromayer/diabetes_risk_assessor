const BANDS = {
    age: {
        thresholds: [30, 40, 50, 60, 70],
        labels: ["Low", "Low/Moderate", "Moderate", "Moderate/High", "High", "Extreme"]
    },
    bmi: {
        thresholds: [18.5, 25, 30, 35, 40],
        labels: ["Low", "Low/Moderate", "Moderate", "Moderate/High", "High", "Extreme"]
    },
    bgl: {
        thresholds: [70, 100, 110, 126, 190],
        labels: ["Low", "Low/Moderate", "Moderate", "Moderate/High", "High", "Extreme"]
    },
    hba1c: {
        thresholds: [4.5, 5.7, 6.1, 6.5, 8.0],
        labels: ["Low", "Low/Moderate", "Moderate", "Moderate/High", "High", "Extreme"]
    }
}

function classify(value, thresh) {
    if (value == null || value == "None") return "None";
    for (let i = thresh.thresholds.length-1; i>=0; i--) {
        if (value >= thresh.thresholds[i]) return thresh.labels[i+1]
    }
    return thresh.labels[0]
}

function classify_hd(bool_hd) {
    let value_hd;

    if (bool_hd == 1) {
        value_hd = "Moderate-High, can vary based on specific disease."
    } else {
        value_hd = "None"
    }

    return value_hd
}

function classify_bp(bool_bp) {
    let value_bp;

    if (bool_bp == 1) {
        value_bp = "Moderate-High, see hba1c for clarification."
    } else {
        value_bp = "None"
    }
    return value_bp
}

function classifyAll({age, bmi, bgl, hba1c, hd, bp}) {
    return {
        age: classify(age, BANDS.age),
        bmi: classify(bmi, BANDS.bmi),
        bgl: classify(bgl, BANDS.bgl),
        hba1c: classify(hba1c, BANDS.hba1c),
        heart_disease: classify_hd(hd),
        blood_pressure: classify_bp(bp)
    };
}

function calculateRisk() {
    const weights = [0.9223423323369, 0.3736056292375291, 0.17017502955278827, 0.13284791943046084, 0.2935345127870824, 0.8705724154641168];

    const age = parseFloat(document.getElementById("age").value);
    const hypertension = document.getElementById("hypertension_yes").checked ? 1 : 0;
    const heartDisease = document.getElementById("heartdisease_yes").checked ? 1 : 0;
    const bmi = parseFloat(document.getElementById("bmi").value);
    const hba1c = parseFloat(document.getElementById("hba1c").value);
    const glucose = parseFloat(document.getElementById("bglevels").value);

    const influenceStatuses = classifyAll({age: age, bmi: bmi, bgl: glucose, hba1c: hba1c, hd:heartDisease, bp: hypertension})

    document.getElementById("result").innerHTML = `
        <ul>
            <li><b>Age Influence:</b> ${influenceStatuses.age}</li>
            <li><b>Glucose Influence:</b> ${influenceStatuses.bgl}</li>
            <li><b>HbA1c Influence:</b> ${influenceStatuses.hba1c}</li>
            <li><b>BMI Influence:</b> ${influenceStatuses.bmi}</li>
            <li><b>Hypertension Influence:</b> ${influenceStatuses.blood_pressure}</li>
            <li><b>Heart Disease Influence:</b> ${influenceStatuses.heart_disease}</li>
        </ul>
    `;
}