import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';


function App() {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
