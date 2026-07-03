let element: unknown = {
    tagName: "button",
    textContent: "submit",
    id: "submit-button",
    disabled: false
}

interface elementI {
    tagName: string;
    textContent: string;
    id: string;
    disabled: boolean
}

let button=element as elementI;

console.log("Tag:",button.tagName)
console.log("Text:",button.textContent)
console.log("ID:",button.id)
console.log("Disabled:",button.disabled)