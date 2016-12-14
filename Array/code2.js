//indexOf() 사용//
var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];

var name = 'Cynthia';

var position = names.indexOf(name);

if(position >= 0){
    console.log('Found ' + name + ' at position ' + position);
}

else{
    console.log(name + ' not found in array');
}
///////////////////////////
//lastIndexOf() 사용 - indexOf와는 다르게 배열의 마지막부터 찾을려는 원소의 위치까지 센다.//
var array = ['c', 'c++', 'java', 'javascript'];

var search_subject = 'java';

var first_position = array.indexOf(search_subject);
var last_position = array.lastIndexOf(search_subject);

console.log('first position: ' + first_position);
console.log('last position: ' + last_position);
////////////////////////////
//concat(), splice()사용 - concat() 연결 시 배열 뒤로 붙는다. splice()는 기존 배열 요소를 가지고 새 배열을 만든다.//
var itDiv = ['Mike', 'Clayton', 'Terrill', 'Raymond', 'Cynthia', 'Danny', 'Jennifer'];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;

console.log(dmpDept);
console.log(cisDept);