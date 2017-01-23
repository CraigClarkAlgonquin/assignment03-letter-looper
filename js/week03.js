// assignment letter looper
var letter, i, k; // declare all the variables

while (!letter) { // use ! before a variable, this means not. in this case, !letter has no value at this point, so do the next thing in the loop
	letter = prompt ("please enter a value"); // user enters a letter, giving a value to letter
}

for (i = 0; i < 10; i += 1) { // this is a standard for loop, (value, condition, what to increment by, so as long as i < 10, add 1 and continue through the loop. if 1 >= 10, exit the loop
	
	for (k=0; k < i; k += 1) { // this is another loop inside the first, it prints letter over and over until k >= i then it leaves the loop
		document.write (letter);
		
	}
	
	document.write("<br>"); // something the outer loop does as long as the conditions are met
	
}
