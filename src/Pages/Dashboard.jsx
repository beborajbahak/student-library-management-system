import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../data";

export default function Dashboard({ user }) {
  const [books, setBooks] = useState([]);
  const [issues, setIssues] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setBooks(getData("libraryBooks"));
    setIssues(getData("libraryIssues"));
    setRequests(getData("libraryRequests"));
  }, []);

  const available = books.filter((b) => b.status === "Available").length;
  const issued = books.filter((b) => b.status === "Issued").length;

  const quickCards = [
    { title: "Manage Book", icon: "▤", path: "/books", className: "red" },
    { title: "Manage User", icon: "♙", path: "/users", className: "orange" },
    { title: "Status", icon: "◈", path: "/status", className: "cyan" },
    { title: "Requested Books", icon: "▤", path: "/requests", className: "green" }
  ];

  return (
    <>
      <div className="breadcrumb">Home <span>›</span> Dashboard</div>
      <div className="page-title">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, {user.name}.</p>
        </div>
      </div>

      <section className="stat-grid">
        <div className="stat pink"><b>3</b><span>Members</span><i>♟</i></div>
        <div className="stat mauve"><b>{issued}</b><span>Issued Books</span><i>↗</i></div>
        <div className="stat rose"><b>{books.length}</b><span>Books</span><i>▤</i></div>
        <div className="stat peach"><b>{available}</b><span>Available</span><i>✓</i></div>
      </section>

      <section className="quick-grid">
        {quickCards.map((card) => (
          <Link key={card.path} to={card.path} className={`quick ${card.className}`}>
            <span>{card.title}</span>
            <strong>{card.icon}</strong>
          </Link>
        ))}
      </section>

      <div className="dashboard-bottom">
        <section className="panel">
          <h3>Recent Issues</h3>
          {issues.length ? issues.slice(-5).reverse().map((item) => (
            <div className="row" key={item.id}>
              <span>{item.book}</span>
              <small>{item.student} · {item.status}</small>
            </div>
          )) : <p>No issue records.</p>}
        </section>

        <section className="panel">
          <h3>Book Requests</h3>
          {requests.length ? requests.slice(-5).reverse().map((item) => (
            <div className="row" key={item.id}>
              <span>{item.book}</span>
              <small>{item.student} · {item.status}</small>
            </div>
          )) : <p>No requests.</p>}
        </section>
      </div>
    </>
  );
}
