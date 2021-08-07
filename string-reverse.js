const text = "whats up?";

function reversiveString(text){
    let reverse = "";
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
    return console.log(reverse);
}
const reversed = reversiveString(text);