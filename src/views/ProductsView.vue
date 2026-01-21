<script>
import { useProductStore } from '../store/productStore'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductsView',
  components: { ProductCard },
  computed: {
    products() {
      const store = useProductStore()
      return store.products
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>Products</h2>

    <div class="products">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>