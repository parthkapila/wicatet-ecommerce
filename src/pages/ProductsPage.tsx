import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'
import { SizeFilter, SortOption } from '@/types'

const sizeFilters: SizeFilter[] = ['All', '2 inch', '3 inch', '4 inch', '5 inch', '6 inch']
const sortOptions: SortOption[] = ['Default', 'Price: Low to High', 'Price: High to Low', 'Name: A to Z', 'Name: Z to A']

export const ProductsPage = () => {
  const [selectedSize, setSelectedSize] = useState<SizeFilter>('All')
  const [sortBy, setSortBy] = useState<SortOption>('Default')

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    // Filter by size
    if (selectedSize !== 'All') {
      filtered = filtered.filter(product => product.size === selectedSize)
    }

    // Sort products
    const sorted = [...filtered]
    switch (sortBy) {
      case 'Price: Low to High':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'Price: High to Low':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'Name: A to Z':
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'Name: Z to A':
        sorted.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        // Keep original order
        break
    }

    return sorted
  }, [selectedSize, sortBy])

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Indoor Plants
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of healthy, beautiful indoor plants
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            {/* Size Filters */}
            <div className="flex flex-wrap gap-2">
              {sizeFilters.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {size}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Products Message */}
          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more products.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 