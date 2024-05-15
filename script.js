// JavaScript for the interactive part of the website
document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-button");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    let total = 0;

    orderButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const menuItem = button.parentElement;
            const itemName = menuItem.querySelector("h3").textContent;
            const itemPrice = parseFloat(menuItem.querySelector("p:last-child").textContent.slice(1));
            total += itemPrice;

            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                <span>${itemName}</span>
                <span>$${itemPrice.toFixed(2)}</span>
            `;

            cartItems.appendChild(cartItem);
            cartTotal.textContent = total.toFixed(2);
        });
    });

    checkoutButton.addEventListener("click", () => {
        alert(`Total: $${total.toFixed(2)}. Your order has been placed.`);
        cartItems.innerHTML = "";
        cartTotal.textContent = "0.00";
        total = 0;
    });
});
