// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Sample product data (in a real application, this would come from an API)
const products = {
    '1': {
        name: 'Áo Thun Basic',
        price: 299000,
        originalPrice: 399000,
        discount: 25,
        description: 'Áo thun basic với chất liệu cotton 100%, thoáng mát và thấm hút mồ hôi tốt. Thiết kế đơn giản, dễ phối đồ, phù hợp với nhiều phong cách khác nhau.',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        specs: {
            'Chất liệu': 'Cotton 100%',
            'Màu sắc': 'Đen, Trắng, Xám',
            'Kích thước': 'S, M, L, XL',
            'Xuất xứ': 'Việt Nam',
            'Bảo hành': 'Không'
        },
        reviews: [
            {
                user: 'Nguyễn Văn A',
                rating: 5,
                date: '01/01/2023',
                comment: 'Áo rất đẹp, chất liệu tốt, mặc thoải mái.'
            },
            {
                user: 'Trần Thị B',
                rating: 4,
                date: '02/01/2023',
                comment: 'Áo đẹp, giá hợp lý, sẽ mua thêm.'
            }
        ]
    },
    '2': {
        name: 'Áo Polo Nam',
        price: 499000,
        originalPrice: 599000,
        discount: 17,
        description: 'Áo polo nam với thiết kế cổ bẻ, chất liệu cotton pha polyester cao cấp, thoáng mát và không nhăn. Phù hợp cho cả mặc đi làm và dạo phố.',
        images: [
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        specs: {
            'Chất liệu': 'Cotton 65%, Polyester 35%',
            'Màu sắc': 'Xanh Navy, Đen, Trắng',
            'Kích thước': 'S, M, L, XL, XXL',
            'Xuất xứ': 'Việt Nam',
            'Bảo hành': 'Không'
        },
        reviews: [
            {
                user: 'Lê Văn C',
                rating: 5,
                date: '15/02/2023',
                comment: 'Áo đẹp, form chuẩn, chất liệu tốt.'
            },
            {
                user: 'Phạm Thị D',
                rating: 4,
                date: '20/02/2023',
                comment: 'Mặc rất thoải mái, giá cả hợp lý.'
            }
        ]
    },
    '3': {
        name: 'Áo Hoodie Unisex',
        price: 799000,
        originalPrice: 999000,
        discount: 20,
        description: 'Áo hoodie unisex với thiết kế trẻ trung, năng động. Chất liệu cotton dày dặn, có mũ trùm và túi kangaroo tiện lợi. Phù hợp cho mùa thu đông.',
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        specs: {
            'Chất liệu': 'Cotton 100%',
            'Màu sắc': 'Đen, Xám, Xanh Navy',
            'Kích thước': 'S, M, L, XL',
            'Xuất xứ': 'Việt Nam',
            'Bảo hành': 'Không'
        },
        reviews: [
            {
                user: 'Hoàng Văn E',
                rating: 5,
                date: '10/03/2023',
                comment: 'Áo ấm, chất liệu tốt, thiết kế đẹp.'
            },
            {
                user: 'Nguyễn Thị F',
                rating: 4,
                date: '15/03/2023',
                comment: 'Mặc rất ấm và thoải mái, giá cả hợp lý.'
            }
        ]
    }
};

// Format price
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ";
}

// Load product data
function loadProductData() {
    const product = products[productId];
    if (!product) {
        // Redirect to products page if product not found
        window.location.href = 'products.html';
        return;
    }

    // Set page title
    document.title = `${product.name} - Dragon Store`;

    // Update product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = formatPrice(product.price);
    document.getElementById('product-original-price').textContent = formatPrice(product.originalPrice);
    document.getElementById('product-discount').textContent = `-${product.discount}%`;
    document.getElementById('product-description').textContent = product.description;

    // Set main image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    // Add thumbnails
    const thumbnailsContainer = document.querySelector('.thumbnail-images');
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${product.name} - Ảnh ${index + 1}`;
        thumbnail.className = 'thumbnail';
        thumbnail.onclick = () => {
            mainImage.src = image;
            mainImage.alt = `${product.name} - Ảnh ${index + 1}`;
        };
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Add specifications
    const specsContainer = document.getElementById('product-specs');
    for (const [key, value] of Object.entries(product.specs)) {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
        `;
        specsContainer.appendChild(specItem);
    }

    // Add reviews
    const reviewsContainer = document.getElementById('reviews-list');
    product.reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <div class="review-header">
                <span class="review-user">${review.user}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">
                ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
            </div>
            <div class="review-comment">${review.comment}</div>
        `;
        reviewsContainer.appendChild(reviewItem);
    });
}

// Handle quantity changes
document.getElementById('decrease-quantity').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

document.getElementById('increase-quantity').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Check login status
function checkLoginStatus() {
    const isLoggedInLocal = localStorage.getItem('isLoggedIn') === 'true';
    const isLoggedInSession = sessionStorage.getItem('isLoggedIn') === 'true';
    const isLoggedIn = isLoggedInLocal || isLoggedInSession;
    
    const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    const userNameElement = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    if (isLoggedIn && userEmail) {
        const displayName = userEmail.split('@')[0];
        userNameElement.textContent = displayName;
        
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userEmail');
            window.location.href = 'login.html';
        });
    }
}

// Handle add to cart
document.getElementById('add-to-cart').addEventListener('click', () => {
    // Check if user is logged in
    const isLoggedInLocal = localStorage.getItem('isLoggedIn') === 'true';
    const isLoggedInSession = sessionStorage.getItem('isLoggedIn') === 'true';
    const isLoggedIn = isLoggedInLocal || isLoggedInSession;

    if (!isLoggedIn) {
        toastr.warning('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
        window.location.href = 'login.html';
        return;
    }

    const product = products[productId];
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Get existing cart or create new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }
    
    // Save cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success message
    toastr.success('Đã thêm sản phẩm vào giỏ hàng');
    
    // Update cart count
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadProductData();
    checkLoginStatus();
    
    // Update cart count
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
}); 