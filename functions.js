function stringCount(s) {
    return s.length;
}
function noSpaces(s) {
    return s.length - s.split(" ").length;
}
function optional(s, b) {
    if (b == true) {
        return s.length;
    }
    else {
        return s.length - s.split(" ").length;
    }
}
var str = "count this string";
var bool = true;
console.log(stringCount(str));
console.log(noSpaces(str));
console.log(optional(str, bool));
