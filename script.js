function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get radius input value
    let radiusInput = document.getElementById("radius").value;

    // Convert input to a floating-point number
    let radius = parseFloat(radiusInput);

    // Validate input: Must be a positive number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate volume using formula: V = (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round result to 4 decimal places and display in volume field
    document.getElementById("volume").value = volume.toFixed(4);
}

// Attach the function to form submission
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
