import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters: {
        totalCount(state) {
            return state.items.reduce((sum, item) => sum + item.quantity, 0)
        }
    },
    actions: {
        addToCart(product) {
            const existing = this.items.find(i => i.id === product.id)
            if (existing) {
                existing.quantity++
            } else {
                this.items.push({ ...product, quantity: 1 })
            }
        },

        removeFromCart(id) {
            this.items = this.items.filter(i => i.id !== id)
        }
    }
})
