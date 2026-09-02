// محصول و فیلتر در امیر مارکت
import React, { useState } from 'react';

const AmirMarket = () => {
  const [view, setView] = useState('shop');
  const products = [
    { id: 1, name: "استیک ریب‌آی", price: "1,200,000", img: "🥩" },
    { id: 2, name: "عسل سدر کوهی", price: "900,000", img: "🍯" },
    { id: 3, name: "روغن زیتون فرابکر", price: "450,000", img: "🫒" }
  ];

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Vazir, sans-serif' }}>
      <Header onNav={setView} />
      {view === 'shop' ? (
        <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
          <Sidebar />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      ) : (
        <Error404 onBack={() => setView('shop')} />
      )}
    </div>
  );
};
