# Job Portal Application

## Overview
The Job Portal Application is a web application designed to connect job seekers with companies looking to hire. It features user authentication, profile management, and role-based access for job seekers and companies.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Clerk.js

## Features
- User authentication and authorization using Clerk.js
- Role-based profiles for job seekers and companies
- Job seeker profile management
- Company profile management
- Responsive design using Tailwind CSS

## Project Structure
```
job-portal-app
├── backend
│   ├── src
│   │   ├── models
│   │   │   ├── user.js
│   │   │   ├── jobseeker.js
│   │   │   └── company.js
│   │   ├── routes
│   │   │   ├── jobseeker.js
│   │   │   └── company.js
│   │   ├── controllers
│   │   │   ├── jobseekerController.js
│   │   │   └── companyController.js
│   │   ├── app.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── components
│   │   ├── ClerkProviderWrapper.tsx
│   │   ├── CompleteProfileForm.tsx
│   │   ├── JobseekerForm.tsx
│   │   └── CompanyForm.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── complete-profile.tsx
│   │   └── api
│   │       ├── jobseeker.ts
│   │       └── company.ts
│   ├── styles
│   │   └── globals.css
│   ├── tailwind.config.js
│   ├── next.config.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Clerk account for authentication

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd job-portal-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.