// eslint-disable-next-line no-undef
export const SCHEDULE_API_URL = process.env.NODE_ENV === 'production' ? 'https://schedule.aclaro.ai/ea/index.php/api/v1' : 'https://schedule.aclaro.ai/ea/index.php/api/v1';
export const EASCHEDULE_API_URL = process.env.NODE_ENV === 'production' ? 'https://easchedule.aclaro.ai/api' : 'https://easchedule.aclaro.ai/api';
export const CORE_API_URL = process.env.NODE_ENV === 'production' ? 'https://core.aclaro.ai/api' : 'https://core.aclaro.ai/api';
export const AUTH0_URL = process.env.NODE_ENV === 'production' ? 'https://aclaro.auth0.com' : 'https://aclaro.auth0.com';
export const AUTH0_API_URL = process.env.NODE_ENV === 'production' ? 'https://aclaro.auth0.com/api/v2' : 'https://aclaro.auth0.com/api/v2';
export const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic Y2FybG9zLmdhbGFyY2U6RWRxQ3lOcE1pWXlQQlE0QkhacTNFUXB6'
};
export const JSON_TOKEN = 'abc%40%23%24%25%5E123456789RTRTRRVBV';
export const CLIENT_ID = 'md0jI24Z6LiQMoVbl8vdFTJWWAm7R1UE';
export const CLIENT_ID_2 = 'Ze0bUXGLrMVOGQbBcgv2OoJoEcSigprp';
export const CLIENT_SECRET = 'pZmyr8pNzDju4EPVn2wokSrT1HjdtJsjqV7yNPfTV72lwf3wTHW1JntwkU3NdYAO';
export const CLIENT_SECRET_2 = 'OJG-PDvyNFQWMTxgbm6UBt3oNeKz1yFp9xipKMWYHOb3ov8q4JxybuMFXS377AU4';
export const AUDIENCE = 'https://aclaro.auth0.com/api/v2/';
export const GRANT_TYPE = 'client_credentials';


