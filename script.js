
const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")
const listPage = document.getElementById('product-list-page');
const detailPage = document.getElementById('product-detail-page');




if (bar){
    bar.addEventListener("click" , () =>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener("click" , () =>{
        nav.classList.remove('active')
    })
}


function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image,
        qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart");
    window.location.href = "cart.html";
}


document.addEventListener("DOMContentLoaded", function () {

    
    if (!document.getElementById("cart-items")) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let tbody = document.getElementById("cart-items");
    let grandTotal = 0;

    if (cart.length === 0) {
        tbody.innerHTML = "<tr><td colspan='6'>Cart is empty</td></tr>";
        return;
    }

    cart.forEach((item, index) => {
        let total = item.price * item.qty;
        grandTotal += total;

        tbody.innerHTML += `
        <tr>
            <td><button onclick="removeItem(${index})">❌</button></td>
            <td><img src="${item.image}" width="60"></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.qty}</td>
            <td>$${total}</td>
        </tr>
        `;
    });

    document.getElementById("grand-total").innerText = "$" + grandTotal;
});


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}




