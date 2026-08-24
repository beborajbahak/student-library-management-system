# Requirements Document - Student Library Management System

## Scope
The system helps students and library staff manage books, users, borrowing, returns, and book requests.

## Stakeholders
- Admin: manages users and the whole system.
- Librarian: manages books, borrowing, returns, requests, and student information.
- Student: searches books, views availability, requests books, and checks borrowing status.

## Functional Requirements
| ID | Requirement |
|---|---|
| FR-01 | Users can log in according to their role. |
| FR-02 | Students can view available books. |
| FR-03 | Admin/Librarian can add, edit, and remove books. |
| FR-04 | Librarian can issue books to students. |
| FR-05 | Librarian can record returned books. |
| FR-06 | Students can submit book requests. |
| FR-07 | Staff can approve or reject requests. |
| FR-08 | Users can view borrowing/status information. |
| FR-09 | Admin can manage user records. |
| FR-10 | The system stores demo data in browser LocalStorage. |

## Non-Functional Requirements
- The interface should be simple and easy to use.
- Main pages should load quickly on a normal laptop.
- Role-based pages should not be available to unauthorized users.
- Data should remain after page refresh during a browser session.
- The layout should work on desktop and smaller screens.

## Requirement Techniques
Interviews, observation, use-case analysis, and review of the proposed workflow were used to identify the requirements.
