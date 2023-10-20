import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar"
import { UserContext } from "../context/userContextProvider";

function Profile() {
    const user = useContext(UserContext)
    return (
        <>
            <Navbar />
            <div className="container">
                {user.profile.id > 0 ? (
                    <article>
                        <img src={user.profile.picture} alt="user image" />
                        <h1>Hello {user.profile.name}</h1>
                    </article>
                ) : (
                    <button onClick={() => user.login()}>Logga In</button>
                )}
            </div>
        </>
    )
}

export default Profile