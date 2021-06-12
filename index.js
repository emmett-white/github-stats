const showStats = async (git_name) => {
    git_name = document.querySelector('.username').value;

    const slider = document.querySelector('[type=range]');

    if (!git_name) {
        return;
    }

    const img = document.createElement('img');
    
    img.src = `https://github-readme-stats.vercel.app/api?username=${git_name}&show_icons=true&theme=radical`;
    img.style.width = '150px';
    img.setAttribute("class", "image")

    if (document.querySelector('.image') === null) {
        document.querySelector('.body').appendChild(img);
    } else {
        document.querySelector('.image').src = img.src;
    }
    
    
    slider.style.display = 'block';
    slider.addEventListener('input', (e) => {
        img.style.width = `${e.target.value}px`;
    });
};