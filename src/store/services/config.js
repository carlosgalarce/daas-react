// eslint-disable-next-line no-undef
export const SCHEDULE_API_URL = process.env.NODE_ENV === 'production' ? 'https://schedule.aclaro.ai/ea/index.php/api/v1' : 'https://schedule.aclaro.ai/ea/index.php/api/v1';
export const CORE_API_URL = process.env.NODE_ENV === 'production' ? 'https://core.aclaro.ai/api/VINSupport' : 'https://core.aclaro.ai/api/VINSupport';
export const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic Y2FybG9zLmdhbGFyY2U6RWRxQ3lOcE1pWXlQQlE0QkhacTNFUXB6'
};