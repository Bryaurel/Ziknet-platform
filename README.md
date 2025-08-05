#  ZIKNET Platform

ZIKNET is a social media platform for musicians to connect, share content, access educational resources, and find career opportunities.  
This repository contains the **backend API** built with **Node.js**, **Express**, and **MongoDB**, along with automated CI to ensure code quality.

---

##  Features

- **User Authentication**
  - Register a new account.
  - Login with email & password.
  - JWT-based authentication.
- **User Management**
  - Retrieve a list of registered users (passwords excluded).
- **Profile Management**
  - Support for personal details like birth date, nationality, city, and profile photo.
- **Secure API**
  - Environment variables for sensitive data.
- **Automated Testing**
  - Unit tests using **Jest** and **Supertest**.
- **Code Quality**
  - Linting with **ESLint** enforced via CI.
- **Continuous Integration**
  - GitHub Actions pipeline runs on all Pull Requests to `main` or `develop`.

---

## 📂 Project Structure

├── src

│ ├── config # Database configuration

│ ├── models # Mongoose models

│ ├── routes # Express routes

│ ├── tests # Jest test files

│ ├── app.js # Express app

│ └── server.js # Server entry point

├── .github/workflows # CI pipeline files

├── .env # Environment variables (local)

├── .env.test # Environment variables (test)

├── package.json

└── README.md


---

## 🛠️ Local Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/<your-username>/Ziknet-platform.git
cd Ziknet-platform
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**

Create a .env file in the root directory:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=3000
```

Also create .env.test for testing:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/ziknet_test?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

Do not commit .env files. They are ignored via .gitignore.

### **4. Start the Development Server**
```bash
npm start
```

### **5. Run Tests**
```bash
npm test
```

### **6. Run Linter**
```bash
npm lint
```

### Continous Integration 

This project uses GitHub Actions to run automated checks on all Pull Requests to ```main``` or ```develop```:

-**Lint Check** using ESLint.

-**Unit Tests** with Jest.

CI is configured in ```.github/workflows/ci.yml```.

### Project Management

All tasks, issues, and milestones are tracked on the GitHub Project Board.
Link to the Project Board: https://github.com/Bryaurel/Ziknet-platform/projects?query=is%3Aopen

### License

This project is licensed under the MIT License.