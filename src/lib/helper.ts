import user from "@/pages/api/user"

const BASE_URL = "http://localhost:3000"


// return all users
export const getUsers = async () => {
  const users = await fetch(`${BASE_URL}/api/user`).then((res) => res.json())

  return users
}

// return single user
export const getUser = async (userId: string) => {
  const user = await fetch(`${BASE_URL}/api/user/id/${userId}`).then((res) =>
    res.json()
  )

  if (user) return user

  return {}
}
