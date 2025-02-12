// Wait for the DOM to load before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    // --- Theme Toggle Functionality ---
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      // Load stored theme from localStorage, default to "dark"
      const storedTheme = localStorage.getItem("theme") || "dark";
      document.body.setAttribute("data-theme", storedTheme);
      themeToggle.checked = storedTheme === "dark";
      themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
          document.body.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.body.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
        }
      });
    }
  
    // --- Font Size Setting ---
    const fontSizeOptions = document.querySelectorAll("input[name='font-size']");
    if (fontSizeOptions.length > 0) {
      const storedFontSize = localStorage.getItem("font-size") || "medium";
      setFontSize(storedFontSize);
      fontSizeOptions.forEach(option => {
        if (option.value === storedFontSize) {
          option.checked = true;
        }
        option.addEventListener("change", function () {
          setFontSize(this.value);
          localStorage.setItem("font-size", this.value);
        });
      });
    }
  
    function setFontSize(size) {
      let fontSize;
      switch (size) {
        case "small":
          fontSize = "14px";
          break;
        case "large":
          fontSize = "18px";
          break;
        default:
          fontSize = "16px";
      }
      document.documentElement.style.fontSize = fontSize;
    }
  
    // --- Layout Setting (for Products Page) ---
    const layoutOptions = document.querySelectorAll("input[name='layout']");
    if (layoutOptions.length > 0) {
      const storedLayout = localStorage.getItem("layout") || "grid";
      applyLayout(storedLayout);
      layoutOptions.forEach(option => {
        if (option.value === storedLayout) {
          option.checked = true;
        }
        option.addEventListener("change", function () {
          applyLayout(this.value);
          localStorage.setItem("layout", this.value);
        });
      });
    }
  
    function applyLayout(layout) {
      const productGrid = document.querySelector(".product-grid");
      if (productGrid) {
        if (layout === "list") {
          productGrid.classList.add("list-layout");
        } else {
          productGrid.classList.remove("list-layout");
        }
      }
    }
  
    // --- Cart Functionality using localStorage ---
    // Helper functions
    function getCart() {
      return JSON.parse(localStorage.getItem("cart")) || [];
    }
    function saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    // On Products Page: Handle "Add to Cart" button clicks
    const addToCartButtons = document.querySelectorAll(".product-info .btn");
    if (addToCartButtons.length > 0) {
      addToCartButtons.forEach(button => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          // Get product data from the product card
          const productCard = this.closest(".product-card");
          const productImage = productCard.querySelector("img").src;
          const productName = productCard.querySelector("h3").textContent;
          const productPrice = productCard.querySelector("p").textContent;
          // Use productName as a simple unique id
          const productId = productName;
          let cart = getCart();
          const existingProduct = cart.find(item => item.id === productId);
          if (existingProduct) {
            existingProduct.quantity += 1;
          } else {
            cart.push({
              id: productId,
              image: productImage,
              name: productName,
              price: productPrice,
              quantity: 1
            });
          }
          saveCart(cart);
          alert(productName + " added to cart!");
        });
      });
    }
  
    // On Cart Page: Dynamically display cart items
    const cartTableBody = document.querySelector(".cart tbody");
    if (cartTableBody) {
      let cart = getCart();
      cartTableBody.innerHTML = "";
      cart.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><img src="${item.image}" alt="${item.name}"></td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td><a href="#" class="btn remove-btn" data-id="${item.id}">Remove</a></td>
        `;
        cartTableBody.appendChild(tr);
      });
      // Update total price
      const totalElement = document.querySelector(".checkout h2");
      let total = 0;
      cart.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        total += price * item.quantity;
      });
      if (totalElement) {
        totalElement.textContent = "Total: $" + total.toFixed(2);
      }
      // Remove item event listeners
      const removeButtons = document.querySelectorAll(".remove-btn");
      removeButtons.forEach(button => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          const productId = this.getAttribute("data-id");
          let cart = getCart();
          cart = cart.filter(item => item.id !== productId);
          saveCart(cart);
          location.reload();
        });
      });
    }
  });
  