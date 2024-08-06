const  myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    py : 'Python',
    rb : 'Ruby',
}


// for (const key in myObject) {
//     // console.log(key);
//     console.log(`${key} shortcut is for : ${myObject[key]}`);
// }


const programming = ['JavaScript', 'C++', 'Python', 'Ruby'];

for (const key in programming) {
        console.log(programming[key]);
    }
