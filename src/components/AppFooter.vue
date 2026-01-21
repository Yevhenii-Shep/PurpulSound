<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <h3 class="footer-title">PurpulSound</h3>
      <p class="footer-text">
        Online obchod s kvalitnými slúchadlami.
        Prémiový zvuk, moderný dizajn a spoľahlivosť.
      </p>
      <p class="footer-copy">
        © 2026 PurpulSound
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0f0a1a;
  border-top: 2px solid #7c3aed;
  padding: 30px 20px;
  margin-top: 60px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-title {
  color: #a855f7;
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-text {
  color: #d1c4e9;
  font-size: 14px;
  margin-bottom: 12px;
}

.footer-copy {
  color: #9ca3af;
  font-size: 12px;
}
</style>