import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import './CandidateLayout.css';

const CandidateLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <Navbar />
        <Outlet /> 
      </div>
    </div>
  );
};

export default CandidateLayout;
