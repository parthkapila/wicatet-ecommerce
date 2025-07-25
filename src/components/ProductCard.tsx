import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useWishlist } from '@/contexts/WishlistContext'
import { formatCurrency } from '@/lib/utils'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          {/* Size Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
              {product.size}
            </span>
          </div>
          
          {/* Wishlist Heart */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <Heart 
              className={`h-5 w-5 ${
                inWishlist 
                  ? 'fill-red-500 text-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            />
          </button>
          
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="text-xl font-bold text-green-600">
            {formatCurrency(product.price)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleWishlistToggle}
          variant={inWishlist ? "secondary" : "default"}
          className="w-full"
        >
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </CardFooter>
    </Card>
  )
} 