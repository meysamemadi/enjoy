import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  products: Product[]
  fetchProducts: () => Promise<void>
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  total: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      products: [],
      fetchProducts: async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}store/product/products`)
          if (!response.ok) {
            throw new Error('Failed to fetch products')
          }
          const products = await response.json()
          set({ products })
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      },
      addItem: (product) => 
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id)
          if (existingItem) {
            return {
              items: state.items.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              )
            }
          } else {
            return { items: [...state.items, { ...product, quantity: 1 }] }
          }
        }),
      removeItem: (id) => 
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        })),
      updateQuantity: (id, quantity) => 
        set((state) => ({
          items: state.items.map(item => 
            item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
          )
        })),
      total: () => {
        const items = get().items
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)


