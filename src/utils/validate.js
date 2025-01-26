export const checkValidData = (email, password)=>{

    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validatePass  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validateEmail) return "Email is invalid"
    if(!validatePass) return "Password is invalid"

    return null;

}

