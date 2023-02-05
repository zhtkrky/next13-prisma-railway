import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type dataProps = {
  title: string;
  content: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body as dataProps;
  try {
    const data = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
