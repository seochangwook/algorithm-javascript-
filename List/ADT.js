function List(){
    this.listSize = 0;
    this.pos = 0; //현재위치//
    this.dataStore = []; //리스트 요소를 저장할 빈 배열 초기화//
    this.clear = clear; //리스트의 모든요소 삭제//
    this.find = find; //검색(Helper함수)//
    this.toString = toString; //리스트를 문자열로 표현해 반환//
    this.insert = insert; //기존 요소 위로 새 요소를 추가//
    this.append = append; //새 요소를 리스트의 끝에 추가//
    this.remove = remove; //리스트의 요소삭제//
    this.front = front; //현재 위치를 리스트 첫번째 요소로 설정//
    this.end = end; //현재 위치를 리스트 마지막 요소로 설정//
    this.prev = prev; //현재 위치를 한 요소 뒤로 이동//
    this.next = next; //현재 위치를 한 요소 앞으로 이동//
    this.length = length; //리스트의 요소 수 반환//
    this.currPos = currPos; //리스트의 현재 위치 반환//
    this.moveTo = moveTo; //현재 위치를 지정된 위치로 이동//
    this.getElement = getElement; //현재 위치의 요소를 반환//
    this.contains = contains; //리스트에 특정값이 있는지 판단//
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
function clear(){
    this.dataStore = [];

    this.listSize = this.pos = 0;
}
////////////////////////
function contains(element){
    for(var i=0; i<this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return true;
        }
    }

    return false;
}
////////////////////////
function front(){
    this.pos = 0;
}
////////////////////////
function end(){
    this.pos = this.listSize - 1;
}
////////////////////////
function prev(){
    if(this.pos > 0){
        //포지션이 0이상일 경우에만 수행//
        --this.pos;
    }
}
////////////////////////
function next(){
    if(this.pos < this.listSize - 1){
        //현재 포지션이 리스트 가용범위내에 있을 경우//
        ++this.pos;
    }
}
////////////////////////
function currPos(){
    return this.pos;
}
////////////////////////
function moveTo(position){
    this.pos = position; //해당 포지션으로 이동//
}
////////////////////////
function getElement(){
    return this.dataStore[this.pos]; //현재 위치에 있는 배열에 원소를 반환//
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
names.clear();
console.log(names.toString());
names.append('seo');
console.log(names.toString());
var condition = names.insert('chang', 'seo');
if(condition == true){
    console.log(names.toString());
}
else if(condition == false){
    console.log('not after element');
}
console.log(names.length());
var element_check = names.contains('chang');
if(element_check == true){
    console.log('element is exist');
}

else if(element_check == false){
    console.log('element is not exist');
}

console.log('----------------------------');

/////////////////////////
/* Test Program */
var names_2 = new List();

names_2.append('seo');
names_2.append('chang');
names_2.append('wook');
names_2.append('app');
names_2.append('programer');
names_2.append('jjang');

names_2.front(); //리스트의 첫번째 원소로 이동//
console.log(names_2.getElement());
names_2.next();
console.log(names_2.getElement());

names_2.next();
names_2.next();
names_2.prev();
console.log(names_2.getElement());
/////////////////////////
/* 반복자 */
/*for(names_2.front(); names_2.currPos() < names_2.length; names_2.next()){
    console.log(names_2.getElement());
}

for(names_2.end(); names_2.currPos() >= 0; names_2.prev()){
    console.log(names_2.getElement());
}*/
for(names_2.front(); names_2.currPos()<names_2.end(); names_2.next()){
    console.log(names_2[i]);
}