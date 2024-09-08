//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання,
// при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const userId = getQueryParam('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(userDetails => {

        const userDetailsContainer = document.getElementById('userDetailsContainer');


        userDetailsContainer.innerHTML = `
      <h2>${userDetails.name}</h2>
      <p><strong>Email:</strong> ${userDetails.email}</p>
      <p><strong>Phone:</strong> ${userDetails.phone}</p>
      <p><strong>Website:</strong> ${userDetails.website}</p>
      <p><strong>Company:</strong> ${userDetails.company.name}</p>
      <p><strong>Address:</strong> ${userDetails.address.street}, ${userDetails.address.city}</p>
`;
        const backButton = document.getElementById('back-button');
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

    });

const fetchPostsBtn = document.getElementById('fetchPostsBtn');
const postList = document.getElementById('postList');

fetchPostsBtn.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            postList.innerHTML = '';
            posts.forEach(post => {
                const postLi = document.createElement('li');

                const postLink = document.createElement('a');
                postLink.href = `post-details.html?postId=${post.id}`;
                postLink.textContent = post.title;

                postLi.appendChild(postLink);
                postList.appendChild(postLi);
            });
        });
});