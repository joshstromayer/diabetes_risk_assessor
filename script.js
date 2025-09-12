function calculateRisk() {
    const weights = [1.12211369, 0.3736056292375291, 0.17017502955278827, 0.13284791943046084, 0.2935345127870824, 0.8705724154641168];

    const age = parseFloat(document.getElementById("age").value);
    const hypertension = document.getElementById("hypertension_yes").checked ? 1 : 0;
    const heartDisease = document.getElementById("heartdisease_yes").checked ? 1 : 0;
    const bmi = parseFloat(document.getElementById("bmi").value);
    const hba1c = parseFloat(document.getElementById("hba1c").value);
    const glucose = parseFloat(document.getElementById("bglevels").value);

    // template data for script testing
    // const age = 32
    // const hypertension = 1
    // const heartDisease = 0
    // const bmi = 32
    // const hba1c = 7.3
    // const glucose = 79

    const influences = Array(6).fill(0);
    const influenceStatuses = {};
    const influenceScores = {};
    const statusKeys = ["age_status", "hypertension_status", "heart_disease_status", "bmi_status", "hba1c_status", "glucose_status"];
    const scoreKeys = ["age_score", "hypertension_score", "heart_disease_score", "bmi_score", "hba1c_score", "glucose_score"];

    const bmiLower = 18.5;
    const bmiUpper = 24.9;

    // 1. Age Influence
    let delta = (age - 30) / 30;
    let ageInfluence = delta * weights[0] * 1000 * 0.5;
    ageInfluence = Math.round(ageInfluence * 100) / 100;
    influences[0] = ageInfluence;

    // 2. Hypertension
    let hypertensionInfluence = hypertension ? weights[1] * 1000 * 0.5 : 0;
    hypertensionInfluence = Math.round(hypertensionInfluence * 100) / 100;
    influences[1] = hypertensionInfluence;

    // 3. Heart Disease
    let heartDiseaseInfluence = heartDisease ? weights[2] * 1000 * 0.5 : 0;
    heartDiseaseInfluence = Math.round(heartDiseaseInfluence * 100) / 100;
    influences[2] = heartDiseaseInfluence;

    // 4. BMI
    let bmiInfluence = 0;
    if (bmi > bmiUpper) {
        let alpha = (bmi - bmiUpper) / bmiUpper;
        bmiInfluence = weights[3] * alpha * 1000;
    } else if (bmi < bmiLower) {
        let alpha = (bmiLower - bmi) / bmiLower;
        bmiInfluence = weights[3] * alpha * 1000;
    }
    bmiInfluence = Math.round(bmiInfluence * 100) / 100;
    influences[3] = bmiInfluence;

    // 5. Glucose
    let glucoseInfluence = 0;
    if (glucose > 126) {
        let beta = (glucose - 100) / 126;
        glucoseInfluence = weights[5] * beta * 1000;
    } else if (glucose > 100 && glucose <= 126) {
        let beta = (glucose - 100) / 126;
        glucoseInfluence = weights[5] * beta * 0.8 * 1000;
    } else if (glucose <= 70) {
        let beta = (70 - glucose) / 70;
        glucoseInfluence = weights[5] * beta * 1000;
    }
    glucoseInfluence = Math.round(glucoseInfluence * 100) / 100;
    influences[5] = glucoseInfluence;

    // 6. HbA1c
    let hba1cInfluence = 0;
    if (hba1c > 6.4) {
        let c = (hba1c - 5.7) / 6.4;
        hba1cInfluence = weights[4] * c * 1000;
    } else if (hba1c >= 5.7 && hba1c <= 6.4) {
        let c = (hba1c - 5.7) / 6.4;
        hba1cInfluence = weights[4] * c * 0.8 * 1000;
    }

    hba1cInfluence = Math.round(hba1cInfluence * 100) / 100;
    influences[4] = hba1cInfluence;

    // Status and Score Calculations
    for (let i = 0; i < influences.length; i++) {
        let val = influences[i];
        let status = "None";
        let score = "0/10";

        if (val > 45) { status = "Extreme"; score = "10/10"; }
        else if (val > 40) { status = "Extreme"; score = "9/10"; }
        else if (val > 35) { status = "High"; score = "8/10"; }
        else if (val > 30) { status = "High"; score = "7/10"; }
        else if (val > 25) { status = "Moderate"; score = "6/10"; }
        else if (val > 20) { status = "Moderate"; score = "5/10"; }
        else if (val > 15) { status = "Moderate"; score = "4/10"; }
        else if (val >= 10) { status = "Moderate/Low"; score = "3/10"; }
        else if (val >= 6) { status = "Low"; score = "2/10"; }
        else if (val >= 3) { status = "Low"; score = "1/10"; }

        influenceStatuses[statusKeys[i]] = status;
        influenceScores[scoreKeys[i]] = score;
    }

    // Output to page
    document.getElementById("result").innerHTML = `
        <ul>
            <li><b>Age Influence:</b> ${influenceStatuses[statusKeys[0]]}</li>
            <li><b>Glucose Influence:</b> ${influenceStatuses[statusKeys[1]]}</li>
            <li><b>HbA1c Influence:</b> ${influenceStatuses[statusKeys[2]]}</li>
            <li><b>BMI Influence:</b> ${influenceStatuses[statusKeys[3]]}</li>
            <li><b>Hypertension Influence:</b> ${influenceStatuses[statusKeys[4]]}</li>
            <li><b>Heart Disease Influence:</b> ${influenceStatuses[statusKeys[5]]}</li>
        </ul>
    `;
}