const ENV = process.env;

export const VIA_CEP_URI = (cep: string) => `https://viacep.com.br/ws${cep}/json/`

export const PORT = ENV.PORT || 3000;

export const TIME_TO_LEAVE:number = ENV.TTL ? Number(ENV.TTL) : 60;
export const CACHE_SCHEDULER = ENV.CACHE_SCHEDULER; 
export const REDIS_ENABLED:boolean = ENV.REDIS_ENABLED ? Boolean(ENV.REDIS_ENABLED) : false;
export const REDIS_URL = ENV.REDIS_URL ? ENV.REDIS_URL : 'localhost:6379';