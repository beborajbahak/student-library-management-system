export const defaultBooks = [
  { id: 1, title: "Software Engineering", author: "Ian Sommerville", category: "Software", status: "Available" },
  { id: 2, title: "Database System Concepts", author: "Abraham Silberschatz", category: "Database", status: "Available" },
  { id: 3, title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Networking", status: "Issued" },
  { id: 4, title: "Operating System Concepts", author: "Abraham Silberschatz", category: "Operating System", status: "Available" },
  { id: 5, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Algorithms", status: "Issued" },
  { id: 6, title: "Clean Code", author: "Robert C. Martin", category: "Programming", status: "Available" }
];

const studentNames = ["Bebo", "Aasha", "Prashna", "Reshma", "Shakti", "Prabesh", "Abib", "Anurat", "Puzan", "Sabin"];

export const defaultUsers = [
  { id: 1, name: "Admin", email: "admin@library.com", role: "Admin" },
  { id: 2, name: "Librarian", email: "librarian@library.com", role: "Librarian" },
  ...studentNames.map((name, index) => ({ id: index + 3, name, email: `${name.toLowerCase()}@library.com`, role: "Student" }))
];

export const defaultStudents = studentNames.map((name, index) => ({
  id: index + 1,
  name,
  email: `${name.toLowerCase()}@library.com`,
  role: "Student"
}));

export const defaultIssues = [
  { id: 1, student: "Bebo", book: "Computer Networks", issueDate: "2026-08-01", dueDate: "2026-08-15", status: "Issued" },
  { id: 2, student: "Aasha", book: "Introduction to Algorithms", issueDate: "2026-08-02", dueDate: "2026-08-16", status: "Issued" }
];

export const defaultRequests = [
  { id: 1, student: "Prashna", book: "Clean Code", date: "2026-08-02", status: "Pending" },
  { id: 2, student: "Reshma", book: "Software Engineering", date: "2026-08-03", status: "Pending" }
];

export function getData(key) {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); }
  catch { return []; }
}

export function saveData(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

export function seedData() {
  if (!localStorage.getItem("libraryBooks")) localStorage.setItem("libraryBooks", JSON.stringify(defaultBooks));
  const existingUsers = getData("libraryUsers");
  const mergedUsers = [...existingUsers];
  defaultUsers.forEach((u) => { if (!mergedUsers.some((x) => x.email === u.email)) mergedUsers.push(u); });
  localStorage.setItem("libraryUsers", JSON.stringify(mergedUsers));
  if (!localStorage.getItem("libraryStudents")) localStorage.setItem("libraryStudents", JSON.stringify(defaultStudents));
  if (!localStorage.getItem("libraryIssues")) localStorage.setItem("libraryIssues", JSON.stringify(defaultIssues));
  if (!localStorage.getItem("libraryRequests")) localStorage.setItem("libraryRequests", JSON.stringify(defaultRequests));
}
