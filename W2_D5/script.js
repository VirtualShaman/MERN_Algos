//Is Pangram
// Given a string, return true or false whether or not the string is a pangram
// Pangram: A sentence that contains every letter in the alphabet at least one time

const isPangram = (str)=>{ //DNF 
    // if(str.length<26){
    //     return false
    // }
    // return(/[a-z]+/gi.test(str))
    return(/a+b+c+d+e+f+g+h+i+j+k+l+n+o+p+q+r+s+t+u+v+w+x+y+z+/i.test(str))
}



console.log(
    isPangram("The quick brown fox jumps over a lazy dog"))// -> true

console.log(
    isPangram("Sphinx of black quartz, judge my vow"))// -> true

console.log(
    isPangram("Pack my box with five dozen liquor jugs"))// -> true

console.log(
    isPangram("Hello world"))// -> false

console.log(
    isPangram("sfghadskgfaghkdjfgd hsjgafjhgdsjhsfgkjagffkgf"))// -> false



// Ex: The quick brown fox jumps over a lazy dog -> true
// Ex: Sphinx of black quartz, judge my vow -> true
// Ex: Pack my box with five dozen liquor jugs -> true
// Ex: Hello world -> false