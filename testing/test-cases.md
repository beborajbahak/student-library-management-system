# Test Case Summary

## Main System Test Cases
| ID | Objective | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| TC-01 | Verify student login | Correct username and password | Dashboard should open | Dashboard opened successfully | Pass |
| TC-02 | Search for a book | Full or partial title | Matching books displayed | Correct books displayed | Pass |
| TC-03 | Add a new book | Title, author, category | Book added | Book added with Available status | Pass |
| TC-04 | Reject incomplete book entry | Empty title/author | Submission blocked | Alert displayed and submission blocked | Pass |
| TC-05 | Borrow available book | Select available book | Book issued and record created | Status changed to Issued and dates recorded | Pass |

## Authentication and Security Test Cases
| ID | Objective | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| SEC-01 | Verify role-based login | Correct credentials | Correct dashboard opens | Admin, Librarian, and Student dashboards opened correctly | Pass |
| SEC-02 | Reject incorrect login | Wrong password | Access denied | "Invalid email or password" displayed | Pass |
| SEC-03 | Restrict admin access | Student opens Manage Users | Access denied | Student redirected away | Pass |

## Borrowing and Return Test Cases
| ID | Objective | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| BR-01 | Check book availability | Available book | Book shown as available | Book shown as Available | Pass |
| BR-02 | Create borrow record | Student and book | Borrow record created | Record created with issue and due date | Pass |
| BR-03 | Prevent borrowing unavailable book | Select same issued book | Borrowing should be prevented | Book not selectable and alert shown | Pass |
| BR-04 | Return borrowed book | Click Return | Status should update on all pages | Manage Books showed Available, but My Borrowing still showed Issued | **Fail** |
| BR-05 | Check student borrowing scope | Log in as one student | Only that student's books shown | Books belonging to all students were displayed | **Fail** |

## Student Access and Library Management Test Cases
| ID | Objective | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| ST-01 | View borrowing history | Open history page | Past borrowing records displayed | No history page exists | **Fail** |
| ST-02 | Add a new book | Book details | Book added | Book added successfully | Pass |
| ST-03 | Update existing book | Updated details | Book information updated | No edit option exists | **Fail** |
| ST-04 | Generate library report | Request report | Report generated | No Reports page or report feature exists | **Fail** |
| ST-05 | Manage user accounts | New user details | User account created | User added successfully | Pass |

## Summary
| Testing Area | Test Cases | Passed | Failed |
|---|---|---|---|
| Main System | 5 | 5 | 0 |
| Authentication and Security | 3 | 3 | 0 |
| Borrowing and Return | 5 | 3 | 2 |
| Student Access and Library Management | 5 | 2 | 3 |
| **Total** | **18** | **13** | **5** |

**Overall Pass Rate: 72%**