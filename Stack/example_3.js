/**
 * 스택을 이용하여 컴퓨터 프로그래밍 언어, 재귀 프로시저를 구현할 수 있다.
 * < 스택을 이용하여 팩토리얼 재귀구현 >
 * 1. 입력된 숫자를 기준으로 1까지 하나씩 숫자를 감소하여 스택에 저장
 * 2. 스택에 있는 숫자를 다시 꺼내면서 곱한다.
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
function fact(n){
    var s = new Stack(); //스택객체 선언//

    while(n>1){
        s.push(n--); //알고리즘 1. 수행//
    }

    var product = 1; //곱해야 하는 수를 저장해야 하기에 초기값은 1//

    while(s.length () > 0){
        product *= s.pop(); //알고리즘 2. 수행//
    }
    
    return product;
}
//////////////////////////
//Test//
console.log(fact(10));