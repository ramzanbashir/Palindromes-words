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