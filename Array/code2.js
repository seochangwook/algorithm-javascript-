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