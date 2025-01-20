# Project Setup Guide

## Project Details
This is a MERN (MongoDB, Express.js, React, Node.js) project. It includes a database connection string and environment variables that must be configured before running the project.

## Prerequisites
1. Install [Node.js](https://nodejs.org/).
2. Install [MongoDB](https://www.mongodb.com/docs/manual/installation/).
3. Clone the repository to your local machine.
4. Ensure you have a `.env` file with the required environment variables in the server directory.

### Environment Variables
The required `.env` file containing the `MONGO_URI`, `PORT`, and `JWT_SECRET` is not provided in this document.

## Login Details
- **Email**: rahul@gmail.com
- **Password**: rahul@2021

## Instructions to Start and Run the Project

### Step 1: Install Dependencies
Run the following command in both the **server** and **shopping app** directories to install the required dependencies:
```bash
npm install
```

### Step 2: Configure the Environment
Ensure the `.env` file is properly set up in the server directory as described above.

### Step 3: Start the Project
Run the following command in both the **server** and **shopping app** directories to start the application:
```bash
npm start
```

### Step 4: Access the Application
- The **server** will run on the port specified in the `.env` file (default: 5000).
- The **shopping app** will run on the default React development server port (usually 3000).
- Use the login credentials provided above to access the application.

---
