import { useDispatch, useSelector } from 'react-redux';
import LeftDashboard from './LeftDashboard';
import { removeFavoriteCity } from './Store/Slices/FavCitySlice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { home } from 'react-icons-kit/iconic/home';
import Icon from "react-icons-kit";
import { androidFavorite } from 'react-icons-kit/ionicons/androidFavorite';



function Fav() {


  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    //unmounting
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const favoriteCities = useSelector((state) => state.favorites);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Favorite Cities:', favoriteCities);
  }, [favoriteCities]);

  const handleDelete = (id) => {
    dispatch(removeFavoriteCity({ id }));
  };

  return (
    <div className="flex">
      <div className="hidden lg:block background w-1/3 bg-black text-white">
        <LeftDashboard />
      </div>

      <div className={` footer-left  fixed bottom-0 w-full flex justify-around text-white h-10`}>
        {/* <img className='' src="Man.jpg" alt="Profile" /> {/* Added alt text for accessibility */} {/*<button className='footer-left-text'>Log Out</button> */}
        <div className={`${isSmallScreen ? 'block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'hidden'} flex justify-around w-full`}>
          <Link to="/" className="my-auto"><Icon icon={home} size={20} className="my-auto" /></Link>
          <Link to="/fav" className="my-auto"><Icon icon={androidFavorite} size={20} className="my-auto" /></Link>
        </div>
      </div>
      <div className="w-full overflow-y lg:px-4 px-1">
        <h2 className='text-4xl flex justify-center p-3'>Favorite Cities</h2>
        <h3 className='text-center text-2xl text-gray-500'>List are below</h3>
        {favoriteCities.length > 0 ? (
          <div className='py-4 grid grid-flex-row lg:grid-cols-2 grid-cols-1 gap-5'>
            {favoriteCities.map((city) => (
              <div key={city.id} className={`${city.humidity >= 50 ? 'card-fav-orange' : 'card-fav'}`} >
                {console.log(city.id)}
                <div className='flex justify-between'><h1 className='my-auto'>{city.name}</h1>
                  <span className='border border-gray-200 py-2 px-4 bg-red-400 text-white rounded-xl cursor-pointer' onClick={() => handleDelete(city.id)}>Delete</span>
                </div>
                <div className="icon-and-temp">
                  <img
                    src={`https://openweathermap.org/img/wn/${city.image}@2x.png`}
                    alt="icon"
                  />
                  <h1>{city.temp}&deg;</h1>
                </div>
                <p className='text-gray-700 text-xl'>Humidity: {city.humidity}%</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No favorite cities added.</p>
        )}
      </div>

    </div>
  );
}

export default Fav;
