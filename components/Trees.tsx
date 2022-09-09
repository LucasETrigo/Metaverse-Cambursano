import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Trees = () => {
    const model = useLoader(GLTFLoader, './models/tree.glb');

    model.scene.traverse((object) => {
        if (object.isMesh) {
            object.castShadow = true;
        }
    });

    console.log(model);

    return (
        <group rotation={[0, 4, 0]}>
            <primitive object={model.scene.clone()} />
        </group>
    );
};

export default Trees;
