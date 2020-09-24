export class User {

    username:string;
    password:string;
    phone:string;
    kind:string;

    constructor(username:string,password:string,phone?:string,kind?:string){
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.kind = kind;
    }

}

