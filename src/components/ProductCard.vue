<script>
import BaseButton from './BaseButton.vue'
import { useCartStore } from '../store/cartStore'

export default {
  name: 'ProductCard',
  components: { BaseButton },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      const cart = useCartStore()
      cart.addToCart(this.product)
    }
  }
}
</script>

<template>
  <div class="card">
    <img :src="product.image" />
    <h5>{{ product.name }}</h5>
    <p>{{ product.description }}</p>
    <p><strong>{{ product.price }} €</strong></p>

    <BaseButton @click="addToCart">
      Add to cart
    </BaseButton>
  </div>
</template>

<style scoped>

</style>