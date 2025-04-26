import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 px-6 mt-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Building dreams together, one contribution at a time. Join our community to make a difference!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="/events" className="hover:text-green-400 transition-colors">Events</a></li>
            <li><a href="/contributions" className="hover:text-green-400 transition-colors">Contributions</a></li>
            <li><a href="/about" className="hover:text-green-400 transition-colors">About Us</a></li>
            <li><a href="/gallary" className="hover:text-green-400 transition-colors">Gallary</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">
            <strong>Email:</strong> contact@villagechama.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +254 123 456 789
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="hover:text-green-400 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} className="hover:text-green-400 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-green-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        <p>&copy; 2025 Village Chama. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
