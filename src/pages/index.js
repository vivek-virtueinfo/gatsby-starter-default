import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Movie from "../components/movie"

const movie = {
  title: 'Sooryavanshi',
  genre: 'Action',
  trailer: 'u5r77-OQwa8',
  about: 'Sooryavanshi is an upcoming Indian Hindi-language action film directed by Rohit Shetty and written by Yunus Sajawal. Produced by Hiroo Yash Johar, Aruna Bhatia, Apoorva Mehta and Rohit Shetty.',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSklj7U-wjit6dvK2gjU7RYdjxfkeDg91l_UqvzolUbLeYogX81'
}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there</h1>
    <p>We are <b>VirtueInfo developers</b>. Welcome to our movie trailer site built with <b><a href="https://www.gatsbyjs.org">Gatsby</a></b>.</p>
    <div style={{ marginBottom: `1.45rem` }}>
      <Movie data={movie}/>
    </div>
  </Layout>
)

export default IndexPage
