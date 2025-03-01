var arr = ["king", "Civic", "Kayak", "level", "Reder", "Mom", "Refer"];
var palindromes = [];

for (var i = 0; i < arr.length; i++){
    var word = arr[i].toLowerCase();
    // console.log(word)
    var reverse = "";

    var j = word.length -1

    for (j; j >= 0 ; j--){
        reverse += word[j];
    }
    // console.log(reverse)
    if(word === reverse){
        palindromes.push(arr[i]);
    }    
}

console.log(palindromes);


// let word = prompt("Enter a word to check Palindrome");
// let reverse = "";
// // let j = word.length - 1;
// for (let i = word.length - 1; i >= 0; i--) {
//     reverse += word[i];
// }
// if (word === reverse) {
//     document.write("<h2>This is Palindrome</h2>");
// } else {
//     document.write("This is not Palindrome");
// }
