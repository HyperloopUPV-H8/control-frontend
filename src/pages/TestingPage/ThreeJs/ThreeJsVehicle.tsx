import style from "./ThreeJsVehicle.module.scss";
import { Grid, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { VehicleRepresentation } from "./VehicleRepresentation/VehicleRepresentation";

export function ThreeJsVehicle() {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[7, 5, 6]} fov={60} />
            <OrbitControls />
            <ambientLight intensity={0.1} />
            <directionalLight
                color="white"
                position={[15, 20, 10]}
                intensity={0.8}
            />
            <Grid
                args={[30, 30]}
                sectionColor="#ee7623"
                fadeDistance={20}
                infiniteGrid
            />
            <VehicleRepresentation />
        </Canvas>
    );
}