import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ShoppingCart,
  Shield,
  Truck,
  Star
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t text-foreground">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                ZiddiQR
              </h3>
            </div>
            <p className="text-foreground text-lg font-medium opacity-90">
              India's Swaggiest QR Code
            </p>
            <p className="text-muted-foreground">
              Privacy-first QR stickers with attitude. Express your personality while staying safe and connected.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary" className="bg-green-600 text-white border-0 hover:bg-green-700">
                <Shield className="w-3 h-3 mr-1" />
                Privacy Protected
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white border-0 hover:bg-blue-700">
                <Truck className="w-3 h-3 mr-1" />
                Free Delivery
              </Badge>
              <Badge variant="secondary" className="bg-purple-600 text-white border-0 hover:bg-purple-700">
                <Star className="w-3 h-3 mr-1" />
                Made in India
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-300">
                  About ZiddiQR
                </a>
              </li>
              <li>
                <a href="#characters" className="hover:text-primary transition-colors duration-300">
                  Character Gallery
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/track-order" className="hover:text-primary transition-colors duration-300">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          {/* Shop & Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Shop & Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a 
                  href="https://amazon.in/ziddiqr" 
                  target="_blank"
                  className="hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy on Amazon
                </a>
              </li>
              <li>
                <a 
                  href="https://flipkart.com/ziddiqr" 
                  target="_blank"
                  className="hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy on Flipkart
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-primary transition-colors duration-300">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-primary transition-colors duration-300">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/wholesale" className="hover:text-primary transition-colors duration-300">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect With Us</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@ziddiqr.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3">Follow our attitude:</p>
              <div className="flex space-x-3">
                <a 
                  href="https://instagram.com/ziddiqr" 
                  target="_blank"
                  className="w-9 h-9 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com/ziddiqr" 
                  target="_blank"
                  className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com/ziddiqr" 
                  target="_blank"
                  className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com/ziddiqr" 
                  target="_blank"
                  className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Stay Updated with ZiddiQR</h4>
                <p className="text-purple-100">
                  Get notified about new characters, offers, and attitude-packed updates!
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg flex-1 md:w-64 text-foreground bg-background border border-border focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-background dark:text-foreground dark:hover:bg-accent">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-muted/30 border-t border-border py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 ZiddiQR. All rights reserved. | 
              <span className="font-medium text-foreground"> Made with ❤️ in India</span>
            </div>
            
            {/* Hindi Tagline */}
            <div className="text-foreground font-medium">
              "QR se Judo, Personal Info ke bina" 🇮🇳
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/refund" className="hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
