//1-Prompt the user for a string. It must be a verb.
let verbe = prompt("Enter word (it must be a verb)");

//2-If the length of the string is at least 3 and the string doesn’t end with “ing”, 
//add ‘ing’ to the end of the string
if (verbe != null) { //On test si une valeur est saisie
    let verbeLenght = verbe.length;
    if (verbeLenght < 3) {
        console.log(verbe);
    } else {
        if (verbe.substring(verbeLenght, verbeLenght - 3) == "ing") {
            verbe += "ly";
        } else {
            verbe += "ing";
        }
        console.log(verbe);
    }
} else {
    console.warn("cencel operation");
}