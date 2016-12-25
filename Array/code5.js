/*이차원 배열*/
//기본적으로 자바스크립트는 일차원 배열만 지원. 배열에 배열을 이용해서 다차원 배열을 만들 수 있다.//
//자바스크립트 배열 객체를 함수로 확장(함수명 : matrix)//
Array.matrix = function(numrows, numcols, initial){
    var arr = []; //우선 빈 배열을 할당//

    for(var i=0; i<numrows; i++){
        var columns = []; //행당 열의 배열을 할당//

        for(var j=0; j<numcols; j++){
            columns[j] = initial;
        }

        arr[i] = columns;
    }

    return arr;
}
/////////////////////////////
var nums = Array.matrix(5,5,0);
console.log(nums[1][1]);
var names = Array.matrix(3,3,'');
names[1][2] = 'Joe';
console.log(names[1][2]);
/////////////////////////////
/*간단하게 이차원 배열을 정의*/
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
console.log(grades[2][2]);
/////////////////////////////
/* 이차원 배열을 처리하는 방법 - 1 : 배열의 열을 기준으로 처리 */
/* 학생들의 성적평균 구하기 - 1 */
var grades_student = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];

var total = 0;
var average = 0.0;

//중첩for문을 이용하여 행당 열을 계산//
for(var row = 0; row < grades_student.length; row++){
    for(var col = 0; col < grades[row].length; col++){
        total += grades[row][col];
    }

    average = total / grades[row].length; //평균//

    console.log('Student ' + parseInt(row+1) + ' average: ' + average.toFixed(2)); //소수점 2자리까지 고정//

    //다시 새로운 학생을 계산하기 위해서 초기화//
    total = 0;
    average = 0.0;
}

console.log('--------------------------');

/* 이차원 배열을 처리하는 방법 - 2 : 배열의 행을 기준으로 처리 */
/* 과목의 평균 구하기 - 2 */
var total_subject = 0;
var average_subject = 0.0;

for(var col = 0; col < grades_student.length; col++){
    for(var row = 0; row < grades_student[col].length; row++){
        total_subject += grades_student[row][col];
    }

    average_subject = total_subject / grades_student[col].length;

    console.log('Test ' + parseInt(col+1) + ' average: ' + average_subject.toFixed(2));

    total_subject = 0;
    average_subject = 0.0;
}
console.log('--------------------------');
/////////////////////////////
/* 불규칙한 배열 */
/* 자바스크립트는 모든 행의 길이를 정확히 알 수 있으므로 불규칙한 배열도 쉽게 처리 가능 */
var grades_student_2 = [[89, 77], [76, 82, 81], [91, 94, 89]];

var total_subject_2 = 0;
var average_subject_2 = 0.0;

for(var row = 0; row < grades_student_2.length; row++){
    for(var col = 0; col < grades_student_2[row].length; col++){
        total_subject_2 += grades_student_2[row][col];
    }

    average_subject_2 = total_subject_2 / grades_student_2[row].length;

    console.log('Test ' + parseInt(row+1) + ' average: ' + average_subject_2.toFixed(2));

    total_subject_2 = 0;
    average_subject_2 = 0.0;
}
//////////////////////////////
