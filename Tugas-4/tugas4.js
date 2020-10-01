//Soal 1
console.log("LOOPING PERTAMA")
var deret = 1;
var perulangan = 0;
while (perulangan < 20) {
    perulangan += deret;
    perulangan++;
    console.log(perulangan + ' I love coding');
}
perulangan += 2;
console.log("LOOPING KEDUA")
while (perulangan >= 2) {
    perulangan -= deret;
    perulangan--;
    console.log(perulangan + ' I will become a frontend developer');
}

/* Jawaban Soal 1
LOOPING PERTAMA
2 I love coding
4 I love coding
6 I love coding
8 I love coding
10 I love coding
12 I love coding
14 I love coding
16 I love coding
18 I love coding
20 I love coding
LOOPING KEDUA
20 I will become a frontend developer
18 I will become a frontend developer
16 I will become a frontend developer
14 I will become a frontend developer
12 I will become a frontend developer
10 I will become a frontend developer
8 I will become a frontend developer
6 I will become a frontend developer
4 I will become a frontend developer
2 I will become a frontend developer
0 I will become a frontend developer
*/

//Soal 2
for(var angka = 1; angka <= 20; angka++) {
    if((angka%3)==0 && (angka%2)==1){
        console.log(angka + ' - I love coding');
    } else if((angka%2)==0){
        console.log(angka + ' - Berkualitas');
    } else if((angka%2)==1){
        console.log(angka + ' - Santai');
    }
}
/*
1 - Santai
2 - Berkualitas
3 - I love coding
4 - Berkualitas
5 - Santai
6 - Berkualitas
7 - Santai
8 - Berkualitas
9 - I love coding
10 - Berkualitas
11 - Santai
12 - Berkualitas
13 - Santai
14 - Berkualitas
15 - I love coding
16 - Berkualitas
17 - Santai
18 - Berkualitas
19 - Santai
20 - Berkualitas
*/

//soal 3
var line = "";
for (var i = 1; i <= 7; i++) {
  for (var j = 1; j <= i; j++) {
    line += "#"
  }
  line += "\n";
}

console.log(line);

/* Jawaban soal 3
# 
# # 
# # # 
# # # # 
# # # # # 
# # # # # # 
# # # # # # # 
*/

//soal 4
var kalimat = "saya sangat senang belajar javascript";
var soal4 = [];

soal4.push(kalimat.substring(0,4));
soal4.push(kalimat.substring(5,11));
soal4.push(kalimat.substring(11,18));
soal4.push(kalimat.substring(19,26));
soal4.push(kalimat.substring(26,37));
console.log(soal4);

/*Jawaban Soal 4
[ 'saya', 'sangat', ' senang', 'belajar', ' javascript' ]
*/

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(var i = 0; i < daftarBuah.length; i++ ){
    console.log(daftarBuah[i])
}

/*Jawaban Soal 5
1. Mangga
2. Apel
3. Anggur
4. Semangka
5. Jeruk
*/