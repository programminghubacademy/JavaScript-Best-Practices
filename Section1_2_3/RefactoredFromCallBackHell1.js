//   Refactored with use of Promises

function getUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John' });
      }, 1000);
    });
  }
  
  function getPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { userId: userId,postId: 1, content: 'Post 1' },
          {  userId: userId, postId: 2, content: 'Post 2' },
        ]);
      }, 1000);
    });
  }
  
  function getComments(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { postId: postId,commentId: 1, text: 'Great post!' },
          { postId: postId, commentId: 2, text: 'Thanks for sharing' },
        ]);
      }, 1000);
    });
  }
  
//   Here we use more than 1 then, which again can be optimised further, check RefactoredFromCallBackHell2.js
  getUser()
    .then((user) => getPosts(user.id))
    .then((posts) => getComments(posts[0].postId))
    .then((comments) => console.log(comments))
    .catch((error) => console.error(error));