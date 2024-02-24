
document.addEventListener("DOMContentLoaded", function () {
    const universe = document.querySelector('.universe');
    const numStars = 300;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('stars');
        star.style.top = `${Math.floor(Math.random() * 100)}%`;
        star.style.left = `${Math.floor(Math.random() * 100)}%`;
        star.style.animationDelay = `-${Math.random() * 10}s`;
        universe.appendChild(star);
    }
});


const worldContainer = document.getElementById('world-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, worldContainer.clientWidth / worldContainer.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(worldContainer.clientWidth, worldContainer.clientHeight);
worldContainer.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const texture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1024px-Earth_Eastern_Hemisphere.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

camera.position.z = 15;

const animateWorld = function () {
    requestAnimationFrame(animateWorld);

    earth.rotation.y += 0.005;

    renderer.render(scene, camera);
};

animateWorld();

