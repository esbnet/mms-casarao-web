import { findUserById } from "@/pages/api/controller/userController"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method

  switch (method) {
    // list user
    case "GET":
      findUserById(req, res)
      break
  }
}
