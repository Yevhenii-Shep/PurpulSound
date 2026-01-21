import { defineStore } from 'pinia'
import sony from  '../img/Sony WH-1000XM5.webp'
import airpods from '../img/airpodspro2.webp'
import steelseries from '../img/SteelSeries.webp'
import samsung from '../img/Samsung Galaxy Buds3 Pro.webp'

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Sony WH-1000XM5',
                price: 399,
                description: 'Noise cancelling headphones',
                image: sony
            },
            {
                id: 2,
                name: 'AirPods Pro 2',
                price: 299,
                description: 'Wireless earbuds',
                image: airpods
            },
            {
                id:3,
                name: 'SteelSeries Arctis Nova 1',
                price: 49,
                description: 'gamers headphones',
                image: steelseries
            },
            {
                id:4,
                name: 'Samsung Galaxy Buds3 Pro',
                price: 209,
                description: 'Wireless earbuds',
                image: samsung
            }
        ]
    })
})
