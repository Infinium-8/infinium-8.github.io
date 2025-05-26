  const articlesPerPage = 4;
  let currentPage = 1;
  let posts = [];

  async function loadPosts() {
    const res = await fetch('posts.json');
    posts = await res.json();

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    showPage(currentPage);
  }

  function showPage(page) {
    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const visiblePosts = posts.slice(start, end);

    const container = document.getElementById('blog-posts');
    container.innerHTML = '';

    visiblePosts.forEach(post => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-12 col-md-6 col-lg-6 mb-4';
      
        col.innerHTML = `
          <div class="article">
            <div class="article-img">
                <img src="posts${post.image}">
            </div>
            <div class="article-title">
                <h4>${post.title}</h4>
            </div>
            <div class="article-description">
                ${post.description}
                <p class="go"><a class="btn btn-dark" href="posts/${post.date}/${post.filename}">Read Article</a></p>
            </div>
          </div>
        `;
      
        container.appendChild(col);
      });

    updatePaginationButtons();
  }

  function updatePaginationButtons() {
    const totalPages = Math.ceil(posts.length / articlesPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.onclick = () => {
        currentPage = i;
        showPage(currentPage);
      };

      if (i === currentPage) {
        btn.style.fontWeight = 'bold';
      }

      pagination.appendChild(btn);
    }
  }

  loadPosts();

  /**
   
   document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('article-container');
    let articles = document.querySelectorAll('#article-container .article');
    let articlesPerPage = 4;
    let currentArticle = articlesPerPage;
    let isLoading = false;

    for (let i = articlesPerPage; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    if(articles.length = 4) {
        articlesPerPage = 2      
    }   

    window.addEventListener('scroll', function () {

        let containerBottom = container.getBoundingClientRect().bottom;
        let windowHeight = window.innerHeight;

        if (containerBottom + 150 <= windowHeight && !isLoading) {
            isLoading = true;

            setTimeout(() => {
                
                for (let i = currentArticle; i < currentArticle + articlesPerPage && i < articles.length; i++) {   
                    articles[i].style.display = 'block';
                }

                currentArticle += articlesPerPage;
                isLoading = false; 
            
                if (currentArticle >= articles.length) {
                    window.removeEventListener('scroll', arguments.callee);
                }
            }, 2000);
        }
    });
});

*/