import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../templates/shoot.module.css"

const ShootTemplate = ({ data }) => {
  const shoot = data.shootsJson

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const isMultiDay = shoot.date !== shoot.endDate

  return (
    <Layout>
      <Seo title={shoot.name} description={shoot.description} />
      
      <article className={styles.shoot}>
        <header className={styles.header}>
          <Link to="/" className={styles.backLink}>← Back to all shoots</Link>
          <h1>{shoot.name}</h1>
          <div className={styles.categories}>
            {shoot.categories.map((category, index) => (
              <span key={index} className={styles.category}>{category}</span>
            ))}
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>About this Event</h2>
              <p>{shoot.description}</p>
            </section>

            <section className={styles.section}>
              <h2>Date & Time</h2>
              <div className={styles.dateInfo}>
                <p className={styles.date}>
                  {formatDate(shoot.date)}
                  {isMultiDay && (
                    <> to <br />{formatDate(shoot.endDate)}</>
                  )}
                </p>
                <p className={styles.time}>{shoot.time}</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Entry Fees</h2>
              <p>{shoot.entryFee}</p>
            </section>

            <section className={styles.section}>
              <h2>Prizes</h2>
              <p>{shoot.prizes}</p>
            </section>

            <section className={styles.section}>
              <h2>Equipment & Course Info</h2>
              <p>{shoot.equipment}</p>
            </section>

            {shoot.registrationRequired && shoot.registrationUrl && (
              <section className={styles.section}>
                <a 
                  href={shoot.registrationUrl} 
                  className={styles.registerButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </section>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <h3>Location</h3>
              <div className={styles.locationName}>{shoot.location.name}</div>
              <address className={styles.address}>
                {shoot.location.address}<br />
                {shoot.location.city}, {shoot.location.state} {shoot.location.zip}
              </address>
            </div>

            <div className={styles.infoCard}>
              <h3>Organizer</h3>
              <div className={styles.organizerName}>{shoot.organizer.name}</div>
              {shoot.organizer.email && (
                <p>
                  <a href={`mailto:${shoot.organizer.email}`}>
                    {shoot.organizer.email}
                  </a>
                </p>
              )}
              {shoot.organizer.phone && (
                <p>
                  <a href={`tel:${shoot.organizer.phone}`}>
                    {shoot.organizer.phone}
                  </a>
                </p>
              )}
            </div>

            <div className={styles.infoCard}>
              <h3>Categories</h3>
              <ul className={styles.categoryList}>
                {shoot.categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo title={data.shootsJson.name} description={data.shootsJson.description} />
)

export default ShootTemplate

export const query = graphql`
  query($slug: String!) {
    shootsJson(slug: { eq: $slug }) {
      id
      slug
      name
      description
      date
      endDate
      time
      location {
        name
        address
        city
        state
        zip
        lat
        lng
      }
      organizer {
        name
        email
        phone
      }
      categories
      registrationRequired
      registrationUrl
      entryFee
      prizes
      equipment
    }
  }
`
