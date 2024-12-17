import { useState } from "react";

const Login =()=>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const handleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <>
            <div className="absolute mt-20 mx-auto right-0 left-0 w-[460px] z-10 bg-opacity-90 bg-black rounded-lg">
                <form  >
                    <h1 className="text-3xl text-white font-bold pt-12  px-11 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    <div className="p-4 mx-7">
                    {!isSignInForm && 
                        <input type="text" placeholder="Full Name" className="p-4 my-2 w-full opacity-60 bg-gray-700 rounded-md  border border-white"/>}
                    <input type="text" placeholder="Email or mobile number" className="p-4 my-2 w-full opacity-60 bg-gray-700 rounded-md border border-white" />
                    <input type="password" placeholder="Password" className="p-4 my-2 w-full opacity-60 bg-gray-700 rounded-md  border border-white"/>
                    <button className="bg-red-700 w-full p-2 mt-2 text-white font-semibold rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className="text-white text-center my-4">Forgot password?</p>
                    {isSignInForm && <>
                        <p className="text-gray-300 text-center my-4">OR</p>
                        <button className="bg-gray-700 bg-opacity-40 w-full p-2 text-white font-semibold rounded-md">Use a sign-in code</button>
                        <div>
                        <input type="checkbox"/> <span className="text-white px-1">Remember me</span>
                        </div> </>}
                    <p className="my-4 cursor-pointer" onClick={handleSignInForm}>{isSignInForm ? <><span className="text-gray-300 ">New to Netflix? </span><span className="font-semibold text-white">Sign up now.</span></> : <> <span className="text-gray-300 ">Already have an account? </span><span className="font-semibold text-white">Sign In now.</span></>}</p>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Login;