import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import CreateQuiz from './CreateQuiz';
import AiQuizGenerator from './AiQuizGenerator';

const AdminPanel = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="content-wrapper">
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminPanel;