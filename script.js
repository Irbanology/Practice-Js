// //user defined function
// function foo (name){
//     alert('hello '+ name)
// }

// foo('minhaj')

// //pre defined
// alert('hello')

// function new_func(num1, num2 = 0) {
//   // console.log('hello')
//   add = 9;
// //   console.log(add);
//   var add = num1 + num2;
//   console.log(add);
//   return add;
// }

// console.log(new_func(1,5))
// add = 9
// console.log(add)
// new_func(1, 5);


// var num3 = 2
// num3 = 7
// console.log(num3)

// var user_age = parseInt(prompt("Enter Your Age"));
// function age_cal (user_age){
//     console.log(user_age)
//     if (user_age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// age_cal(user_age)
// console.log(age_cal(user_age))
// if(age_cal(user_age) == true){
//     alert('true')
// }else{
//     alert('false')
// }

// var sum = 0
// function addition (){
//     // var sum = 1+3
//     console.log(sum)
// }

// sum = sum + 7
// console.log(sum)
// addition()

// var str = 'hello'
// console.log(str.charAt(4))

// var nums = [50, 20, 3, 2, 1, 5, 8, 9]
// console.log(nums.sort())
// function nextq() {
//     console.log("Best");

// }

// var num = 0
// var inter = setInterval(function () {
//     num++
//     console.log(num++);
//     if (num === 60) {
//         clearInterval(inter)
//         nextq()
//     }

// }, 1000)    


// var a = prompt('Doo')
// if (a % 2 == 0 ) {
//     console.log('even');

// }else{
//     console.log('Odd');   
// }


function factor(num) {
    if (num <= 1) {
        return 1
    }

    return num * factor(num - 1)
}

console.log(factor(8));

console.log(2 ** 3);


console.log(0 / 0);
console.log(NaN - 1);


let heii = 87
// heii *= 2
heii %= 2

console.log(heii);

if (heii == 0) {
    console.log("even");
} else {
    console.log("odd");
}

let arr = 10
arr++
console.log(arr);
console.log(arr + 1);
console.log(++arr);

a = null
console.log(a);




console.log("Yhn se ");
console.log("new ");




// CALL BACK

let sum = (a, b) => {
    console.log(a + b);
}

let calculate = (a, b, sumcall) => {
    sumcall(a, b)
}

calculate(85 / 5, 556 / 566, (a, b) => {
    console.log(a + b);

})


let d = document.getElementById("humpty");
console.log(d);

var pCounter = 0;

for (var i = 0; i < d.childNodes.length; i++) {
    if (d.childNodes[i].nodeType === 1) {
        pCounter++;
        console.log(pCounter);
    }
    if (pCounter === 2) {
        d.childNodes[i].innerHTML = "All his men.";
        // console.log(pCounter);
        break;
    }
}
