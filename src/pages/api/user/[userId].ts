import { deleteUser, updateUser } from "@/controller/userController"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method

  switch (method) {
    // =========================================================================
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
