//Conditionals

/**
 * Study Case
 *
 * Cek Bilangan ganjil & Genap
 *
 * Contoh
 *  var num = 5;
 *
 * Results:
 * 5 adalah Bilangan Ganjil
 *
 */

/**
 * Study Case 2
 *
 * School Grade
 * Buatlah Codingan untuk cek Grade sekolah
 *
 * Grade A : score antara 100 - 85
 * Grade B : score antara 84 - 70
 * Grade C : score antara 69 - 55
 * Grade D : score antara 54 - 40
 * Grade E : score antara 39 - 0
 *
 */

/** Study Case 3
 *
 * Ada 3 Jenis acces : Public, Protected, Private.
 *
 * Jika access kosong maka tampilkan input access :
 *
 * Access Public, Jika Level dibawah 5 maka tampilkan"Publik dibawah 5"
 * Access Public, Jika Level diatas 5 maka tampilkan"Publik diatas 5"
 * Access Public, Jika Level diatas 5 maka tampilkan"Publik diatas 5"
 */

//Jawaban Case 1
// var angka = 5;

// // Memeriksa bilangan ganjil atau genap
// if (angka % 2 === 0) {
//   console.log(angka + " adalah bilangan genap.");
// } else {
//   console.log(angka + " adalah bilangan ganjil.");
// }

//Jawaban Case 2
var score = 75;

if (score >= 85 && score <= 100) {
  console.log("Grade A");
} else if (score >= 70 && score <= 84) {
  console.log("Grade B");
} else if (score >= 55 && score <= 69) {
  console.log("Grade C");
} else if (score >= 40 && score <= 54) {
  console.log("Grade D");
} else if (score >= 0 && score <= 39) {
  console.log("Grade E");
} else {
  console.log("Salah Ya scorenya");
}
