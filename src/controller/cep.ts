import { Request, Response } from "express"
import { find } from "service"

export const findByCep = async (req: Request, res: Response) => res.json(await find(req))