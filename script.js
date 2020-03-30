/*
 * toggles the width of about content in sidebar
 */
var about = document.getElementById("about-content");
function slide() {
    about.classList.toggle('show');
}


/*
 * Expand height of textarea
 * Refer to https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
 */
var autoExpand = function (field) {

    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    var computed = window.getComputedStyle(field);

    // Calculate the height
    var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + field.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';

};

document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
}, false);


/*
 * Slider controls
 * Refer to https://codepen.io/kiledal/pen/YEXVQy
 */

$('#sizeSlider').on('input', function () {
    var size = $(this).val() + "px";
    $('textarea, input').css('font-size', size);
})

$('#lineHeightSlider').on('input', function () {
    var lineHeight = $(this).val() + "px";
    $('textarea, input').css('line-height', lineHeight);
})

$('#trackingSlider').on('input', function () {
    var tracking = $(this).val() + "px";
    $('textarea, input').css('letter-spacing', tracking);
})


/*
 * Slider control for axes
 * Refer to https://codepen.io/dromo77/pen/gOOogBE
 */
const container = document.querySelector(".container");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
const buttons = document.querySelectorAll(".button");

// Display property values
for (let i = 0; i < sliders.length; i++) {
    sliderValues[i].innerHTML = sliders[i].value;
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function () {
        container.style.setProperty(`--${this.id}`, this.value);
        output.innerHTML = this.value;
    };
});

// Reset text property and update display property value for each slider
buttons.forEach(button => {
    const buttonIndex = button.getAttribute("data-index");
    const resetOutput = document.querySelector(
        `.output[data-index="${buttonIndex}"]`
    );
    const resetSlider = document.querySelector(
        `.slider[data-index="${buttonIndex}"]`
    );
    button.onclick = function () {
        container.style.removeProperty(`--${resetSlider.id}`);
        resetOutput.innerHTML = resetSlider.defaultValue;
        resetSlider.value = resetSlider.defaultValue;
        console.log(resetSlider.defaultValue);
    };
});