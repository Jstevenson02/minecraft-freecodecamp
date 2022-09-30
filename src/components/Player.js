import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

export const Player = () => {
    const { camera } = useThree();

    const [ref] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0],
    }));

    const position = useRef([0, 0, 0]);
    useFrame(() => {
        camera.position.copy(new Vector3());
    });

    return <mesh ref={ref}></mesh>;
};
