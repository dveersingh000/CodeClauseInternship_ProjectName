document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            title: "The Rise of Electric Vehicles",
            image: "https://media.istockphoto.com/id/1359803303/photo/clean-energy-logistics-ideas.webp?b=1&s=170667a&w=0&k=20&c=3BvKi_ZgnPNzChrdoca-NIVaIgrjuTq4tCs6TBhdWnc=", 
            content: `
                Electric vehicles (EVs) are rapidly gaining popularity as a sustainable alternative to traditional gasoline-powered cars. 
                With advancements in battery technology and a growing network of charging stations, EVs are becoming more practical and accessible to the general public.
                Governments around the world are also supporting the transition to electric mobility through incentives and subsidies.
            `
        },
        {
            title: "The Future of Artificial Intelligence",
            image: "https://plus.unsplash.com/premium_photo-1683121437372-1ee095002e67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRoZSUyMEZ1dHVyZSUyMG9mJTIwQXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D", 
            content: `
                Artificial Intelligence (AI) is transforming various industries by automating tasks, enhancing decision-making, and providing new insights through data analysis.
                From self-driving cars to advanced medical diagnostics, AI is poised to revolutionize the way we live and work. 
                As AI continues to evolve, ethical considerations and regulatory frameworks will play a crucial role in ensuring its responsible development and deployment.
            `
        },
        {
            title: "The Evolution of Web Development",
            image: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D", 
            content: `
                Web development has come a long way since the early days of the internet. Modern web technologies enable developers to create highly interactive and dynamic websites.
                Frameworks such as React, Angular, and Vue.js have revolutionized front-end development, while back-end technologies like Node.js and Django have streamlined server-side programming.
                The future of web development looks promising with the advent of progressive web apps and the continuous evolution of web standards.
            `
        },
        {
            title: "The Importance of Cybersecurity",
            image: "https://media.istockphoto.com/id/1150196769/photo/data-protection-privacy-concept-gdpr-eu-cyber-security-network-business-man-protecting-data.webp?b=1&s=170667a&w=0&k=20&c=hbHxMNPpE9WEjMZRUuk5q_-PW72UbuqU6F-ozM7NynU=", 
            content: `
                As our reliance on digital technologies grows, so does the importance of cybersecurity. Cyber threats are becoming more sophisticated, targeting both individuals and organizations.
                Implementing robust security measures and staying informed about the latest threats are essential to protect sensitive information and maintain privacy.
                Investing in cybersecurity education and infrastructure is crucial for safeguarding our digital future.
            `
        }
    ];

    const articlesSection = document.getElementById('articles');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}">
            <p>${article.content}</p>
            <form>
                <label for="comment-${article.title}">Leave a comment:</label>
                <textarea id="comment-${article.title}" name="comment"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div class="comments">
                <!-- Comments will be displayed here -->
            </div>
        `;
        articlesSection.appendChild(articleElement);

        const form = articleElement.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentText = form.querySelector('textarea').value;
            const commentsDiv = articleElement.querySelector('.comments');
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentsDiv.appendChild(newComment);
            form.reset();
        });
    });
});
