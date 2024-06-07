import { useDispatch, useSelector } from 'react-redux';
import LeftDashboard from './LeftDashboard';
import { removeFavoriteCity } from './Store/Slices/FavCitySlice';
import { useEffect } from 'react';


function Fav() {
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
      <div className="background w-1/4 bg-black text-white lg:h-[700px] 2xl:h-auto">
        <LeftDashboard />
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
