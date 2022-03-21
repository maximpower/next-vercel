// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  name: string;
  ok: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  res.status(200).json({ name:'Anselmo', ok: true })
}
