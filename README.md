# My favourite songs app

## Proposed Project structure

- applications: contains web applications
  - my-favourite-songs-app: main application portal
  - header: micro frontend application
  - songs-list: micro frontend application
- server: Rest API server

---

## How to run

### Install dependencies

```bash
    yarn install
    yarn install:deps
```

### Run app in dev mode

```bash
    yarn start:app
```

---

## Context

The current project structure is far from the ideal micro-frontend setup we would consider acceptable.
As part of this challenge, we expect you to point out what are the current problems in the current architecture, and what can be done to achieve a consistent, reliable, and scalable micro-frontend setup.
Keep in mind that one of the goals of the proposed architecture should be to enable multiple teams to have independent release cycles, and provide common resources which them can leverage to achieve consistency and quality.

For the sake of simplicity, all applications are stored in a single repository, but should be considered as a separate projects.

---

## Tasks

> **_NOTE:_** Interview time is limited, and we don't expect you to finish all tasks. Please try to complete as many as you can.

### General

- Assess current application architecture
  - What are the pros and cons of the current architecture?
  - What are the possible improvements?
- Suggest more scalable solution for micro frontend applications
- Suggest the way to share common dependencies between micro frontend applications
- Suggest the way to establish communication between micro frontend applications
- How would you implement deployment of the application?
- How would you implement CI/CD for the application?
- How would you add monitoring for each individual application? (What metrics would you track?).
- Suggest testing strategy for the application.

### User Stories

- Implement an authentication flow that returns a token which micro frontends can use to request user details and user favorite songs.
- Implement a component/page that fetches the favorite songs from a particular user and renders it as a table.
- Implement a component that fetches the details of a user and displays the following attributes:
  - User name
  - User birthday (if available)
- Implement a signup flow where non-authenticated users can register in the app with the following criterias:
  - Users need to provide a name
  - Users need can provide a birthday (optional)
  - Users need to provide an email
  - Users need to provide a password (needs to be at least 8 characters, and must contain at least one number and one special character)
