import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

import librosRoutes from "./routes/libros.js";
import authRoutes from "./routes/auth.js";

app.use("/api/libros", librosRoutes);
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Servidor backend corriendo en http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error("❌ Error de conexión:", err));
