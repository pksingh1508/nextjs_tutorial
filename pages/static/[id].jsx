const UserInfo = (props) => {
    // console.log("props", props.data);
    return (
        <div>
            <h1>This is UserInfo of {props.data.firstName}</h1>
        </div>
    )
}

export const getStaticPaths = async() => {
    const data = await (await fetch(`https://dummyjson.com/users`)).json();
    const allUserId = data.users.map(user => user.id);
    return {
        paths: allUserId.map((user) => ({params: {id: `${user}`}})),
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
    return {
        props: {
            data,
        }
    }
}

export default UserInfo;