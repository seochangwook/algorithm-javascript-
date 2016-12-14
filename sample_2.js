//this : 각 함수와 프로퍼티를 객체 인스턴스로 연결하는 역할//
function Checking(amount){
    this.balance = amount;
    //현재 선언되어있는 함수들을 인자로 설정한다.//
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount){
    this.balance += amount;
}

function withdraw(amount){
    if(amount <= this.balance)
    {
        this.balance -= amount;
    }

    if(amount > this.balance)
    {
        console.log('Insufficient funds');
    }
}

function toString(){
    return 'Balance: ' + this.balance;
}
//////////////////////
var account = new Checking(500); //객체생성 및 생성자 호출//

account.deposit(1000);
console.log(account.toString()); //1500//

account.withdraw(750); //750//
console.log(account.toString());

account.withdraw(800); //invalid//
console.log(account.toString()); //750//