/**
 * < 괄호 검사 프로그램 >
 * 1. '(' 시 스택에 Push
 * 2. ')' 시 스택에 Pop후 괄호비교. 만약 짝이 안맞다던가 Pop할것이 없으면 실패
 * 3. 다 읽고나서 스택이 비어있지 않으면 실패
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
function check_bracket(input_expansion){
    var check_variable = true; //성공이라 가정//
    var stack = new Stack(); //스택 객체 선언//

    for(var i=0; i<input_expansion.length; i++){
        //console.log(input_expansion[i])
        switch(input_expansion[i]){
            case '(' :
                console.log("열린 소괄호");
                //스택에 저장. 알고리즘 1. 수행.//
                stack.push(input_expansion[i])
                break;
            case '{' :
                console.log("열린 중괄호");
                stack.push(input_expansion[i])
                break;
            case '[' :
                console.log("열린 대괄호");
                stack.push(input_expansion[i])
                break;
            case ')' :
                //console.log("닫힌 소괄호");
                //스택에 Pop을 해서 비교 후 짝이 맞으면 통과, 틀리면 실패. 알고리즘 2. 수행//
                if(stack.length() == 0){
                    check_variable = false;
                }

                else{
                    var element = stack.peek(); //확인//
                    //괄호의 쌍이 맞는지 비교//
                    if(element == '('){
                        stack.pop(); //맞으니 제거//
                    }

                    console.log("pop element : " + element);
                }
                break;
            case '}' :
                //console.log("닫힌 중괄호");

                if(stack.length() == 0){
                    check_variable = false;
                }

                else{
                    var element = stack.peek(); //확인//
                    //괄호의 쌍이 맞는지 비교//
                    if(element == '{'){
                        stack.pop(); //맞으니 제거//
                    }

                    console.log("pop element : " + element);
                }
                break;
            case ']' :
                //console.log("닫힌 대괄호");

                if(stack.length() == 0){
                    check_variable = false;
                }

                else{
                    var element = stack.peek(); //확인//
                    //괄호의 쌍이 맞는지 비교//
                    if(element == '['){
                        stack.pop(); //맞으니 제거//
                    }

                    console.log("pop element : " + element);
                }
                break;
        }
    }

    //스택이 비었는지 확인. 알고리즘 3. 수행//
    if(stack.length() > 0){
        //console.log("stack is not empty");
        check_variable = false;
    }

    else{
        //console.log("stack is empty");
        check_variable = true;
    }

    return check_variable;
}
/////////////////////////
//Test//
var check_bracket_option = false;
var expansion = []; //수식을 저장할 배열//

expansion.push("2.3");
expansion.push("+");
expansion.push("23");
expansion.push("/");
expansion.push("12");
expansion.push("+");
expansion.push("(");
expansion.push("3.14159");
expansion.push("*");
expansion.push(".24");

check_bracket_option = check_bracket(expansion);

console.log("check : " + check_bracket_option);