// Error404.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Error404 = () => {
  return (
    <div style={{ direction: 'rtl', textAlign: 'right' }}>
      <header style={{ background: '#0a192f', padding: '1rem 5%', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#d4af37' }}>امیر مارکت</h1>
      </header>
      
      <motion.main 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <motion.h1 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          style={{ fontSize: '12rem', color: '#0a192f', margin: 0 }}
        >
          404
        </motion.h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>صفحه مورد نظر پیدا نشد</h2>
        <p style={{ color: '#666' }}>بهترین هایپر مارکت در کشور</p>
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button style={{ background: '#d4af37', border: 'none', padding: '1rem 2rem', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>
            بازگشت به فروشگاه
          </button>
        </div>
      </motion.main>
    </div>
  );
};

export default Error404;
