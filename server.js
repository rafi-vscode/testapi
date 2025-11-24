const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let dataMasuk = []; // tempat data disimpan

// GET untuk menampilkan semua data
app.get("/data", (req, res) => {
  res.json(dataMasuk);
});

// POST untuk menambah data
app.post("/data", (req, res) => {
  const { nama } = req.body;
  if (!nama) return res.status(400).json({ message: "Nama wajib diisi" });

  dataMasuk.push({ nama, waktu: new Date().toLocaleString() });

  console.log("Data diterima:", nama);
  res.json({ message: "Data berhasil masuk", nama });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server berjalan di http://0.0.0.0:3000");
});
