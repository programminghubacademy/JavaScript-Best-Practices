async function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve({ id: 1, name: 'John' });
        }, 1000);
    });
    }
    
    async function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve([
            { userId: userId, postId: 1, content: 'Post 1' },
            { userId: userId, postId: 2, content: 'Post 2' },
        ]);
        }, 1000);
    });
    }
    
    async function getComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve([
            { postId: postId, commentId: 1, text: 'Great post!' },
            { postId: postId, commentId: 2, text: 'Thanks for sharing' },
        ]);
        }, 1000);
    });
    }
    
    async function fetchData() {
    try {
        const user = await getUser();
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].postId);
        console.log(comments);
    } catch (error) {
        console.error(error);
    }
    }
    
    fetchData();
    