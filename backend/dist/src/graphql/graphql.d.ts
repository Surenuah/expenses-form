export interface User {
    id: string;
    name: string;
    email: string;
}
export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}
export interface IMutation {
    createUser(name: string, email: string): User | Promise<User>;
}
type Nullable<T> = T | null;
export {};
