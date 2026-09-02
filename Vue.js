<template>
  <div class="error-page" dir="rtl">
    <transition name="slide-fade" appear>
      <div class="content">
        <div class="code-404">404</div>
        <h1 class="title">خطایی رخ داده است</h1>
        <p class="slogan">امیر مارکت | بهترین هایپر مارکت در کشور</p>
        <router-link to="/" class="home-button">بازگشت به خانه</router-link>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.error-page {
  height: 100vh;
  background: radial-gradient(circle, #ffffff, #f2f2f2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.code-404 {
  font-size: 15vw;
  font-weight: bold;
  color: #0a192f;
  letter-spacing: -10px;
}
.home-button {
  margin-top: 2rem;
  display: inline-block;
  padding: 1rem 3rem;
  background: #d4af37;
  color: #0a192f;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}
.slide-fade-enter-active { transition: all 0.8s ease; }
.slide-fade-enter-from { opacity: 0; transform: translateY(30px); }
</style>
