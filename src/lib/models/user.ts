export interface User{
    username:string
    email:string
    password:string
}

export const getUserInformation = async (sessionID:string | undefined):Promise<User> => {
    //get user by session id
    if(!sessionID)
        sessionID = ''
    let user = await fetch('http://localhost:8080/users/BySession/' + sessionID).then(x => x.json())
    return user
}

export const getUser = async (email:String, password:String) => {
    //buscar en api
    let response = await fetch('http://localhost:8080/users/ByEmail/' + email).then(x => x.json())
    return response
}

export const createSession = async (user:User):Promise<string> => {
    //create session id
    let response = await fetch('http://localhost:8080/users/Session/', {
        method:'POST',
        body:JSON.stringify(user)
    });
    let data = await response.json()
    if(!data.Success)
        return ""
    return data.ID
}

export const getAllUserTest = async () => {
    //buscar en api
    let users = await fetch('http://localhost:8080/users/').then(x => x.json()) as Array<User>
    console.log(users)
}