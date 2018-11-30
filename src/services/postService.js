import Post from '../models/Post';
import Comment from '../models/Comment';
import { apiService } from './apiService';

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
        return apiService.get('posts')
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
    fetchSinglePost(type, postId) {
        return apiService.get(`${type}/${postId}`)
            .then((postObj) => {
                const { videoUrl, text, imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = postObj;
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
            })
    }
    fetchComments(postId) {
        return apiService.get(`comments?postId=${postId}`)
            .then((commentObj) => {
                return commentObj.map((comment) => {
                    const { id, dateCreated, body, postId, authorName, authorId } = comment;
                    return new Comment(id, dateCreated, body, postId, authorName, authorId);
                })
            })
    }
    postData(queryString, inputData) {
        return apiService.post(queryString, inputData);
    }
}
export const postService = new PostService();


