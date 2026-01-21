<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  emits: ['click']
}
</script>
