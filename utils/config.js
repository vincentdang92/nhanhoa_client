export const PUBLIC_APIS = ['/auth/login','/auth/logout'];

export const TOKEN_KEY = 'nsa_token_key';
export const ACCESS_TOKEN = 'nsa_access_token';

export const DATE_FILTER_FORMAT = 'DD-MM-YYYY';
export const DATE_FILTER_FORMAT_NEW = 'YYYY-MM-DD';
export const DATE_DISPLAY_FORMAT = 'DD/MM/YYYY';
export const FULL_DATE_DISPLAY_FORMAT = 'DD/MM/YYYY HH:mm:ss';
export const BASE_DATE_FORMAT = 'YYYY-MM-DD';
export const FULL_BASE_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const PAGE_SIZE = 'nsa_page_size';
export const PAGINATION = 30;

/**
 * Set page size to localStorage
 * @param {Object}
 */
export const setPageSize = (page_size) => {
  if (!page_size) return PAGINATION;
  window.localStorage.setItem(PAGE_SIZE, page_size);
}

/**
 * Get page size from localStorage
 */
// export const getPageSize = () => window.localStorage.getItem(PAGE_SIZE)?? PAGINATION
export const getPageSize = () => 20; //window.localStorage.getItem(PAGE_SIZE)?? PAGINATION