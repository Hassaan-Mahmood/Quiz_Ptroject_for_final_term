// let optBtn = document.getElementsByClassName('answer1');
// let btn = document.getElementById('btn');

// if (optBtn) {
//     optBtn.addEventListener('click', () => {
//         btn.classList.add("active");
//     })
// }

const quizData = [
    {
        Question: "Q1:Which HTML tag is used to create a paragraph?",
        a: "a) <para>",
        b: "b) <p>",
        c: "c) <text>",
        d: "d) <section>",
        ans: "ans2",
    },
    {
        Question: "Q2: What tag is used to insert a line break in HTML?",
        a: "a) <br>",
        b: "b) <break>",
        c: "c) <nl>",
        d: "d) <hr>",
        ans: "ans1",
    },
    {
        Question: "Q3: Which tag is used to create a hyperlink?",
        a: "a) <link>",
        b: "b) <href>",
        c: "c) <a>",
        d: "d) <url>",
        ans: "ans3",
    },
    {
        Question: "Q4: What is the purpose of the <meta> tag in HTML?",
        a: "a) To define a table",
        b: "b) To provide metadata about the HTML document",
        c: "c) To create a heading",
        d: "d) To insert images",
        ans: "ans2",
    },
    {
        Question: "Q5: Which tag is used to define an ordered list?",
        a: "a) <ul>",
        b: "b) <ol>",
        c: "c) <list>",
        d: "d) <item>",
        ans: "ans2",
    },

    {
        Question: "Q6: Which HTML tag is used to define a footer for a document or section?",
        a: "a) <bottom>",
        b: "b) <footer>",
        c: "c) <section>",
        d: "d) <end>",
        ans: "ans2",
    },
    {
        Question: "Q7: What tag is used to display a horizontal line on a webpage?",
        a: "a) <line>",
        b: "b) <hr>",
        c: "c) <break>",
        d: "d) <separator>",
        ans: "ans2",
    },
    {
        Question: "Q8: Which tag is used to create a checkbox in a form?",
        a: "a) <input type=\"checkbox\">",
        b: "b) <check>",
        c: "c) <checkbox>",
        d: "d) <input type=\"check\">",
        ans: "ans1",
    },
    {
        Question: "Q9: What does the <strong> tag do in HTML?",
        a: "a) Makes text italic",
        b: "b) Underlines text",
        c: "c) Makes text bold",
        d: "d) Changes text color",
        ans: "ans3",
    },
    {
        Question: "Q10: Which tag is used to define a table header?",
        a: "a) <th>",
        b: "b) <tr>",
        c: "c) <td>",
        d: "d) <thead>",
        ans: "ans1",
    },

]
const question = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let index = 0;
let score = 0;

const loadQuestion = () => {
    let questionList = quizData[index];
    question.innerText = questionList.Question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElm) => {
        if (curAnsElm.checked) {
            answer = curAnsElm.id;
        }
    })
    return answer;
}


submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer === quizData[index].ans) {
        score++;
    }

    index++;
    if (index < quizData.length) {
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h2> You Scored ${score}/${quizData.length}<h2>
        <button id="btnPlay" onclick="location.reload()">play again</button>`;
        showScore.classList.remove("scoreArea");
    }

});

