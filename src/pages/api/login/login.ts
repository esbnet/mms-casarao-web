import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

import {
  getUsers,
  postUser,
} from "../controller/userController"

const prisma = new PrismaClient()

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method

  switch (method) {
    // =========================================================================
    // list user
    case "GET":
      getUsers(req, res)
      break

    // =========================================================================
    // add user
    case "POST":
      postUser(req, res)
      break
  }
}
