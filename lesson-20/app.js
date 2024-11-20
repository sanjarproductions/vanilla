// "use strict"
// will check your code harder for errors
// custom tags in html <anything></anything> aka web componenets
// CLASS
//

// class MyTag {
//     constructor(word, num){
//         this.w = word;
//         this.n = num;
//         this.sum()
//     }

//     sum() {
//         console.log(this.w + " " + this.n)
//     }
// }

// let tag = new MyTag("salom", 10)

// complare with function

// function operation(word, num) {
//     let w = word;
// }

// operation("salom", 10)

// ______________________________________________________

// class MyClass extends HTMLElement {
//     constructor() {
//         super() // use ut when using HTMLElement creation
//         this.reverseText();
//     }

//     reverseText(){
//         this.innerHTML = this.textContent.split("").reverse().join("")
//         // console.log(this.textContent.split("").reverse().join(""))
//     }
// }

// customElements.define("reserved-test", MyClass)

// ______________________________________________________

// class ColorTextRed extends HTMLElement{
//     constructor() {
//         super();
//         this.colorTextRed();
//     }

//     colorTextRed(){
//         this.style.color = 'red';

//     }
// }

// customElements.define("color-text-red", ColorTextRed)

// ______________________________________________________

const accordionWrapper = document.querySelector("#accordion");

const accordionData = [
    {
        question: "Question 1",
        answer: "Lorem ipsum"
    },
    {
        question: "Question 2",
        answer: "Lorem ipsum"
    },
    {
        question: "Question 3",
        answer: "Lorem ipsum"
    },
]

render()
function render() {
    const fragment = document.createDocumentFragment();

    accordionData.map(({ question, answer }) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${question}</strong>
                <div class="answer__wrapper">
                    <p>${answer}</p>
                </div>
        `
        li.className = "item"
        fragment.appendChild(li)
        // accordionWrapper.appendChild(strong)
        // accordionWrapper.appendChild(p)
    })
    accordionWrapper.appendChild(fragment)
}

accordionWrapper.addEventListener("click", (e) => {
    document.querySelectorAll(".item").forEach((i) => {
        i.lastElementChild.classList.remove("active")
    })
    e.target.lastElementChild.classList.toggle("active")
})