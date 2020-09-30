//soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + ' ' + kataKedua + ' ' + kataKetiga + ' ' + kataKeempat);

/* Jawaban Soal 1
saya senang belajar javascript
*/

//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var angkaPertama = parseInt(kataPertama);
var angkaKedua = parseInt(kataKedua);
var angkaKetiga = parseInt(kataKetiga);
var angkaKeempat = parseInt(kataKeempat);

var perjumlahan = angkaPertama + angkaKedua + angkaKetiga + angkaKeempat;

console.log(perjumlahan);

/* Jawaban Soal 2
12
*/

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15,19); // do your own! 
var kataKeempat = kalimat.substring(19,24); // do your own! 
var kataKelima; // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 

/* Jawaban soal 3
Kata Pertama: wah
Kata Kedua: javascript
Kata Ketiga: itu 
Kata Keempat: keren
*/


//soal 4
var nilai = 56;
if (nilai >= 80){
    console.log("A");
} else if (nilai >= 70) {
    console.log("B");
} else if (nilai >= 60) {
    console.log("C");
} else if (nilai >= 50) {
    console.log("D");
} else {
    console.log("E");
}
/* Jawaban soal 5
D
*/

//soal 5
var tanggal = 7;
var bulan = 5;
var tahun = 1998;

switch(bulan) {
    case 1 : { console.log(tanggal + ' ' + 'Januari' + ' ' + tahun); break}
    case 2 : { console.log(tanggal + ' ' + 'Febuari' + ' ' + tahun); break}
    case 3 : { console.log(tanggal + ' ' + 'Maret' + ' ' + tahun); break}
    case 4 : { console.log(tanggal + ' ' + 'April' + ' ' + tahun); break}
    case 5 : { console.log(tanggal + ' ' + 'Mei' + ' ' + tahun); break}
    case 6 : { console.log(tanggal + ' ' + 'Juni' + ' ' + tahun); break}
    case 7 : { console.log(tanggal + ' ' + 'Juli' + ' ' + tahun); break}
    case 8 : { console.log(tanggal + ' ' + 'Agustus' + ' ' + tahun); break}
    case 9 : { console.log(tanggal + ' ' + 'Septemper' + ' ' + tahun); break}
    case 10 : { console.log(tanggal + ' ' + 'Oktober' + ' ' + tahun); break}
    case 11 : { console.log(tanggal + ' ' + 'November' + ' ' + tahun); break}
    case 12 : { console.log(tanggal + ' ' + 'Desember' + ' ' + tahun); break}
}

/*
7 Mei 1998
*/