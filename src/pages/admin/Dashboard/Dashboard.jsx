import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import './Dashboard.css'

export default function Dashboard() {
  const quizData = [
    { title: "Quiz 1", date: "2025-07-01", participants: 10 },
    { title: "Quiz 2", date: "2025-07-03", participants: 8 },
    { title: "Quiz 3", date: "2025-07-05", participants: 15 },
    { title: "Quiz 4", date: "2025-07-07", participants: 9 },
    { title: "Quiz 5", date: "2025-07-08", participants: 12 },
    { title: "Quiz 6", date: "2025-07-09", participants: 7 },
    { title: "Quiz 7", date: "2025-07-10", participants: 14 },
    { title: "Quiz 8", date: "2025-07-11", participants: 11 },
    { title: "Quiz 9", date: "2025-07-13", participants: 6 },
    { title: "Quiz 10", date: "2025-07-15", participants: 13 },
  ];

  const recentQuizzes = [...quizData].reverse().slice(0, 5);
  const totalParticipants = quizData.reduce((sum, q) => sum + q.participants, 0);

  return (
    <div className="min-vh-100 p-4" style={{ backgroundColor: '#020817', color: '#F8FAFC' }}>
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="p-4 rounded-3 shadow" style={{ backgroundColor: '#0F172A' }}>
            <h5 style={{ color: '#94A3B8' }}>Total Quizzes</h5>
            <p className="fs-3 fw-bold" style={{ color: '#F8FAFC' }}>{quizData.length}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-3 shadow" style={{ backgroundColor: '#0F172A' }}>
            <h5 style={{ color: '#94A3B8' }}>Total Participants</h5>
            <p className="fs-3 fw-bold" style={{ color: '#F8FAFC' }}>{totalParticipants}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-3 shadow" style={{ backgroundColor: '#0F172A' }}>
            <h5 style={{ color: '#94A3B8' }}>Active Users</h5>
            <p className="fs-3 fw-bold" style={{ color: '#F8FAFC' }}>134</p>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="p-4 rounded-3 shadow mb-4" style={{ backgroundColor: '#0F172A' }}>
        <h4 className="mb-3" style={{ color: '#94A3B8' }}>Last 10 Quiz Participation</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={quizData}>
            <CartesianGrid stroke="#1E293B" />
            <XAxis dataKey="title" stroke="#F8FAFC" />
            <YAxis stroke="#F8FAFC" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1E293B", borderColor: "#6366F1", color: "#F8FAFC" }}
              labelStyle={{ color: '#F8FAFC' }}
              itemStyle={{ color: '#F8FAFC' }}
            />
            <Line type="monotone" dataKey="participants" stroke="#6366F1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Quizzes */}
      <div className="p-4 rounded-3 shadow" style={{ backgroundColor: '#0F172A' }}>
        <h4 className="mb-3" style={{ color: '#94A3B8' }}>Recent Quizzes</h4>
        <div className="table-responsive text-center">
          <table className="table custom-table">
            <thead>
              <tr>
                <th>Quiz Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Participants</th>
              </tr>
            </thead>
            <tbody>
              {recentQuizzes.map((quiz, index) => (
                <tr key={index}>
                  <td>{quiz.title}</td>
                  <td>{quiz.date}</td>
                  <td>{quiz.date}</td>
                  <td>{quiz.participants} participants</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
