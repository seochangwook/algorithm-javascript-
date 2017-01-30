/**
 * Stack을 이용하면 회문인지에 대한 비교를 쉽게 할 수 있다.
 * < 회문인지 검사하는 프로그램 >
 * 1. 원본 문자열을 스택에 하나씩 대입한다.
 * 2. 스택에 있는 문자열을 다시 하나씩 꺼내서 새로운 문자열을 만든다.
 * 3. 새로 만들어진 문자열과 원본 문자열을 비교하여 회문인지 판단
 */
//배열로 스택 요소를 저장//
function Stack(){
    this.dataStore = [];

    this.top = 0; //초기 top에 위치를 0으로 잡는다. -1로 할시 달라진다.//
    this.push = push; //요소를 추가//
    this.pop = pop; //맨 위에 요소 제거//
    this.peek = peek; //제거하지 않고 확인//
    this.length = length; //스택에 원소의 개수//
    this.clear = clear; //스택 초기화//
}
////////////////////////
function push(element){
    this.dataStore[this.top++] = element; //0부터 시작이니 선저장 후증가. 만약 -1일 경우 선증가 후저장//
}
////////////////////////
function pop(){
    return this.dataStore[--this.top]; //하나 증가된 상태이므로 먼저 감소 후 반환.-1일경우 반환 후 감소//
}
////////////////////////
function peek(){
    return this.dataStore[this.top-1]; //가장 위에 원소를 확인//
}
/////////////////////////
function length(){
    return this.top; //Top을 반환만 하면 된다.//
}
/////////////////////////
function clear(){
    this.top = 0;
}
/////////////////////////
//Algorithm Test//
function isPalindrome(word){
    var s = new Stack(); //스택 객체 생성//

    for(var i=0; i<word.length; i++){
        s.push(word[i]); //알고리즘 1. 수행//
    }

    var rword = ""; //새로운 문자를 저장할 변수//

    //스택에 저장된 요소의 개수만큼 반복//
    while(s.length() > 0){
        rword += s.pop(); //알고리즘 2. 수행//
    }

    //알고리즘 3. 수행//
    if(word == rword){
        return true;
    }

    else{
        return false;
    }
}
///////////////////////////
//Test//
var word = "hello"

if(isPalindrome(word)){
    console.log(word + " is a palindrome");
}

else{
    console.log(word + " is not a palindrome");
}

word = "racecar"

if(isPalindrome(word)){
    console.log(word + " is a palindrome");
}

else{
    console.log(word + " is not a palindrome");
}