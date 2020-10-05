//Soal 1

const luasLingkaran = (r) => {
  let luas = 3.14 * r * r;
  return console.log(`Luas lingkaran dengan jari-jari ${r} adalah ${luas}`);
};

const kelilingLingkaran = (r) => {
  let keliling = 2 * 3.14 * r;
  return console.log(`keliling lingkaran jari-jari ${r} adalah ${keliling} `);
};
luasLingkaran(4);
kelilingLingkaran(4);

/*Jawab Soal 1
Luas lingkaran dengan jari-jari 4 adalah 50.24
keliling lingkaran jari-jari 4 adalah 25.12 
*/

//Soal 2
const tambahKata = (
  firstWord,
  secondWord,
  thirdWord,
  fourthWord,
  fifthWord
) => {
  let kalimat = `${firstWord} ${secondWord} ${thirdWord} ${fourthWord} ${fifthWord}`;
  return console.log(kalimat);
};

tambahKata("saya", "adalah", "seorang", "frontend", "developer");

/*Jawaban Soal 2
saya adalah seorang frontend developer
*/

//Soal 3

const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

//Driver Code
newFunction("William", "Imoh").fullName();

/*Jawaban Soal 3

William Imoh
*/

//Soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;

console.log(firstName, lastName, destination, occupation);

/*Jawaban Soal 4
Harry Potter Holt Hogwarts React Conf Deve-wizard Avocado
*/

//soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);

/* Jawaban Soal 5
['Will', 'Chris', 'Sam',  'Holly', 'Gill', 'Brian', 'Noel', 'Maggie']
*/
