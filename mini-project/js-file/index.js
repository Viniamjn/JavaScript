//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
                     .then(response=>response.json())
                     .then(users => {
                         let listContainer = document.getElementById('userListContainer');

                         users.forEach(user => {
                             const userLi = document.createElement('li');
                             const userDiv = document.createElement('div');
                             const userP = document.createElement('p');

                             userP.innerHTML = `<span>ID: ${user.id}</span><span>Name: ${user.name}</span>`;

                             const buttonLink=document.createElement('button');
                             const userLink=document.createElement('a');
                             userLink.href = `user-details.html?id=${user.id}`;
                             buttonLink.innerText=`User Details`;

                             userLink.appendChild(buttonLink);
                             userDiv.appendChild(userP);
                             userDiv.appendChild(userLink);
                             userLi.appendChild(userDiv);
                             listContainer.appendChild(userLi);

                         })
                     })