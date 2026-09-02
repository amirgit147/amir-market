// script.js

// ۱. لیست محصولات واقعی
const products = [
    { id: 1, name: "برنج کشت دوم طارم (۵ کیلو)", price: 680000, cat: "خواروبار", img: "https://via.placeholder.com/200" },
    { id: 2, name: "روغن سرخ‌کردنی شفاف ۸۱۰ گرمی", price: 62000, cat: "خواروبار", img: "https://via.placeholder.com/200" },
    { id: 3, name: "پنیر یواف روزانه ۵۰۰ گرم", price: 58000, cat: "لبنیات", img: "https://via.placeholder.com/200" },
    { id: 4, name: "گوشت گوساله درجه یک (۱ کیلو)", price: 520000, cat: "پروتئینی", img: "https://via.placeholder.com/200" },
    { id: 5, name: "نوشابه خانواده ۱.۵ لیتری", price: 28000, cat: "نوشیدنی", img: "https://via.placeholder.com/200" },
    { id: 6, name: "زعفران یک مثقالی کادویی", price: 450000, cat: "لوکس", img: "https://via.placeholder.com/200" },
];

let cart = [];

// ۲. لودینگ
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => document.getElementById('loader').style.display = 'none', 1000);
    }, 2000);
    renderProducts(products);
});

// ۳. نمایش محصولات
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = items.map(p => `
        <div class="product-card animate__animated animate__fadeIn">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()} تومان</p>
            <button class="btn-add" onclick="addToCart(${p.id})">افزودن به سبد</button>
        </div>
    `).join('');
}

// ۴. جستجوی هوشمند (رفع مشکل خالی بودن)
function liveSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const dropdown = document.getElementById('searchDropdown');
    
    if (query.length < 1) {
        dropdown.style.display = 'none';
        return;
    }

    const filtered = products.filter(p => p.name.includes(query));
    
    if (filtered.length > 0) {
        dropdown.style.display = 'block';
        dropdown.innerHTML = filtered.map(p => `
            <div style="padding:10px; border-bottom:1px solid #eee; cursor:pointer" onclick="addToCart(${p.id})">
                ${p.name} - ${p.price.toLocaleString()} تومان
            </div>
        `).join('');
    } else {
        dropdown.innerHTML = '<div style="padding:10px">کالایی پیدا نشد</div>';
    }
}

// ۵. مدیریت سبد خرید و حداقل مبلغ ۱۰۰ هزار تومان
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('totalPrice').innerText = `جمع کل: ${total.toLocaleString()} تومان`;

    const btn = document.getElementById('checkoutBtn');
    const alert = document.getElementById('minOrderAlert');

    if (total >= 100000) {
        btn.disabled = false;
        btn.className = 'btn-login'; // استایل دکمه فعال
        alert.style.display = 'none';
    } else {
        btn.disabled = true;
        btn.className = 'btn-disabled';
        alert.style.display = 'block';
    }
}
