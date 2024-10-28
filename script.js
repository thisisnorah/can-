const servo1Slider = document.getElementById('servo1');
const servo2Slider = document.getElementById('servo2');
const servo1Value = document.getElementById('servo1Value');
const servo2Value = document.getElementById('servo2Value');

// Update the display value and send to Arduino in real-time for Servo 1
servo1Slider.addEventListener('input', () => {
    const angle = servo1Slider.value;
    servo1Value.textContent = `${angle}°`;
    // Send the angle to Arduino for Servo 1
    console.log(`Setting Servo 1 to ${angle} degrees`);
    // Here you would add your code to communicate with the Arduino
});

// Update the display value and send to Arduino in real-time for Servo 2
servo2Slider.addEventListener('input', () => {
    const angle = servo2Slider.value;
    servo2Value.textContent = `${angle}°`;
    // Send the angle to Arduino for Servo 2
    console.log(`Setting Servo 2 to ${angle} degrees`);
    // Here you would add your code to communicate with the Arduino
});
