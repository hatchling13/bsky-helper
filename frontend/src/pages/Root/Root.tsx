import { Outlet } from 'react-router-dom';

import AuthProvider from '../../AuthProvider';

import './styles.css';

function Root() {
  return (
    <AuthProvider>
      <section className="MainContainer">
        <Outlet />
      </section>
    </AuthProvider>
  );
}

export default Root;
