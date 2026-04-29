import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import * as styles from "./tabs.module.css"

const Tabs = ({ upcomingShoots, pastShoots }) => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const groupByDate = (shoots) => {
    const grouped = {}
    shoots.forEach(shoot => {
      const dateKey = formatDate(shoot.date)
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
      }
      grouped[dateKey].push(shoot)
    })
    return grouped
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabNavigation} role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === "upcoming"}
          aria-controls="upcoming-panel"
          className={`${styles.tabButton} ${activeTab === "upcoming" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("upcoming")}
        >
          Upcoming Shoots
          <span className={styles.tabCount}>{upcomingShoots.length}</span>
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "past"}
          aria-controls="past-panel"
          className={`${styles.tabButton} ${activeTab === "past" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("past")}
        >
          Past Shoots
          <span className={styles.tabCount}>{pastShoots.length}</span>
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "upcoming" && (
          <div 
            id="upcoming-panel"
            role="tabpanel"
            aria-labelledby="upcoming-tab"
            className={styles.tabPanel}
          >
            {upcomingShoots.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No upcoming shoots at this time.</p>
                <p className={styles.emptySubtext}>Check back later for new events!</p>
              </div>
            ) : (
              <div className="accordion" id="upcomingAccordion">
                {Object.entries(groupByDate(upcomingShoots)).map(([date, dateShoots], index) => (
                  <div key={date} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                        {date} ({dateShoots.length} shoot{dateShoots.length > 1 ? 's' : ''})
                      </button>
                    </h2>
                    <div id={`collapse${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading${index}`} data-bs-parent="#upcomingAccordion">
                      <div className="accordion-body">
                        {dateShoots.map((shoot) => (
                          <Link 
                            to={`/shoot/${shoot.slug}/`} 
                            key={shoot.id} 
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h6 className="mb-1">{shoot.name}</h6>
                              <p className="mb-1 small text-muted">{shoot.location.city}, {shoot.location.state}</p>
                              <small className="text-body-secondary">
                                {shoot.categories.slice(0, 3).join(', ')}
                              </small>
                            </div>
                            <span aria-hidden="true">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "past" && (
          <div 
            id="past-panel"
            role="tabpanel"
            aria-labelledby="past-tab"
            className={styles.tabPanel}
          >
            {pastShoots.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No past shoots on record.</p>
              </div>
            ) : (
              <div className="accordion" id="pastAccordion">
                {Object.entries(groupByDate(pastShoots)).map(([date, dateShoots], index) => (
                  <div key={date} className="accordion-item">
                    <h2 className="accordion-header" id={`pastHeading${index}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#pastCollapse${index}`} aria-expanded="false" aria-controls={`pastCollapse${index}`}>
                        {date} ({dateShoots.length} shoot{dateShoots.length > 1 ? 's' : ''})
                      </button>
                    </h2>
                    <div id={`pastCollapse${index}`} className="accordion-collapse collapse" aria-labelledby={`pastHeading${index}`} data-bs-parent="#pastAccordion">
                      <div className="accordion-body">
                        {dateShoots.map((shoot) => (
                          <Link 
                            to={`/shoot/${shoot.slug}/`} 
                            key={shoot.id} 
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h6 className="mb-1">{shoot.name}</h6>
                              <p className="mb-1 small text-muted">{shoot.location.city}, {shoot.location.state}</p>
                              <small className="text-body-secondary">
                                {shoot.categories.slice(0, 3).join(', ')}
                              </small>
                            </div>
                            <span aria-hidden="true">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Tabs