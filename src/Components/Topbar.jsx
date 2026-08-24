export default function Topbar({ user, onLogout }) {
  return (
    <header className="topbar">
      <h2>{user.role === "Student" ? "Student Panel" : "Librarian Control Panel"}</h2>
      <div className="top-user">
        <span>🔔</span><div className="small-avatar">{user.name.charAt(0)}</div><span>{user.name}⌄</span>
        <button className="top-logout" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}
