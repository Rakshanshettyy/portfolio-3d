import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                if (mesh.material) {
                  // 1. Shirt: Updated to your Saddle Brown (#8B4513)
                  if (mesh.name === "BODY.SHIRT") { 
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#8B4513");
                    newMat.roughness = 0.8; 
                    mesh.material = newMat;
                  } 
                  
                  // 2. Pants: Updated to professional Black (#000000)
                  else if (mesh.name === "Pant") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#000000");
                    newMat.roughness = 1.0;
                    mesh.material = newMat;
                  }

                  // 3. Tech Gear (Glasses/Watch): Added metallic/emissive effects for a Backend Specialist vibe
                  else if (mesh.name === "Glasses" || mesh.name === "Watch") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#222222"); 
                    newMat.metalness = 1.0; 
                    newMat.roughness = 0.1;
                    
                    // Subtle blue glow representing Cloud technology (AWS/GCP)
                    newMat.emissive = new THREE.Color("#00a2ff"); 
                    newMat.emissiveIntensity = 0.4;
                    mesh.material = newMat;
                  }

                  // 4. Shoes: Clean White contrast
                  else if (mesh.name === "Shoes") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#FFFFFF");
                    mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            
            // Positioning adjustments
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;