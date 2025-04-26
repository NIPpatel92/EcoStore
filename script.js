function calculateFootprint() {
    let usage = document.getElementById('usage').value;
    let result = document.getElementById('result');
    if(usage && !isNaN(usage)) {
        let footprint = usage * 0.5; // example factor
        result.innerHTML = `Estimated Carbon Footprint: ${footprint.toFixed(2)} kg CO₂/year`;
    } else {
        result.innerHTML = "Please enter a valid number.";
    }
}

function submitForm() {
    alert("Thank you for contacting us! We'll get back to you soon.");
}
