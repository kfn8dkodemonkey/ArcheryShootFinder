import * as React from 'react';
import { useState,} from 'react';
//import { graphql } from 'gatsby';

const Hero = () => (
    <div className="row g-0 border-bottom" style={{ minHeight: "60vh" }}>
        {/* Hero & Search */}
        <div className="col-lg-6 d-flex align-items-center bg-light p-5">
            <div className="w-100">
                <h1 className="display-4 fw-bold">Find Shoots, Clubs & Shops</h1>
                <p className="lead text-muted">The ultimate directory for the archery community.</p>
                <div className="input-group input-group-lg shadow-sm mt-4">
                    <input type="text" className="form-control" placeholder="Search by name, city, or zip..." />
                    <button className="btn btn-primary px-4">Search</button>
                </div>
            </div>
        </div>
        {/* Google Map Wireframe */}
        <div className="col-lg-6 bg-secondary d-flex align-items-center justify-content-center text-white">
            <p className="lead">[ Google Maps Integration Area ]</p>
        </div>
    </div>
);

export default Hero