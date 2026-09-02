<!-- 404.php -->
<?php
// تنظیمات تم امیر مارکت
$site_name = "امیر مارکت";
$slogan = "بهترین هایپر مارکت در کشور";
$primary_color = "#0a192f";
$gold_color = "#d4af37";
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="rtl">
<head>
    <meta charset="UTF-8">
    <style>
        .error-container { 
            max-width: 1200px; margin: 100px auto; text-align: center;
            font-family: 'Vazir', Tahoma;
        }
        .glow-text {
            color: <?php echo $primary_color; ?>;
            text-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
            font-size: 180px;
        }
        .luxury-btn {
            background: <?php echo $gold_color; ?>;
            color: <?php echo $primary_color; ?>;
            padding: 15px 40px;
            border-radius: 50px;
            text-decoration: none;
            display: inline-block;
            transition: 0.4s ease-in-out;
        }
        .luxury-btn:hover { background: #000; color: #fff; }
    </style>
</head>
<body>
    <div class="error-container">
        <div class="glow-text">404</div>
        <h1><?php _e('صفحه مورد نظر در امیر مارکت یافت نشد', 'amir-market'); ?></h1>
        <p><?php echo $slogan; ?></p>
        <a href="<?php echo home_url(); ?>" class="luxury-btn">بازگشت به ویترین محصولات</a>
    </div>
</body>
</html>
