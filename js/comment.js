/* // 1: add event handler
document.getElementById('comment-submit').addEventListener('click', function () {
               //2: get user comment
               const commentBox = document.getElementById('new-text');
               const userComment = commentBox.value;

               // 3: Create comment paragraph
               const p = document.createElement('p');
               p.innerText = userComment;

               // 4: apppend comment
               const commentContainer = document.getElementById('comment-container');

               commentContainer.appendChild(p)

               // 5: Clean the comment box'
               commentBox.value = '';

               
}) */

document.getElementById('postBTN').addEventListener('click', function() {
               const newComment = document.getElementById('new-comment');
               const newC = newComment.value;
               
               // create element and append text
               const p = document.createElement('p');
               p.innerText = newC

               const location = document.getElementById('comment-container');
               location.appendChild(p)

               // clear comment box 
               newComment.value = '';

})


















