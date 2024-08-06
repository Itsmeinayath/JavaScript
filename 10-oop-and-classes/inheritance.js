class User{
    constructor(username){
        this.username = username;
    }

    logMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`${this.username} is now teaching a course`);
    }
}

const teacher = new Teacher("John","john@teacher.com","123456");

// teacher.logMe();
// teacher.addCourse();

const masalaChai = new User("masalaChai");

masalaChai.logMe();
// masalaChai.addCourse(); //error

console.log(teacher instanceof Teacher); //true

console.log(teacher instanceof User); //true

console.log(masalaChai instanceof Teacher); //false

console.log(masalaChai instanceof User); //true

