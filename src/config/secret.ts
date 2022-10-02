const ENV = process.env;

export const VIA_CEP_URI = (cep: string) => `https://viacep.com.br/ws${cep}/json/`