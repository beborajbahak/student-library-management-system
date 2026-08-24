import { useEffect, useState } from "react";
import { getData, saveData } from "../data";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");

  useEffect(() => {
    setUsers(getData("libraryUsers"));
    setStudents(getData("libraryStudents"));
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    const newUser = { id: Date.now(), name, email, role };
    const updated = [...users, newUser];
    setUsers(updated);
    saveData("libraryUsers", updated);
    if (role === "Student") {
      const updatedStudents = [...students, newUser];
      setStudents(updatedStudents);
      saveData("libraryStudents", updatedStudents);
    }
    setName("");
    setEmail("");
  };

  const displayUsers = [...users, ...students.filter((s) => !users.some((u) => u.name === s.name))];

  return (
    <>
      <div className="breadcrumb">Home <span>›</span> Manage Users</div>
      <div className="page-title"><h1>Manage Users</h1></div>
      <section className="panel">
        <form className="inline-form" onSubmit={addUser}>
          <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Student</option><option>Librarian</option><option>Admin</option>
          </select>
          <button className="primary-btn">Add User</button>
        </form>
      </section>
      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr></thead>
            <tbody>{displayUsers.map((u) => <tr key={`${u.role}-${u.id}`}><td>{u.id}</td><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}
