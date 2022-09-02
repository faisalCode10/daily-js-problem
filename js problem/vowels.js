const findvowel = () => {
    let char = prompt("Enter a word")
    char = char.toLowerCase();
    // if (char == 'a' || char == 'e' || char == "i" || char == "o" || char == "u") {
        if (char.includes('a') || char.includes('e') || char.includes('i') || char.includes('o') || char.includes('u')) {
        
        
        console.log("Char is vowel")
    }
    else{
        console.log(("char are consonent"));
    }
}

findvowel ()