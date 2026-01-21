<script>
import { useCartStore } from '../store/cartStore'

export default {
  name: 'CartView',
  computed: {
    items() {
      return useCartStore().items
    }
  },
  methods: {
    remove(index) {
      useCartStore().removeFromCart(index)
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>Cart</h2>

    <p v-if="items.length === 0">Cart is empty</p>

    <div
        v-for="(item, index) in items"
        :key="index"
        class="cart-item"
    >
      <div class="cart-info">
        <strong>{{ item.name }}</strong>
        <span>{{ item.price }} €</span>
      </div>

      <button class="remove-btn" @click="remove(index)">
        ✖ Remove
      </button>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1a30;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
}

.cart-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.remove-btn {
  background: #b57cff;
  color: black;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.remove-btn:hover {
  background: #d2a8ff;
}
</style>