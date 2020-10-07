// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Tulis code untuk memanggil function readBooks di sini
var times = 10000;
var i = 0;
readBooks(times, books[i], function (waktu) {
  i += 1;
  readBooks(waktu, books[i], function (waktu2) {
    i += 1;
    readBooks(waktu2, books[i], function (waktu3) {
      i += 1;
      readBooks(waktu3, books[i], function (waktu4) {});
    });
  });
});

/*Jawaban soal 1
saya membaca LOTR
saya sudah membaca LOTR, sisa waktu saya 7000
saya membaca Fidas
saya sudah membaca Fidas, sisa waktu saya 5000
saya membaca Kalkulus
saya sudah membaca Kalkulus, sisa waktu saya 1000
saya membaca komik
saya sudah membaca komik, sisa waktu saya 0
*/
