import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { Product, WishlistItem } from '@/types'

interface WishlistState {
  items: WishlistItem[]
}

type WishlistAction = 
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] }

interface WishlistContextType {
  wishlist: WishlistState
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  getWishlistTotal: () => number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.items.some(item => item.id === action.payload.id)) {
        return state
      }
      return {
        items: [...state.items, { ...action.payload, addedAt: new Date() }]
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        items: state.items.filter(item => item.id !== action.payload)
      }
    case 'LOAD_WISHLIST':
      return {
        items: action.payload
      }
    default:
      return state
  }
}

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, { items: [] })

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wishlist')
    if (saved) {
      try {
        const parsedWishlist = JSON.parse(saved)
        dispatch({ type: 'LOAD_WISHLIST', payload: parsedWishlist })
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error)
      }
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist.items))
  }, [wishlist.items])

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product })
  }

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId })
  }

  const isInWishlist = (productId: string) => {
    return wishlist.items.some(item => item.id === productId)
  }

  const getWishlistTotal = () => {
    return wishlist.items.reduce((total, item) => total + item.price, 0)
  }

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getWishlistTotal
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
} 