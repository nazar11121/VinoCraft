let cart = [];
const cartLink = document.getElementById("cartLink");
const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const checkoutSection = document.getElementById("cart");
const catalogSection = document.getElementById("catalog");

// Обробник для додавання товарів до кошика
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const productId = this.getAttribute("data-id");
        const productName = this.getAttribute("data-name");
        const productPrice = parseInt(this.getAttribute("data-price"));

        cart.push({ id: productId, name: productName, price: productPrice });
        updateCart();
    });
});

// Оновлення кошика
function updateCart() {
    let totalPrice = 0;
    cartItems.innerHTML = ""; // очищаємо кошик

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} грн`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;

    // Показуємо кошик
    if (cart.length > 0) {
        checkoutSection.style.display = "block";
    } else {
        checkoutSection.style.display = "none";
    }

    // Оновлення кількості товарів у кошику
    cartLink.textContent = `Кошик (${cart.length})`;
}
