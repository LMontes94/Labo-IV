// Configurar la escena
const scene = new THREE.Scene();

// Configurar la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configurar el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear una geometría (por ejemplo, un cubo)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.BoxGeometry();
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Color rojo
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(2, 0, 0); // Coloca el segundo cubo 2 unidades a la derecha del primer cubo

// Agregar el cubo a la escena
scene.add(cube);
scene.add(cube2);

// Animación
// Animación
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Rota el segundo cubo en sentido contrario
    cube2.rotation.x -= 0.01;
    cube2.rotation.y -= 0.01;

    renderer.render(scene, camera);
};

animate();

