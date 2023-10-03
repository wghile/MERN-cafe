//This is the base path of the Express route
const BASE_URL = '/api/users'

export async function signUp(userData){
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
            //Fetch requires data payloads to be stringified and assigned to a body property on the options object
        body: JSON.stringify(userData)
    })

    //Check if request was successful
    if(res.ok){
        return res.json()
    }else{
        throw new Error('Invalid Sign Up')
    }
}