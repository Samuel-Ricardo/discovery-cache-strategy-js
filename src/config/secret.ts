const ENV = process.env;

export const VIA_CEP_URI = (cep: string) => `https://viacep.com.br/ws${cep}/json/`

export const TIME_TO_LEAVE = ENV.TTL ? ENV.TTL : 60;
export const CACHE_SCHEDULER = ENV.CACHE_SCHEDULER; 
export const REDIS_ENABLED = ENV.REDIS_ENABLED ? ENV.REDIS_ENABLED : false;