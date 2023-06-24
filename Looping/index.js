// Looping

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//     }

/**Study Case 1
 * 
 * Cetak angka dari 1 sampai 10 dan cek apakah bilangan genap atau ganjil
 * 
 * contoh
 * var number=10;
 * 
 * results
 * 1 adalah ganji
 * 2 adalah genap
 * 3 adalah ganji
 *  ....
 * 9 adalah ganji
 * 10 adalah genap
 * 
 * 
 */
 
/**Study Case 2
 * 
 * print sebuah string menjadi huruf besar dan kecil.
 * 
 * contoh=nasi kotak
 * 
 * result
 * NaSi kOtAk 
 * 
 */
//Jawaban Case 1
// var num = 10;

// for (var i = 1; i <= num; i++) {
//     if (i % 2 === 0){
//         console.log(i +" adalah bilangan Genap");
//     }else
//     console.log(i +" adalah bilangan Ganjil");
//     }

// var str = "nasi kotak"
//jawaban case 2

// for (var i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// var str = "nasi kotak";
// var out = "";
// for (var i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     out += str[i].toUpperCase();
//   } else {
//     out += str[i].toLowerCase();
//   }
// }
// console.log(out);

/**case 3
Pecah kalimat menjadi perkata

contoh 
var pantun =Makan siang bareng temen kerja"

result
makan
siang
bareng
temen
kerja


*/ 

//Jawabanya ke 1
// var pantun = "Makan siang bareng temen kerja";
// var kata = pantun.split(" ");

// for (var i = 0; i < kata.length; i++) {
//   console.log(kata[i]);
// }
 // Jawabanya ke 2
// var pantun = "makan siang bareng temen kerja";
// var temp = "";

// for (var i = 0; i < pantun.length; i++) {
//     if ( pantun[i] !== " ") {
//         temp += pantun[i];
//         //console.log(pantun[i]);
//     }else {
//         console.log(temp);
//         temp = "";
//       }
//       if (i === pantun.length - 1){
//         console.log(temp);
//       }
// }

/**
 * Case 4
 * 
 * tentukan faktor dari sebuah bilangan
 * angka 10 terdiri dari faktor 1 2 5 10
 * 
 * contoh
 * var n= 10
 * 
 * result
 * 1
 * 2
 * 5
 * 10
*/

//Jawabanya Case 4 ke 1
// var n = 15;

// for (var i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// Study case 5
/**
 * print sebuah Kotak 
 * 
 * contoh
 * Var x= 3;
 * 
 * result
 * ###
 * ###
 * ###
 * 
 */
//Jawaban
// var x = 3;
// var row = "";

// for (var i = 0; i < x; i++) {
//   for (var j = 0; j < x; j++) {
//     row += "#";
//   }
//   console.log(row);
// }

//Jawaban Lain
// var x =3;
// temp = ""

// for (var i = 0; i < x; i++) {
//     for (var j = 0; j < x; j++) {
//         temp += "#";
//     }
//     console.log(temp);
//     temp = "";
// }


// Study case 6 
/**
 * print sebuah tangga
 *  
 * contoh
 * Var x= 3;
 * 
 * result
 * #
 * ##
 * ###
 * 
 */

// var x = 5;
// var temp  = "";

// for (var i = 0; i < x; i++) {
//     for (var j = 0; j <= i; j++) {
//     temp += j+1;
//   }
//   console.log(temp);
//   temp = "";    

// }
// Study case 7 
/**
 * print sebuah Kotak 
 * 
 * contoh
 * Var x= 3;
 * 
 * result
 * ###
 * ###
 * ###
 * 
 */
