import axios from "axios"
import { ICep } from "@type"
import { VIA_CEP_URI } from "../config/secret"

export const findByCep = async (cep:string) => {
    console.info(`Fiding CEP data from external API | CEP - [${cep}] |`)

    let cep_result:ICep | null = null;

    await axios.get(VIA_CEP_URI(cep)).
        then((response) => {
            cep_result = {...response.data}
        }).
        catch((err) => {
            console.error(`Error on call ViaCep API to CEP - [ ${cep} ]`);
            console.error(err);
        })
    return cep_result;
}