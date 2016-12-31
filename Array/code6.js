/*클래스의 개념으로 배열을 사용*/
function Point(x,y){
    //클래스의 맴버변수로 등록//
    this.x = x;
    this.y = y;
}

//배열을 인자로 받는다.//
function displayPts(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i].x + ',' + arr[i].y);
    }
}

//객체를 생성 후 값을 대입(자바스크립트에서 객체를 생성 시 new를 이용)//
var p1 = new Point(1,2); //생성자에 따라서 x,y값을 설정//
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);

//생성된 좌표값들로 배열을 만든다.//
var points = [p1,p2,p3,p4];

for(var i=0; i<points.length; i++){
    console.log('Point ' + parseInt(i+1) + ': ' + points[i].x + ',' + points[i].y);
}

//새로운 좌표값을 추가//
var p5 = new Point(12, -3);
points.push(p5); //push를 이용해서 배열의 마지막에 추가//
console.log('After push: ');
displayPts(points); //출력//
points.shift(); //shift()로 배열의 맨 앞의 원소를 제거(shift()를 이용하면 배열에 대한 비효율성을 제거할 수 있다.)//
console.log('After shift');
console.log(points);
/////////////////////////////////
/* 객체지향적으로 제어 */
function weekTemps(){
    //필드 선언//
    this.dataStore = []; //온도값이 저장 될 빈 배열을 정의//

    //메소드 선언//
    this.add = add;
    this.average = average;
}

function add(temp){
    this.dataStore.push(temp); //add안에서 push()를 수행//
}

//평균을 구하는 메소드//
function average(){
    var total = 0;

    for(var i=0; i<this.dataStore.length; i++){
        total += this.dataStore[i]; //각 온도의 합을 구한다.//
    }

    return (total / this.dataStore.length).toFixed(2); //소수점 2자리까지 출력//
}

//객체생성//
var thisWeek = new weekTemps();

//온도 데이터 등록//
//객체지향 함수를 정의할 때 좀 더 직관적으로 이해하기 쉬운 이름을 사용하는 것이 좋기에 push()보다 add()가 좋다.//
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);

//평균을 출력//
console.log('average temp: ' + thisWeek.average());
//////////////////////////////
/* 문자열이 저장된 배열에서 문자열을 역순으로 출력 */
var str_array = ['seo', 'chang', 'wook'];

//정방향 출력//
for(var i=0; i<str_array.length; i++){
    console.log('str['+i+']: ' + str_array[i]);
}

console.log('-----------------------');

//역방향 출력//
var reverse_str_array = str_array.reverse();

for(var i=0; i<str_array.length; i++){
    console.log('str['+i+']: ' + str_array[i])
}
/////////////////////////////
function Student_class(){
    //필드정의//
    this.student_number = [];

    //메소드 정의//
    this.insert = insert;
    this.total_grade = total_grade;
    this.average_grade = average_grade;
    this.init = init;
}

function insert(grade){
    this.student_number.push(grade) //기존 클래스에 있는 것에 접근할려면 this 필요//
}

function total_grade(){
    this.total = 0;

    for(var i=0; i<this.student_number.length; i++){
        this.total += this.student_number[i];
    }

    console.log('total: ' + this.total);
}

function average_grade(){
    this.total = 0;

    for(var i=0; i<this.student_number.length; i++){
        this.total += this.student_number[i];
    }

    console.log('average: ' + this.total / this.student_number.length);
}

function init(){
    this.student_number = [];
}

console.log('-----------------------');

var student_class = new Student_class();

student_class.insert(10);
student_class.insert(20);
student_class.insert(30);

student_class.total_grade();
student_class.average_grade();

student_class.init();