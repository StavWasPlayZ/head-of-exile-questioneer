const main = document.querySelector("main");

// Construct the sections
questions.forEach((question) => {

    const questionSection = document.createElement("section");

    const title = document.createElement("h2");
    title.innerText = question.question;
    questionSection.appendChild(title);

    
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "הבא";
    questionSection.appendChild(nextBtn);
    

    main.appendChild(questionSection);

})

// Perform operations on em
const sections = Array.from(main.children)

//+1 for the welcome screen
for (let i = 1; i < sections.length; i++) {
    const question = questions[i - 1];
    const questionSection = sections[i];
    
    question.input_type.construct(question, questionSection);

    const nextBtn = questionSection.querySelector("button");

    nextBtn.addEventListener("click", () => {
        question.answer = question.input_type.queryAnswer(question, questionSection);
        if (question.answer != null)
            moveNextSection(i);
    });
}

/**
 * Hides the given question of index, and displays the next one.
 */
function moveNextSection(sectionIndex) {
    sections[sectionIndex].style.display = "none";

    if ((sectionIndex + 1) < sections.length)
        sections[sectionIndex + 1].style.display = "block";
    else
        displayEndScreen()
}

function displayEndScreen() {
    const endScreen = document.getElementById("end-screen");
    endScreen.style.display = "block";

    // Sum up the score
    let score = 0;
    questions.forEach((question) => {
        if (typeof question.answer == "number")
            score += question.answer;
    });


    const successImg = document.getElementById("success-img");

    successImg.setAttribute("src", (score > 18)
        ? "https://www.shutterstock.com/image-photo/portrait-senior-orthodox-jewish-man-260nw-1306634671.jpg"
        : (score > 9)
        ? "https://www.shutterstock.com/image-photo/portrait-senior-orthodox-jewish-man-260nw-1306634701.jpg"
        : "https://us.123rf.com/450wm/melnyk58/melnyk581902/melnyk58190200649/116545664-portrait-of-old-senior-orthodox-hasdim-jewish-man-with-wooden-grager-ratchet-at-jewish-festival-of.jpg?ver=6"
    );
    successImg.setAttribute("alt", (score > 18)
        ? "יהודי עושה thumbs up"
        : (score > 9)
        ? "יהודי עושה thumbs up אחד בודד ומסכן"
        : "יהודי עושה shrug"
    );

    document.getElementById("result-title").innerText = (score > 18)
        ? "ראוי לתפקיד!"
        : (score > 9)
        ? "ראוי לתפקיד הגאון!"
        : "לא יהודי מספיק";
    document.getElementById("result").innerText = (score > 18)
        ? "ייאיייייי אתה יכול להיות ראש הגולה!!! וווווווווווווווווווווווווווו"
        : (score > 9)
        ? "אוליי לא ראש הגולה, אבל כן גאון בין היתר"
        : "אנו מצטערים, אך לא תוכל להיבחר כראש הגולה :(";
}


// Make the pressing of the welcome screen's button trigger the first question
sections[0].querySelector("button").addEventListener("click", () => moveNextSection(0))