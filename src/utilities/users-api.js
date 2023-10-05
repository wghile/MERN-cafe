import { getToken } from './users-service'

//AJAX REQUESTS SHOULD BE COMING FROM HERE!!

//This is the base path of the Express route
const BASE_URL = '/api/users'

export async function signUp(userData){
    // const res = await fetch(BASE_URL, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //         //Fetch requires data payloads to be stringified and assigned to a body property on the options object
    //     body: JSON.stringify(userData)
    // })

    // //Check if request was successful
    // if(res.ok){
    //     return res.json()
    // }else{
    //     throw new Error('Invalid Sign Up')
    // }

    //REFACTORED
    return sendRequest(BASE_URL,'POST', userData)
}

export async function login(credentials) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    // const res = await fetch(BASE_URL + '/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   // Fetch requires data payloads to be stringified
    //   // and assigned to a body property on the options object
    //   body: JSON.stringify(credentials)
    // })
    // // Check if request was successful
    // if (res.ok) {
    //   // res.json() will resolve to the JWT
    //   return res.json()
    // } else {
    //   throw new Error('Invalid Sign Up')
    // }

    //REFACTORED
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
  }

  
  export async function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
  }
    //no payload because it's getting data from server



  /* ----- Helper Functions ----- */
  let token = getToken()

  async function sendRequest(url, method='GET', payload=null){
    const options = {method}
    if(payload){
      options.headers = {'Content-Type': 'application/json'}
      options.body = JSON.stringify(payload)
    }

    if(token){
      //Creating new key in options objects, either if you have payload the value will be options.header and if not return empty object
      options.headers = options.headers || {}
      //Add token to an Authorization header
      //Prefacing with 'Bearer' is recommended in the HTTP specification
        //node js expects token to start with Bearer
      options.headers.Authorization = `Bearer ${token}`
    }

    const res = await fetch(url, options)

    if(res.ok) return res.json()

    throw new Error('Bad Request')
  }


  //Axios Format instead of fetch
  //import axios from 'axios'
  // export async function login(credentials){
  //   try{
  //     const res = await axios({
  //       url: "/api/users/login",
  //       method: "POST",
  //       data: userData,
  //     })
  //     if(res.status === 200){
  //       console.log(res)
  //       return res.data
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
  // }