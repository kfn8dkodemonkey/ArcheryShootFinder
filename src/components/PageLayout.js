import * as React from 'react';
import Navbar from './nav';
import Hero from "../components/Hero"
import Featured from "../components/Featured"
import Footer from './footer';

const PageLayout = ({ children }) => (
  <main>
    {/* SECTION: HEADER (Move to components/header.js later) */}
    <Navbar />

    {/* HERO - Always Visible */}
    <div className="row">
      <Hero />
    </div>

    {/* FEATURED - Always Visible */}
    <div className="row p-3">
      <Featured />
    </div>

    <hr />
    
    {children}

    <Footer />
  </main>
);

export default PageLayout;
