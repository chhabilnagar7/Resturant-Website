import React from 'react'
import Layout from '../components/Layout-file/Layout'
import { Link } from 'react-router-dom'
import Banner from '../IMAGES/banner.jpeg'
import "../components/Layout-file/HomeStyle.css"

const Home = () => {
  return (
    <Layout>
      <div className='home'style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best Food In Noida</p>
          <Link to="/menu">

          <button>
            ORDER NOW!
          </button>
          </Link>

        </div>

      </div>
    </Layout>
  )
}

export default Home
