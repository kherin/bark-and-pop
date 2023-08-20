import * as THREE from "three";
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 1;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap = true;
document.body.appendChild(renderer.domElement);

// Create a cardboard box geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Load cardboard texture
const loader = new THREE.TextureLoader();
const cardboardTexture = loader.load("textures/cardboard.jpg"); // Replace with your cardboard texture image

// Create a material with the cardboard texture
const material = new THREE.MeshBasicMaterial({ map: cardboardTexture });

// Create a mesh (box)
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Create an animation function
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the box
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
};

// Call the animate function
animate();
