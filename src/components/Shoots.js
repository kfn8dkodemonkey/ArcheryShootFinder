import React from 'react';

const Shoots = ({ data, onViewDetails }) => {
  // 1. Safety check: If WordPress is empty or query fails, 
  // we return a fallback so the build doesn't crash.
  const shoots = data?.nodes || [];

  if (shoots.length === 0) {
    return (
      <div className="col-12 text-center py-5">
        <p className="text-muted">No upcoming shoots found.</p>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {shoots.map((shoot) => (
        <div key={shoot.id} className="col-6 sm-12">
          <div className="card shadow-sm border-0">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1 fw-bold">{shoot.title || "Untitled Shoot"}</h6>
                <div className="small text-muted">
                  {/* Match your query: shootData instead of shootData */}
                  🗓 {shoot.shootData?.shootDate || "Date TBD"} | 
                  <span className="ms-1 badge bg-light text-dark border">
                    {shoot.shootData?.shootType || "General"}
                  </span>
                </div>
              </div>
              <button 
                className="btn btn-sm btn-primary px-3"
                onClick={() => onViewDetails(shoot)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoots;
