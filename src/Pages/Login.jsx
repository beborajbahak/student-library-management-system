import { useState } from "react";
import { defaultUsers } from "../data";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordFor = (role) => role === "Admin" ? "admin123" : role === "Librarian" ? "library123" : "student123";

  const submit = (e) => {
    e.preventDefault();
    const account = defaultUsers.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!account || password !== passwordFor(account.role)) {
      setError("Invalid email or password.");
      return;
    }
    setError("");
    onLogin(account);
  };

  const quickLogin = (account) => {
    setEmail(account.email);
    setPassword(passwordFor(account.role));
    setError("");
  };

  const students = defaultUsers.filter((u) => u.role === "Student");

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={submit}>
        <div className="login-logo">📚</div>
        <h1>Student Library Management</h1>
        <p>Sign in to continue</p>
        {error && <div className="error">{error}</div>}
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@library.com" required />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button className="primary-btn" type="submit">Login</button>
        <div className="demo-login">
          <b>Quick demo login</b>
          <div className="quick-login-row">
            <button type="button" onClick={() => quickLogin(defaultUsers[0])}>Admin</button>
            <button type="button" onClick={() => quickLogin(defaultUsers[1])}>Librarian</button>
          </div>
          <select defaultValue="" onChange={(e) => { const u = students.find((x) => x.email === e.target.value); if (u) quickLogin(u); }}>
            <option value="">Select a student</option>
            {students.map((u) => <option key={u.email} value={u.email}>{u.name}</option>)}
          </select>
          <small>Admin: admin123 · Librarian: library123 · Students: student123</small>
        </div>
      </form>
    </div>
  );
}
