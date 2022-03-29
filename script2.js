console.log("Лабораторная работа 2.");
// ЗАДАЧА 1
function absValue(A){
    return A < 0 ? -A : A;
}
console.log(absValue(-2));
console.log(absValue(100));
console.log(absValue(0));

// ЗАДАЧА 2
function IsPalindrome(A){
    let L = A.length;
    let b = true;
    for (let i = 0; i < L / 2; i++)
        if (A[i] !== A[L - i - 1]) {
            b = false;
            break;
        }
    return b;
}
console.log(IsPalindrome("довод"));
console.log(IsPalindrome("кружка"));

// ЗАДАЧА 3
function matrixAddition(mA, mB){
    let mC;
    if ((mA[0].length != mB[0].length) || (mA.length != mB.length))
    {
        mC = new Array(0);
        return mC;
    }
    mC = new Array(mA.length);
    for (let i = 0; i < mA.length; i++) mC[i] = new Array(mB.length);
    for (let i = 0; i < mA.length; i++)
        for (let j = 0; j < mB[0].length; j++) mC[i][j] = mA[i][j] + mB[i][j];
    return mC;
}
function MatrixOUT(mC){
    if (mC.length == 0) return "Миссия НЕВЫПОЛНИМА";
    let s = "";
    for (let i = 0; i < mC.length; i++){
        for (let j = 0; j < mC[0].length; j++) s += mC[i][j] + "\t";
        s += "\n"
    }
    return s;
}
console.log(MatrixOUT(matrixAddition([[1,2],[3,4]], [[9,8],[7,6]])));
console.log(MatrixOUT(matrixAddition([[1,2]], [[9,8],[7,6]])));

// ЗАДАЧА 4
let student = {
    group: 201.324,
    last_name: "Иванов",
    first_name: "Иван"
    };
let LoP = Object.keys(student);
let s = "Св-а: ";
for (let i = 0; i < LoP.length; i++) s += `${LoP[i]}\t`;
console.log(s);
console.log(`Студент ${student["first_name"]} ${student["last_name"]} учится в ${student["group"]} группе`);

// ЗАДАЧА 5