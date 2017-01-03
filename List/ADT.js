function List(){
    this.listSize = 0;
    this.pos = 0; //현재위치//
    this.dataStore = []; //리스트 요소를 저장할 빈 배열 초기화//
    //this.clear = clear; //리스트의 모든요소 삭제//
    this.find = find; //검색(Helper함수)//
    this.toString = toString; //리스트를 문자열로 표현해 반환//
    this.insert = insert; //기존 요소 위로 새 요소를 추가//
    this.append = append; //새 요소를 리스트의 끝에 추가//
    this.remove = remove; //리스트의 요소삭제//
    //this.front = front; //현재 위치를 리스트 첫번째 요소로 설정//
    //this.end = end; //현재 위치를 리스트 마지막 요소로 설정//
    //this.prev = prev; //현재 위치를 한 요소 뒤로 이동//
    //this.next = next; //현재 위치를 한 요소 앞으로 이동//
    this.length = length; //리스트의 요소 수 반환//
    //this.currPos = currPos; //리스트의 현재 위치 반환//
    //this.moveTo = moveTo; //현재 위치를 지정된 위치로 이동//
    //this.getElement = getElement; //현재 위치의 요소를 반환//
    //this.contains = contains; //리스트에 특정값이 있는지 판단//
}
//////////////////////
function append(element){
    this.dataStore[this.listSize++] = element;
}
//////////////////////
function find(element){
    for(var i=0; i<this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return i;
        }
    }

    return -1;
}
///////////////////////
function remove(element){
    var foundAt = this.find(element); //우선 삭제할 원소가 있는 위치를 찾는다.//

    if(foundAt > -1){
        this.dataStore.splice(foundAt, 1); //splice()는 배열에 원소를 추가, 삭제 시 이동작업을 같이 해준다.//
        --this.listSize;

        return true;
    }

    return false;
}
////////////////////////
function length(){
    return this.listSize;
}
////////////////////////
function toString(){
    return this.dataStore; //배열을 반환//
}
////////////////////////
function insert(element, after){
    var insertPos = this.find(after);

    if(insertPos > -1){
        this.dataStore.splice(insertPos + 1 , 0, element); //검색된 위치 바로 다음에 삽입//
        ++this.listSize;

        return true;
    }

    return false;
}
////////////////////////
/* Test Program */
var names = new List();

names.append('seo');
names.append('chang');
names.append('wook');
console.log(names.toString());
names.remove('chang');
console.log(names.toString());
var condition = names.insert('chang', 'wook');
if(condition == true){
    console.log(names.toString());
}
else if(condition == false){
    console.log('not after element');
}
/////////////////////////