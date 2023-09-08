import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());


const UserInfoPage = () => {
    const router = useRouter();

    // api calls
    const id = router.query.id;
    const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);

    if(error) {
        return <h1>Something error while fetching</h1>
    }
    if(!data) {
        return <h1 style={{margin: "4rem"}}>Loading...</h1>
    }

    return (
        <>
            { data &&
                <div style={{margin: "4rem"}}>
                    <h1>User Info Page</h1>
                    <h2>{data.firstName}</h2>
                    <h2>{data.email}</h2>
                </div>
            }
        </>
    )
}

export default UserInfoPage;