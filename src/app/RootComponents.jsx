// app/RootComponent.js
'use client';
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
export default function RootComponent({ children }) {




  return (
<div className="antialiased  transition-all duration-300">
      {<Navbar />}
      <main>{children}</main>
      {<Footer />}
    </div>
  );
}