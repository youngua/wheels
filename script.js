/*
 * toggles the width of About-content in sidebar
 */
var about = document.getElementById("about-content");
function slide() {
    about.classList.toggle('show');
}

/*
 * when the reset button is clicked, switch images
 */
// variation reset button: active
document.getElementById('var-reset').onmousedown = function () {
    document.getElementById("var-reset").src = "images/reset-clicked.png";
};

document.getElementById('var-reset').onmouseup = function () {
    document.getElementById("var-reset").src = "images/reset-default.png";
};

// variation reset button: hover
document.getElementById('var-reset').onmouseover = function () {
    document.getElementById("var-reset").src = "images/reset-clicked.png";
};

document.getElementById('var-reset').onmouseleave = function () {
    document.getElementById("var-reset").src = "images/reset-default.png";
};

// size reset button: active
document.getElementById('size-reset').onmousedown = function () {
    document.getElementById("size-reset").src = "images/reset-clicked.png";
};

document.getElementById('size-reset').onmouseup = function () {
    document.getElementById("size-reset").src = "images/reset-default.png";
};

// size reset button: hover
document.getElementById('size-reset').onmouseover = function () {
    document.getElementById("size-reset").src = "images/reset-clicked.png";
};

document.getElementById('size-reset').onmouseleave = function () {
    document.getElementById("size-reset").src = "images/reset-default.png";
};

// line-Height reset button: active
document.getElementById('lineHeight-reset').onmousedown = function () {
    document.getElementById("lineHeight-reset").src = "images/reset-clicked.png";
};

document.getElementById('lineHeight-reset').onmouseup = function () {
    document.getElementById("lineHeight-reset").src = "images/reset-default.png";
};

// line-Height reset button: hover
document.getElementById('lineHeight-reset').onmouseover = function () {
    document.getElementById("lineHeight-reset").src = "images/reset-clicked.png";
};

document.getElementById('lineHeight-reset').onmouseleave = function () {
    document.getElementById("lineHeight-reset").src = "images/reset-default.png";
};

// tracking reset button: active
document.getElementById('tracking-reset').onmousedown = function () {
    document.getElementById("tracking-reset").src = "images/reset-clicked.png";
};

document.getElementById('tracking-reset').onmouseup = function () {
    document.getElementById("tracking-reset").src = "images/reset-default.png";
};

// tracking reset button: hover
document.getElementById('tracking-reset').onmouseover = function () {
    document.getElementById("tracking-reset").src = "images/reset-clicked.png";
};

document.getElementById('tracking-reset').onmouseleave = function () {
    document.getElementById("tracking-reset").src = "images/reset-default.png";
};




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

        if (this.value == 100) {
            // alert("hi");
            document.getElementById("hero-img").src = "images/1-nest.png";
        } else if (this.value == 200) {
            document.getElementById("hero-img").src = "images/2-web.png";
        } else if (this.value == 300) {
            document.getElementById("hero-img").src = "images/3-stonehedge.png";
        } else if (this.value == 400) {
            document.getElementById("hero-img").src = "images/4-nautilus.png";
        } else if (this.value == 500) {
            document.getElementById("hero-img").src = "images/5-water.png";
        } else if (this.value == 600) {
            document.getElementById("hero-img").src = "images/6-wood.png";
        } else if (this.value == 700) {
            document.getElementById("hero-img").src = "images/7-wheel.png";
        } else if (this.value == 800) {
            document.getElementById("hero-img").src = "images/8-eye.png";
        } else if (this.value == 900) {
            document.getElementById("hero-img").src = "images/9-bridge.png";
        } else if (this.value == 1000) {
            document.getElementById("hero-img").src = "images/10-pottery.png";
        }
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
