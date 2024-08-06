const User = {
    _email: 'in@ay.com',
    _password: 'inayath',


    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value
    }
}


const tea = Object.create(User);

console.log(tea.email)
