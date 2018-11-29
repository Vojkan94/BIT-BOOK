import { BITBOOK_API_BASE_URL } from '../shared/constants'

export const apiService = (method, queryString) => {

    const option = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        }
    }
    return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)
        .then((response) => response.json())
}