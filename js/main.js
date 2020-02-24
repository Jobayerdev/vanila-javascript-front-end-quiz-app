const startupsElement = document.querySelector(".start-btn");
const questionElement = document.querySelector(".question h3");
const answerElement = document.querySelector(".answer");
const nextBtn = document.querySelector(".next-btn");
const startBtn = document.querySelector(".start-btn");
const scorers = document.querySelector(".scorers");
const popup = document.querySelector(".popup h1");

let getIndex, currentQuestionIndex;

startBtn.addEventListener("click", startGame);

nextBtn.addEventListener("click", () => {
	currentQuestionIndex++;
	setNextQuestion();
});

function startGame() {
	getIndex = questions.sort(() => Math.random() - 0.5);
	currentQuestionIndex = 0;
	setNextQuestion();
	scorers.classList.add("hide");
}

function setNextQuestion() {
	resetState();
	showQuestion(getIndex[currentQuestionIndex]);
}

function showQuestion(question) {
	questionElement.innerText = question.question;
	question.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerText = answer.text;
		button.classList.add("btn");
		if (answer.ans) {
			button.dataset.correct = answer.ans;
		}
		button.addEventListener("click", selectAns);
		answerElement.appendChild(button);
	});
}

function resetState() {
	nextBtn.classList.add("hide");
	while (answerElement.firstChild) {
		answerElement.removeChild(answerElement.firstChild);
	}
}

function selectAns(e) {
	const selectedButton = e.target;
	Array.from(answerElement.children).forEach((x) =>
		setAnsClass(x, x.dataset.correct)
	);

	if (getIndex.length > currentQuestionIndex + 1) {
		nextBtn.classList.remove("hide");
	} else {
		popup.innerText = "Well Done";
		scorers.classList.remove("hide");
	}
}

function setAnsClass(element, ansStatus) {
	if (ansStatus) {
		element.classList.add("correct");
	} else {
		element.classList.add("wrong");
	}
}

// Question
const questions = [
	{
		question: "What is doctype? Why do u need it??",
		answers: [
			{
				text: "Inform about HTML Version to browser",
				ans: true
			},
			{
				text: "Make Microsoft Document",
				ans: false
			},
			{
				text: "Make love latter",
				ans: false
			},
			{
				text: "Defining Job Posting latter",
				ans: false
			}
		]
	},
	{
		question: "What is the use of data- attribute?",
		answers: [
			{ text: "It's means Internet using Data", ans: false },
			{ text: "Store extra data in the DOM", ans: true },
			{ text: "Because my Girlfriend like this", ans: false },
			{ text: "My Parents say you need to use this data", ans: false }
		]
	},
	{
		question: "How can u generate public key in html?",
		answers: [
			{ text: "I will go to market and buy new keys", ans: false },
			{ text: "I like to call my ex", ans: false },
			{ text: "I really don't like this", ans: false },
			{
				text: "Using HTML keygen element to generate HTML Public key",
				ans: true
			}
		]
	},
	{
		question: "How can u change direction of html text?",
		answers: [
			{ text: "I will Rotate my Desktop screen", ans: false },
			{ text: "I need to call google", ans: false },
			{ text: "Using HTML bdo tag and set dir attribute to rtl", ans: true },
			{
				text: "Using HTML p tag",
				ans: false
			}
		]
	},{
		question: "How can u highlight text in html?",
		answers: [
			{ text: "<strong>Hello World!</strong>", ans: false },
			{ text: "<mark>Hello World!</mark>", ans: true },
			{ text: "<text>Hello World!</text>", ans: false },
			{
				text: "<highligh>Hello World!</highligh>",
				ans: false
			}
		]
	},{
		question: "What is the difference between span and div?",
		answers: [
			{ text: "div useing for section element", ans: false },
			{ text: "Span is to small", ans: false },
			{ text: "div is a block element and span is inline element.", ans: true },
			{text: "I really don't like span tah",ans: false }
		]
	},{
		question: "What does float do?",
		answers: [
			{ text: "Float push an element by side by side and wrapped around it.", ans: true },
			{ text: "Clear a slide of an element", ans: false },
			{ text: "Floating on page", ans: false },
			{text: "Because deeveloper like this too much",ans: false }
		]
	},{
		question: " Does css properties are case sensitive?",
		answers: [
			{ text: "Yes", ans: false },
			{ text: "No", ans: true }
		]
	},{
		question: "Does margin-top or margin-bottom has effect on inline element?",
		answers: [
			{ text: "No", ans: true },
			{ text: "Yes", ans: false }
		]
	},{
		question: "Does padding-top or padding-bottom has effect on inline element?",
		answers: [
			{ text: "No", ans: true},
			{ text: "Yes", ans: false }
		]
	},{
		question: "Does padding-left or padding-right or margin-left or margin-right has effect on inline element?",
		answers: [
			{ text: "Yes", ans: true },
			{ text: "No", ans: false }
		]
	},{
		question: "If you have a <p> element with font-size: 10rem, will the text be responsive when the user resizes / drags the browser window?",
		answers: [
			{ text: "Yes", ans: false },
			{ text: "No", ans: true }
		]
	},{
		question: "In a HTML document, the pseudo class :root always refers to the <html> element?",
		answers: [
			{ text: "Yes", ans: true },
			{ text: "false", ans: false }
		]
	},{
		question: "The translate() function can move the position of an element on the z-axis.",
		answers: [
			{ text: "No", ans: true },
			{ text: "Yes", ans: false }
		]
	},{
		question: "What are the properties related to box model?",
		answers: [
			{ text: "Html , Body, Title", ans: false },
			{ text: "height, width, padding and border are part of box model and margin is related to it", ans: false },
			{ text: "Float , Posting, Display", ans: false }
		]
	}
];





