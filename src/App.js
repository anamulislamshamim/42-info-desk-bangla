import { RouterProvider } from 'react-router-dom';
// import './App.css';
import router from './routes/UserRoutes';

function App() {
  return (
    <div className='bg-black'>
        <RouterProvider router={ router } />
    </div>
  );
}

export default App;
