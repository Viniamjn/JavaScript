//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const postsId = getQueryParam('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postsId}`)
    .then(response=>response.json())
    .then(postsDetails=>{
        const displayObjectDetails = (obj) => {
            const postsList = document.getElementById('postList');
            postsList.innerHTML = '';

            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];
                    postsList.innerHTML += `<p><span>${key}:</span> ${value}</p>`;
                }
            }
        };
        displayObjectDetails(postsDetails);
    })

        fetch(`https://jsonplaceholder.typicode.com/posts/${postsId}/comments`)
            .then(response=>response.json())
            .then(commentsPost=>{
                const commentsContainer=document.getElementById('commentsContainer');
                const commentsList= document.createElement(`ul`);

                commentsContainer.innerHTML = '';

                commentsPost.forEach(comment=>{
                    const commentsLi= document.createElement(`li`);
                    for (const commentKey in comment) {
                        if(comment.hasOwnProperty(commentKey)){
                            const value=comment[commentKey];
                            commentsLi.innerHTML+=`<p><span>${commentKey}:</span>${value}</p>`
                        }

                    }
                    commentsList.appendChild(commentsLi);
                    commentsContainer.appendChild(commentsList);
                })




            })

