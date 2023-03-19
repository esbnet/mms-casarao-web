import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { NextRequest } from "next/server"

const prisma = new PrismaClient()




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method

  switch (method) {
    // =========================================================================
    // list user 
    case "GET":
      const users = await prisma.user.findMany()
      res.status(200).json(users)
      break

    // =========================================================================
    // add user 
    case "GET":
    case "POST":
      const { name, email, password } = req.body

      try {
        const user = await prisma.user.create({
          data: {
            name: name,
            email: email,
            password: password,
          },
        })
        res.status(200).json(user)
      } catch (error) {
        console.log("Falha na gravação do usuário.", error)
      }
      break

    // =========================================================================
    // delete user 
    case "DELETE":
      try {
        const id = req.query.id
        const user = await prisma.user.delete({
          where: { id: Number(id) },
        })
        res.status(200).json(user)
      } catch (error) {
        res.status(501).json({})
        console.log("Falha na deleção do usuário.", error)
      }
      break

    // =========================================================================
    // update user =============================================================
    case "PUT":
      try {
        const id = req.query.id

        const user = await prisma.user.update({
          where: { id: Number(id) },
          data: { name: String(name) },
        })
        res.status(200).json(user)
      } catch (error) {
        console.log("Falha na deleção do usuário.", error)
      }
  }

  // export class UserControler{

  //   async findUserById(req: NextApiRequest, res: NextApiResponse) {
  //     const { id } = req.query;
  //     try {
  //         const user = await prisma.user.findUnique({
  //             where: { id: Number(id) },
  //         });
  //         if (user) return res.json(user);
  //         res.json({
  //             warning: `Não foi encontratdo usuário com o id: ${id}`,
  //         });
  //     } catch (error) {
  //         res.json({
  //             error: `Não foi encontratdo usuário com o id: ${id}`,
  //         });
  //     }
  // },

  // async findUserByEmail(req: NextApiRequest, res: NextApiResponse) {
  //     const { email } = req.query;
  //     try {
  //         const user = await prisma.user.findUnique({
  //             where: { email: email },
  //         });
  //         if (user) return res.json(user);
  //         res.json({
  //             warning: `Não foi encontratdo usuário com o email: ${email}`,
  //         });
  //     } catch (error) {
  //         res.json({
  //             error: `Não foi encontrado usuário com email: ${email}`,
  //         });
  //     }
  // },

  // async createUser(req: NextApiRequest, res: NextApiResponse) {
  //     try {
  //         const { name, email, password } = req.body;
  //         let user = await prisma.user.findUnique({ where: { email: email } });
  //         if (user !== null) {
  //             return res.status(200).json({
  //                 warning: "Existe um usuário cadastrado com esse email.",
  //             });
  //         }
  //         user = await prisma.user.create({ data: { email, name, password } });
  //         return res.status(201).json(user);
  //     } catch (error) {
  //         return res.status(200).send({ error: error });
  //     }
  // },

  // async findAllUsers(req: NextApiRequest, res: NextApiResponse) {
  //     const user = await prisma.user.findMany();
  //     return res.json(user);
  // },

  // async updateUser(req: NextApiRequest, res: NextApiResponse) {
  //     const { id } = req.params;
  //     const { name, email, password } = req.body;
  //     try {
  //         let user = await prisma.user.findUnique({ where: { id: Number(id) } });
  //         if (!user) {
  //             return res.json({
  //                 warning: "Usuário não cadastrado.",
  //             });
  //         }

  //         user = await prisma.user.update({
  //             where: { id: Number(id) },
  //             data: { name, email, password },
  //         });
  //         res.json(user);
  //     } catch (error) {
  //         res.json({
  //             error: `User with id ${id} does not exist in the database`,
  //         });
  //     }
  // },

  // async deleteUser(req: NextApiRequest, res: NextApiResponse) {
  //     const { id } = req.params;
  //     let user = await prisma.user.findUnique({ where: { id: Number(id) } });
  //     if (!user) {
  //         return res.json({
  //             warning: `Não existe um usuário cadastrado com o id ${id}.`,
  //         });
  //     }
  //     user = await prisma.user.delete({
  //         where: { id: Number(id) },
  //     });
  //     return res.json({
  //         message: `Usuário com id ${id} foi deletado permanentemente.`,
  //     });
  // },
  // }
}
