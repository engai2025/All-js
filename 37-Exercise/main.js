   // Exercise 37 Post Blog
 function savePost() {
      const title = document.getElementById('title').value;
      const imageUrl = document.getElementById('imageUrl').value;
      const description = document.getElementById('description').value;

      if (!title || !imageUrl || !description) {
        alert("Fadlan buuxi dhammaan meelaha!");
        return;
      }

      const post = { title, imageUrl, description };

      let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      posts.push(post);
      localStorage.setItem('blogPosts', JSON.stringify(posts));

      showPosts(); // Refresh
      document.getElementById('title').value = "";
      document.getElementById('imageUrl').value = "";
      document.getElementById('description').value = "";
    }

    function showPosts() {
      const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      const container = document.getElementById('postsContainer');
      container.innerHTML = "";

      posts.forEach((post, index) => {
        container.innerHTML += `
          <div class="post">
            <h4>${post.title}</h4>
            <img src="${post.imageUrl}" alt="Sawir">
            <p>${post.description}</p>
          </div>
        `;
      });
    }

    // Marka bogga la furo
    showPosts();