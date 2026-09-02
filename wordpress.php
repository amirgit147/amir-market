<!-- shop.php -->
<div class="luxury-grid">
    <?php
    $products = [
        ['title' => 'شکلات تخته‌ای دست‌ساز', 'price' => '300,000'],
        ['title' => 'چای سفید اشرافی', 'price' => '1,500,000'],
        ['title' => 'پنیر پارمزان کهنه', 'price' => '600,000'],
    ];

    foreach ($products as $product): ?>
        <div class="product-card">
            <h3><?php echo $product['title']; ?></h3>
            <p><?php echo $product['price']; ?> تومان</p>
            <button>خرید آنلاین</button>
        </div>
    <?php endforeach; ?>
</div>
