/**
 * @typedef {Object} InputType
 * 
 * @property {(question: Question, section: HTMLElement) => void} construct
 * @property {(question: Question, section: HTMLElement) => any} queryAnswer Forms a valid,
 * parsable score result to be associated with the user's answer to the provided question.
 * Null for no user response.
 */

/** @type {Object.<string, InputType>} */
const input_types = {
    "radio": {
        construct: (question, section) => constructRadio("radio-selection", question, section),
        queryAnswer: queryRadio
    },
    "scale": {
        construct: (question, section) => constructRadio("scale-selection", question, section),
        queryAnswer: queryRadio
    },

    "text": {
        construct: (question, section) => {
            const textInput = document.createElement("textarea");
            textInput.className = "text-input";

            section.appendChild(textInput);
        },
        queryAnswer: (question, section) => section.querySelector(".text-input").value
    }
}

/**
 * @param {string} className
 * @param {Question} question
 * @param {HTMLElement} section
 */
function constructRadio(className, question, section) {
    const answers = question.values;

    const selection = document.createElement("div");
    selection.classList.add(className, "radio-selector")

    const sectionIndex = Array.from(section.parentElement.children).findIndex(element => element == section);
    
    for (let i = 0; i < answers.length; i++) {
        const parent = document.createElement("div");

        const option = document.createElement("input");

        const name = "options-" + sectionIndex;
        option.setAttribute("type", "radio");
        option.setAttribute("name", name);
        option.setAttribute("weight", (answers.length - i))
        option.id = name + "-" + i

        const label = document.createElement("label")
        label.setAttribute("for", option.id)
        label.innerText = answers[i];

        parent.appendChild(option);
        parent.appendChild(label);
        selection.appendChild(parent);
    }

    section.appendChild(selection);
}
/**
* @param {Question} question
* @param {HTMLElement} section
*/
function queryRadio(question, section) {
    const selection = section.querySelector("input:checked");
    if (selection == null)
        return null;

    return parseInt(selection.getAttribute("weight"));
}