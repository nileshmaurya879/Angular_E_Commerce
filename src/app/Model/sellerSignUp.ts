export interface sellerSignUpService_Request{
    name:string,
    email:string,
    password:string
}

export interface sellerSignUpService_Response{
    id:string,
    name:string,
    email:string,
    password?:string
}