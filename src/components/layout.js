/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import BottomNav from "./BottomNav"
import "./layout.css"

const Layout = ({ children, view, setView, showSearch, setShowSearch, search, setSearch }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        view={view}
        setView={setView}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <main className="container-fluid px-3 px-md-4">
        {children}
      </main>
      <BottomNav />
      <footer className="container-fluid px-3 px-md-4 mt-5 pt-4 border-top text-center text-muted small">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>

      <div className={`offcanvas offcanvas-bottom ${showSearch ? 'show' : ''}`} tabIndex="-1" id="searchOffcanvas" aria-labelledby="searchOffcanvasLabel" style={{bottom: '60px', height: showSearch ? 'calc(50% + 60px)' : '0', transition: 'height 0.3s ease'}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="searchOffcanvasLabel">
            <i className="bi bi-search me-2"></i>Search & Filters
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setShowSearch(false)}></button>
        </div>
        <div className="offcanvas-body">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search shoots, locations, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <small className="text-muted">Results update as you type. Pull up for more filters.</small>
          </div>
          {/* Placeholder for additional filters */}
          <div className="mt-4">
            <h6>Categories</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="target" />
              <label className="form-check-label" htmlFor="target">Target</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="field" />
              <label className="form-check-label" htmlFor="field">Field</label>
            </div>
            {/* Add more filters as needed */}
          </div>
        </div>
      </div>

      {/* Partial Peek Handle */}
      {!showSearch && (
        <div className="fixed-bottom bg-light border-top d-flex align-items-center justify-content-center py-2" style={{bottom: '60px', height: '60px', cursor: 'grab', width: '100%'}}>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowSearch(true)}>
            <i className="bi bi-search me-1"></i>Search
          </button>
          <div className="handle mx-auto" style={{width: '40px', height: '4px', backgroundColor: '#dee2e6', borderRadius: '2px'}}></div>
        </div>
      )}
    </>
  )
}

export default Layout
