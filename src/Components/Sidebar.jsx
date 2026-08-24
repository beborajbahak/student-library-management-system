import { NavLink } from "react-router-dom";

export default function Sidebar({ user, onLogout }) {
  const link = ({ isActive }) => `side-link ${isActive ? "active" : ""}`;
  const isStudent = user.role === "Student";
  return (
    <aside className="sidebar">
      <div className="brand"><span className="brand-icon">📚</span> SLMS</div>
      <div className="user-box"><div className="avatar">{user.name.charAt(0)}</div><div><small>Welcome!</small><strong>{user.name}</strong></div></div>
      <div className="menu-title">General</div>
      <nav>
        <NavLink className={link} to="/dashboard">▦ Dashboard</NavLink>
        <NavLink className={link} to="/profile">◉ Profile</NavLink>
        {isStudent ? (
          <>
            <NavLink className={link} to="/books">▤ Browse Books</NavLink>
            <NavLink className={link} to="/issue-books">↗ My Borrowing</NavLink>
            <NavLink className={link} to="/requests">▤ My Requests</NavLink>
            <NavLink className={link} to="/status">◈ My Status</NavLink>
          </>
        ) : (
          <>
            <NavLink className={link} to="/students">▣ Student Information</NavLink>
            <NavLink className={link} to="/books">▤ Manage Books</NavLink>
            <NavLink className={link} to="/issue-books">↗ Issue / Return</NavLink>
            <NavLink className={link} to="/users">♙ Manage Users</NavLink>
            <NavLink className={link} to="/status">◈ Status</NavLink>
            <NavLink className={link} to="/requests">▤ Requested Books</NavLink>
          </>
        )}
        <NavLink className={link} to="/about">ⓘ About</NavLink>
      </nav>
      <button className="logout-btn" onClick={onLogout}>↪ Logout</button>
    </aside>
  );
}
