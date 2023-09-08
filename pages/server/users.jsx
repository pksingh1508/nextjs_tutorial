import Link from "next/link";

const UserPage = (props) => {
    // console.log("Props", props);
    return (
        <div style={{ margin: "4rem" }}>
            <h1>Users</h1>
            {
                props.data.users.map((user) => (
                    <Link href={``} key={user.id}>
                        <div>Hello, {user.firstName}</div>
                    </Link>
                ))
            }
        </div>
    )
}

// server side api call
export const getServerSideProps = async () => {
    const data = await (await fetch("https://dummyjson.com/users")).json();
    return {
        props: {
            data: data
        }
    }
}


export default UserPage;