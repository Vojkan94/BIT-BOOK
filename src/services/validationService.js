class ValidationService {

    validateVideoPost(url) {
        if (url !== undefined || url !== '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length === 11) {
                return `https://www.youtube.com/embed/${match[2]}?autoplay=0`;
            }
            else {
                return false;
            }
        }
    }

    validateImagePost(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.match(re)
    }

}

export const validateService = new ValidationService();

