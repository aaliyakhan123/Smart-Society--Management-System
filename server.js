const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const residentRoutes = require("./routes/residentRoutes");

const visitorRoutes = require("./routes/visitorRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const billRoutes = require("./routes/billRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const facilityRoutes = require("./routes/facilityRoutes");
const flatRoutes = require("./routes/flatRoutes");
const pollRoutes = require("./routes/pollRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/api/residents", residentRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/bills", billRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/facilities", facilityRoutes);
app.use("/api/flats", flatRoutes);
app.use("/api/polls", pollRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.get("/", (req, res) => {
  res.send("Smart Society Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
