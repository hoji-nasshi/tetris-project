window.addEventListener('load', init);

function init() {
  var state = initStats();

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  // レンダラーのサイズを変更
  renderer.setSize(window.innerWidth, window.innerHeight);
  // レンダラーのカラーを変更
  renderer.setClearColor(new THREE.Color(0x000000));

  // シーンを作成
  const scene = new THREE.Scene();

  var axes = new THREE.AxesHelper(200);
  scene.add(axes);

  const fov = 60;
  const fovRad = (fov / 2) * (Math.PI / 180);// 視野角をラジアンに変換
  const dist = (window.innerHeight / 2) / Math.tan(fovRad);// ウィンドウぴったりのカメラ距離
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(
    fov, window.innerWidth / window.innerHeight, 1, dist * 2);
  camera.position.z = dist
  camera.position.set(-100, -600, 400);

  var controls = new THREE.OrbitControls(camera);

  // 箱を作成
  const geometry = new THREE.BoxGeometry(50, 50, 50);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
  });
  const box = new THREE.Mesh(geometry, material);

  box.position.x = 0;
  box.position.y = 0;
  box.position.z = 0;
  scene.add(box);

  // 球を作成
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000ff
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);
  sphere.position.x = 60

  // 地面を作成
  var planeGeometry = new THREE.PlaneGeometry(200, 100);
  var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xcccccc
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);

  scene.add(plane)

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(
    0xffffff
  );
  directionalLight.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight);

  step = 0;
  tick();//ループ処理

  function tick() {
    state.update();
    step += 0.04;
    sphere.position.x = 60 + (10 * Math.cos(step));
    sphere.position.z = 4 + (10 * Math.abs(Math.sin(step)));
    box.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
    controls.update();
  }
  // 初回実行

}

function initStats() {
  const stats = new Stats(); //フレームレート表示
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.getElementById("Stats-output").appendChild(stats.domElement);
  return stats;
}