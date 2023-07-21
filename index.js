const words = document.getElementById("words");
const multipl = document.getElementById("noOfParas");

let noOfWords = 0;

const word = () => {
	const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
	let arr = [];
	let m = Math.floor(Math.random() * 10);
	m = m <= 2 ? 3 : m;
	m = m >= 7 ? 6 : m;
	let x = 0;
	for (let i = 0; i < m; i++) {
		x = Math.floor(Math.random() * (26 - 1 + 1)) + 1;
		arr[i] = letters[x];
	}
	return arr.join("").toString();
}

function gen(data) {
	let paragraph = document.createElement('p');
	paragraph.classList.add("para");
	paragraph.innerText = data;
	multipl.appendChild(paragraph);
}

const paras = (n) => {
	let data = [];
	if (n == 0) {
		alert("Enter valid number");
		return data;
	}
	for (let i = 0; i < n; i++) {
		data[i] = word();
	}
	data[n] = ".";
	gen(data.join(" ").toString());
}

const getWords = () => {
	noOfWords = Number(words.value);
	words.value = "";
	paras(noOfWords);
}

const remove = () => {
	let child = multipl.lastElementChild;
	while (child) {
		multipl.removeChild(child);
		child = multipl.lastElementChild;
	}
}