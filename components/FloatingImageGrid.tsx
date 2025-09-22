import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Image URLs for the grid
const imageUrls = [
  "https://kydlabs.imgix.net/a/EV6a080537-d6d2-40e8-a391-aeb9b3721c77/2425e47e-6280-422c-8894-1abeb0937c76.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV0a047ba4-5783-406f-9f4a-9cb9a6eaa9ce/13b8194f-102d-4230-b5d0-b3cd1e44b2d7.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV57e6e061-f41a-4ccd-b38a-376eac130d55/8039962e-8393-4785-a113-770ffa5f0085.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVca3ff1e7-b303-4baa-962b-8405f762653a/bd7332c6-334d-4c07-9d71-d841c08c4dcc.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVdefa5c7f-2cbb-4d37-bbcf-dba83e835914/3d131d95-4a7b-4138-a65a-4abac2a2cc47.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/a/EVf46e13f1-c8d1-41bc-ba25-b12141112421/a3abf750-1437-4fc4-a9cf-7312709bb89a.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVef64d5dc-c888-4d3d-8b51-9096c39b3ca8/5a28903c-530d-4f60-b540-0bfc14d5bbcc.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV8bb0108d-ee49-4b32-8ab5-ba17331ca33d/a731fdae-0c6e-40d0-881d-f1851dbaf235.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVb7486c1b-e668-4162-9258-fd9db843f597/cadec936-a6cc-4f87-9849-d0944361aaa5.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV7daf8c55-d5e9-4468-ac0e-5f071c0fc65c/9b5a2470-017f-4aef-8ee7-a03a74515f0a.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVf6c17d54-b8b3-40a3-81bf-10b37e89bf15/bec5985d-c77f-47ee-8463-3bea700df212.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV67826bae-8e2a-4a9a-bda3-a0e2ceb2c0f4/9497d8d2-ded0-4c9e-b59b-e3afebb33cff.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVaec4cf8e-77f5-4e1a-9369-c52b72ae2d17/e88537cd-8b0a-4f01-82fd-e8ac431fb4fd.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV82f08e72-ec8b-4e67-9550-075282d795db/2eeab4bc-0e46-4609-973c-f2db153caff2.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV32c97eb5-7f31-4670-aaa0-7c60b42f824e/b0fa2f35-46c7-4318-995f-ef35773c2810.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV13b4dee9-2a21-4e82-b1fc-af53ae1a38ad/7f7ef1a9-29d0-4644-a933-930529c4746f.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV16aabb92-cd2b-4b61-a67d-90a5a086ebd1/cd78ecd0-671f-4bb8-9554-33813ffaca41.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV9951cb41-581b-4dca-8ca1-68d03631e6d0/336a6f16-2126-42d0-a47b-2d5c858b60b4.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV7b46f465-a2b6-46cd-9d80-50637d71e6e4/ff0e25de-7ecc-4c35-b75d-665182b3eadb.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/a/EV004d8e28-cff8-4b07-a4d5-d6525f7bbd6f/379f2c20-c4e6-47f9-bef5-13f75d1a99e8.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV84f3720d-12cb-4a7d-a36d-642afcbe414d/db20dcb3-8a3c-4493-abfe-71ff70811480.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV4ae6ec2f-ec4b-4737-81a9-80473e819e5d/0a74fd17-6b3c-4122-99ed-155864ec8d07.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVb41a8390-d0d0-48ae-a376-a983c4eaf7ac/808db49f-d657-4a4d-8a2a-fd0d2145612f.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV7a86b68b-cdb0-4844-b4b9-0c8f3c3a5920/0f012a7c-7830-4959-80e5-f39e7681863b.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV22d2e656-e2e9-410e-9cd2-2c1b4711bd4f/ca06f76d-966d-4f92-a271-09c859549079.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV15550f9b-6d10-4951-bf72-3073e7625dd5/b5e1e12a-9206-4bdd-a9f1-9ac3fcf523a8.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVce9ada32-0e51-4349-9b5d-d44741f5a7eb/1079a7f6-71e3-47ca-884f-b0365bcac75d.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV9418f439-e504-4155-b1f7-beca3756bc72/e9fe55e1-14bf-4c53-a4d1-c10dd83463dd.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV6a835ee3-8227-49d7-9c08-365d6cadeeca/1ed189dc-e45e-466f-abd1-c32708323b6a.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVe4fa8279-5b6d-4f8d-a066-ad252fd8aa06/b9add356-baf1-4eac-b2ae-e2d431e207ad.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVb743608c-42ed-46d6-bf53-2dbdb7849979/b71daaba-7089-4a56-8e96-73bbfdf4548e.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV3ff47bc4-5545-402b-9fd8-63e0ec70c300/bbcb3979-77a3-4763-a38c-7a0cc00c1029.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV9e0e2400-e21f-4a9f-9703-f3415fffaaf1/63b08559-9b76-447d-b525-27249218b49a.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV04f6fb31-0bef-4e7d-a873-bbad9b643f89/669f1d0e-a63f-40bc-bbeb-1e44f69612de.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVb588c441-d3aa-4819-846c-62c2bc4856ce/d506f73e-bb63-4d85-af4e-b58be0a422dd.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV16709dd0-c7b3-4312-99b9-a48b76b1d6f5/9fee3e53-1da4-474e-bf70-655e559b9ed4.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV11b67c6c-23b9-4c61-bd8f-477a51468b79/6c648d73-f111-4b61-b4b2-38e6dc4046ab.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV8510e4c5-5ce4-462b-bc2c-117f5b9fc176/c2aedfdb-35c5-49e7-9d73-9453d0bdcb36.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVadc7473d-d3fd-4278-94cf-3e6532680491/984d8df8-d381-4731-9ad8-eab862c07cfe.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVa6069eea-4e26-4937-8a36-cb19ca5681c8/8f9bba5d-d063-4e99-8bcc-5213e244cd37.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV61f8643f-34b5-4c35-99ed-4a8ac5da9e2f/bd9f8d88-cfe4-4454-b99d-cbc0bcca640a.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV3c21cb97-6632-4d19-a872-2449f9f0083f/33a14d65-940f-451e-9046-33dc79a3f911.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVeacb99e3-9b8a-457a-9930-dd9cbc55d395/4b3cc309-6642-4ab0-b468-0147bf2a6a95.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV924657ae-fbb3-40f9-bac6-edcdab46848f/4db8b667-18e4-4414-921f-41810067acf2.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV06adeefb-eafd-4213-8846-062051c4aa3d/08277093-36ac-4626-8e5c-6235ff588875.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV1307404a-f4c9-48ba-a333-ad45773782d0/98c1840a-d250-445c-a968-0394a970c413.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV1c843787-9d52-45e4-a37b-f90db45ea819/6be3d256-79b8-453f-8742-508f9ce44c0f.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV3f7942f1-bdaa-455e-b19c-0ec7d624077e/1bbc4b08-fd22-48a1-b64c-b5d6404769ef.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV036e1509-78ee-4dc9-b4f9-3107c109f875/bb443bb8-51d3-476e-adb1-443d6330cd0e.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV4e4e7776-75de-4ee6-9705-e434156137c2/402ac892-ab1f-4074-b3a7-ae472e7c45a0.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVddde209f-20ab-4ad9-8a13-e42c08102f43/bb2f9a7b-306c-49e1-95cc-8ae2e84b0c91.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVa724da19-1e1c-4031-9712-cf64cb4608fa/c865e97e-a361-442f-b7ce-63c819a3f773.jpeg?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVcfd2dbd0-11e8-4836-a17a-56dcf50d9f04/bc2211f9-1ff2-440c-a2b8-b1d7fa886dfb.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVba8796ba-b733-4f22-81d4-e05b8c8cc0fa/b8cb6ed9-4f2f-4538-9ee3-36c4dd68490d.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV6a2dd023-0625-482c-90d1-c12ef7351e71/e4c3e338-ac77-4e3f-9fbc-d76c3fc823fa.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EVd43eab7b-560e-4c01-8d45-5b8c5021a2bb/dcb8dec4-191f-4b28-b5a0-5c179b05c14d.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV20df1408-c72b-4b3a-9078-4ca5f63a01c8/99b3f3a8-229f-4982-9712-130f32d82cfa.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV82099c37-d023-4e85-95d5-3168238a39d8/a8fd533e-d6bf-4b1a-a197-da03fd1a8c41.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV68cbc558-288a-458d-9312-7915602d5421/bbcab79d-d512-4a40-bb59-1ebe83b2624f.png?auto=format,compress&q=40&h=1080",
  "https://kydlabs.imgix.net/s/EV5756e8e4-9c0b-4548-823c-7a370fe073d4/98073b09-308a-47a0-9757-fc9d733abc3b.png?auto=format,compress&q=40&h=1080",
  "https://images.unsplash.com/photo-1690212332755-4fe5ac7d032f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJucyUyMG11c2ljfGVufDF8fHx8MTc1NzUzNDU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1610483463775-1ec82f51cdfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY29sb3JmdWwlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NTc1MzQ1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1629426958038-a4cb6e3830a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpY3xlbnwxfHx8fDE3NTc0MTAxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1740459057005-65f000db582f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzU3NTM0NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1632667113863-24e85951b9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJzJTIwYXJ0fGVufDF8fHx8MTc1NzUzNDU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

interface ImageMesh {
  mesh: THREE.Mesh;
  gridPosition: THREE.Vector2; // Grid coordinates (i, j)
  velocity: THREE.Vector3; // Constant drift velocity
  baseVelocity: THREE.Vector3; // Base drift velocity
  gridIndex: { row: number; col: number };
  defaultScale: number; // Base scale for this card
  targetScale: THREE.Vector3; // Target scale for smooth scaling
}

interface FloatingImageGridProps {
  opacity?: number;
  imageScale?: number;
  gridCellSize?: number;
  driftEnabled?: boolean;
  driftIntensity?: number;
  hoverScale?: number;
  hoverDistance?: number;
  ambientLightColor?: string;
  ambientLightIntensity?: number;
  directionalLightIntensity?: number;
}

export function FloatingImageGrid({
  opacity = 1,
  imageScale = 0.7,
  gridCellSize = 90,
  driftEnabled = true,
  driftIntensity = 0.5,
  hoverScale = 2.0,
  hoverDistance = 0.25,
  ambientLightColor = "#fff",
  ambientLightIntensity = 0.8,
  directionalLightIntensity = 0.6,
}: FloatingImageGridProps = {}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.OrthographicCamera>();
  const imageMeshesRef = useRef<ImageMesh[]>([]);
  const animationIdRef = useRef<number>();
  const ambientLightRef = useRef<THREE.AmbientLight>();
  const directionalLightRef = useRef<THREE.DirectionalLight>();
  const [isLoading, setIsLoading] = useState(true);
  const [gridDimensions, setGridDimensions] = useState({
    cols: 1,
    rows: 1,
  });

  // Mouse tracking (similar to Grid.MousePosition and #_targetMousePosition)
  const mousePositionRef = useRef(new THREE.Vector2(0, 0));
  const targetMousePositionRef = useRef(
    new THREE.Vector2(0, 0),
  );

  // Scale system (similar to Card.#_DefaultScale and #_MaxScale)
  const defaultScaleRef = useRef(new THREE.Vector3());
  const maxScaleRef = useRef(new THREE.Vector3());

  // Timing for delta time
  const lastTimeRef = useRef(Date.now());

  // Calculate dynamic grid size based on window dimensions
  const calculateGridSize = () => {
    const cols = Math.max(
      1,
      Math.floor(window.innerWidth / gridCellSize),
    );
    const rows = Math.max(
      1,
      Math.floor(window.innerHeight / gridCellSize),
    );
    return { cols, rows };
  };

  // Calculate default scale for cards (similar to Card.SetScale())
  const calculateDefaultScale = (
    cols: number,
    rows: number,
  ) => {
    if (!cameraRef.current) return 1;

    const camera = cameraRef.current;
    const viewWidth = camera.right - camera.left;
    const viewHeight = camera.top - camera.bottom;

    const columnWidth = viewWidth / cols;
    const rowHeight = viewHeight / rows;

    // Use the smaller dimension to ensure cards fit properly, apply imageScale
    return Math.min(columnWidth, rowHeight) * imageScale;
  };

  // Set scale system (similar to Card.SetScale())
  const setScaleSystem = (cols: number, rows: number) => {
    const defaultScale = calculateDefaultScale(cols, rows);
    defaultScaleRef.current.setScalar(defaultScale);

    // Calculate max scale based on hoverScale prop
    maxScaleRef.current
      .copy(defaultScaleRef.current)
      .multiplyScalar(hoverScale);
  };

  // Map linear function (equivalent to Three.js mapLinear)
  const mapLinear = (
    x: number,
    a1: number,
    a2: number,
    b1: number,
    b2: number,
  ) => {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
  };

  // Set target position for a card (similar to Card.#_setTargetPosition())
  const setTargetPosition = (
    imageMesh: ImageMesh,
    cols: number,
    rows: number,
    defaultScale: number,
  ) => {
    if (!cameraRef.current) return;

    const camera = cameraRef.current;
    const { x: gridX, y: gridY } = imageMesh.gridPosition;

    // No offset - fill the entire grid
    const worldX = mapLinear(
      gridX,
      0,
      cols - 1,
      camera.left,
      camera.right,
    );
    const worldY = mapLinear(
      gridY,
      0,
      rows - 1,
      camera.top,
      camera.bottom,
    );

    imageMesh.mesh.position.set(
      worldX,
      worldY,
      imageMesh.mesh.position.z,
    );
  };

  // Update mouse position (similar to Grid.#_updateMousePos)
  const updateMousePosition = (
    event: MouseEvent | TouchEvent,
  ) => {
    const isMobile = event.type === "touchmove";
    const { clientX, clientY } = isMobile
      ? (event as TouchEvent).changedTouches[0]
      : (event as MouseEvent);

    // Convert to normalized device coordinates [-1, 1]
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;

    targetMousePositionRef.current.set(x, y);
  };

  // Lerp mouse position (similar to Grid.#_lerpMousePosition)
  const lerpMousePosition = (dt: number) => {
    mousePositionRef.current.lerp(
      targetMousePositionRef.current,
      1 - Math.pow(0.001, dt), // Slower lerping for smoother movement
    );
  };

  // Update scale based on mouse distance (similar to Card.#_updateScale)
  const updateScale = (imageMesh: ImageMesh, dt: number) => {
    if (!cameraRef.current) return;

    // Convert mesh world position to normalized device coordinates
    const meshNDC = imageMesh.mesh.position.clone();
    meshNDC.project(cameraRef.current);

    // Calculate distance from mouse to image in NDC space
    const distanceX = mousePositionRef.current.x - meshNDC.x;
    const distanceY = mousePositionRef.current.y - meshNDC.y;

    let distance = Math.sqrt(
      distanceX * distanceX + distanceY * distanceY,
    );

    // Clamp distance to reasonable values to prevent jumping
    distance = Math.min(distance, 2.0);

    // Calculate scale factor (inverse distance with smooth falloff)
    const scaleInfluence = Math.max(
      0,
      (hoverDistance - distance) / hoverDistance,
    );

    // Lerp between default and max scale based on distance
    imageMesh.targetScale.lerpVectors(
      defaultScaleRef.current,
      maxScaleRef.current,
      scaleInfluence,
    );

    // Apply smooth scaling with delta time
    imageMesh.mesh.scale.lerp(
      imageMesh.targetScale,
      1.5 - Math.pow(0.001, dt),
    );

    // Set Z position based on scale influence (much smaller range)
    const targetZ = scaleInfluence * 0.5; // Small Z movement
    imageMesh.mesh.position.z +=
      (targetZ - imageMesh.mesh.position.z) * 0.1;
  };

  // Update all mesh opacities > change to MeshLambertMaterial to get back ambient lighting
  const updateOpacity = () => {
    imageMeshesRef.current.forEach(({ mesh }) => {
      const material = mesh.material as THREE.ShaderMaterial;
      if (material.uniforms?.uOpacity) {
        material.uniforms.uOpacity.value = opacity;
      }
    });
  };

  // Update lighting in real-time
  const updateLighting = () => {
    if (ambientLightRef.current) {
      ambientLightRef.current.color.setHex(
        parseInt(ambientLightColor.replace("#", "0x")),
      );
      ambientLightRef.current.intensity = ambientLightIntensity;
    }
    if (directionalLightRef.current) {
      directionalLightRef.current.intensity =
        directionalLightIntensity;
    }
  };

  // Effect to handle prop changes
  useEffect(() => {
    updateOpacity();
  }, [opacity]);

  useEffect(() => {
    updateLighting();
  }, [
    ambientLightColor,
    ambientLightIntensity,
    directionalLightIntensity,
  ]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Calculate initial grid size
    const initialGrid = calculateGridSize();
    setGridDimensions(initialGrid);

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333);
    sceneRef.current = scene;

    // Use Orthographic camera for better grid control
    const aspect = window.innerWidth / window.innerHeight;
    const viewSize = 8; // Smaller view size for better grid coverage
    const camera = new THREE.OrthographicCamera(
      -viewSize * aspect,
      viewSize * aspect,
      viewSize,
      -viewSize,
      0.1,
      1000,
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize scale system
    setScaleSystem(initialGrid.cols, initialGrid.rows);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2),
    );
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(
      parseInt(ambientLightColor.replace("#", "0x")),
      ambientLightIntensity,
    );
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const directionalLight = new THREE.DirectionalLight(
      0xffffff,
      directionalLightIntensity,
    );
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);
    directionalLightRef.current = directionalLight;

    // Texture loader
    const textureLoader = new THREE.TextureLoader();

    // Create image grid (similar to Grid.#_createCards())
    const createImageGrid = async (
      cols: number,
      rows: number,
    ) => {
      const imageMeshes: ImageMesh[] = [];
      const loadPromises: Promise<void>[] = [];
      const defaultScale = calculateDefaultScale(cols, rows);

      // Create cards in nested loops like the example
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const promise = new Promise<void>((resolve) => {
            const imageIndex =
              (i * rows + j) % imageUrls.length;
            const imageUrl = imageUrls[imageIndex];

            textureLoader.load(
              imageUrl,
              (texture) => {
                // Configure texture
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.wrapS = THREE.ClampToEdgeWrapping;
                texture.wrapT = THREE.ClampToEdgeWrapping;

                // SRGB color space add:
               // texture.colorSpace = THREE.SRGBColorSpace;

                // Create geometry and material. Change to MeshLambertMaterial to get ambient lighting effects (similar to Card.#_createMesh())
                const geometry = new THREE.PlaneGeometry(1, 1);
                const material = new THREE.ShaderMaterial({
                  uniforms: {
                    uTexture: { value: texture },
                    uOpacity: { value: opacity },
                    uRadius: { value: 0.05 }, // Border radius (0.0 to 0.5)
                  },
                  vertexShader: `
                    varying vec2 vUv;
                    void main() {
                      vUv = uv;
                      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                  `,
                  fragmentShader: `
  uniform sampler2D uTexture;
  uniform float uOpacity;
  uniform float uRadius;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Create rounded rectangle mask
    vec2 center = vec2(0.5);
    vec2 dist = abs(uv - center);
    vec2 corner = vec2(0.5) - vec2(uRadius);
    
    float mask = 1.0;
    
    // Check if we're in the corner regions
    if (dist.x > corner.x && dist.y > corner.y) {
      vec2 cornerCenter = corner;
      vec2 cornerDist = dist - cornerCenter;
      float cornerRadius = uRadius;
      float cornerMask = 1.0 - smoothstep(cornerRadius - 0.01, cornerRadius + 0.01, length(cornerDist));
      mask = cornerMask;
    }
    
    // Sample texture
    vec4 color = texture2D(uTexture, uv);
    
    // Create border stroke effect
    float borderWidth = 0.02; // Border thickness
    vec4 borderColor = vec4(1.0, 1.0, 1.0,0.25); // White border with 50% transparency
    
    // Create border by checking if we're close to the edge
    float edgeDistance = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
    
    // Apply border if we're close to edge but still within the rounded rectangle
if (edgeDistance < borderWidth && mask > 0.0) {
  color = mix(color, borderColor, borderColor.a);
}
    
    // Apply mask and opacity
    gl_FragColor = vec4(color.rgb, color.a * mask * uOpacity);
  }
`,
                  transparent: true,
                  side: THREE.DoubleSide,
                  alphaTest: 0.01,
                  lights: false,
                  //colorSpace: THREE.SRGBColorSpace,
                });

                // Create mesh
                const mesh = new THREE.Mesh(geometry, material);

                // Set scale to default scale
                mesh.scale.copy(defaultScaleRef.current);

                // Start at Z = 0
                mesh.position.z = 0;

                scene.add(mesh);

                // Create natural drift velocities (much slower)
                const baseVelocity = new THREE.Vector3(
                  (Math.random() - 0.5) *
                    0.001 *
                    driftIntensity, // Adjustable drift X
                  (Math.random() - 0.5) *
                    0.001 *
                    driftIntensity, // Adjustable drift Y
                  0, // No Z drift
                );

                // Store mesh data
                const imageMesh: ImageMesh = {
                  mesh,
                  gridPosition: new THREE.Vector2(i, j), // Grid coordinates
                  velocity: baseVelocity.clone(),
                  baseVelocity: baseVelocity.clone(),
                  gridIndex: { row: j, col: i },
                  defaultScale,
                  targetScale: new THREE.Vector3().copy(
                    defaultScaleRef.current,
                  ),
                };

                // Set initial target position
                setTargetPosition(
                  imageMesh,
                  cols,
                  rows,
                  defaultScale,
                );

                imageMeshes.push(imageMesh);
                resolve();
              },
              undefined,
              (error) => {
                console.error("Error loading texture:", error);
                resolve(); // Continue even if one image fails
              },
            );
          });

          loadPromises.push(promise);
        }
      }

      await Promise.all(loadPromises);
      imageMeshesRef.current = imageMeshes;
      setIsLoading(false);
    };

    // Resize handler (similar to Grid.resize())
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      const newGrid = calculateGridSize();
      setGridDimensions(newGrid);

      // Update camera
      const aspect = window.innerWidth / window.innerHeight;
      const viewSize = 8;
      cameraRef.current.left = -viewSize * aspect;
      cameraRef.current.right = viewSize * aspect;
      cameraRef.current.top = viewSize;
      cameraRef.current.bottom = -viewSize;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(
        window.innerWidth,
        window.innerHeight,
      );

      // Update scale system
      setScaleSystem(newGrid.cols, newGrid.rows);

      // Recreate grid with new dimensions
      // Clear existing meshes
      imageMeshesRef.current.forEach(({ mesh }) => {
        sceneRef.current?.remove(mesh);
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((material) =>
              material.dispose(),
            );
          } else {
            mesh.material.dispose();
          }
        }
      });

      // Create new grid
      createImageGrid(newGrid.cols, newGrid.rows);
    };

    // Animation loop with delta time (similar to your update system)
    const animate = () => {
      if (
        !sceneRef.current ||
        !cameraRef.current ||
        !rendererRef.current
      )
        return;

      // Calculate delta time
      const currentTime = Date.now();
      const deltaTime =
        (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = currentTime;

      // Update mouse position with smooth lerping
      lerpMousePosition(deltaTime);

      // Update image positions and effects
      imageMeshesRef.current.forEach((imageMesh) => {
        const { mesh, velocity, baseVelocity } = imageMesh;

        // Only apply drift if enabled
        if (driftEnabled) {
          // Calculate mouse influence on velocity (simplified for drift)
          const meshScreenPos = mesh.position
            .clone()
            .project(cameraRef.current);
          const distanceToMouse = Math.sqrt(
            Math.pow(
              meshScreenPos.x -
                targetMousePositionRef.current.x,
              2,
            ) +
              Math.pow(
                meshScreenPos.y -
                  targetMousePositionRef.current.y,
                2,
              ),
          );

          // Mouse influence factor (closer = stronger influence)
          const mouseInfluence = Math.max(
            0,
            1 - distanceToMouse / 1.5,
          );

          // Calculate mouse direction influence (much smaller)
          const mouseForceX =
            (targetMousePositionRef.current.x -
              meshScreenPos.x) *
            mouseInfluence *
            0.0002 *
            driftIntensity;
          const mouseForceY =
            (targetMousePositionRef.current.y -
              meshScreenPos.y) *
            mouseInfluence *
            0.0002 *
            driftIntensity;

          // Update velocity with mouse influence (accelerate/decelerate drift)
          velocity.x = baseVelocity.x + mouseForceX;
          velocity.y = baseVelocity.y + mouseForceY;

          // Apply velocity to position (constant drift)
          mesh.position.add(velocity);

          // Wrap around screen edges
          const camera = cameraRef.current;
          const margin = 2;

          if (mesh.position.x > camera.right + margin)
            mesh.position.x = camera.left - margin;
          if (mesh.position.x < camera.left - margin)
            mesh.position.x = camera.right + margin;
          if (mesh.position.y > camera.top + margin)
            mesh.position.y = camera.bottom - margin;
          if (mesh.position.y < camera.bottom - margin)
            mesh.position.y = camera.top + margin;
        }

        // Update scale and Z position based on mouse proximity
        updateScale(imageMesh, deltaTime);
      });

      // Subtle camera movement based on mouse (much smaller)
      const targetCameraX =
        targetMousePositionRef.current.x * 0.1;
      const targetCameraY =
        targetMousePositionRef.current.y * 0.1;

      cameraRef.current.position.x +=
        (targetCameraX - cameraRef.current.position.x) * 0.005;
      cameraRef.current.position.y +=
        (targetCameraY - cameraRef.current.position.y) * 0.005;

      rendererRef.current.render(
        sceneRef.current,
        cameraRef.current,
      );
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Event listeners (similar to Grid.#_setListeners)
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition);
    window.addEventListener("resize", handleResize);

    // Initialize
    createImageGrid(initialGrid.cols, initialGrid.rows).then(
      () => {
        animate();
      },
    );

    // Cleanup
    return () => {
      window.removeEventListener(
        "mousemove",
        updateMousePosition,
      );
      window.removeEventListener(
        "touchmove",
        updateMousePosition,
      );
      window.removeEventListener("resize", handleResize);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      // Dispose of Three.js resources
      imageMeshesRef.current.forEach(({ mesh }) => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((material) =>
              material.dispose(),
            );
          } else {
            mesh.material.dispose();
          }
        }
      });

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (
          mountRef.current &&
          rendererRef.current.domElement
        ) {
          mountRef.current.removeChild(
            rendererRef.current.domElement,
          );
        }
      }
    };
  }, [
    driftEnabled,
    driftIntensity,
    hoverDistance,
    imageScale,
    gridCellSize,
    hoverScale,
    ambientLightColor,
    ambientLightIntensity,
    directionalLightIntensity,
  ]);

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center ">
      <div className="relative w-[94vw] h-[91vh]">
        <div 
          ref={mountRef} 
          className="absolute inset-0 rounded-[20px] overflow-hidden shadow-[0_0px_24px_0_rgba(0,0,20,.5)]"
        />
        {/* Inner shadow overlay that sits on top */}
        <div className="absolute inset-0 rounded-[20px] pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 rounded-[20px]">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-sm">
              Loading Dynamic Image Grid...
            </p>
          </div>
        </div>
      )}

      {/* Performance info 
      <div className="absolute bottom-4 left-4 text-xs text-gray-400 bg-black/30 p-2 rounded">
        <div>Three.js WebGL Renderer</div>
        <div>
          {gridDimensions.cols}×{gridDimensions.rows} grid (
          {gridDimensions.cols * gridDimensions.rows} images)
        </div>
        <div>
          Smooth mouse tracking - Distance-based scaling
        </div>
      </div>
      */}
    </div>
  );
}