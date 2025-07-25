import { Link } from 'react-router-dom'
import { Leaf, Phone, Mail, MapPin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-300" />
              <div className="text-lg font-semibold">
                Wicatet Farms Plant Nursery
              </div>
            </div>
            <p className="text-green-100 mb-4">
              Your trusted partner for quality plants and gardening supplies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-green-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-green-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-green-100 hover:text-white transition-colors">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-300" />
                <span className="text-green-100">Heart of Eustis, Florida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-300" />
                <span className="text-green-100">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-300" />
                <span className="text-green-100">info@wicatetfarms.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-green-100">
            © 2024 Wicatet Farms Plant Nursery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 