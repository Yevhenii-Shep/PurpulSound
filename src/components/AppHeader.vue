<script>
import { useCartStore } from '@/stores/cart'
export default {
  name: 'AppHeader',

  computed: {
    cartCount() {
      const cart = useCartStore()
      return cart.totalCount
    }
  }

}
</script>

<template>
  <header>
    <div class="header-inner">
      <h1 class="logo">PurpleSound</h1>

      <nav class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/cart">Cart<span v-if="cartCount > 0" class="cart-badge">
      {{ cartCount }}
    </span></router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(90deg, #1a102b, #2a144d);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem clamp(1rem, 4vw, 2rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #c77dff;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  white-space: nowrap;
}

.menu {
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
}

.menu a {
  color: #b57cff;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

.menu a:hover {
  color: #e0aaff;
}
</style>