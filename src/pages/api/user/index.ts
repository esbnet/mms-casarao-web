import type { NextApiRequest, NextApiResponse } from "next"

import {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
} from "../controller/userController"

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

    // update user =============================================================
    case "PUT":
      updateUser(req, res)
      break

    // =========================================================================
    // delete user
    case "DELETE":
      deleteUser(req, res)
      break
  }
}
