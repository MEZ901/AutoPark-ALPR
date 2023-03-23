import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common';

const RootLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className='w-11/12 m-auto mt-20'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout;