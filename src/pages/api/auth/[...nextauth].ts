import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"


const baseUrl = process.env.NEXTAUTH_URL

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        const result = await fetch(
          "http://localhost:3000/api/user/email/" + credentials?.email,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: null,
          }
        )

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
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/",
  },
})
