//ARRAY

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//OBJECT study case 1
/**
 * Hitung mean dari sebuah data statistik
 *
 * contoh
 *
 *let stats = [1.7, 0.2, 5.1, 7.3, 3.5]
 * result
 * Mean = 3.56
 *
 */

// let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
// let sum = 0;

// for (let i = 0; i < stats.length; i++) {
//   sum += stats[i];
// }
// let mean = sum / stats.length;
// console.log(mean);

//study case 2
/**
 * cek apakah jumlah x dan o adalah sama
 *
 * contoh let checkBoard= "xxxooxox"
 *
 * result = false
 *
 */
//Teknik Flagging Method
// let checkBoard = "xxxooxox";
// let hurufX = 0;
// let hurufO = 0;

// for (let i = 0; i < checkBoard.length; i++) {
//   if (checkBoard[i] == "x") {
//     hurufX++;
//   } else {
//     hurufO++;
//   }
// }
// if (hurufX === hurufO) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let checkBoard = "xxxooooxox";
// let hurufX = 0;
// let hurufO = 0;

// for (let i = 0; i < checkBoard.length; i++) {
//   if (checkBoard[i] === "x") {
//     hurufX++;
//   } else if (checkBoard[i] === "o") {
//     hurufO++;
//   }
// }
// let hasil = hurufX === hurufO;
// console.log(hasil);

/**
 * Case 3
 *
 * Dalam suaty desa akan di pilih seorang ketua desa
 * terdapat 3 orang kandidat bernama : Vincent, Ncent, Admin.
 *
 * Hitung masing masingsuara yang di dapat perkandidat
 *
 * contoh let votes = ["Vincent", "Ncent", "Admin", "Admin", "Vincent"]
 *
 * result =
 *
 *
 */

// let votes = ["Vincent", "Ncent", "Vincent", "Admin", "Admin", "Vincent"];
// let Hitungvote = {};

// for (let i = 0; i < votes.length; i++) {
//   let candidate = votes[i];
//   if (Hitungvote[candidate]) {
//     Hitungvote[candidate]++;
//   } else {
//     Hitungvote[candidate] = 1;
//   }
// }
// console.log(Hitungvote);

// Jawaban Dari Coach
// let votes = ["Vincent", "Ncent", "Vincent", "Admin", "Admin", "Vincent"];
// let VoteVincent = 0;
// let VoteNcent = 0;
// let VoteAdmin = 0;

// for (let i = 0; i < votes.length; i++) {
//   if (votes[i] === "Vincent") {
//     VoteVincent++;
//   }
//   if (votes[i] === "Ncent") {
//     VoteNcent++;
//   }
//   if (votes[i] === "Admin") {
//     VoteAdmin++;
//   }
// }
// let result = [
//   ["vincent", VoteVincent],
//   ["ncent", VoteNcent],
//   ["admin", VoteAdmin],
// ];
// console.log(result);

/**
 * Case 4
 *
 *
 */

// let murid = [
//   [1, "Vincent", 3, 5],
//   [2, "Ncent", 3, 0],
//   [3, "Admin", 2, 1],
// ];

// for (let i = 0; i < murid.length; i++) {
//   if (murid[i][2] >= 3.0) {
//     console.log(
//       murid[i][0] + ", " + murid[i][1] + "IPK" + murid[i][2] + ", LULUS"
//     );
//   } else {
//     console.log(
//       murid[i][0] + ", " + murid[i][1] + "IPK" + murid[i][2] + ", TIDAK LULUS"
//     );
//   }
// }

/**
 * Case 5
 *
 * tentukan score max dan min dari sebuah Array
 *
 * contoh:
 * let score = [77,2,30,15,35]
 *
 * RESULTS:
 * MAX = 77
 * MIN = 2
 *
 */

let score = [77, 2, 30, 15, 35];
let max = score[0];
let min = score[0];

for (let i = 0; i < score.length; i++) {
  if (score[i] > max) {
    max = score[i];
  }
  if (score[i] < min) {
    min = score[i];
  }
}
let result = [
  ["MAXIMAL", max],
  ["MINIMAL", min],
];
console.log(result);
