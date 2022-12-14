"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Drafter: () => Drafter,
  ExtendedBox3Helper: () => ExtendedBox3Helper,
  PointHelper: () => PointHelper,
  RayHelper: () => RayHelper,
  SphereHelper: () => SphereHelper,
  TriangleHelper: () => TriangleHelper,
  WireSphereHelper: () => WireSphereHelper,
  WireTriangleHelper: () => WireTriangleHelper
});
module.exports = __toCommonJS(src_exports);

// src/drafter.ts
var THREE6 = __toESM(require("three"));

// src/helpers/extended-box3-helper.ts
var THREE = __toESM(require("three"));
var ExtendedBox3Helper = class extends THREE.Box3Helper {
  constructor(box, options) {
    var _a, _b, _c;
    super(box);
    const material = this.material;
    material.color.set((_a = options == null ? void 0 : options.color) != null ? _a : 16776960);
    material.toneMapped = false;
    material.depthWrite = !(options == null ? void 0 : options.alwaysOnTop);
    material.opacity = (_b = options == null ? void 0 : options.opacity) != null ? _b : 1;
    material.transparent = (options == null ? void 0 : options.opacity) && (options == null ? void 0 : options.opacity) < 1 ? true : false;
    material.fog = (_c = options == null ? void 0 : options.fog) != null ? _c : true;
  }
  set(box) {
    super.box = box;
  }
  setMaterial(options) {
    const material = this.material;
    if (options.color)
      material.color.set(options.color);
    if (options.alwaysOnTop)
      material.depthTest = !options.alwaysOnTop;
    if (options.opacity) {
      material.opacity = options.opacity;
      material.transparent = options.opacity && options.opacity < 1 ? true : false;
    }
    if (options.fog)
      material.fog = options.fog;
  }
};

