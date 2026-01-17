import { FaInstagram, FaPinterest, FaBehance, FaDribbble, FaFacebook, FaTiktok } from "react-icons/fa";

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Custom Portraits", href: "#contact" },
    { name: "Landscapes", href: "#gallery" },
    { name: "Illustrations", href: "#gallery" },
    { name: "Commissions", href: "#contact" },
  ],
};

export const socialLinks = [
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "Pinterest", icon: FaPinterest, href: "#" },
  { name: "TikTok", icon: FaTiktok, href: "#" },
  { name: "Facebook", icon: FaFacebook, href: "#" },
];