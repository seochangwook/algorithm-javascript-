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