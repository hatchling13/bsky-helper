import { Outlet } from 'react-router-dom';

import AuthProvider from '../../providers/UserProvider';

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
