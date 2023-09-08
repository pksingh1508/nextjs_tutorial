import Link from "next/link";
import styles from '../../styles/user.module.css'

const UserPage = (props) => {
    return (
        <div style={{margin: "4rem"}}>
            <h1>Users</h1>
            {
                props.data.users.map((user) => (
                    <Link href={`/static/${user.id}`} key={user.id}>
                        <div className={styles["text-yellow"]}>{user.firstName}</div>
                    </Link>
                ))
            }
        </div>
    )
}

// static generation
export const getStaticProps = async() => {
    const data = await (await fetch("https://dummyjson.com/users")).json();
    return {
        props: {
            data: data
        }
    }
}


export default UserPage;
