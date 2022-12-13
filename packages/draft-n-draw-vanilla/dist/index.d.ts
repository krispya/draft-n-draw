import * as THREE from 'three';

type RayInfo = {
    origin: THREE.Vector3;
    direction: THREE.Vector3;
    distance: number;
};
declare class RayHelper extends THREE.Line {
    rayInfo: RayInfo;
    private end;
    constructor(rayInfo: RayInfo, options?: DrawMaterialOptions);
    set(rayInfo: RayInfo): void;
    setMaterial(options: DrawMaterialOptions): void;
    updateMatrixWorld(): void;
    dispose(): void;
}

interface SphereInterface {
    center: THREE.Vector3;
    radius: number;
}
declare class SphereHelper extends THREE.Mesh {
    sphere: SphereInterface;
    constructor(sphere: SphereInterface, options?: DrawMaterialOptions);
    set(sphere: SphereInterface): void;
    setMaterial(options: DrawMaterialOptions): void;
    updateMatrixWorld(): void;
    dispose(): void;
}
declare class WireSphereHelper extends THREE.Line {
    sphere: SphereInterface;
    constructor(sphere: SphereInterface, options?: DrawMaterialOptions);
    set(sphere: SphereInterface): void;
    setMaterial(options: DrawMaterialOptions): void;
    updateMatrixWorld(): void;
    dispose(): void;
}

type TriangleDebugOptions = {
    winZFight: boolean;
} & DrawMaterialOptions;
declare class TriangleHelper extends THREE.Mesh {
    triangle: THREE.Triangle;
    winZFight: boolean;
    private a;
    private b;
    private c;
    private normal;
    constructor(triangle: THREE.Triangle, options?: TriangleDebugOptions);
    set(triangle: THREE.Triangle): void;
    setMaterial(options: DrawMaterialOptions): void;
    updateMatrixWorld(): void;
    dispose(): void;
}
declare class WireTriangleHelper extends THREE.LineSegments {
    triangle: THREE.Triangle;
    constructor(triangle: THREE.Triangle, options?: DrawMaterialOptions);
    set(triangle: THREE.Triangle): void;
    setMaterial(options: DrawMaterialOptions): void;
    updateMatrixWorld(): void;
    dispose(): void;
}

type DrawObject = THREE.Object3D | THREE.Box3 | THREE.Vector3 | THREE.Triangle | RayInfo | SphereInterface;
type DrawMaterialOptions = {
    color?: THREE.ColorRepresentation;
    alwaysOnTop?: boolean;
    opacity?: number;
    fog?: boolean;
};
type Helper = THREE.Object3D & {
    dispose: () => void;
    set: (...args: any[]) => void;
    setMaterial: (options: DrawMaterialOptions) => void;
};
type HelperState = {
    object: DrawObject;
    isActive: boolean;
};
type DrawObjectState = {
    isActive: boolean;
    helper: Helper;
    persist: boolean;
};
type DrawOptions = {
    persist?: boolean;
} & DrawMaterialOptions;
type TriangleDrawOptions = TriangleDebugOptions & {
    persist?: boolean;
};
declare class Drafter {
    private _debugKeys;
    private _debugMap;
    private _helperMap;
    private _poolKeys;
    private _deferred;
    private _group;
    private _scene;
    constructor(scene: THREE.Scene);
    get debugKeys(): Helper[];
    get debugMap(): WeakMap<DrawObject, DrawObjectState>;
    get helperMap(): WeakMap<Helper, HelperState>;
    get poolKeys(): Helper[];
    get deferred(): (() => void)[];
    get group(): THREE.Group;
    get scene(): THREE.Scene;
    set scene(scene: THREE.Scene);
    update(): void;
    draw: (object: THREE.Object3D<THREE.Event>, options?: DrawOptions | undefined) => void;
    drawBox3: (object: THREE.Box3, options?: DrawOptions | undefined) => void;
    drawRay: (object: RayInfo, options?: DrawOptions | undefined) => void;
    drawPoint: (object: THREE.Vector3, options?: DrawOptions | undefined) => void;
    drawWireTriangle: (object: THREE.Triangle, options?: DrawOptions | undefined) => void;
    drawTriangle: (object: THREE.Triangle, options?: TriangleDrawOptions | undefined) => void;
    drawWireSphere: (object: SphereInterface, options?: DrawOptions | undefined) => void;
    drawSphere: (object: SphereInterface, options?: DrawOptions | undefined) => void;
    drawSpotlight: (object: THREE.SpotLight, options?: DrawOptions | undefined) => void;
    drawPointlight: (object: THREE.PointLight, options?: DrawOptions | undefined) => void;
    drawDirectionalLight: (object: THREE.DirectionalLight, options?: DrawOptions | undefined) => void;
    drawHemisphereLight: (object: THREE.HemisphereLight, options?: DrawOptions | undefined) => void;
}

declare class ExtendedBox3Helper extends THREE.Box3Helper {
    constructor(box: THREE.Box3, options?: DrawMaterialOptions);
    set(box: THREE.Box3): void;
    setMaterial(options: DrawMaterialOptions): void;
}

type PointDebugOptions = {
    radius?: number;
} & DrawMaterialOptions;
declare class PointHelper extends THREE.Mesh {
    point: THREE.Vector3;
    _radius: number;
    constructor(point: THREE.Vector3, options?: PointDebugOptions);
    get radius(): number;
    set radius(value: number);
    set(point: THREE.Vector3): void;
    setMaterial(options: PointDebugOptions): void;
    updateMatrixWorld(): void;
    dispose(): void;
}

export { Drafter, DrawMaterialOptions, ExtendedBox3Helper, PointHelper, RayHelper, RayInfo, SphereHelper, SphereInterface, TriangleDebugOptions, TriangleHelper, WireSphereHelper, WireTriangleHelper };
