<template>
  <div class="amir-market">
    <aside class="filters">
      <input type="range" v-model="maxPrice" min="0" max="2000000">
      <span>حداکثر قیمت: {{ maxPrice }} تومان</span>
    </aside>
    
    <div class="product-list">
      <div v-for="item in filteredProducts" :key="item.id" class="item">
        <img :src="item.image" />
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }} تومان</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxPrice: 2000000,
      products: [/* لیست محصولات لوکس */]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(p => p.price <= this.maxPrice);
    }
  }
}
</script>
