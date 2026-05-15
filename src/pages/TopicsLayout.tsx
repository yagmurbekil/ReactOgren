import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { topicsData } from '../data/topics';

export function TopicsLayout() {
  const location = useLocation();

  if (location.pathname === '/topics' || location.pathname === '/topics/') {
    const firstTopic = topicsData[0]?.topics[0]?.id;
    return <Navigate to={`/topics/${firstTopic}`} replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 w-full flex gap-8">
      <Sidebar />
      <div className="flex-1 min-w-0 pb-32 pt-4">
        <Outlet />
      </div>
    </div>
  );
}