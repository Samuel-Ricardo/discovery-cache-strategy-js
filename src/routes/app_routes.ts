import { BASE_URL } from "config/route";
import { findByCep } from "controller/cep";
import { Router } from "express";

const router = Router(); 

router.get(BASE_URL+"cep/:cep", findByCep);

export default router;