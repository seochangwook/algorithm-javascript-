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
//Test//
var s = new Stack(); //스택 객체 생성//

s.push("David");
s.push("Raymond")
s.push("Bryan")
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped)
console.log(s.peek()); //Raymond출력//
s.push("Cynthia");
console.log(s.peek()); //Cynthia 출력//
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());