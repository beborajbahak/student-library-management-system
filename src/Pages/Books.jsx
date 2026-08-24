import { useEffect, useState } from "react";
import { getData, saveData } from "../data";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => setBooks(getData("libraryBooks")), []);
  const addBook = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Enter book title and author.");
    const updated = [...books, { id: Date.now(), title, author, category: category || "General", status: "Available" }];
    setBooks(updated); saveData("libraryBooks", updated); setTitle(""); setAuthor(""); setCategory("");
  };
  const toggleStatus = (id) => {
    const updated = books.map(b => b.id === id ? { ...b, status: b.status === "Available" ? "Issued" : "Available" } : b);
    setBooks(updated); saveData("libraryBooks", updated);
  };
  const filtered = books.filter(b => `${b.title} ${b.author} ${b.category}`.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <div className="breadcrumb">Home <span>›</span> Manage Books</div>
      <div className="page-title"><h1>Manage Books</h1></div>
      <section className="panel">
        <h3>Add New Book</h3>
        <form className="inline-form" onSubmit={addBook}><input placeholder="Book title" value={title} onChange={e => setTitle(e.target.value)} /><input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} /><input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} /><button className="primary-btn">Add Book</button></form>
      </section>
      <section className="panel"><input className="search-input" placeholder="Search books..." value={search} onChange={e => setSearch(e.target.value)} /><div className="table-wrap"><table><thead><tr><th>ID</th><th>Title</th><th>Author</th><th>Category</th><th>Status</th><th>Action</th></tr></thead><tbody>{filtered.map(b => <tr key={b.id}><td>{b.id}</td><td>{b.title}</td><td>{b.author}</td><td>{b.category}</td><td><span className={`badge ${b.status === "Available" ? "success" : "danger"}`}>{b.status}</span></td><td><button className="small-btn" onClick={() => toggleStatus(b.id)}>{b.status === "Available" ? "Issue" : "Return"}</button></td></tr>)}</tbody></table></div></section>
    </>
  );
}
