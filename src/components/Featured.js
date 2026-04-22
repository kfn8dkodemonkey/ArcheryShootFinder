import * as React from 'react';
// import { useState, useMemo, useCallback } from 'react';
// import { graphql } from 'gatsby';

const Featured = ({ shoots = [], limit = 6 }) => (
    <div className="mb-5">
        <h2 className="h4 mb-4">Featured Locations</h2>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="card h-100 bg-dark text-white border-0 shadow-sm">
                    <div className="card-body p-4">
                        <span className="badge bg-primary mb-2">Pro Shop</span>
                        <h5 className="card-title">Sample Pro Shop LP</h5>
                        <p className="card-text small text-white-50">Featured partner landing page preview.</p>
                    </div>
                </div>
            </div>
            {/* Repeat for other featured items */}
        </div>
    </div>

);

export default Featured;