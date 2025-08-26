import { Link } from "react-router-dom";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#ca3561] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <div>
              <img src={logo} alt="Sakhii Logo" className="h-12 mb-3" />
            </div>
            <p className="text-purple-100 mb-4">
              Empowering women through health education and support since 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-purple-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-purple-100 hover:text-white">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/library" className="text-purple-100 hover:text-white">
                  Health Library
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-purple-100 hover:text-white"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-purple-100 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>Health Articles</li>
              <li>Video Library</li>
              <li>Community Forum</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span>Durga Colony Roorkee Uttarakhand</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span>+91 9027704514</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span>sakhiindiafoundation@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-purple-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Sakhiicare Foundation. All rights
            reserved.
          </p>
          <div className="space-x-4">
            <Link to="/privacy" className="text-purple-100 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-purple-100 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-purple-100 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
