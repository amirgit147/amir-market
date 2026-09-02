// ساختار اصلی کامپوننت فروشگاه
import React, { useState } from 'react';

const ShopPage = () => {
  const [filter, setFilter] = useState({ brand: 'All', price: 1000000 });

  const products = [
    { id: 1, title: "سس پستو ایتالیایی", brand: "Amir", price: 350000 },
    { id: 2, title: "برنج دودی هاشمی", brand: "Gilan", price: 950000 },
    // اضافه کردن ۲۰ محصول دیگر برای پر شدن صفحه...
  ];

  return (
    <div className="bg-gray-100 min-h-screen rtl text-right">
      <nav className="bg-navy-900 p-4 text-gold-500 flex justify-between">
        <h1 className="text-2xl font-bold">امیر مارکت</h1>
        <input className="rounded p-2 w-1/3 bg-navy-800" placeholder="جستجوی برند و کالا..." />
      </nav>
      
      <div className="flex p-6 gap-6">
        <aside className="w-1/4 bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="border-b-2 border-gold-500 pb-2">فیلترهای پیشرفته</h3>
          <FilterGroup title="برندها" options={['Amir', 'Imported', 'Local']} />
          <FilterGroup title="محدوده قیمت" isRange />
        </aside>
        
        <main className="w-3/4 grid grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.id} data={p} />)}
        </main>
      </div>
    </div>
  );
};
