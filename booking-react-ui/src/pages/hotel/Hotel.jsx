import React, { useContext, useState } from 'react'
import './hotel.css'
import  Navbar from '../../components/navbar/Navbar'
import  Header from '../../components/header/Header'
import  MailList from '../../components/mailList/MailList'
import  Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../../components/reserve/Reserve'

const Hotel = () => {

  const location = useLocation();
  const {dates, options} = useContext(SearchContext);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const hotelId = location.pathname.split('/')[2];
  const {data, loading} = useFetch(`/hotels/find/${hotelId}`);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleReserve = () => {
    console.log(user);
      if(user) {
         setOpenModal(true);
      }else{
         navigate('/')
      }
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'Loading'
      ):(
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button onClick={handleReserve} className="bookNow">Reserve or Book Now!</button>
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
                <button onClick={handleReserve}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={hotelId} />}
    </div>
  )
}

export default Hotel