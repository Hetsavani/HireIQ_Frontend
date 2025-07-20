
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminNavbar from '../pages/admin/AdminNavbar/AdminNavbar';
import './AdminLayout.css'

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="w-100">
        <AdminNavbar />
        <div className="flex-grow-1 p-4 ps-5"
          style={{// Adjust if navbar height is different
            overflowY: "auto",
            backgroundColor: "#0f121f", marginLeft: '250px' }} >
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;