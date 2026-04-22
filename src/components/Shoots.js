import * as React from 'react';
import { useState, useMemo, useCallback } from 'react';
import { graphql } from 'gatsby';

const Shoots = ({ data, onViewDetails }) => {
    // Use optional chaining (?.) so it doesn't crash if data is empty
    const shoots = data?.nodes || [];

    return (
        <div className='container-fluid'>
            <div className="row">
                <h2>Upcoming Shoots</h2>
                <div className='col'>
                    <h3 className='fs-5'>Range Facility:</h3>
                    <div className="btn-group btn-group-md"> 
                        <button className="btn btn-outline-secondary active">All</button>
                        <button className="btn btn-outline-secondary">Indoor</button>
                        <button className="btn btn-outline-secondary">Outdoor</button>
                        <button className="btn btn-outline-secondary">State Park</button>
                    </div>
                </div>
                <div className='col'>
                    <h3 className='fs-5'>Skill Level:</h3>
                    <div className="btn-group btn-group-md">      
                        <button className="btn btn-outline-secondary active">All</button>
                        <button className="btn btn-outline-secondary">Beginner</button>
                        <button className="btn btn-outline-secondary">Intermediate</button>
                        <button className="btn btn-outline-secondary">Expter</button>
                    </div>
                </div>
                <div className='col'>
                    <h3 className='fs-5'>Target Type:</h3>
                    <div className="btn-group btn-group-md">                    
                        <button className="btn btn-outline-secondary active">All</button>
                        <button className="btn btn-outline-secondary">Target</button>
                        <button className="btn btn-outline-secondary">Field</button>
                        <button className="btn btn-outline-secondary">3D</button>
                        <button className="btn btn-outline-secondary">Clout</button>
                    </div>
                </div>
                <div className='col'>
                    <h3 className='fs-5'>Bow Style:</h3>
                    <div className="btn-group btn-group-md">                    
                        <button className="btn btn-outline-secondary active">All</button>
                        <button className="btn btn-outline-secondary">Recurve</button>
                        <button className="btn btn-outline-secondary">Compound</button>
                        <button className="btn btn-outline-secondary">Long Bow</button>
                    </div>
                </div>
                <div className='col-3'>         
                    <h3 className='fs-5'>Shoot Type: </h3>
                    <div className="btn-group btn-group-md">
                        <button className="btn btn-outline-secondary active">All</button>
                        <button className="btn btn-outline-secondary">Practice / Training</button>
                        <button className="btn btn-outline-secondary">Competition / Tournament</button>
                        <button className="btn btn-outline-secondary">League</button>
                        <button className="btn btn-outline-secondary">Fun</button>
                    </div>
                </div> 
            </div>

            <hr className='mt-3'/>

            <div className="row">

                {shoots.map(shoot => (
                    <div key={shoot.id} className="col-6 mb-1">
                        <div className="card">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">{shoot.title}</h6>
                                    <small className="text-muted mb-0">{shoot.shootFields?.shootDate || "Date TBD"}</small>
                                </div>

                                {/* This button calls the function we passed down */}
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => onViewDetails(shoot)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {shoots.length === 0 && (
                    <div className="text-center p-5">
                        <p>No shoots found. Check back later!</p>
                    </div>
                )}

            </div>
        </div>
        
    );
};

export default Shoots;