//forEach() 사용//
//배열을 만들지 않는 반복자 함수//
function square(num){
    console.log(num + " " + (num*num));
}

var array_1 = [1,2,3,4,5,6,7,8,9,10];
array_1.forEach(square);
//////////////////////////
//every() 사용//
//불린 함수를 배열에 적용하여 배열의 모든 요소를 판단하여 결과를 출력하는 반복자//
//하나가 잘못되면 다 거짓을 출력//
function isEven(num)
{
    return num % 2 ==0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);

if(even){
    console.log('all numbers are even');
}

else{
    console.log('not all numbers are even');
}
//////////////////////////
//some() 사용//
//every()와는 반대로 배열 요소 중에 한 요소라도 인자로 받은 불린 요소의 기준을 만족하는지 판단//
function isEvent(num){
    return num % 2 == 0;
}

var array_2 = [1,2,3,4,5,6,7,8,9,10];
var someEven = array_2.some(isEven);

if(someEven){
    console.log('some numbers are even');
}

else{
    console.log('no numbers are evne');
}

var nums = [1,3,5,7,9];
var someEven_2 = nums.some(isEven);

if(someEven_2){
    console.log('some numbers are evne');
}

else{
    console.log('no numbers are even');
}
//////////////////////////
//reduce() 사용//
//누적자 함수를 인자로 받은 다음 배열의 모든 요소를 누적자 함수에 적용//
function add(runningTotal, currentValue){
    return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10]; //배열//
var sum = nums.reduce(add); //add()함수를 누적해서 호출 즉 1~10까지 더하게 된다.//

console.log(sum);
///////////////////////////
//reduce()를 이용한 문자열 연결//
function concat(accumulatedString, item){
    return accumulatedString + item;
}

var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduce(concat); 

console.log(sentence);
//////////////////////////
//map() 사용//
//forEach()함수처럼 배열의 각 요소에 함수를 적용하는 함수. 새로운 배열을 반환.//
function curve(grade){
    return grade += 5;
}

var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve); //결과가 반영된 상태로 newgrades라는 새로 배열을 할당해준다.//

console.log(newgrades);
///////////////////////////
//문자열에 map()함수 사용//
function first(word){
    return word[0]; //첫글자를 반환//
}

var words = ['for', 'your', 'information'];
var acronym = words.map(first); //배열에 첫글자만 따온다.//

console.log(acronym.toString()); //문자열로 치환//
console.log(acronym.join("")); //공백을 이용하여 문자열을 분리. ','가 없어진다.//
///////////////////////////
/*filter()함수 사용
-> every()함수와 비슷하지만 every()함수처럼 배열의 모든 요소가 불린 함수를 만족할 때 true를 반환하는 것이 아니라
불린 함수를 만족하는 요소를 포함하는 새로운 배열을 반환 */
function isEven(num){
    return num % 2 == 0;
}

function isOdd(num){
    return num % 2 != 0;
}

var nums = [];

for(var i=0; i<20; i++){
    nums[i] = i+1; //1부터 저장//
}

var evens = nums.filter(isEven);
console.log('Event numbers: ');
console.log(evens);

var odds = nums.filter(isOdd);
console.log('Odd numbers: ');
console.log(odds);
////////////////////////////

