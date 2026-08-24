# Requirements Document — Student Library Management System

## Scope
The system supports students, librarians, and administrators in managing books, borrowing, returning, user accounts, and library reports.

## Stakeholders
- **Student:** End user — searches, borrows, and returns books, and views borrowing information.
- **Librarian:** System operator — adds books, updates records, manages borrowing, and prepares reports.
- **Administrator:** System owner — manages user accounts and controls access.

## Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-1 | The system shall allow students to log in using a username and password. | High |
| FR-2 | The system shall allow students to search books by title, author, or category. | High |
| FR-3 | The system shall allow librarians to add new books. | High |
| FR-4 | The system shall allow librarians to update book information. | Medium |
| FR-5 | The system shall allow students to borrow books. | High |
| FR-6 | The system shall allow students to return borrowed books. | High |
| FR-7 | The system shall update book availability after borrowing and returning. | High |
| FR-8 | The system shall generate library reports. | Medium |
| FR-9 | The system shall allow administrators to manage user accounts. | High |
| FR-10 | The system shall allow students to view their borrowing history. | Low |

## Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-1 | Usability | The system should have a simple and user-friendly interface. |
| NFR-2 | Security | The system should provide secure login using usernames and passwords. |
| NFR-3 | Performance | The system should respond quickly when users search for books. |
| NFR-4 | Security | The system should store data accurately and securely. |
| NFR-5 | Reliability | The system should support regular data backup. |
| NFR-6 | Reliability | The system should be reliable during library working hours. |
| NFR-7 | Reliability | The system should reduce data loss and errors. |
| NFR-8 | Maintainability | The system should be easy to maintain and update. |

## Requirements Gathering Techniques
Interviews (with the librarian), observation (of the existing manual process), and a student questionnaire were used to identify these requirements.