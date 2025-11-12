const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const saveBtn = document.getElementById("saveBtn");
const postsDiv = document.getElementById("posts");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

// 🟢 Show posts when page loads
displayPosts();

saveBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) return alert("Please enter title and content!");

  const post = {
    id: Date.now(),
    title,
    content
  };

  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
  titleInput.value = "";
  contentInput.value = "";
  displayPosts();
});

// 🟣 Display all posts
function displayPosts() {
  postsDiv.innerHTML = "";
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="editPost(${post.id})">✏️ Edit</button>
      <button onclick="deletePost(${post.id})">🗑️ Delete</button>
    `;
    postsDiv.appendChild(div);
  });
}

// 🟠 Delete a post
function deletePost(id) {
  posts = posts.filter(p => p.id !== id);
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}

// 🔵 Edit a post
function editPost(id) {
  const post = posts.find(p => p.id === id);
  titleInput.value = post.title;
  contentInput.value = post.content;
  deletePost(id);
}
