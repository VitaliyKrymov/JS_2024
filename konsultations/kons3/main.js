// function tagFn(text='default',count,tagname='h3'){
//     for ( i = 0; i < count; i++) {
//         document.write(`<${tagname}>${text} ${i+1}</${tagname}>`)
//     }
// }
//
// tagFn('hello',15,'li');
// hrFn('red',10);
// tagFn('text hello',10,'div');
//
// function hrFn(color='blue',num=1){
//     document.write(`<hr style="border:${num}px solid ${color}"`)
// }
// hrFn('green',15);

// function res(a,b,h){
//     return (a*b)+h;
// }
//
//
// let result=res(43,4,6);
// console.log(result);

// function minMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     console.log(arguments);
//     for (const item of arguments) {
//         if (item < min) {
//             min = item;
//         } else if (item > max) {
//             max = item;
//         }
//     }
//         console.log('Min:', min);
//         return max;
// }
//
// let res1 = (minMax(1, 2, 4, -6, 7, 9));
// console.log('Max=', res1);

let money=[
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
    {currency:'UAH',value:100},
    {currency:'GBR',value:50}
];

for (const moneyElement of money) {
    console.log(moneyElement.currency,moneyElement.value);
}
