// ۱. دیتابیس ۵۰ محصول امیر مارکت
const allProducts = [
    { id: 1, name: "برنج طارم هاشمی", price: 750000, cat: "خواروبار", icon: "🌾" },
    { id: 2, name: "روغن آفتابگردان", price: 68000, cat: "خواروبار", icon: "🌻" },
    { id: 3, name: "پنیر لاکتیکی", price: 45000, cat: "لبنیات", icon: "🧀" },
    { id: 4, name: "شیر پرچرب", price: 32000, cat: "لبنیات", icon: "🥛" },
    { id: 5, name: "گوشت گوسفندی", price: 580000, cat: "پروتئینی", icon: "🥩" },
    { id: 6, name: "مرغ تازه", price: 98000, cat: "پروتئینی", icon: "🍗" },
    { id: 7, name: "ماست سون", price: 85000, cat: "لبنیات", icon: "🍦" },
    { id: 8, name: "رب گوجه فرنگی", price: 45000, cat: "خواروبار", icon: "🥫" },
    { id: 9, name: "چای عطری", price: 120000, cat: "نوشیدنی", icon: "☕" },
    { id: 10, name: "قند شکسته", price: 38000, cat: "خواروبار", icon: "🧊" },
    // ... تولید اتوماتیک برای تست تا ۵۰ مورد
];

// تولید محصولات بیشتر برای رسیدن به ۵۰ تا
for (let i = 11; i <= 50; i++) {
    allProducts.push({
        id: i,
        name: `محصول لوکس امیر ${i}`,
        price: 10000 + (i * 5000),
        cat: i % 2 === 0 ? "تنقلات" : "شوینده",
        icon: i % 2 === 0 ? "🍪" : "🧼"
    });
}

let currentPage = 1;
const itemsPerPage = 10;

// ۲. تابع نمایش محصولات با صفحه‌بندی
function displayProducts(page) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = "";
    
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = allProducts.slice(start, end);

    paginatedItems.forEach(p => {
        grid.innerHTML += `
            <div class="product-card animate__animated animate__zoomIn">
                <span class="product-icon">${p.icon}</span>
                <h3>${p.name}</h3>
                <p class="price-tag">${p.price.toLocaleString()} تومان</p>
                <button class="btn-add" onclick="addToCart(${p.id})">افزودن به سبد</button>
            </div>
        `;
    });
    
    setupPagination();
}

// ۳. ایجاد دکمه‌های صفحه‌بندی
function setupPagination() {
    const pageCount = Math.ceil(allProducts.length / itemsPerPage);
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => {
            currentPage = i;
            displayProducts(currentPage);
            window.scrollTo(0, 500); // اسکرول به بالا بعد از تغییر صفحه
        };
        paginationDiv.appendChild(btn);
    }
}

// اجرای اولیه
window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        displayProducts(1);
    }, 2000);
};
