function getUser(callback) {
    setTimeout(() => {
      callback({ id: 1, name: 'John' });
    }, 1000);
  }
  
function getPosts(userId, callback) {
  setTimeout(() => {
    callback([
      { postId: 1, content: 'Post 1' },
      { postId: 2, content: 'Post 2' },
    ]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    callback([
      { commentId: 1, text: 'Great post!' },
      { commentId: 2, text: 'Thanks for sharing' },
    ]);
  }, 1000);
}
  
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].postId, (comments) => {
      console.log(comments);
    });
  });
});