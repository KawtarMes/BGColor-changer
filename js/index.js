const sliderRed = document.getElementById("R")
const sliderGreen = document.getElementById("G")
const sliderBlue = document.getElementById("B")
BackGroundColor =  document.body.style.backgroundColor
const colorText = document.querySelector("h5"); // Select the <h5> element



// Attach event listeners to sliders
sliderRed.addEventListener("input", updateBackgroundColor);
sliderGreen.addEventListener("input", updateBackgroundColor);
sliderBlue.addEventListener("input", updateBackgroundColor);

function updateBackgroundColor() {
    const redValue = sliderRed.value;
    const greenValue = sliderGreen.value;
    const blueValue = sliderBlue.value;
    


    // Update background color with the function and values collected from the sliders
    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorText.textContent = `Get your color: RGB Color: (${redValue}, ${greenValue}, ${blueValue})`;
}

