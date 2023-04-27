import { findUserByEmail } from "@/pages/api/controller/userController"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method

  switch (method) {
    // find user by email
    case "GET":
      findUserByEmail(req, res)
      break
  }
}
