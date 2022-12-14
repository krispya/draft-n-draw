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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Drafter: () => Drafter,
  getDrafter: () => getDrafter,
  useDrafter: () => useDrafter
});
module.exports = __toCommonJS(src_exports);

// src/drafter.tsx
var import_fiber = require("@react-three/fiber");
var import_vanilla = require("@draft-n-draw/vanilla");
var import_react = require("react");
var THREE = __toESM(require("three"));
var import_jsx_runtime = require("react/jsx-runtime");
var drafter = new import_vanilla.Drafter(new THREE.Scene());
var getDrafter = () => drafter;
var DrafterContext = (0, import_react.createContext)(drafter);
function Drafter({ children }) {
  const scene = (0, import_fiber.useThree)((state) => state.scene);
  drafter.scene = scene;
  (0, import_fiber.useFrame)(() => {
    drafter.update();
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrafterContext.Provider, { value: drafter, children });
}
function useDrafter() {
  return (0, import_react.useContext)(DrafterContext);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drafter,
  getDrafter,
  useDrafter
});
