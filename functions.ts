
function stringCount(s: string){
    return s.length;
}

function noSpaces(s: string)
{
    return s.length - s.split(" ").length;
}

function optional(s: string, b: boolean)
{
    if(b == true)
    {
        return s.length;
    }
    else
    {
        return s.length - s.split(" ").length;
    }
}

let str: string = "count this string";
let bool: boolean = true;

console.log(stringCount(str));
console.log(noSpaces(str));
console.log(optional(str, bool));