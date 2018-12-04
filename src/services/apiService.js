import { BITBOOK_API_BASE_URL } from '../shared/constants';

class ApiService {


    get(queryString) {
        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }
        return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)
            .then((response) => response.json())
    }


    post(queryString, inputData) {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            },
            body: JSON.stringify(inputData)
        }
        return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)
            .then((response) => response.json())
    }


    delete(queryString) {
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }
        return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)

    }

    put(inputData) {
        const option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            },
            body: JSON.stringify(inputData)
        }
        return fetch(`${BITBOOK_API_BASE_URL}/profiles`, option)
    }

    upload(file) {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            },
            body: file
        }
        return fetch(`${BITBOOK_API_BASE_URL}/upload`, option)
    }

}
export const apiService = new ApiService();



