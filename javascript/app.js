// Define the cart variable
let cart = [];

// Add an item to the cart
function addToCart(item) {
  // Check if the item is already in the cart
  let itemIndex = cart.findIndex(function(cartItem) {
    return cartItem.id === item.id;
  });

  // If the item is not in the cart, add it
  if (itemIndex === -1) {
    item.quantity = 1;
    cart.push(item);
  } else {
    // If the item is in the cart, increase its quantity
    cart[itemIndex].quantity++;
  }

  // Update the cart icon in the header
  updateCartIcon();
}

// Remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  let itemIndex = cart.findIndex(function(cartItem) {
    return cartItem.id === itemId;
  });

  // If the item is in the cart, remove it
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
  }

  // Update the cart icon in the header
  updateCartIcon();
}

// Update the cart icon in the header
function updateCartIcon() {
  let cartIcon = document.querySelector(".cart-icon");
  let cartCount = cart.reduce(function(total, cartItem) {
    return total + cartItem.quantity;
  }, 0);
  cartIcon.innerHTML = `Cart (${cartCount})`;
}

// Update the cart display in the sidebar
function updateCartDisplay() {
  let cartList = document.querySelector(".cart-list");
  cartList.innerHTML = "";
  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(function(cartItem) {
      let itemHtml = `
        <li>
          <span class="cart-item-name">${cartItem.name}</span>
          <span class="cart-item-price">$${cartItem.price.toFixed(2)}</span>
          <span class="cart-item-quantity">Qty: ${cartItem.quantity}</span>
          <button class="btn-remove-from-cart" data-id="${cartItem.id}">Remove</button>
        </li>
      `;
      cartList.innerHTML += itemHtml;
    });
  }
}

// Add event listeners for the "Add to Cart" buttons
let addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let itemId = button.getAttribute("data-id");
    let item = {
      id: itemId,
      name: "Product " + itemId,
      price: Math.random() * 50
    };
    addToCart(item);
  });
});

// Add event listeners for the "Remove from Cart" buttons
let removeFromCartButtons = document.querySelectorAll(".btn-remove-from-cart");
removeFromCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let itemId = button.getAttribute("data-id");
    removeFromCart(itemId);
  });
});

// Update the cart display when the page loads
updateCartDisplay();

// Obtine butonul pentru adaugarea produselor in cos
var addToCartButton = document.getElementById("add-to-cart");

// Adauga un eveniment de click la buton
addToCartButton.addEventListener("click", function() {
  // Obtine informatii despre produs
  var productName = document.getElementById("product-name").innerHTML;
  var productPrice = document.getElementById("product-price").innerHTML;
  
  // Adauga produsul in cos
  addToCart(productName, productPrice);
  
  // Afiseaza un mesaj de succes
  alert("Produsul a fost adaugat in cos!");
});

// Functie pentru adaugarea unui produs in cos
function addToCart(name, price) {
  // Verifica daca cosul de cumparaturi exista deja in local storage
  var cartItems = localStorage.getItem("cartItems");
  if (!cartItems) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(cartItems);
  }
  
  // Adauga produsul in cos
  cartItems.push({ name: name, price: price });
  
  // Actualizeaza cosul de cumparaturi in local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


// Get the form element
const searchForm = document.querySelector('.search-container form');

// Add event listener to the form
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  const searchQuery = event.target.querySelector('input[name="q"]').value;
  const searchCategory = event.target.querySelector('select[name="category"]').value;
  
  // Call a function to handle the search based on the query and category selected
  handleSearch(searchQuery, searchCategory);
});

// Function to handle the search
function handleSearch(query, category) {
  // Perform an AJAX request to fetch the search results based on the query and category
  // Display the results on the page
  // ...
}

const cartIcon = document.querySelector('cart');

cartIcon.addEventListener('click', function() {
  window.location.href = '../html/index.html';
});
