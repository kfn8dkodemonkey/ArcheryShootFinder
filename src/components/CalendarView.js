import * as React from "react"
import { Link } from "gatsby"

const CalendarView = ({ shoots }) => {
  // Group shoots by month
  const groupByMonth = (events) => {
    const grouped = {}
    events.forEach(shoot => {
      const date = new Date(shoot.date)
      const monthKey = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
      if (!grouped[monthKey]) {
        grouped[monthKey] = []
      }
      grouped[monthKey].push(shoot)
    })
    return grouped
  }

  const groupedShoots = groupByMonth(shoots.sort((a, b) => new Date(a.date) - new Date(b.date)))

  if (shoots.length === 0) {
    return (
      <div className="container my-5 text-center">
        <p>No shoots scheduled.</p>
      </div>
    )
  }

  return (
    <div className="container my-5">
      {Object.entries(groupedShoots).map(([month, monthShoots]) => (
        <section key={month} className="mb-5">
          <h3 className="h4 fw-bold mb-3 border-bottom pb-2">{month}</h3>
          <div className="row g-3">
            {monthShoots.map(shoot => (
              <div key={shoot.id} className="col-md-6 col-lg-4">
                <Link to={`/shoot/${shoot.slug}/`} className="card h-100 text-decoration-none">
                  <div className="card-body">
                    <h5 className="card-title">{shoot.name}</h5>
                    <p className="card-text small text-muted">
                      {new Date(shoot.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="card-text">{shoot.location.city}, {shoot.location.state}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default CalendarView