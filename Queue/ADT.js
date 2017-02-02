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