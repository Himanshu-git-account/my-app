export const checkValidateData = (email, password,name) =>{
    const isEmailValid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(name!=="false" && name =="") return "Name cannot be blank"
    if(!isEmailValid) return "Email id is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null;
}