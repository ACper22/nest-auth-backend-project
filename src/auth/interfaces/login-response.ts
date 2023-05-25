import { User } from "../user.entities/user.entity";


export interface LoginResponse {

    user: User;
    token: string;
}