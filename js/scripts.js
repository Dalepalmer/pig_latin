var pigLatin = function(word) {
    if (word.toLowerCase().charAt(0) === "a","e","i","o","u" ) {

    return word.toLowerCase().concat("ay");

} else if (word.toLowerCase().charAt(0) === "l") {
    var endletter = word.charAt(0);
    return word.slice().toLowerCase().concat(endletter + "ay");
}
};
