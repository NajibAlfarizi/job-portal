# Job Portal Application - Backend

This is the backend part of the Job Portal Application, which is built using Node.js, Express, and MongoDB. The backend handles user authentication, jobseeker and company profile management, and serves as an API for the frontend application.

## Features

- User authentication using Clerk.js
- Jobseeker profile management
- Company profile management
- MongoDB for data storage

## Project Structure

```
backend
├── src
│   ├── models
│   │   ├── user.js            # User model schema
│   │   ├── jobseeker.js       # Jobseeker model schema
│   │   └── company.js         # Company model schema
│   ├── routes
│   │   ├── jobseeker.js       # Routes for jobseeker operations
│   │   └── company.js         # Routes for company operations
│   ├── controllers
│   │   ├── jobseekerController.js # Controller for jobseeker requests
│   │   └── companyController.js   # Controller for company requests
│   ├── app.js                 # Main entry point for the application
│   └── config
│       └── db.js             # Database connection logic
├── package.json               # Dependencies and scripts
└── README.md                  # Documentation for the backend
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd job-portal-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `src/config/db.js`.

5. Start the server:
   ```
   npm start
   ```

## Usage

- The backend API can be accessed at `http://localhost:3000/api`.
- Use the provided routes to manage jobseeker and company profiles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.