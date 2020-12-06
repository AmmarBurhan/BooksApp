export interface UserApi {
    userId: number,
    userName: string,
    email: string,
    password: string
    isAdmin: boolean
}
export interface User extends UserApi {
    loggedUser: boolean,
   
};

