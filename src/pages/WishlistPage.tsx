import { Link } from 'react-router-dom'
import { Trash2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useWishlist } from '@/contexts/WishlistContext'
import { formatCurrency } from '@/lib/utils'

export const WishlistPage = () => {
  const { wishlist, removeFromWishlist, getWishlistTotal } = useWishlist()

  const handleRemove = (productId: string) => {
    removeFromWishlist(productId)
  }

  if (wishlist.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Wishlist
            </h1>
            <p className="text-lg text-gray-600">
              0 plants saved for later
            </p>
          </div>
        </section>

        {/* Empty State */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gray-50 rounded-lg p-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-gray-600 mb-6">
                Start adding plants you love to create your perfect collection.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/products">Browse Plants</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Wishlist
          </h1>
          <p className="text-lg text-gray-600">
            {wishlist.items.length} plant{wishlist.items.length === 1 ? '' : 's'} saved for later
          </p>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wishlist Summary */}
          <Card className="bg-green-50 border-green-200 mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Wishlist Summary
                  </h3>
                  <p className="text-green-700">
                    Total value: {formatCurrency(getWishlistTotal())}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-2">
                    Save this wishlist or share it with friends and family!
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Share Wishlist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wishlist Items */}
          <div className="space-y-4 mb-8">
            {wishlist.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Product Image */}
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <span className="absolute top-2 left-2 z-10 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        {item.size}
                      </span>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
                      >
                        <X className="h-4 w-4 text-gray-600 hover:text-red-500" />
                      </button>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.description}
                        </p>
                        <div className="text-xl font-bold text-green-600">
                          {formatCurrency(item.price)}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleRemove(item.id)}
                        variant="outline"
                        size="sm"
                        className="ml-4 text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 