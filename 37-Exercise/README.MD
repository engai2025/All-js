
 # Js_Exercise_37
 
 ***
 
 ## Developer Name : Eng Abdirahman Ai
 
 ***
 
 ## Group A
 
 ***
 [github Link](https://github.com/engai2025/All-js)
 
 ***
 
 ## Code
 
 ~~~ Javascript
 
   <h2>Exercise 37 Html</h2>
 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blog Post App</title>
  <style>
    body {
      font-family: Arial;
      max-width: 600px;
      margin: auto;
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
    }
    button {
      padding: 10px 20px;
      background-color: green;
      color: white;
      border: none;
    }
    .post {
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 15px;
      border-radius: 8px;
    }
    .post img {
      max-width: 100%;
      border-radius: 6px;
    }
  </style>
</head>
<body>

  <h2>Samee Blog Post</h2>

  <input type="text" id="title" placeholder="Geli Cinwaanka">
  <input type="text" id="imageUrl" placeholder="Geli URL-ka Sawirka">
  <textarea id="description" placeholder="Geli Sharaxaada" rows="4"></textarea>
  <button onclick="savePost()">Kaydi Post</button>

  <h3>Posts-kaaga</h3>
  <div id="postsContainer"></div>

  <script src="main.js"></script>
  </body>
  </html>

   <h2>Exercise 37 JavaScript</h2>
 
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
 ~~~
 
 
  
 
 ## Output
 
 ***
 ## Defualt
 ![Output The Code](../37-Exercise/Assets/Capture1.PNG)

 #  Result
 ![Output The Code](../37-Exercise/Assets/Capture2.PNG)
 
 
 
 
 
 ***
 
  
 
 ## Programming language used
 
 ***
 
 |Programming Language |Framworke | Database
 |:-------------------|:----------|:--------
 |Html                |0          |0
 |JavaScript          |0          |0
 
 ***
 
 ## Task
 
 - [x] Done
 