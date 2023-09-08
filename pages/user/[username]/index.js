import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () => ({
    user: {name: "Pawan Kumar"},
    loading: false
})

const HomePage = () => {
    const router = useRouter();
    const user = useUser();

    useEffect(() => {
        if(user.user === null) {
            router.replace("/");
        }
    }, [])

    return <>
        <div>
            <h1>This is index page for { router.query.username }</h1>
            <button
                onClick={(e) => router.push(`/user/${router.query.username}/setting`)}
            >Go to Setting</button>
            <button onClick={(e) => router.replace("/")}>
                Go to Home
            </button>
            <button onClick={e => router.reload()}>
                Reload
            </button>
        </div>
    </>
}

export default HomePage;