//Queue ADT//
function Queue(){
    this.dataStore = [];

    this.enqueue = enqueue; //큐의 끝부분에 요소를 추가//
    this.dequeue = dequeue; //배열의 앞부분에서 요소를 삭제//
    this.front = front; //앞부분에 저장된 요소를 확인//
    this.back = back; //뒷부분에 저장된 요소를 확인//
    this.toString = toString; //큐의 모든 원소를 출력//
    this.empty = empty; //큐가 비었는지 
}
//////////////////////////
function enqueue(element){
    this.dataStore.push(element);
}
//////////////////////////
function dequeue(){
    return this.dataStore.shift(); //배열의 맨 앞 제거//
}
//////////////////////////
function front(){
    return this.dataStore[0];
}
//////////////////////////
function back(){
    return this.dataStore[this.dataStore.length-1];
}
///////////////////////////
function toString(){
    var retStr = "";

    for(var i=0; i<this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }

    return retStr;
}
////////////////////////////
function empty(){
    if(this.dataStore.length == 0){
        return true;
    }

    else{
        return false;
    }
}
/////////////////////////////
//Test//
var q = new Queue(); //객체생성//

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");

console.log(q.toString());

q.dequeue();

console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());