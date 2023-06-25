// FUNCTION

// function splitToArray(str) {
//   var tempArray = str.split(" ");
//   return tempArray;
// }

// function jumlahKata(kalimat) {
//   var result = splitToArray(kalimat);
//   var arrayLength = result.length;
//   return arrayLength;
// }

// console.log(jumlahKata("Halo Selamat Pagi"));

// Function

/**
 * Study Case 1
 * Buat lah sebuah function untuk cek jumlah faktor dari sebuah angka.
 *
 * Contoh:
 * cekJumlahFaktor(12)
 *
 * Result:
 * 6
 */
//Jawaban Khoir
// function cekJumlahFaktor(number) {
//   var jumlahFaktor = 0;
//   for (var i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       jumlahFaktor++;
//     }
//   }
//   return jumlahFaktor;
// }
// console.log(cekJumlahFaktor(12));

//Jawabah Coach
// function cekJumlahFaktor(num){
//     var faktor = 0;
//     for(var i = 1; i <= num; i++){
//         if(num % i === 0){
//             faktor++
//         }
//     }
//     return faktor
// }
// console.log(cekJumlahFaktor(12))

/**
 * Study Case 2
 * Buatlah sebuah function untuk cek apakah bilangan Prima atau tidak.
 *
 * Contoh:
 * cekBilanganPrima(19)
 *
 * Result:
 * Bukan Bilangan Prima
 */
//Jawaban Khoir
// function cekBilanganPrima(number) {
//   var AngkaFaktor = cekAngkaFaktor(number);
//   if (AngkaFaktor === 2) {
//     return "Bilangan Prima";
//   } else {
//     return "Bukan Bilangan Prima";
//   }
// }

// function cekAngkaFaktor(number) {
//   var jumlahFaktor = 0;
//   for (var i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       jumlahFaktor++;
//     }
//   }
//   return jumlahFaktor;
// }

// console.log(cekBilanganPrima(12));

//Jawaban Coach
// function cekBilanganPrima(num){
//     var jumlahFaktor = cekJumlahFaktor(num)
//     if(jumlahFaktor === 2){
//         return 'Bilangan Prima'
//     } else {
//         return 'Bukan Bilangan Prima'
//     }
// }
// // console.log(cekBilanganPrima(19))

/**
 * Study Case 3
 * Buatlah sebuah function untuk memecah sebuah kalimat menjadi per kata
 *
 * Contoh:
 * pecahKalimat("buka puasa bersama teman kuliah")
 *
 * Result:
 * ["buka","puasa","bersama","teman",""kuliah]
 */
// function pecahKalimat(kalimat) {
//   var kataKunci = kalimat.split(" ");
//   return kataKunci;
// }

// var kalimat = "buka puasa bersama teman kuliah";
// console.log(pecahKalimat(kalimat));

//Jawaban Coach
// function pecahKalimat(str){
//     var arrResult = [];
//     var temp = ''

//     for(var i = 0; i < str.length; i++){
//         if(str[i] !== ' '){
//             // console.log(str[i])
//             temp+= str[i]
//         } else {
//             arrResult.push(temp)
//             temp = ''
//         }
//         if(i === str.length-1){
//             arrResult.push(temp)
//             temp =''
//         }
//     }
//     console.log(arrResult)
// }

// pecahKalimat("buka puasa bersama teman kuliah")

/**
 * Study Case 4
 * Buatlah sebuah function untuk menghitung rata2
 *
 * contoh:
 * countAverag([1,2,3,4,5])
 *
 * Result:
 * Average = 3.00
 */

// function countAverage(numbers){
//     var total = 0;
//     for(var i = 0; i < numbers.length; i++){
//         total += numbers[i]
//     }
//     return (total/numbers.length).toFixed(2)
// }
// console.log(countAverage([1,2,3,4,5]))

/**
 * Study Case 5
 * Buatlah sebuah function untuk mengecek apakah karakter 'x' sama dengan 'o'
 *
 * Contoh:
 * countXO('xoxoxoxxoo')
 *
 * Result:
 * true
 *
 */

// function countXO(str) {
//   var countO = 0;
//   var countX = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === "x") {
//       countX++;
//     } else if (str[i] === "o") {
//       countO++;
//     }
//   }

//   if (countX === countO) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(countXO("xoxoxoxoxoxo"));
