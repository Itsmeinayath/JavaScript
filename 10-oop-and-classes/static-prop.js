class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const inayath =  new User("inayath")

// console.log(inayath.createId());

class teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new teacher("iphone","i@phone.com")

// iphone.logMe();

console.log(iphone.createId()); //123