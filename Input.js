class Input {
	constructor(question, name, answerOne, answerTwo, valueOne, valueTwo, result) {
		this.question = question;
		this.name = name;
		this.answerOne = answerOne;
		this.answerTwo = answerTwo;
		this.valueOne = valueOne;
		this.valueTwo = valueTwo;
		this.result = result;
	}

	viewQuestion() {
		let questContainer = document.getElementById('questContainer');
		questContainer.innerHTML += `<p> ${this.question} </p> 
					 <input type='radio' name='${this.name}' value="${this.valueOne}"> ${this.answerOne}<br>
					 <input type='radio' name='${this.name}' value="${this.valueTwo}">${this.answerTwo} 
					 <p id="${this.result}"></p>
					 <br><br>`;
	}
}

