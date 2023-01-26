export interface User{
    name:string
    username:string
    email:string
    password:string
}

export const getUserInformation = async (sessionID:string | undefined):Promise<User> => {
    //get user by session id
    if(!sessionID)
        sessionID = ''
    let user = await fetch('https://gouser-production.up.railway.app/users/BySession/' + sessionID).then(x => x.json())
    return user
}

export const getUser = async (email:String) => {
    //buscar en api
    let response = await fetch('https://gouser-production.up.railway.app/users/ByEmail/' + email).then(x => x.json())
    return response
}

export const createSession = async (user:User):Promise<string> => {
    //create session id
    let response = await fetch('https://gouser-production.up.railway.app/users/Session/', {
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
    let users = await fetch('https://gouser-production.up.railway.app/users/').then(x => x.json()) as Array<User>
    return users
}

export const RegisterUser = async(user:User) => {
    let response = await fetch('https://gouser-production.up.railway.app/users/', {
        method:'POST',
        body:JSON.stringify(user)
    });
    let data = await response.json()
    if(!data.Success)
        return undefined
    return data.ID
}