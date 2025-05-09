# 🌿 GreenWatch

**GreenWatch** is a Reddit-like full-stack web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It enables users to **report, upvote, downvote, and resolve environmental grievances** in their local communities — promoting accountability and sustainability.

---

## 🌟 Features

- 📝 **Report Environmental Complaints**  
  Users can file grievances related to pollution, waste dumping, deforestation, and other environmental concerns.

- 👍 **Upvote & Downvote System**  
  A community-driven voting mechanism to prioritize pressing issues.

- ✅ **Mark Complaints as Resolved**  
  Complaints can be marked resolved by users or authorities once addressed.

- 📄 **View & Sort Complaints**  
  Complaints are displayed in order of popularity (upvotes), recency, or resolution status.

- 💻 **Responsive UI**  
  A clean, modern React frontend for a seamless experience across devices.

---

## 🛠️ Tech Stack

**Frontend**:
- React
- CSS (vanilla or with modules/frameworks)
- Fetch API or Axios

**Backend**:
- Node.js
- Express.js

**Database**:
- MongoDB with Mongoose

---

## 📁 Folder Structure

```bash
greenwatch/
├── backend/                 # Express backend
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API endpoints
│   └── server.js            # Backend entry point
├── frontend/                # React frontend
│   ├── components/          # UI Components
│   ├── pages/               # Pages (Home, Submit, View)
│   └── App.js               # Main App component
├── .env                     # Environment variables
└── README.md

##⚙️ Setup Instructions
Clone the Repository

bash
Copy
Edit
git clone https://github.com/T-j-A-n/complaintSystem.git
cd complaintSystem
Install Backend Dependencies

bash
Copy
Edit
cd backend
npm install
Install Frontend Dependencies

bash
Copy
Edit
cd ../frontend
npm install
Set Up Environment Variables

Create a .env file inside the backend/ folder:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the Application

Backend:

bash
Copy
Edit
cd backend
npm start
Frontend (in a new terminal):

bash
Copy
Edit
cd frontend
npm start
