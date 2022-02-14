document.getElementById("btn").addEventListener("click", calculate)
const costEl = document.getElementById("cost-el")
const transportselectEl = document.getElementById("transport-select")
const foodselectEl = document.getElementById("food-select")
const errorEl = document.getElementById("error")

function calculate() {
    if (transportselectEl.value && foodselectEl.value) {
        costEl.textContent = "🪙" + (parseInt(transportselectEl.value) + parseInt(foodselectEl.value))
        errorEl.setAttribute("class", "")
        errorEl.textContent = ""
        confetti({
            particleCount: 250,
            spread: 180,
            origin: {
                x: 0.5,
                y: 0.6
            }
        });
    } else {
        errorEl.setAttribute("class", "show-error highlight")
        errorEl.textContent = "Check your selections!"
        if (!foodselectEl.value) {
            foodselectEl.setAttribute("style", "border: 2px red solid !important;")
        }
        if (!transportselectEl.value) {
            transportselectEl.setAttribute("style", "border: 2px red solid !important;")
        }
    }
}

foodselectEl.addEventListener("change", function () {
    foodselectEl.setAttribute("style", "border: 2px green solid !important;")
})

transportselectEl.addEventListener("change", function () {
    transportselectEl.setAttribute("style", "border: 2px green solid !important;")
})