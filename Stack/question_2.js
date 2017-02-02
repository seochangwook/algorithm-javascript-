/**
 * < 후위계산 프로그램 >
 * 1. 숫자이면 스택에 push
 * 2. 연산자가 나올 시 스택에 있는 요소 2개를 pop
 * 3. pop한 요소들과 연산자를 비교해 계산
 * 4. 계산한 결과를 스택에 push
 * 5. 수식이 다 끝날때까지 1~4를 반환, 다 끝나면 스택에 요소 반환
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
//////////////////////////
//Algorithm//
function postorder_Calculation(input_expansion_post){
    var return_value = 0;

    var expansion_stack = new Stack();

    for(var i=0; i<input_expansion_post.length; i++){
        //console.log(input_expansion_post[i]);
        //switch-case로 연산자를 구분//
        switch(input_expansion_post[i]){
            case '-' :
                //console.log('- 연산자');
                //스택에서 계산을 하기 위한 2개의 요소를 반환//
                var element_1 = Number(expansion_stack.pop());
                var element_2 = Number(expansion_stack.pop());

                var temp = element_1 - element_2;

                total_result += temp;

                //다시 스택에 저장//
                expansion_stack.push(total_result);
                break;
            case '+' :
                //console.log('+ 연산자');
                //스택에서 계산을 하기 위한 2개의 요소를 반환//
                var element_1 = Number(expansion_stack.pop());
                var element_2 = Number(expansion_stack.pop());

                var temp_result = element_1 + element_2;

                //다시 스택에 저장//
                expansion_stack.push(temp_result);
                break;
            case '*' :
                //console.log('* 연산자');
                //스택에서 계산을 하기 위한 2개의 요소를 반환//
                var element_1 = Number(expansion_stack.pop());
                var element_2 = Number(expansion_stack.pop());

                var temp_result = element_1 * element_2;

                //다시 스택에 저장//
                expansion_stack.push(temp_result);
                break;
            case '/' :
                //console.log('/ 연산자');
                //스택에서 계산을 하기 위한 2개의 요소를 반환//
                var element_1 = Number(expansion_stack.pop());
                var element_2 = Number(expansion_stack.pop());

                var temp_result = element_1 / element_2;

                //다시 스택에 저장//
                expansion_stack.push(temp_result);
                break;
            default :
                //숫자의 경우이니 스택에 push//
                //console.log("숫자");
                expansion_stack.push(input_expansion_post[i]);
        }
    }

    return_value = expansion_stack.pop(); //스택에 있는 요소반환(최종결과가 저장되어 있다.)//

    return return_value;
}
///////////////////////////
//Test//
var expansion = []; //수식을 저장할 배열//

/*expansion.push("2");
expansion.push("7");
expansion.push("+");
expansion.push("7");
expansion.push("*");*/

expansion.push("2");
expansion.push("5");
expansion.push("+");

var result = postorder_Calculation(expansion);

console.log("result: " + result);