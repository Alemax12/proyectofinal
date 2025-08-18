import mongoose from "mongoose";

const LibroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  anio: { type: Number, required: true }
});

export default mongoose.model("Libro", LibroSchema);