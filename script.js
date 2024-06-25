function firstChar(text) {
  // your code here
	const text = prompt("Enter text:");
alert(firstChar(text));

	text = text.trim;
	if(text == ""){
		return "";
	}
	return text[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
