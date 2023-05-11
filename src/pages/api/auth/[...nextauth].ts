import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credencials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "ex.: smith@gmail.com",
        },
        password: { label: "Senha", type: "password" },
      },

      async authorize(credentials, req) {

        const result = await fetch("http://localhost:3000/api/user/email/"+credentials?.username, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: null
        })

        const user = await result.json()

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
  // pages:{
  //   signIn:"/",
  //   signOut: '/'
  // }
})
