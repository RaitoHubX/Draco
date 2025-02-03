* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: black;
    color: red;
    text-align: center;
    overflow: hidden;
}

canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.container {
    position: relative;
    top: 40vh;
}

.title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.stats {
    position: absolute;
    font-size: 1.5rem;
}

.left {
    left: 10%;
    top: -40px;
}

.right {
    right: 10%;
    top: -40px;
}

.discord-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid white;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    transition: 0.3s;
}

.discord-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}
