// AmirMarket.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => { setTimeout(() => setLoading(false), 2000); }, []);

  return (
    <div className={isDark ? 'dark-theme' : 'light-theme'}>
      {loading && <div className="loader">در حال بارگذاری امیر مارکت...</div>}
      
      <div className={searchFocused ? 'blur-active' : ''}>
        <header>
          <Search onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
          <nav>
            <button onClick={() => setIsDark(!isDark)}>تغییر تم</button>
            <Link to="/login">ورود حرفه‌ای</Link>
            <Link to="/cart">سبد خرید (هزینه بسته بندی: ۱۰,۰۰۰)</Link>
          </nav>
        </header>

        <div className="main-content">
          <Sidebar brands={['امیر', 'نستله', 'کاله']} />
          <div className="product-grid">
            {/* Array(50).fill().map(...) */}
          </div>
        </div>
      </div>
    </div>
  );
};
