// Sample product data
const products = [
    {
        id: 1,
        name: "Áo Thun Basic",
        category: "ao-thun",
        price: 299000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Áo thun basic với chất liệu cotton mềm mại, thoáng mát, phù hợp cho mọi hoạt động hàng ngày.",
        discount: 20
    },
    {
        id: 2,
        name: "Áo Polo Nam",
        category: "ao-polo",
        price: 399000,
        image: "https://th.bing.com/th/id/OIP.-lncuzRFalXlRglLwj8WxAHaJ4?rs=1&pid=ImgDetMain",
        description: "Áo polo nam với thiết kế cổ bẻ, chất liệu cotton cao cấp, phù hợp cho các dịp đi làm hoặc dạo phố.",
        discount: 15
    },
    {
        id: 3,
        name: "Áo Sơ Mi Nam",
        category: "ao-so-mi",
        price: 499000,
        image: "https://dongphuchaianh.vn/wp-content/uploads/2022/08/Cac-mau-ao-so-mi-nam-dep-nhat-mau-trang.jpeg",
        description: "Áo sơ mi nam với thiết kế thanh lịch, chất liệu vải mềm mại, phù hợp cho công sở và các dịp quan trọng.",
        discount: 25
    },
    {
        id: 4,
        name: "Áo Hoodie",
        category: "ao-hoodie",
        price: 599000,
        image: "https://saigonsneaker.com/wp-content/uploads/2020/11/Ao-khoac-hoodie-flexible-toi-gian-xanh-reu-9.jpg",
        description: "Áo hoodie với thiết kế trẻ trung, chất liệu nỉ ấm áp, phù hợp cho mùa đông và các hoạt động ngoài trời.",
        discount: 30
    },
    {
        id: 5,
        name: "Áo Thun Graphic",
        category: "ao-thun",
        price: 349000,
        image: "https://th.bing.com/th/id/OIP.PKO8L8dOREmY8dHgKM2scAHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Áo thun graphic với họa tiết độc đáo, chất liệu cotton mềm mại, phù hợp cho giới trẻ năng động.",
        discount: 20
    },
    {
        id: 6,
        name: "Áo Tank Top",
        category: "ao-thun",
        price: 249000,
        image: "https://th.bing.com/th/id/OIP.yTygdEwIPBB9SNnwlXkr-QHaJ4?w=157&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Áo tank top với thiết kế thoải mái, chất liệu co giãn tốt, phù hợp cho tập luyện thể thao.",
        discount: 15
    },
    {
        id: 7,
        name: "Áo Sơ Mi Kẻ",
        category: "ao-so-mi",
        price: 549000,
        image: "https://th.bing.com/th/id/OIP.O5p6c4OouJeSz6k06nXzrgHaJQ?w=174&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Áo sơ mi kẻ với thiết kế cổ điển, chất liệu vải cao cấp, phù hợp cho công sở và các dịp quan trọng.",
        discount: 25
    },
    {
        id: 8,
        name: "Áo Len",
        category: "ao-len",
        price: 699000,
        image: "https://th.bing.com/th/id/OIP.eyOaMeziAF6Irjt1eWwSewHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Áo len với thiết kế ấm áp, chất liệu len mềm mại, phù hợp cho mùa đông và các dịp lễ hội.",
        discount: 30
    }
];

// Khởi tạo giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Biến toàn cục để lưu trữ số lượng sản phẩm mỗi trang
const PRODUCTS_PER_PAGE = 16;
let currentPage = 1;
let filteredProducts = [];

// Format price
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ";
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartCount();
    
    // Hiển thị thông báo thành công
    alert('Đã thêm sản phẩm vào giỏ hàng');
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
    const isLoggedInLocal = localStorage.getItem('isLoggedIn') === 'true';
    const isLoggedInSession = sessionStorage.getItem('isLoggedIn') === 'true';
    const isLoggedIn = isLoggedInLocal || isLoggedInSession;
    
    // Lấy thông tin người dùng từ localStorage hoặc sessionStorage
    const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    
    const loginNavItem = document.getElementById('login-nav-item');
    const userNavItem = document.getElementById('user-nav-item');
    const userNameElement = document.getElementById('user-name');

    console.log("Checking login status:", isLoggedIn, userEmail);
    console.log("Login elements:", loginNavItem, userNavItem, userNameElement);

    if (isLoggedIn && userEmail) {
        // Nếu đã đăng nhập, ẩn "Đăng nhập" và hiển thị "Tài khoản"
        if (loginNavItem) loginNavItem.style.display = 'none';
        if (userNavItem) userNavItem.style.display = 'block';
        
        // Hiển thị email người dùng (có thể cắt bớt nếu quá dài)
        if (userNameElement) {
            const displayName = userEmail.split('@')[0]; // Lấy phần trước @
            userNameElement.textContent = displayName;
        }
    } else {
        // Nếu chưa đăng nhập, hiển thị "Đăng nhập" và ẩn "Tài khoản"
        if (loginNavItem) loginNavItem.style.display = 'block';
        if (userNavItem) userNavItem.style.display = 'none';
    }
}

// Đăng xuất
function logout() {
    // Xóa thông tin đăng nhập khỏi cả localStorage và sessionStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');
    
    // Chuyển hướng về trang đăng nhập
    window.location.href = 'login.html';
}

// Thiết lập phân trang
function initializePagination() {
    // Lấy tất cả sản phẩm trên trang
    const allProducts = document.querySelectorAll('.product-card');
    filteredProducts = Array.from(allProducts);
    
    // Cập nhật hiển thị ban đầu
    updateProductsDisplay();
}

