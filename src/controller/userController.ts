//* Controller */

import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface UserProps {
  id: number
  name: string
  email: string
  password: string
}

interface Users {
  users: UserProps[]
}

// post:http://localhost:3000/api/user
export async function postUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, password } = req.body
    let user = await prisma.user.findUnique({ where: { email: email } })
    if (user !== null) {
      return res.status(200).json({
        warning: "Já existe um usuário cadastrado com esse email.",
      })
    }
    user = await prisma.user.create({ data: { email, name, password } })
    return res.status(201).json(user)
  } catch (error) {
    res.status(404).json({ error: "Falha na gravação do usuário." })
    console.log("Falha na gravação do usuário.", error)
  }
}

// GET: http://localhost:3000/api/user
export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany()
    if (!users)
      return res.status(404).json({ error: "Nenhum usuário encontrado" })
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ error: "Falha os carregar usuários." })
    console.log("Falha os carregar usuários.", error)
  }
}

// GET: http://localhost:3000/api/user/(number)
export async function findUserById(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    })
    if (user) return res.json(user)
    res.json({
      warning: `Não foi encontratdo usuário com o id: ${id}`,
    })
  } catch (error) {
    res.json({
      error: `Não foi encontratdo usuário com o id: ${id}`,
    })
  }
}

// GET:  http://localhost:3000/api/user/(email)
export async function findUserByEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query
  try {
    const user = await prisma.user.findUnique({
      where: { email: String(email) },
    })
    if (user) return res.json(user)
    res.json({
      warning: `Não foi encontratdo usuário com o email: ${email}`,
    })
  } catch (error) {
    res.json({
      error: `Não foi encontrado usuário com email: ${email}`,
    })
  }
}

// PUT: http://localhost:3000/api/user/(number)
export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query

  const { name, email, password } = req.body
  try {
    let user = await prisma.user.findUnique({ where: { id: Number(userId) } })

    if (!user) {
      return res.json({
        warning: "Usuário não cadastrado",
      })
    }

    let check = await prisma.user.findUnique({
      where: { email: String(email) },
    })

    if (check) {
      return res.json({
        warning: `Já existe usuário cadastrado com o email: ${email}`,
      })
    }

    user = await prisma.user.update({
      where: { id: Number(userId) },
      data: { name, email, password },
    })
    res.json(user)
  } catch (error) {
    console.log(error)
    res.json({
      error: `User with id ${userId} does not exist in the database`,
    })
  }
}

// DELETE: http://localhost:3000/api/user/(number)
export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  let user = await prisma.user.findUnique({ where: { id: Number(userId) } })
  if (!user) {
    return res.json({
      warning: `Não existe um usuário cadastrado com o id ${userId}.`,
    })
  }
  user = await prisma.user.delete({
    where: { id: Number(userId) },
  })
  return res.json({
    message: `Usuário com id ${userId} foi deletado permanentemente.`,
  })
}
