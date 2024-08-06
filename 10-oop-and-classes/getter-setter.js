// Getter and Setter in JavaScript 
// what is getter and setter in JavaScript . getter and setter are used to get and set the value of an object.
class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase()
        // here in setter we cant use the return statement. if we use return statement in setter it will throw an error.
    }
}

const inayath = new User("inayath@gmai.com","inayath12345");

console.log(inayath.email)
console.log(inayath.password)