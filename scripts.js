document.addEventListener('DOMContentLoaded', async function() {
    if (window.location.pathname.includes('home.html')) {
        try {
            const recentResponse = await fetch('/api/works/recent');
            const popularResponse = await fetch('/api/works/popular');
            
            if (!recentResponse.ok || !popularResponse.ok) {
                throw new Error('Erro ao carregar trabalhos');
            }

            const recentWorks = await recentResponse.json();
            const popularWorks = await popularResponse.json();

            const recentWorksList = document.getElementById('recent-works');
            const popularWorksList = document.getElementById('popular-works');

            recentWorks.forEach(work => {
                const listItem = document.createElement('li');
                listItem.textContent = work.title;
                recentWorksList.appendChild(listItem);
            });

            popularWorks.forEach(work => {
                const listItem = document.createElement('li');
                listItem.textContent = work.title;
                popularWorksList.appendChild(listItem);
            });

        } catch (error) {
            console.error('Erro ao carregar trabalhos:', error);
        }
    }

    document.getElementById('logout')?.addEventListener('click', function() {
        localStorage.removeItem('token');
        window.location.href = 'login.html'; // Redirecionar para a página de login
    });
});
