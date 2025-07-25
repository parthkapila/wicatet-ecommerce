export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  size: '2 inch' | '3 inch' | '4 inch' | '5 inch' | '6 inch'
  category: string
}

export interface WishlistItem extends Product {
  addedAt: Date
}

export type SizeFilter = 'All' | '2 inch' | '3 inch' | '4 inch' | '5 inch' | '6 inch'

export type SortOption = 'Default' | 'Price: Low to High' | 'Price: High to Low' | 'Name: A to Z' | 'Name: Z to A' 