import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Acesso",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "ex.: smith@gmail.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("Chamou a api login *******************************")
        const result = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })

        console.log(result, "resultado da api login ***************************************")

        const user = await result.json()

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user }
  //   },

  //   async session({ session, token }) {
  //     session.user = token as any
  //     return session
  //   },
  // },
  pages:{
    signIn:"/signin",
    signOut: '/'
  }
})

export { handler as GET, handler as POST }

