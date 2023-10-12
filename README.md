# Notes-App
Personal Notes App is a simple web application that allows users to store and manage their personal notes securely. It provides a user-friendly interface for creating, editing, and deleting notes. The app uses AngularJS for the frontend, Node.js for the backend, PostgreSQL as the database, and JWT Tokens for authentication.

## Technologies Used

- **Frontend:** AngularJS
- **Backend:** Node.js
- **Database:** PostgreSQL
- **Authentication:** JWT Tokens

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **AngularJS:** Ensure AngularJS is installed. You can install it using npm:
  ```
  npm install -g angular
  ```
- **PostgreSQL:** Install PostgreSQL and create a database named "personal_notes_db". You can download PostgreSQL from [here](https://www.postgresql.org/download/).

## Getting Started

1. **Clone the Repository:**
   ```
   git clone <repository-url>
   ```

2. **Database Configuration:**
   - Inside the `personal-notes-app-backend` directory, find `db.config.js`.
   - Add your PostgreSQL database configuration details (host, port, username, password) in this file.

3. **Install Backend Dependencies:**
   - Navigate to the `personal-notes-app-backend` directory in your terminal.
   - Run `npm install` to install backend dependencies.

4. **Run Backend Server:**
   - After installing dependencies, run the backend server using `node server.js`.
   - Backend will be running on  `http://localhost:8080'

5. **Install Frontend Dependencies:**
   - Navigate to the `personal-notes-app-frontend` directory in your terminal.
   - Run `npm install` to install frontend dependencies.

6. **Run Frontend Development Server:**
   - After installing frontend dependencies, run the frontend development server using `ng serve`.

7. **Access the Application:**
   - Open your browser and visit `http://localhost:4200` to access the personal notes application.

## Usage

- **Creating a Note:** Click on the "New Note" button, enter your note content, and click "Save" to create a new note.
- **Editing a Note:** Click on a note to view its content. Click the "Edit" button, make changes, and click "Save" to update the note.
- **Deleting a Note:** Click the "Delete" button to remove a note.
