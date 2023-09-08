import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();

    return <>
        <div>
            <h1>This is setting page for { router.query.username }</h1>
        </div>
    </>
}

export default Page;