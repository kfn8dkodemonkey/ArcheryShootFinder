import * as React from 'react';
// import { graphql } from 'gatsby';

const ClubRange = () => (
     <div className="row">
        <div className='col-4'>
            <h2>Clubs & Ranges</h2>
        </div>
        <div className='col'>
            <h3 className='fs-5'>Enviroment:</h3>
            <div className="btn-group btn-group-md">                    
                
                <button className="btn btn-outline-secondary active">All</button>
                <button className="btn btn-outline-secondary">Indoor</button>
                <button className="btn btn-outline-secondary">Outdoor</button>
            </div>
        </div>
        <div className='col'>
            <h3 className='fs-5'>Archery Style:</h3>
            <div className="btn-group btn-group-md">                    
                <button className="btn btn-outline-secondary active">All</button>
                <button className="btn btn-outline-secondary">Target</button>
                <button className="btn btn-outline-secondary">Field</button>
                <button className="btn btn-outline-secondary">3D</button>
                <button className="btn btn-outline-secondary">Clout</button>
            </div>
        </div>
        <div className='col-4'>                
            <h3 className='fs-5'>Shoot Type: </h3>
            <div className="btn-group btn-group-md">
                <button className="btn btn-outline-secondary active">All</button>
                <button className="btn btn-outline-secondary">Practice / Training</button>
                <button className="btn btn-outline-secondary">Competition / Tournament</button>
                <button className="btn btn-outline-secondary">League</button>
            </div>
        </div> 

        <hr className='mt-2'/>

        <div className="row g-3">
            {/* This is the loop area */}
            <div className="col-12">
                <div className="card shadow-sm">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1 fw-bold">Sample 3D Invitational</h6>
                            <p className="small text-muted mb-0">📍 Local Archery Club • April 25, 2026</p>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default ClubRange;