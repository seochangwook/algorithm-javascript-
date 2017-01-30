/**
 * 진법변환 프로그램에 스택을 이용할 수 있다.
 * < A라는 진법에서 B라는 진법으로 변환 >
 * 1. n의 가장 오른쪽 숫자는 n%b이다. 이 값을 스택에 추가
 * 2. n을 n/b으로 치환한다.
 * 3. n=0이 되고 나머지가 없을 때까지 1번, 2번 과정을 반복
 * 4. 스택에 저장된 숫자를 모두 꺼내 변환된 숫자 문자열을 만든다.
 * (제한적으로 해당 알고리즘은 2진수~9진수까지만 동작)
 * */
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
function mulBase(num, base){
    var s = new Stack();

    do{
        s.push(num % base); //알고리즘 1. 수행//
        num = Math.floor(num /= base); //알고리즘 2. 수행//
    }while(num > 0) //알고리즘 3. 수행//  

    var converted = ""; //치환할 문자열//

    //스택에 있는 원소들만큼 반복//
    while(s.length() > 0){
        converted += s.pop(); //알고리즘 4. 수행//
    }

    return converted;
}
//////////////////////////
//Test//
var num = 32; //진법변환할 수 32//
var base = 2; //2진수//

var newNum = mulBase(num, base);

console.log(num + " converted to base " + base + " is " + newNum);

num = 125;
base = 8; //8진수//

var newNum = mulBase(num, base);

console.log(num + " converted to base " + base + " is " + newNum);