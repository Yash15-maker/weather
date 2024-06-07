import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './HomePage';
import Fav from './Fav';

const App=()=> {
  return (
    <Router>
       <Routes>
      <Route path="/" element={<Homepage />} />
   <Route path="/fav" element={<Fav />} />
   {/*  //   <Route path="/weather/:city" element={<WeatherPage />} />
      Add more routes as needed */}
       </Routes>
  </Router>
  )
}

export default App
