import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cart')) || []
    }),

    actions: {
        addToCart(product) {
            this.items.push(product)
            this.saveCart()
        },

        removeFromCart(index) {
            this.items.splice(index, 1)
            this.saveCart()
        },

        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.items))
        }
    }
})
