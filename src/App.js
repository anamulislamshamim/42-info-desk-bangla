import { RouterProvider } from 'react-router-dom';
// import './App.css';
import router from './routes/UserRoutes';

function App() {
  return (
    <div className='bg-black' style={{"minHeight":"100vh"}}>
        <RouterProvider router={ router } />
    </div>
  );
}

export default App;
