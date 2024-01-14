// Password Checker.
class User {
    constructor(username, password) {
        this.username = username;
        this._password = password; 
    }

    // Getter method for password
    get password() {
        return this._password.replace(/./g, '*');
    }

    // Setter method for password
    set password(newPassword) {
        // Check if the new password is valid
        if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}
const user = new User("exampleUser", "OldPassword123");

console.log(`Original Password: ${user.password}`); 

// Setting a valid new password
user.password = "NewPassword456";
console.log(`New Password: ${user.password}`);

// Attempting to set an invalid new password
user.password = "short"; 