// src/helpers/point-helper.ts
var THREE2 = __toESM(require("three"));
var PointHelper = class extends THREE2.Mesh {
  constructor(point, options) {
    var _a, _b, _c, _d;
    const radius = (_a = options == null ? void 0 : options.radius) != null ? _a : 0.03;
    const geometry = new THREE2.SphereGeometry(radius, 7, 7);
    const material = new THREE2.MeshBasicMaterial({
      color: (_b = options == null ? void 0 : options.color) != null ? _b : 16711680,
      toneMapped: false,
      depthTest: !(options == null ? void 0 : options.alwaysOnTop),
      opacity: (_c = options == null ? void 0 : options.opacity) != null ? _c : 1,
      transparent: (options == null ? void 0 : options.opacity) && (options == null ? void 0 : options.opacity) < 1 ? true : false,
      fog: (_d = options == null ? void 0 : options.fog) != null ? _d : true
    });
    super(geometry, material);
    this.type = "PointHelper";
    this.point = point;
    this._radius = radius;
    this.position.copy(point);
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    this._radius = value;
    this.geometry.copy(new THREE2.SphereGeometry(value, 7, 7));
  }
  set(point) {
    this.point = point;
  }
  setMaterial(options) {
    const material = this.material;
    if (options.color)
      material.color.set(options.color);
    if (options.alwaysOnTop)
      material.depthTest = !options.alwaysOnTop;
    if (options.opacity) {
      material.opacity = options.opacity;
      material.transparent = options.opacity && options.opacity < 1 ? true : false;
    }
    if (options.fog)
      material.fog = options.fog;
  }
  updateMatrixWorld() {
    this.position.copy(this.point);
    super.updateMatrixWorld();
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
};

// src/helpers/ray-helper.ts
var THREE3 = __toESM(require("three"));
var RayHelper = class extends THREE3.Line {
  constructor(rayInfo, options) {
    var _a, _b, _c;
    const end = new THREE3.Vector3().copy(rayInfo.origin).addScaledVector(rayInfo.direction, rayInfo.distance);
    const geometry = new THREE3.BufferGeometry().setFromPoints([rayInfo.origin, end]);
    const material = new THREE3.LineBasicMaterial({
      color: (_a = options == null ? void 0 : options.color) != null ? _a : 16711680,
      toneMapped: false,
      depthTest: !(options == null ? void 0 : options.alwaysOnTop),
      opacity: (_b = options == null ? void 0 : options.opacity) != null ? _b : 1,
      transparent: (options == null ? void 0 : options.opacity) && (options == null ? void 0 : options.opacity) < 1 ? true : false,
      fog: (_c = options == null ? void 0 : options.fog) != null ? _c : true
    });
    super(geometry, material);
    this.type = "RayHelper";
    this.rayInfo = rayInfo;
    this.end = end;
  }
  set(rayInfo) {
    this.rayInfo = rayInfo;
  }
  setMaterial(options) {
    const material = this.material;
    if (options.color)
      material.color.set(options.color);
    if (options.alwaysOnTop)
      material.depthTest = !options.alwaysOnTop;
    if (options.opacity) {
      material.opacity = options.opacity;
      material.transparent = options.opacity && options.opacity < 1 ? true : false;
    }
    if (options.fog)
      material.fog = options.fog;
  }
  updateMatrixWorld() {
    this.end.copy(this.rayInfo.origin).addScaledVector(this.rayInfo.direction, this.rayInfo.distance);
    this.geometry.setFromPoints([this.rayInfo.origin, this.end]);
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
};

// src/helpers/sphere-helper.ts
var THREE4 = __toESM(require("three"));

// src/math/createCapsulePoints.ts
function createCapsuleVertices(radius = 1, halfHeight = 1, degrees = 30) {
  const points = [];
  for (let i = 0; i <= degrees; i++) {
    points.push(Math.cos(i * (Math.PI / degrees)) * radius, Math.sin(i * (Math.PI / degrees)) * radius + halfHeight, 0);
  }
  for (let i = 0; i <= degrees; i++) {
    points.push(
      -Math.cos(i * (Math.PI / degrees)) * radius,
      -Math.sin(i * (Math.PI / degrees)) * radius - halfHeight,
      0
    );
  }
  points.push(points[0], points[1], points[2]);
  return points;
}

// src/math/createCirclePoints.ts
function createCircleVertices(radius = 1, degrees = 30) {
  return createCapsuleVertices(radius, 0, degrees);
}

// src/helpers/sphere-helper.ts
var BufferGeometryUtils = __toESM(require("three/examples/jsm/utils/BufferGeometryUtils.js"));
var SphereHelper = class extends THREE4.Mesh {
  constructor(sphere, options) {
    var _a, _b, _c;
    const geometry = new THREE4.SphereGeometry(sphere.radius, 8, 8);
    const material = new THREE4.MeshBasicMaterial({
      color: (_a = options == null ? void 0 : options.color) != null ? _a : 255,
      toneMapped: false,
      depthTest: !(options == null ? void 0 : options.alwaysOnTop),
      opacity: (_b = options == null ? void 0 : options.opacity) != null ? _b : 1,
      transparent: (options == null ? void 0 : options.opacity) && (options == null ? void 0 : options.opacity) < 1 ? true : false,
      fog: (_c = options == null ? void 0 : options.fog) != null ? _c : true
    });
    super(geometry, material);
    this.type = "SphereHelper";
    this.sphere = sphere;
    this.position.copy(sphere.center);
  }
  set(sphere) {
    this.sphere = sphere;
    const geometry = new THREE4.SphereGeometry(sphere.radius, 8, 8);
    this.geometry.copy(geometry);
  }
  setMaterial(options) {
    const material = this.material;
    if (options.color)
      material.color.set(options.color);
    if (options.alwaysOnTop)
      material.depthTest = !options.alwaysOnTop;
    if (options.opacity) {
      material.opacity = options.opacity;
      material.transparent = options.opacity && options.opacity < 1 ? true : false;
    }
    if (options.fog)
      material.fog = options.fog;
  }
  updateMatrixWorld() {
    this.position.copy(this.sphere.center);
    super.updateMatrixWorld();
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
};
var WireSphereHelper = class extends THREE4.Line {
  constructor(sphere, options) {
    var _a, _b, _c;
    const vertices = new Float32Array(createCircleVertices(sphere.radius));
    const geometryA = new THREE4.BufferGeometry().setAttribute("position", new THREE4.BufferAttribute(vertices, 3));
    const geometryB = geometryA.clone().rotateY(Math.PI / 2);
    const geometryC = geometryA.clone().rotateX(Math.PI / 2);
    const merged = BufferGeometryUtils.mergeBufferGeometries([geometryA, geometryC, geometryB]);
    const material = new THREE4.LineBasicMaterial({
      color: (_a = options == null ? void 0 : options.color) != null ? _a : 255,
      toneMapped: false,
      depthTest: !(options == null ? void 0 : options.alwaysOnTop),
      opacity: (_b = options == null ? void 0 : options.opacity) != null ? _b : 1,
      transparent: (options == null ? void 0 : options.opacity) && (options == null ? void 0 : options.opacity) < 1 ? true : false,
      fog: (_c = options == null ? void 0 : options.fog) != null ? _c : true
    });
    super(merged, material);
    this.type = "WireSphereHelper";
    this.sphere = sphere;
    this.position.copy(sphere.center);
  }
  set(sphere) {
    const vertices = new Float32Array(createCircleVertices(sphere.radius));
    const geometryA = new THREE4.BufferGeometry().setAttribute("position", new THREE4.BufferAttribute(vertices, 3));
    const geometryB = geometryA.clone().rotateY(Math.PI / 2);
    const geometryC = geometryA.clone().rotateX(Math.PI / 2);
    const merged = BufferGeometryUtils.mergeBufferGeometries([geometryA, geometryC, geometryB]);
    this.geometry.copy(merged);
    this.sphere = sphere;
  }
  setMaterial(options) {
    const material = this.material;
    if (options.color)
      material.color.set(options.color);
    if (options.alwaysOnTop)
      material.depthTest = !options.alwaysOnTop;
    if (options.opacity) {
      material.opacity = options.opacity;
      material.transparent = options.opacity && options.opacity < 1 ? true : false;
    }
    if (options.fog)
      material.fog = options.fog;
  }
  updateMatrixWorld() {
    this.position.copy(this.sphere.center);
    super.updateMatrixWorld();
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
};

// src/helpers/triangle-helper.ts
var THREE5 = __toESM(require("three"));
var zFightOffset = 1e-3;
var TriangleHelper = class extends THREE5.Mesh {
  constructor(triangle, options) {
    var _a, _b, _c, _d;
    const a = new THREE5.Vector3().copy(triangle.a);
    const b = new THREE5.Vector3().copy(triangle.b);
    const c = new THREE5.Vector3().copy(triangle.c);
    const normal = new THREE5.Vector3();
    triangle.getNormal(normal);
    if (options == null ? void 0 : options.winZFight) {
      a.addScaledVector(normal, zFightOffset);
      b.addScaledVector(normal, zFightOffset);
      c.addScaledVector(normal, zFightOffset);
    }
    const points = [a, b, c];
    const geometry = new THREE5.BufferGeometry().setFromPoints(points);
    const material = new THREE5.MeshBasicMaterial({
      color: (_a = options == null ? void 0 : options.color) != null ? _a : 255,
      toneMapped: false,
      depthTest: !(options == null ? void 0 : options.alwaysOnTop),
      opacity: (_b = options == null ? void 0 : options.opacity) != null ? _b : 1,
      transparent: (options == null ? void 0 : options.opacity) && (options == null ? void 0 : options.opacity) < 1 ? true : false,
      fog: (_c = options == null ? void 0 : options.fog) != null ? _c : true
    });
    super(geometry, material);
    this.type = "TriangleHelper";
    this.triangle = triangle;
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = normal;
    this.winZFight = (_d = options == null ? void 0 : options.winZFight) != null ? _d : false;
  }
  set(triangle) {
    this.triangle = triangle;
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    triangle.getNormal(this.normal);
    if (this.winZFight) {
      this.a.addScaledVector(this.normal, zFightOffset);
      this.b.addScaledVector(this.normal, zFightOffset);
      this.c.addScaledVector(this.normal, zFightOffset);
    }
  }
  setMaterial(options) {
    const material = this.material;
    if (options.color)
      material.color.set(options.color);
    if (options.alwaysOnTop)
      material.depthTest = !options.alwaysOnTop;
    if (options.opacity) {
      material.opacity = options.opacity;
      material.transparent = options.opacity && options.opacity < 1 ? true : false;
    }
    if (options.fog)
      material.fog = options.fog;
  }
  updateMatrixWorld() {
    const points = [this.a, this.b, this.c];
    this.geometry.setFromPoints(points);
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
};
var WireTriangleHelper = class extends THREE5.LineSegments {
  constructor(triangle, options) {
    var _a, _b, _c;
    const points = [triangle.a, triangle.b, triangle.c];
    const geometry = new THREE5.BufferGeometry().setFromPoints(points).setIndex([0, 1, 1, 2, 2, 0]);
    const material = new THREE5.LineBasicMaterial({
      color: (_a = options == null ? void 0 : options.color) != null ? _a : 255,
      toneMapped: false,
      depthTest: !(options == null ? void 0 : options.alwaysOnTop),
      opacity: (_b = options == null ? void 0 : options.opacity) != null ? _b : 1,
      transparent: (options == null ? void 0 : options.opacity) && (options == null ? void 0 : options.opacity) < 1 ? true : false,
      fog: (_c = options == null ? void 0 : options.fog) != null ? _c : true
    });
    super(geometry, material);
    this.type = "WireTriangleHelper";
    this.triangle = triangle;
  }
  set(triangle) {
    this.triangle = triangle;
  }
  setMaterial(options) {
    const material = this.material;
    if (options.color)
      material.color.set(options.color);
    if (options.alwaysOnTop)
      material.depthTest = !options.alwaysOnTop;
    if (options.opacity) {
      material.opacity = options.opacity;
      material.transparent = options.opacity && options.opacity < 1 ? true : false;
    }
    if (options.fog)
      material.fog = options.fog;
  }
  updateMatrixWorld() {
    const points = [this.triangle.a, this.triangle.b, this.triangle.c];
    this.geometry.setFromPoints(points);
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
};

// src/drafter.ts
var GROUP_NAME = "__debug";
function removeObjectFromPool(drafter, object) {
  const poolIndex = drafter.poolKeys.indexOf(object);
  if (poolIndex !== -1)
    drafter.poolKeys.splice(poolIndex, 1);
}
function createDraw(drafter, constructor) {
  return (object, options) => {
    if (drafter.debugMap.has(object)) {
      const state = drafter.debugMap.get(object);
      const helperState = drafter.helperMap.get(state.helper);
      state.isActive = true;
      helperState.isActive = true;
      removeObjectFromPool(drafter, state.helper);
      return;
    }
    const poolOrCreate = () => {
      var _a;
      for (const poolHelper of drafter.poolKeys) {
        const state = drafter.helperMap.get(poolHelper);
        if (state && poolHelper instanceof constructor) {
          poolHelper.set(object);
          removeObjectFromPool(drafter, poolHelper);
          state.isActive = true;
          if (options)
            poolHelper.setMaterial(options);
          return;
        }
      }
      const helper = constructor ? new constructor(object, options) : object;
      helper.userData = { isDebug: true };
      const isPersistant = (_a = options == null ? void 0 : options.persist) != null ? _a : false;
      drafter.group.add(helper);
      drafter.debugKeys.push(helper);
      drafter.debugMap.set(object, {
        isActive: true,
        helper,
        isPersistant
      });
      drafter.helperMap.set(helper, { isActive: true, object, isPersistant });
    };
    drafter.deferred.push(poolOrCreate);
  };
}
var Drafter = class {
  constructor(scene) {
    this.draw = createDraw(this);
    this.drawBox3 = createDraw(this, ExtendedBox3Helper);
    this.drawRay = createDraw(this, RayHelper);
    this.drawPoint = createDraw(this, PointHelper);
    this.drawWireTriangle = createDraw(this, WireTriangleHelper);
    this.drawTriangle = createDraw(this, TriangleHelper);
    this.drawWireSphere = createDraw(this, WireSphereHelper);
    this.drawSphere = createDraw(this, SphereHelper);
    this.drawSpotlight = createDraw(this, THREE6.SpotLightHelper);
    this.drawPointlight = createDraw(this, THREE6.PointLightHelper);
    this.drawDirectionalLight = createDraw(this, THREE6.DirectionalLightHelper);
    this.drawHemisphereLight = createDraw(this, THREE6.HemisphereLightHelper);
    this._scene = scene;
    this._objectMap = /* @__PURE__ */ new WeakMap();
    this._helperKeys = [];
    this._helperMap = /* @__PURE__ */ new WeakMap();
    this._poolKeys = [];
    this._deferred = [];
    this._group = new THREE6.Group();
    this._group.name = GROUP_NAME;
    scene.add(this._group);
  }
  get debugKeys() {
    return this._helperKeys;
  }
  get debugMap() {
    return this._objectMap;
  }
  get helperMap() {
    return this._helperMap;
  }
  get poolKeys() {
    return this._poolKeys;
  }
  get deferred() {
    return this._deferred;
  }
  get group() {
    return this._group;
  }
  get scene() {
    return this._scene;
  }
  set scene(scene) {
    this._scene = scene;
    if (!scene.getObjectByName(GROUP_NAME)) {
      this._group = new THREE6.Group();
      this._group.name = GROUP_NAME;
      scene.add(this._group);
    }
  }
  update() {
    this._deferred.forEach((fn) => {
      fn();
    });
    this._deferred.length = 0;
    this._helperKeys.forEach((helper, index) => {
      const state = this._helperMap.get(helper);
      if (!state)
        return;
      if (state.isPersistant)
        return;
      if (!state.isActive) {
        this.group.remove(helper);
        helper.dispose();
        this._helperMap.delete(helper);
        this._objectMap.delete(state.object);
        this._helperKeys.splice(index, 1);
        removeObjectFromPool(this, helper);
        return;
      }
      this._poolKeys.push(helper);
      state.isActive = false;
    });
  }
  dispose(object) {
    const state = this.debugMap.get(object);
    if (!state)
      return;
    const helper = state.helper;
    this.group.remove(helper);
    helper.dispose();
    this._helperMap.delete(helper);
    this._objectMap.delete(object);
    const index = this._helperKeys.indexOf(helper);
    this._helperKeys.splice(index, 1);
    removeObjectFromPool(this, helper);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drafter,
  ExtendedBox3Helper,
  PointHelper,
  RayHelper,
  SphereHelper,
  TriangleHelper,
  WireSphereHelper,
  WireTriangleHelper
});
