//Soal 1
//Release 0
class Animal {
  constructor(name, legs, cold_blooded) {
    this.name = name;
    this._legs = 4;
    this.cold_blooded = false;
  }

  get legs() {
    return this._legs;
  }

  set(x) {
    return (this._legs = x);
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

//Release 1
class Frog extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, legs, cold_blooded);
  }

  jump() {
    console.log("hop hop");
  }
}

class Ape extends Animal {
  constructor(name, cold_blooded, legs) {
    super(name, cold_blooded);
    Ape.legs = 2;
  }

  yell() {
    console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"

/*jawaban no 1
shaun
4
false
Auooo
hop hop
*/

//Soal no 2
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
