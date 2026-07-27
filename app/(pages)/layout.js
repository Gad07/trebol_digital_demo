import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Shared layout for all interior pages (non-homepage).
 * Wraps children with the main Navbar and Footer.
 */
export default function PagesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