// Cập nhật hiển thị sản phẩm dựa trên trang hiện tại
function updateProductsDisplay() {
    const allProducts = document.querySelectorAll('.product-card');
    
    // Ẩn tất cả sản phẩm
    allProducts.forEach(product => {
        product.style.display = 'none';
    });
    
    // Tính toán vị trí bắt đầu và kết thúc cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, filteredProducts.length);
    
    // Hiển thị chỉ những sản phẩm thuộc trang hiện tại
    for (let i = startIndex; i < endIndex; i++) {
        if (filteredProducts[i]) {
            filteredProducts[i].style.display = 'block';
        }
    }
    
    // Cập nhật trạng thái phân trang
    updatePaginationState();
}

// Cập nhật trạng thái phân trang
function updatePaginationState() {
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const pagination = document.querySelector('.pagination');
    
    if (!pagination) return;
    
    // Không hiển thị phân trang nếu chỉ có 1 trang
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    } else {
        pagination.style.display = 'flex';
    }
    
    // Xóa tất cả phần tử trang (trừ nút "Trước" và "Sau")
    const pageItems = pagination.querySelectorAll('.page-item:not(:first-child):not(:last-child)');
    pageItems.forEach(item => item.remove());
    
    // Thêm các phần tử trang mới
    const lastPageItem = pagination.querySelector('.page-item:last-child');
    
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (i === currentPage) {
            pageItem.classList.add('active');
        }
        
        const pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage = i;
            updateProductsDisplay();
        });
        
        pageItem.appendChild(pageLink);
        pagination.insertBefore(pageItem, lastPageItem);
    }
    
    // Cập nhật trạng thái nút "Trước" và "Sau"
    const prevItem = pagination.querySelector('.page-item:first-child');
    const nextItem = pagination.querySelector('.page-item:last-child');
    
    if (currentPage === 1) {
        prevItem.classList.add('disabled');
    } else {
        prevItem.classList.remove('disabled');
    }
    
    if (currentPage === totalPages) {
        nextItem.classList.add('disabled');
    } else {
        nextItem.classList.remove('disabled');
    }
}

// Thiết lập sự kiện cho các nút điều hướng trang
function setupPaginationEvents() {
    // Nút "Trước"
    const prevButton = document.querySelector('.pagination .page-item:first-child .page-link');
    if (prevButton) {
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updateProductsDisplay();
            }
        });
    }
    
    // Nút "Sau"
    const nextButton = document.querySelector('.pagination .page-item:last-child .page-link');
    if (nextButton) {
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
            if (currentPage < totalPages) {
                currentPage++;
                updateProductsDisplay();
            }
        });
    }
}

// Lọc và sắp xếp sản phẩm
function filterAndSortProducts() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (!searchInput || !categoryFilter || !priceFilter || !sortFilter) return;
    
    const searchValue = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const priceValue = priceFilter.value;
    const sortValue = sortFilter.value;
    
    // Lấy tất cả sản phẩm
    const allProducts = document.querySelectorAll('.product-card');
    
    // Lọc sản phẩm theo điều kiện
    filteredProducts = Array.from(allProducts).filter(card => {
        let isVisible = true;
        
        // Lọc theo tên sản phẩm
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        if (searchValue && !productName.includes(searchValue)) {
            isVisible = false;
        }
        
        // Lọc theo danh mục (giả định)
        if (categoryValue && !productName.toLowerCase().includes(categoryValue.replace('-', ' '))) {
            isVisible = false;
        }
        
        // Lọc theo giá
        if (priceValue) {
            const price = parseInt(card.querySelector('.current-price').textContent.replace(/\D/g, ''));
            const [min, max] = priceValue.split('-').map(Number);
            
            if (price < min || (max && price > max)) {
                isVisible = false;
            }
        }
        
        return isVisible;
    });
    
    // Sắp xếp sản phẩm nếu cần
    if (sortValue !== 'default') {
        filteredProducts.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.current-price').textContent.replace(/\D/g, ''));
            const priceB = parseInt(b.querySelector('.current-price').textContent.replace(/\D/g, ''));
            const nameA = a.querySelector('.product-name').textContent;
            const nameB = b.querySelector('.product-name').textContent;
            
            if (sortValue === 'price-asc') {
                return priceA - priceB;
            } else if (sortValue === 'price-desc') {
                return priceB - priceA;
            } else if (sortValue === 'name-asc') {
                return nameA.localeCompare(nameB);
            } else if (sortValue === 'name-desc') {
                return nameB.localeCompare(nameA);
            }
        });
    }
    
    // Đặt lại trang hiện tại về 1 khi lọc
    currentPage = 1;
    
    // Cập nhật hiển thị
    updateProductsDisplay();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // Gọi hàm kiểm tra đăng nhập ngay khi trang được tải
    setTimeout(checkLoginStatus, 100);
    
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartCount();
    
    // Thêm sự kiện cho nút thêm vào giỏ hàng
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = parseInt(productCard.querySelector('.current-price').textContent.replace(/\D/g, ''));
            const productImage = productCard.querySelector('img').src;
            
            addToCart(productName, productPrice, productImage);
        });
    });
    
    // Lắng nghe sự kiện thay đổi trên các bộ lọc
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (searchInput) searchInput.addEventListener('input', filterAndSortProducts);
    if (categoryFilter) categoryFilter.addEventListener('change', filterAndSortProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterAndSortProducts);
    if (sortFilter) sortFilter.addEventListener('change', filterAndSortProducts);
    
    // Khởi tạo phân trang
    initializePagination();
    
    // Thiết lập sự kiện phân trang
    setupPaginationEvents();
}); 