import { Outlet } from 'react-router';
import Layout from '../componentes/Layout/layout';

export default function AppLayoutRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}