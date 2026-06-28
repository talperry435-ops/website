document.addEventListener('DOMContentLoaded', async function () {
    await loadSharedHeader();
    setActiveNavLink();
    await enterName();
});

function loadSharedHeader() {
    var placeForHeader = document.getElementById('shared-header');
    if (!placeForHeader) {
        return Promise.resolve();
    }

    return fetch('/header.html')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Header load failed');
            }
            return response.text();
        })
        .then(function (html) {
            placeForHeader.innerHTML = html;
        });
}


function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');

    links.forEach(function (link) {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

function ToggleMaze(){
    const mazeImage = document.getElementById('maze-image');
    const mazeButton = document.getElementById('maze-button');

    if (mazeButton.textContent.trim().toLowerCase() === "show unsolved maze") {
        mazeImage.src = "image/maze.png";
        mazeButton.textContent = "reveal solution";
    } else {
        mazeImage.src = "image/solvedmaze.png";
        mazeButton.textContent = "Show Unsolved Maze";
    }
}

function ToggleFindObject(){
    const findTheObjectImage = document.querySelectorAll('main img')[2];
    const findTheObjectButton = document.getElementById('fto-button');

    if (!findTheObjectImage || !findTheObjectButton) {
        return;
    }

    if (findTheObjectImage.src.endsWith('fto-answer.png')) {
        findTheObjectImage.src = 'image/findtheobject.png';
        findTheObjectButton.textContent = 'reveal answer';
    } else {
        findTheObjectImage.src = 'image/fto-answer.png';
        findTheObjectButton.textContent = 'show unsolved image';
    }
}

async function returtwelve() {
    const twelveElement = document.getElementById('show12');

    if (!twelveElement) {
        return;
    }

    try {
        const response = await fetch('/api/value');

        if (!response.ok) {
            throw new Error('Failed to load value');
        }

        const text = await response.text();
        twelveElement.textContent = text;
    } catch (error) {
        twelveElement.textContent = 'Could not load value';
    }
}

function ReturnTwelve() {
    return returtwelve();
}

async function enterName() {
    const nameInput = document.getElementById('nameInput');
    const helloElement = document.getElementById('hello');

    if (!nameInput || !helloElement) {
        return;
    }

    const name = nameInput.value.trim();
    if (!name) {
        helloElement.textContent = 'Please enter your name.';
        return;
    }

    try {
        const response = await fetch('/api/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        });

        if (!response.ok) {
            throw new Error('Failed to send name');
        }

        const data = await response.json();
        helloElement.textContent = `Hello, ${data.name}!`;
    } catch (error) {
        helloElement.textContent = 'Could not send name to server.';
    }
}