<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <div class="header-inner">
      <h1 class="logo">PurpleSound</h1>

      <nav class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/cart">Cart</router-link>
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
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #c77dff;
  margin-right: 280%;
}

.menu a {
  margin-left: 1.5rem;
  color: #b57cff;
  font-weight: 500;
}

.menu a:hover {
  color: #e0aaff;
}
</style>