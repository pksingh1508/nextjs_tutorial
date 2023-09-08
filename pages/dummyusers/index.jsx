
import Link from "next/link";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserPage = () => {

    const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
    // console.log("data", data.users);

    if(error) {
        return (
            <>
                <h1>Something went wrong.</h1>
            </>
        )
    }
    if(!data) {
        return (
            <h1 style={{margin: "4rem"}}>Loading...</h1>
        )
    }

    return (
        <>
            <div style={{margin: "4rem"}}>
                <h1>Users</h1>
                {
                    data.users &&
                    data.users.map((user) => (
                        <Link href={`/dummyusers/${user.id}`} key={user.id}>
                            <div>
                                {user.firstName}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default UserPage;