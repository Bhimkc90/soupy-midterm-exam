const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const addCartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cartCount");

let totalItems = 0;

plusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const quantitySpan = button.parentElement.querySelector(".quantity");
        let quantity = Number(quantitySpan.textContent);

        quantity++;
        quantitySpan.textContent = quantity;
    });
});

minusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const quantitySpan = button.parentElement.querySelector(".quantity");
        let quantity = Number(quantitySpan.textContent);

        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });
});

addCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productCard = button.closest(".product-card");
        const quantitySpan = productCard.querySelector(".quantity");

        const quantity = Number(quantitySpan.textContent);

        totalItems += quantity;
        cartCount.textContent = totalItems;

        button.textContent = "Added";

        setTimeout(function () {
            button.textContent = "Add to cart";
        }, 1000);
    });
});