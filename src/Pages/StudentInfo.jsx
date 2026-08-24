import { useEffect, useState } from "react";
import { getData } from "../data";

export default function StudentInfo() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(getData("libraryStudents"));
  }, []);

  return (
    <>
      <div className="breadcrumb">Home <span>›</span> Student Information</div>
      <div className="page-title"><h1>Student Information</h1></div>
      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
