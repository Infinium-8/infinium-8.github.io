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
