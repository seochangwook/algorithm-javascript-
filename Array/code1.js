var numbers = new Array(1,2,3,4,5);

console.log(numbers.length);

console.log('------------------------');
//////////////////////////
var number = 3;
//배열선언 시 new Array()보다 []가 더 효율적//
var arr = [7,4,'123']; //배열 내부에 타입이 달라도 가능. 일반 스크립트 언어의 특징//

for(var i=0; i<arr.length; i++)
{
    console.log('element['+i+'] : ' + arr[i]);
}

//isArray()로 해당 변수가 배열인지 아닌지 판단//
console.log(Array.isArray(number));
console.log(Array.isArray(arr));

console.log('------------------------');
///////////////////////////
var sentence = 'seochangwook is perfect app developer';

//split()을 이용해서 문자열 분리//
var words = sentence.split(' ');

for(var i=0; i<words.length; i++){
    console.log('word '+i+': '+words[i]);
}

console.log('------------------------');
////////////////////////////
//얕은복사, 깊은복사//
//1. 얕은복사
var nums = [];

for(var i=0; i<100; i++){
    nums[i] = i+1;
}

var samenums = nums; //얕은복사. 실제 메모리를 복사한것이 아닌 레퍼런스만 복사. 즉 원래배열의 값을 변경 시 새로 생성한 배열도 변경//

nums[0] = 400;

console.log(samenums[0]);
//2. 깊은복사
var nums_2 = [];

for(var i=0; i<100; i++){
    nums_2[i] = i+1;
}

var samenums_2 = [];
copy(nums_2, samenums_2); //복사//

nums_2[0] = 400;
console.log(samenums_2[0]);
//console.log(nums_2);

function copy(arr1, arr2){
    for(var i=0; i<arr1.length; i++)
    {
        arr2[i] = arr1[i];
    }
}
