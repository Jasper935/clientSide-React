export const getToken =(state)=> state.auth.token;

export const getLogin =(state)=>state.auth.isLogin

export const getUserEmail =(state)=>console.log(state.auth.email);;

export const getMessage =state=>state.auth.message
export const getStatus =state=>state.auth.status 
    