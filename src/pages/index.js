import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MapComponent from "../components/map"
import Tabs from "../components/tabs"
import CalendarView from "../components/CalendarView"

const IndexPage = ({ data }) => {
  const shoots = data.allShootsJson.nodes;
  const [view, setView] = useState('map');
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Filter shoots
  const filteredShoots = shoots.filter(shoot => 
    shoot.name.toLowerCase().includes(search.toLowerCase()) ||
    shoot.categories.some(cat => cat.toLowerCase().includes(search.toLowerCase()))
  );

  const isUpcoming = (dateString) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(dateString);
    return eventDate >= today;
  };

  return (
    <Layout
      view={view}
      setView={setView}
      search={search}
      setSearch={setSearch}
      showSearch={showSearch}
      setShowSearch={setShowSearch}
    >
      <Seo title="Home" />

      {/* View Content */}
      {view === 'map' && <MapComponent shoots={filteredShoots} />}
      {view === 'list' && <Tabs upcomingShoots={filteredShoots.filter(s => isUpcoming(s.date))} pastShoots={filteredShoots.filter(s => !isUpcoming(s.date))} />}
      {view === 'calendar' && <CalendarView shoots={filteredShoots} />}

      {/* About Section */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-4">Archery Shoot Finder</h2>
            <p className="lead mb-4">
              Your go-to resource for discovering archery shoots across the country.
            </p>
            <hr />
            <p><em>All events are updated by the shoot host.</em></p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allShootsJson(sort: { date: ASC }) {
      nodes {
        id
        slug
        name
        date
        endDate
        description
        location {
          city
          state
          lat
          lng
          name
          address
          zip
        }
        categories
      }
    }
  }
`