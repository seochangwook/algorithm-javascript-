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
//pop()사용//
var array_2 = [1,2,3,4,5];
array_2.pop(); //배열의 맨 마지막 요소를 제거. push(), pop()은 스택의 인터페이스이다.//
console.log(array_2);
///////////////////////////
//shift() 사용//
//만약 shift()변형자가 없다면 배열의 맨 앞 요소를 제거 시 모든 원소를 한칸씩 앞으로 당겨야 하기에 비효율적이게 된다.//
var array_3 = [9,1,2,3,4,5];
array_3.shift();
console.log(array_3);
////////////////////////////
//전체적으로 보았을 경우 앞의 요소를 뒤로 배치할려면 shift()로 추출 후 push()로 하면 된다.//
//비효율적인 부분이 해결된다.//
var array_4 = [6,1,2,3,4,5];
var first_value = array_4.shift();
array_4.push(first_value);
console.log(array_4);
////////////////////////////
//splice() 사용//
//배열 중간에 원소 삽입. 배열 중간에 원소를 삽입하는 것도 원소를 이동해야 하는 비효율적이 있지만 splice()로 해결가능//
var array_5 = [1,2,3,7,8,9];
array_5.splice(3,0,4,5,6); //0은 원소를 삽입하는 경우이므로 3번째 위치부터 4,5,6을 삽입.//
console.log(array_5);
///////////////////////////
//splice()에 두번째 인자로 숫자를 넣어주면 해당 숫자의 개수만큼 제거가 가능//
var array_6 = [1,2,3,100,200,300,400,4,5];
array_6.splice(3,4);
console.log(array_6);
////////////////////////////
//reverse() 사용 - 거꾸로 정렬//
var array_7 = [1,2,3,4,5];
array_7.reverse();
console.log(array_7);
////////////////////////////
//sort() 사용 - 정렬(문자열 정렬 시 유용)//
var array_8 = ['apple', 'car', 'banana'];
array_8.sort();
console.log(array_8);