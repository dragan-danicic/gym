export class LoggedInUser {
    id: string;
    firstName: string;
    lastName: string;
    role: string;

    constructor(id: string, firstName: string, lastName: string, role: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }

}
