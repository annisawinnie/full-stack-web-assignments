/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
1) Type Error
Type Error muncul jika kita menggunakan nilai yang berada di luar kisaran tipe yang diharapkan atau menggunakan fungsi yang tidak sesuai pada tipe data tertentu.

2) Reference Error
Reference Error muncul jika kita menggunakan (referensi) variabel yang belum dideklarasikan. Biasanya terjadi pada variable atau fungsi yang belum dideklarasikan.

3) Range Error
Range Error muncul jika Kita menggunakan angka yang berada di luar rentang nilai legal. 

4) Syntax Error
Syntax Error muncul jika kita melakukan kesalahan dalam penulisan syntax Javascript. Syntax Error merupak Error yang umum terjadi.
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

/*
1) Ketika baris kode diatas dijalankan yang terjadi adalah Error 
2) Error tersebut termasuk dalam kategori Reference Error
3)  Error tersebut terjadi karena (referensi) variabel yang belum dideklarasikan (Reference Error). Pada baris code diatas referensi variable salaryWithVar dan const salaryWithConst dideklarasikan di bawah setelah console.log sehingga syntax pertama yang dibaca dan dieksekusi adalah console.log sedangkan dalam console.log memanggil referensi salaryWithVar dan salaryWithConst yang dibaca oleh program tidak dideklarasikan sebelumnya.  
*/