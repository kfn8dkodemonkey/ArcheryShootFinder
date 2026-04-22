import * as React from 'react';
import Navbar from './nav';
import Footer from './footer';

const HPLayout = ({ children }) => (
  <main>
    {/* SECTION: HEADER (Move to components/header.js later) */}
    <Navbar />

    {children}

    <Footer />
  </main>
);

export default HPLayout;
