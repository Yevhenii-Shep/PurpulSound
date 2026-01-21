<script>
import { useProductStore } from '../store/productStore'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: { ProductCard },
  computed: {
    featuredProducts() {
      const store = useProductStore()
      return store.products.slice(0, 2) // только 2 товара
    }
  }
}
</script>
<template>
  <div class="container">
    <h2>Welcome to PurpleSound</h2>

    <p class="intro">
      We sell high-quality headphones from world-known brands.
      Our products deliver premium sound, comfort and modern design
      for music lovers, gamers and professionals.
    </p>

    <h3>Featured products</h3>

    <div class="products">
      <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
.intro {
  max-width: 700px;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.products {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
</style>