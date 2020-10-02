//Soal 1
function halo() {
    var kata = "Halo Sanbers!"
    return kata
}

console.log(halo())

/*Jawaban 1
Halo Sanbers!
*/

//Soal 2
function kalikan(a,b) {
    return a * b
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) 

/*Jawab Soal 2
48
*/

//Soal 3
function introduce(name, age, address, hobby) {
    var kalimat = ("Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di jalan " 
    + address + ", dan saya punya hobby yaitu " + hobby + "!");
    return kalimat
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 

/*Jawaban Soal 3
Nama saya John, umur saya 30 tahun, alamat saya di jalan Jalan belum jadi, dan saya punya hobby yaitu Gaming!
*/

//Soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var objectDaftarPeserta = {}

objectDaftarPeserta.name = arrayDaftarPeserta[0]
objectDaftarPeserta.jenisKelamin = arrayDaftarPeserta[1]
objectDaftarPeserta.hobby = arrayDaftarPeserta[2]
objectDaftarPeserta.lahir = arrayDaftarPeserta[3]

console.log(objectDaftarPeserta)
/*jawaban soal 5
{
  name: 'Asep',
  jenisKelamin: 'laki-laki',
  hobby: 'baca buku',
  lahir: 1992
}
*/

//soal 5

var buah = [{nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: 9000},
            {nama: "jeruk", warna: "oranye", adaBijinya: "ada", harga: 8000},
            {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "ada", harga: 10000},
            {nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: 5000},
        ]
console.log(buah[0])

/*jawaban soal 5
{
  nama: 'strawberry',
  warna: 'merah',
  adaBijinya: 'tidak',
  harga: 9000
}
*/

//soal 6
var dataFilm = []

function tambahfilm(nama, durasi , genre, tahun){
    var objectFilm = {}
    objectFilm.nama = nama;
    objectFilm.durasi = durasi;
    objectFilm.genre = genre;
    objectFilm.tahun = tahun;
    return dataFilm.push(objectFilm)
}

tambahfilm("Spongebob", "2jam", "kartun", 2000)
tambahfilm("Avanger", "3jam", "action", 2018)

console.log(dataFilm)

/*
[
  { nama: 'Spongebob', durasi: '2jam', genre: 'kartun', tahun: 2000 },
  { nama: 'Avanger', durasi: '3jam', genre: 'action', tahun: 2018 }
]
*/
