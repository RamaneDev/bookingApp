import React, { useContext } from 'react'
import './hotel.css'
import  Navbar from '../../components/navbar/Navbar'
import  Header from '../../components/header/Header'
import  MailList from '../../components/mailList/MailList'
import  Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'

const Hotel = () => {

  const location = useLocation();
  const hotelId = location.pathname.split('/')[2];

  const {data, loading, error, Refetch} = useFetch(`/hotels/find/${hotelId}`);

  const {dates, options} = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'Loading'
      ):(
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className='hotelDistance'>
              Excellent location - {data.distance}m from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos && data.photos.map((photo,i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img src={photo} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
                <p className="hotelDesc">
                {data.desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}


    </div>
  )
}

export default Hotel