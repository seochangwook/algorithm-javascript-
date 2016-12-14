//변형자 함수 사용//
//배열의 마지막 부분에 추가 시 length 프로퍼티를 사용하는 것보다 push()를 이용하는게 더 직관적임//
var nums = [1,2,3,4,5];
console.log(nums);
nums.push(6);
console.log(nums);
///////////////////////////
//unshift()의 변형자가 없었다면 배열의 맨 앞에 원소를 삽입 시 모든 원소들을 한칸씩 뒤로 밀어야 하는 비효율적인 연산을 하게 된다.//
//이러한 배열의 비효율적인 측면을 고려하여 변형자 존재 - 자료구조 중 리스트 사용도 한 해결책//
var nums_array = [2,3,4,5];
console.log(nums_array);
var new_nums = 1;
nums_array.unshift(new_nums);
console.log(nums_array);
///////////////////////////
