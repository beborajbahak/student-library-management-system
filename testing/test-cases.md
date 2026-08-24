# Test Case Summary

| ID | Level | Objective | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|---|---|
| TC-01 | Unit | Check valid student login | A valid student email + student123 | Student dashboard opens | Dashboard opens | Pass |
| TC-02 | Unit | Reject wrong password | Valid email + wrong password | Error message shown | Error shown | Pass |
| TC-03 | Integration | Open Manage Books from dashboard | Click Manage Book | Books page opens inside app | Books page opens | Pass |
| TC-04 | System | Add a book | Valid title, author, category | Book appears in catalogue | Book appears | Pass |
| TC-05 | System | Issue a book | Student + available book | Book becomes Issued and issue record is saved | Record saved | Pass |
| TC-06 | System | Return a book | Existing issued book | Book becomes Available | Status updated | Pass |
| TC-07 | Security | Student opens Manage Users | Student clicks protected URL/menu | Access is denied and dashboard remains | Dashboard remains | Pass |
| TC-08 | Acceptance | Student checks personal status | Login as Bebo and open My Status | Bebo sees own borrowing information | Information shown | Pass |
| TC-09 | Negative | Submit empty book request | Empty request fields | Validation prevents submission | Submission prevented | Pass |
| TC-10 | Integration | Request book | Student selects a book | Request is stored and shown in requests | Request shown | Pass |
