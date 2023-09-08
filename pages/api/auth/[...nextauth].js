import NextAuth from "next-auth";

import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '6b138404f62c0f210dbc',
            clientSecret: '3591fbe24edf94cd7b864f22c1b779e3034e0180'
        })
    ]
}


export default NextAuth(authOptions);


