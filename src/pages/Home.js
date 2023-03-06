import React from 'react'
import { Link } from 'react-router-dom'
import Bannar from '../images/background.avif'
const Home = () => {
  
  return (
    <>
    <div className='home' style={{backgroundImage:`url(${Bannar})`}}>
      <div className="headerContainer">
        {/* <h1>Ecommerce Website</h1>
        <p>Best Ecommerce In Bangladesh</p> */}
        <Link to='/menu'>
          <button className='btn-shopping'>Shoppin Now</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home