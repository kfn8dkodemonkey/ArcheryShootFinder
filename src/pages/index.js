import * as React from 'react';
import { useState } from 'react';
import { graphql } from 'gatsby';

/* layout and components */
import 'bootstrap/dist/css/bootstrap.min.css'
import HPLayout from "../components/PageLayout"
import Hero from "../components/Hero"
import Featured from "../components/Featured"
import Shoots from "../components/Shoots"
import ClubRange from '../components/ClubRange';

const IndexPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Shoots');
  const [selectedShoot, setSelectedShoot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenDetails = (shoot) => {
    setSelectedShoot(shoot);
    setShowModal(true);
  };

  return (
    <HPLayout>
      <div className="container-fluid p-0">
        
        {/* HERO - Always Visible */}
        <div className="row">
          <Hero />
        </div>

        {/* FEATURED - Always Visible */}
        <div className="row p-3">
          <Featured />
        </div>

        <hr />

        {/* TAB NAVIGATION - Always Visible */}
        <div className="row px-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'Shoots' ? 'active' : ''}`}
                onClick={() => setActiveTab('Shoots')}
              >
                Shoots
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'CR' ? 'active' : ''}`}
                onClick={() => setActiveTab('CR')}
              >
                Clubs & Ranges
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'PS' ? 'active' : ''}`}
                onClick={() => setActiveTab('PS')}
              >
                Pro Shops
              </button>
            </li>
          </ul>
        </div>

        {/* DYNAMIC SECTION */}
        <div className="row p-3 bg-success bg-opacity-25">
          {activeTab === 'Shoots' && (
            <Shoots 
              data={data?.allWpShoot} 
              onViewDetails={handleOpenDetails} // FIXED: Added this missing prop
            />
          )}
          {activeTab === 'CR' && (
            <ClubRange data={data?.allWpLocations} />
          )}
          {activeTab === 'PS' && (
             <div className="py-4 text-center">
               <h3>Pro Shops Directory</h3>
               <p className="text-muted">Coming soon! Find local archery retailers here.</p>
             </div>
          )}
        </div>

        {/* MODAL STRUCTURE */}
        {showModal && selectedShoot && (
          <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
              <div className="modal-content shadow-lg border-0">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">{selectedShoot.title}</h5>
                  <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body p-4">
                  <div className="mb-3">
                    {/* Added optional chaining here to prevent crashes if data is missing */}
                    <span className="badge bg-secondary me-2">{selectedShoot.shootData?.shootType || '3D'}</span>
                    <span className="text-muted small">🗓 {selectedShoot.shootData?.shootDate || 'TBD'}</span>
                  </div>
                  {/* Using dangerouslySetInnerHTML because WordPress content often contains HTML tags */}
                  <div dangerouslySetInnerHTML={{ __html: selectedShoot.content }} />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-outline-secondary" onClick={() => setShowModal(false)}>Close</button>
                  <button className="btn btn-primary px-4">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </HPLayout>
  )
}

// At the bottom of index.js
export const query = graphql`
  query GetArcheryData {
    # Part A: Get Shoot
    allWpShoot {
      nodes {
        id
        title
        shootData {
          shootDate
          shootType
        }
      }
    }
    # Part B: Get ONLY Featured Locations
    # featuredLocations: allWpLocation(
    #   filter: { locationData: { isFeatured: { eq: true } } }
    # ) {
    #  nodes {
    #     id
    #     title
    #     locationData {
    #       locationType
    #     }
    #   }
    # }
  }
`


export default IndexPage
