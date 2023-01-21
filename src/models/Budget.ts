import { ArgumentOutOfRangeError } from "rxjs";
import { User } from "./User";

export class Budget{
    users:User[];
    totalBudget : number;
    constructor(totalBudget:number, users?:User[]|User){
        users == undefined ? this.users = Array() : users instanceof User ? this.users = [users] : this.users = users;
        this.totalBudget = totalBudget;
    }

    addUser(user:User|User[]){
        user instanceof User ? this.users.push(user) : this.users.concat(user);
    }

    addToBudget(amount:number){
        this.totalBudget+=amount
    }
}