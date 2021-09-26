/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let counter = 2; counter <= 100; counter++) {

    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

let angka = 2;
// EDIT HERE
while (primeCounter !== 50) {

  let flag = 0;

  for (let j = 2; j < angka; j++){
if (angka % j == 0){
  flag=1;
  break;
    }

  }

if (flag == 0){
  fiftiethPrime = angka;
  primeCounter++;
}

angka++;
}

console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

let bilangan = 0;
// EDIT HERE
do {
  if (bilangan % 2 === 0) {
    bilangan++;
    continue;
  } else {
    oddCounter++;

    if (oddCounter === 50) {
      fiftiethOdd = bilangan;
    }
    bilangan++;
  }
} while (oddCounter < 50);

console.log(fiftiethOdd);
  