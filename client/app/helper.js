

var numberToWord = function(amount, phrase){
	//checking inputs
	amount = Number.parseInt(amount);
	phrase = phrase || '';
	//setting data
	var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
				'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tenths = ['ten','twenty','thirty','fourty','fifty', 'sixty','seventy','eighty', 'ninety'];
	var higherNumbers = ['thousand', 'million', 'billion', 'trilion', 'quadrillion', 'quintillion', 'sextillion', 'septillion'];
	
	var numbers = (amount + '').split('');
	var higherNumbersIndex = Math.floor(numbers.length/3);
	if(numbers.length%3 === 0){
		higherNumbersIndex--;
	}
	var append = (higherNumbers[higherNumbersIndex-1]) || '';
	var segment = numbers.splice(0,numbers.length%3);
	if(segment.join('').length > 99){
		phrase = words[segment[0]] + ' hundrend';
	}
	phrase += (tenths[segment[1]-1] || '');
	phrase += (words[segment[2]] || '');
	console.log(phrase);
	return phrase + ' ' + append;
	if(words[amount]){
		return phrase + words[amount];
	}else{
		
	}
}
/*
steps

input 12938 ''

take the number and split it into an array one element pre character
['1','2','9','3','8']
get the index which in this case is 5
divid that number by three (1.6667)
if it is get the higher number 
if is less then get the hundrend or less

//higher number 
take sectors of three and run the numberToWord function on each and append the higherNumbers element to them.
[1,0,5,2]
numberToWord(1) + higherNumbers[0] + numberToWord(052)




*/