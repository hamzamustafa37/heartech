import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/LandingPage.css';
import './styles/aboutUs.css';
import Heartech from './View/heartech';


function App() {
  return (
  <>
<BrowserRouter>
				<Routes>
					<Route path='/' element={<Heartech />}></Route>
					{/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
				
				</Routes>
			</BrowserRouter>
  </>
  );
}

export default App;
