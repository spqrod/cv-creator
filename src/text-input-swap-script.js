function handleElementClick(e) {
    const elementID = e.target.id;
    hideElement(elementID);
    let newElementID = "";
    if (elementID.includes("TextField")) {
        newElementID = elementID.replace(/TextField/, "InputField");
    } else {
        newElementID = elementID.replace(/InputField/, "TextField");
    }
    revealElement(newElementID);
}

function handleElementChange(e) {
    handleElementClick(e);
        let key = e.target.id;
        key = key.replace(/InputField/, "");
        key = key.replace(/TextField/, "");
        const value = e.target.value;
        return { key, value };
}

function handleElementKeyDown(e) {
    if (e.key === "Enter") {
        e.target.blur();
    }
}

function hideElement(elementID) {
    const element = document.getElementById(elementID);
    element.style.display = "none";
}

function revealElement(elementID) {
    const element = document.getElementById(elementID);
    element.style.display = "block";
    if (element.tagName) {
        element.focus();
    }
}

export { handleElementClick, handleElementChange, handleElementKeyDown, hideElement };