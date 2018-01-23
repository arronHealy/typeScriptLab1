
let isDone: boolean = false;
console.log("isDone is " + isDone);

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log("Decimal is " + decimal + "\nHex is " + hex + "\nbinary is " + binary + "\noctal is " + octal);

let color: string = "blue";

console.log(color);

color = "red";

console.log(color);

let fullName: string = `Bob Bobby`;
let age: number = 6;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years next month.`

console.log(sentence);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
let num: number;

for(num = 0; num < list.length; num++)
{
    console.log(list[num]);
    console.log(list2[num]);
}

let x: [string, number];

x = ["hello", 10];

console.log(x[0].substr(1));
console.log(x[1].toString());

x[3] = "world";

console.log(x[3]);

enum Color{Red, Green, Blue}

let c: Color = Color.Green;

console.log(c);
