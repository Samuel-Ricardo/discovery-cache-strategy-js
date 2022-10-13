import { Request } from "express";
import { cache_actions as cache } from "cache";
import { findByCep } from "client/via_cep_client";

export async function find(req: Request){
    const {cep} = req.params;
    const cep_data = cache?.get(cep) || findByCep(cep);
    cache?.save(cep, cep_data, true)
    return cep_data;
}