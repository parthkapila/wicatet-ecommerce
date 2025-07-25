import { Link, useLocation } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { useWishlist } from '@/contexts/WishlistContext'
import { Leaf } from 'lucide-react'

export const Header = () => {
  const location = useLocation()
  const { wishlist } = useWishlist()
  
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-500" />
            <div className="text-lg font-semibold text-gray-900">
              <span className="text-green-600">Wicatet Farms</span>
              <span className="ml-2 text-gray-600 font-normal">Plant Nursery</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors ${
                isActive('/products') 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/faq"
              className={`text-sm font-medium transition-colors ${
                isActive('/faq') 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              FAQ
            </Link>
            <Link
              to="/wishlist"
              className={`text-sm font-medium transition-colors relative ${
                isActive('/wishlist') 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Wishlist
              {wishlist.items.length > 0 && (
                <Badge 
                  variant="default" 
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center bg-green-500"
                >
                  {wishlist.items.length}
                </Badge>
              )}
            </Link>
          </nav>

          {/* Mobile menu button - We'll implement this later if needed */}
          <div className="md:hidden">
            <Link
              to="/wishlist"
              className="relative text-gray-600 hover:text-green-600"
            >
              <span className="text-sm font-medium">Wishlist</span>
              {wishlist.items.length > 0 && (
                <Badge 
                  variant="default" 
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center bg-green-500"
                >
                  {wishlist.items.length}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 