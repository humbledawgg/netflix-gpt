import Header from "./Header.jsx"
import Login from "./Login.jsx";


const Body =()=>{

    return(
        <>
                <Header/>

                <div className="absolute" >
                <img alt="background-image" 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg" />
                </div>
                <Login/>
        </>

    )
}


export default Body;