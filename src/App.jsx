import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Books from "./Pages/Books";
import Users from "./Pages/Users";
import IssueBooks from "./Pages/IssueBooks";
import Requests from "./Pages/Requests";
import Status from "./Pages/Status";
import Profile from "./Pages/Profile";
import StudentInfo from "./Pages/StudentInfo";
import About from "./Pages/About";
import { seedData } from "./data";
import "./Styles/App.css";

function Protected({ user, roles, children }) {
  if (!roles.includes(user.role)) return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("libraryUser")); } catch { return null; }
  });

  useEffect(() => { seedData(); }, []);

  const login = (account) => { localStorage.setItem("libraryUser", JSON.stringify(account)); setUser(account); };
  const logout = () => { localStorage.removeItem("libraryUser"); setUser(null); };

  if (!user) return <Routes><Route path="*" element={<Login onLogin={login} />} /></Routes>;

  return (
    <div className="app-shell">
      <Sidebar user={user} onLogout={logout} />
      <div className="main-area">
        <Topbar user={user} onLogout={logout} />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books user={user} />} />
            <Route path="/issue-books" element={<IssueBooks user={user} />} />
            <Route path="/requests" element={<Requests user={user} />} />
            <Route path="/status" element={<Status user={user} />} />
            <Route path="/students" element={<Protected user={user} roles={["Admin", "Librarian"]}><StudentInfo /></Protected>} />
            <Route path="/users" element={<Protected user={user} roles={["Admin"]}><Users /></Protected>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
