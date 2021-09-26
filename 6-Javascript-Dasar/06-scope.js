/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

/*
Terdapat 3 variable scope pada javascript yaitu Block, Global Scope, dan Local Scope

1) Blocks, merupakan code yang berada didalam curly braces {}
2) Global Scope, merupakan variable yang kita deklarasikan diluar blocks agar bersifat global artinya dapat diakses dimanapun 
3) Local Scope, merupakan variable yang kita deklarasikan didalam block {} sehingga hanya bisa diakses didalam blocks saja dan tidak bisa diakses diluar blocks

Implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript adalah sebagai berikut :
*/
// Blocks
/*function rand(min = null, max = null) {
  if (min === null && max === null) {
    return 0;
  } else if (max === null) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(20, 1));


let name = 'Annisa' // Global Scope
function meet(){
  return name;
}
console.log(meet);



function meet(){
let name = 'Annisa' // Local Scope
  return name;
}
console.log(meet);

*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
/*
Yang tampil didalam console.log adalah Mariah
Meskipun sudah dideklarasikan const name = "John Watson", namun pada saat proses menampilkan hasil yaitu console.log di masukan sebuah string nama yaitu "Mariah Carey", sehingga 
program membaca string nama yang terdapat dalam scope local yaitu "Mariah Carey" maka ditampilkan "Mariah" pada console.log.
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
