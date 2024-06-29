const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("get user details form database")
        // console.log(`Username : ${this.username}`);
        console.log(this)
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}` )
    }

    return this


}

const userOne = User("hitesh", 12, true)
const userTwo = User("chaiaurcode", 11, false)

console.log(userOne.constructor());
console.log(userTwo);