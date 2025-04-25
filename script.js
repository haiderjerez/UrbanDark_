// Smooth scrolling for navigation
function scrollToCollection() {
    const featuredProducts = document.getElementById('featured-products');
    featuredProducts.scrollIntoView({ behavior: 'smooth' });
}

// Parallax effect for brand story section
window.addEventListener('scroll', () => {
    const brandStory = document.querySelector('.brand-story');
    const scrolled = window.pageYOffset;
    brandStory.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('.product-card, .testimonial-card, .parallax-content').forEach(el => {
    el.classList.add('fade-in-element');
    observer.observe(el);
});

// Add smooth hover effect to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    console.log('Attempting to load image:', img.src);
    img.style.opacity = '0';
    img.addEventListener('load', () => {
        console.log('Successfully loaded image:', img.src);
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '1';
    });
    img.addEventListener('error', (e) => {
        console.error('Error loading image:', img.src);
        console.error('Image element:', img);
        img.style.border = '2px solid red';
        img.alt = 'Error loading image: ' + img.src;
        img.title = 'Error loading image: ' + img.src;
    });
});

// Shopping Cart Functionality
let cart = [];
let total = 0;

// Function to add item to cart
function addToCart(productCard) {
    const title = productCard.querySelector('h3').textContent;
    const price = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
    const image = productCard.querySelector('img').src;
    
    const item = {
        title: title,
        price: price,
        image: image
    };
    
    cart.push(item);
    total += price;
    updateCart();
    showCart();
    
    // Show notification
    showNotification(`${title} añadido al carrito`);
}

// Function to remove item from cart
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0.00';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="remove-item" onclick="removeFromCart(${index})">×</div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
    
    cartCount.textContent = cart.length;
}

// Function to show cart modal
function showCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
}

// Function to hide cart modal
function hideCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Function to show payment section
function showPayment() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío');
        return;
    }
    hideCart();
    const paymentSection = document.getElementById('payment-section');
    paymentSection.style.display = 'block';
}

// Function to hide payment section
function hidePayment() {
    const paymentSection = document.getElementById('payment-section');
    paymentSection.style.display = 'none';
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to handle payment submission
function handlePayment(event) {
    event.preventDefault();
    
    // Here you would typically integrate with a payment gateway
    // For demo purposes, we'll just show a success message
    showNotification('¡Pago exitoso! Gracias por tu compra.');
    
    // Clear cart and reset
    cart = [];
    total = 0;
    updateCart();
    hidePayment();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Close cart modal when clicking outside or close button
    document.getElementById('cart-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('cart-modal') || e.target.classList.contains('close-cart')) {
            hideCart();
        }
    });
    
    // Close payment section when clicking outside or close button
    document.getElementById('payment-section').addEventListener('click', (e) => {
        if (e.target === document.getElementById('payment-section') || e.target.classList.contains('close-payment')) {
            hidePayment();
        }
    });
    
    // Handle payment form submission
    document.getElementById('payment-form').addEventListener('submit', handlePayment);
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productCard = button.closest('.product-card');
            addToCart(productCard);
        });
    });
    
    // Handle checkout button click
    document.getElementById('checkout-btn').addEventListener('click', showPayment);
    
    // Initialize cart
    updateCart();
}); 