console.log("Лабораторная работа 1.");
// ЗАДАЧА 1
console.log(typeof(9));
// Предположение: integer
// Фактический: number

console.log(typeof(1.2));
// Предположение: double или float
// Фактический: number

console.log(typeof(NaN));
// Предположение: NaN
// Фактический: number

console.log(typeof("Hello World"));
// Предположение: string
// Фактический: string

console.log(typeof(true));
// Предположение: bool
// Фактический: boolean

console.log(typeof(2 != 1));
// Предположение: bool
// Фактический: boolean

console.log("сыр" + "ы");
// Предположение: сыры
// Фактический: сыры

console.log("сыр" - "ы");
// Предположение: NaN
// Фактический: NaN

console.log("2" + "4");
// Предположение: 24
// Фактический: 24

console.log("2" - "4");
// Предположение: -2
// Фактический: -2

console.log("Сэм" + 5);
// Предположение: Сэм5
// Фактический: Сэм5

console.log("Сэм" - 5);
// Предположение: NaN
// Фактический: NaN

console.log(99 * "шары");
// Предположение: NaN
// Фактический: NaN

// ЗАДАЧА 2
console.log("Задача 2");
let A = 2, B = 3;
console.log("A = " + A + ", B = " + B);
let P = A * 2 + B * 2;
console.log("Периметр = " + P);
let S = A * B;
console.log("Площадь = " + S);
console.log("Отношение = " + P/S);

// ЗАДАЧА 3
console.log("Задача 3");
let F = 66.2, C = 25;
tC = 5 / 9 * (F - 32);
tF = 9 / 5 * C + 32;
console.log(`${F}\xB0 F соответствует ${tC}\xB0 C`);
console.log(`${C}\xB0 C соответствует ${tF}\xB0 F`);

// ЗАДАЧА 4
console.log("Задача 4");
let Year = 2022;//prompt("Введите год:", 2022);
//alert
console.log(Year % 4 == 0 ? (Year % 100 !== 0 ? "false" : "true") : "false");

// ЗАДАЧА 5
console.log("Задача 5");
let N1 = 4, N2 = 6;
console.log((N1 == 10 || N2 == 10 || N1 + N2 == 10) ? "истина" : "ложь");

// ЗАДАЧА 6
console.log("Задача 6");
let Sh = "";
let Sheeps = 3;//prompt("Введите число:", 3);
for (let i = 1; i <= Sheeps; i++) Sh += (i + " овечка... ");
console.log(Sh);

// ЗАДАЧА 7
console.log("Задача 7");
for (let i = 0; i <= 15; i++) console.log(i + " " + ((i % 2 == 0) ? "четное" : "нечетное"));

// ЗАДАЧА 8
console.log("Задача 8");
let Tree = "";
for (let i = 1; i < 11; i++) {
    Tree = "";
    for (let j = 0; j < i; j++) Tree += ((i % 2 !== 0) ? '*' : '#');
    console.log(Tree);
}

// ЗАДАЧА 9
console.log("Задача 9");
let SortA = 0, SortB = -3, SortC = 1, SortTEMP;
//Напишите условный оператор для сортировки трех чисел. Выведите в консоль результат.
    if(SortA > SortB)
    {
        SortTEMP = SortB;
        SortB = SortA;
        SortA = SortTEMP;
    }
    if(SortA > SortC)
    {
        SortTEMP = SortC;
        SortC = SortA;
        SortA = SortTEMP;
    }
    if(B > C)
    {
        SortTEMP = SortC;
        SortC = SortB;
        SortB = SortTEMP;
    }
    console.log("%d %d %d", SortA, SortB, SortC); 

// ЗАДАЧА 10
console.log("Задача 10");
let array = [2, -1, 0, -5, -4];
let Max = array[0];
for (let i = 1; i < array.length; i++) if (array[i] > Max) Max = array[i];
console.log(Max);