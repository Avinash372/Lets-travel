async function getPosts() {
    return await fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data) => data);
}

document.addEventListener("DOMContentLoaded", async () => {
    let posts = await getPosts();
    let articles = document.querySelector(".articles-list tbody");
    articles.innerHTML = "";
    posts.forEach((post) => {
        let postHTML = `<tr>
                  <td>${post.id}</td>
                  <td>${post.title}</td>
                  <td>${post.date}</td>
                  <td>${post.country}</td>
                  <td>
                      <button
                          class="btn btn-link p-0 text-decoration-none"
                      >
                          edit
                      </button>
                  </td>
                  <td>
                      <button
                          class="btn btn-link p-0 text-decoration-none"
                      >
                          X
                      </button>
                  </td>
              </tr>`;
        articles.insertAdjacentHTML("beforeend", postHTML);
    });
    // CREATE POST
    let addPostBtn = document.querySelector(".add-post");
    let createPostBtn = document.querySelector("#v-pills-add-post-tab");

    addPostBtn.addEventListener("click", () => {
        createPostBtn.click();
    });
});
