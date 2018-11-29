import Post from '../models/Post';
import { BITBOOK_API_BASE_URL } from '../shared/constants';

class PostService {

    constructor() {
        this.data = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }
    }

    fetchPosts() {
        return fetch(`${BITBOOK_API_BASE_URL}/posts`, this.data)
            .then((response) => response.json())
            .then((postObj) => postObj.map((post) => {
                const { videoUrl, text, imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                let content;
                if (videoUrl) {
                    content = videoUrl;
                }
                if (text) {
                    content = text;
                }
                if (imageUrl) {
                    content = imageUrl;
                }

                return new Post(content, id, dateCreated, userId, userDisplayName, type, commentsNum);
            }))
    };

    postData(type, inputData = "") {
        // Default options are marked with *
        return fetch(`${BITBOOK_API_BASE_URL}/${type}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            },
            body: JSON.stringify(inputData), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses response to JSON
    }

}

export const postService = new PostService();


