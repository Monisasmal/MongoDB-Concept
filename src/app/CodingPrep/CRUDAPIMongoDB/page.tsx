export default function CRUDAPIMongoDB() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Build CRUD API with MongoDB (Express + Mongoose)
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          How do you build a complete CRUD API using Express.js and MongoDB with Mongoose?
        </p>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

const User = mongoose.model("User", userSchema);

/* ================= CRUD APIs ================= */

// CREATE
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// READ (All)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ (Single)
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Express is used to create API routes</li>
          <li>Mongoose connects MongoDB</li>
          <li>Schema defines structure</li>
          <li>Model interacts with database</li>
          <li>POST → Create data</li>
          <li>GET → Read data</li>
          <li>PUT → Update data</li>
          <li>DELETE → Remove data</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Output
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          API Endpoints:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`POST   /users       → Create user
GET    /users       → Get all users
GET    /users/:id   → Get single user
PUT    /users/:id   → Update user
DELETE /users/:id   → Delete user`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 You can test using Postman or browser
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>CRUD = Create, Read, Update, Delete</li>
          <li>Express handles routes</li>
          <li>Mongoose handles database operations</li>
          <li>REST API structure is followed</li>
          <li>Async/await is used for DB calls</li>
        </ul>
      </section>

    </div>
  );
}