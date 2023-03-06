class SessionHelper{
     setToken(token){
        localStorage.setItem('token',token)
    }
     getToken(){
       return localStorage.getItem('token')
    }
     setEmail(token){
        localStorage.setItem('email',token)
    }
     getEmail(){
       return localStorage.getItem('email')
    }
     removeEmail(){
       return localStorage.removeItem('email')
    }
     setOTP(otp){
        localStorage.setItem('otp',otp)
    }
     getOTP(){
       return localStorage.getItem('otp')
    }
    deleteOtp(){
        return localStorage.removeItem('otp')
    }
    setUserDetails(userDetails){
        localStorage.setItem('userDetails',JSON.stringify(userDetails))
    }
    getUserDetails(){
       return JSON.parse(localStorage.getItem('userDetails'))
    }
    getLogOut(){
        localStorage.removeItem('token')
        localStorage.removeItem('userDetails')
    }
}
export const {setToken,getToken,setUserDetails,getUserDetails,getLogOut,setEmail,getEmail,setOTP,getOTP,deleteOtp,removeEmail}=new SessionHelper();