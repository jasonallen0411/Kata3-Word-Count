$("#kataThree").click(function(){
var wordsArray = ["My name is Bob", "Blueberries are blue.", "Bob likes blueberries in the morning."];

function words(wordsArray) { 
    return wordsArray.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      
      return count;
    }, {});
}
$("#kataArea").html(words(wordsArray[0]));
alert((words(wordsArray[0])));
console.log(words(wordsArray[0]));	
});



var wordsArray = ["My name is Bob", "Blueberries are blue.", "Bob likes blueberries in the morning."];

function words(wordsArray) { 
    return wordsArray.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      
      return count;
    }, {});
}

console.log(words(wordsArray[0]));







