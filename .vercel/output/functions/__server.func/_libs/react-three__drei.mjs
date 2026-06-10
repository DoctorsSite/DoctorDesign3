import { r as reactExports } from "./react.mjs";
import { u as useFrame, a as useThree, b as useLoader, e as extend, c as createPortal, d as applyProps } from "./react-three__fiber.mjs";
import { M as MathUtils, k as CubeReflectionMapping, E as EquirectangularReflectionMapping, l as CubeTextureLoader, S as Scene, m as WebGLCubeRenderTarget, H as HalfFloatType } from "./three.mjs";
import { _ as _extends } from "./babel__runtime.mjs";
import { R as RGBELoader, E as EXRLoader, G as GroundProjectedEnv } from "./three-stdlib.mjs";
import { H as HDRJPGLoader, G as GainMapLoader } from "./monogrid__gainmap-js.mjs";
const Float = /* @__PURE__ */ reactExports.forwardRef(({
  children,
  enabled = true,
  speed = 1,
  rotationIntensity = 1,
  floatIntensity = 1,
  floatingRange = [-0.1, 0.1],
  autoInvalidate = false,
  ...props
}, forwardRef) => {
  const ref = reactExports.useRef(null);
  reactExports.useImperativeHandle(forwardRef, () => ref.current, []);
  const offset = reactExports.useRef(Math.random() * 1e4);
  useFrame((state) => {
    var _floatingRange$, _floatingRange$2;
    if (!enabled || speed === 0) return;
    if (autoInvalidate) state.invalidate();
    const t = offset.current + state.clock.elapsedTime;
    ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
    ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
    ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
    let yPosition = Math.sin(t / 4 * speed) / 10;
    yPosition = MathUtils.mapLinear(yPosition, -0.1, 0.1, (_floatingRange$ = floatingRange == null ? void 0 : floatingRange[0]) !== null && _floatingRange$ !== void 0 ? _floatingRange$ : -0.1, (_floatingRange$2 = floatingRange == null ? void 0 : floatingRange[1]) !== null && _floatingRange$2 !== void 0 ? _floatingRange$2 : 0.1);
    ref.current.position.y = yPosition * floatIntensity;
    ref.current.updateMatrix();
  });
  return /* @__PURE__ */ reactExports.createElement("group", props, /* @__PURE__ */ reactExports.createElement("group", {
    ref,
    matrixAutoUpdate: false
  }, children));
});
const presetsObj = {
  apartment: "lebombo_1k.hdr",
  city: "potsdamer_platz_1k.hdr",
  dawn: "kiara_1_dawn_1k.hdr",
  forest: "forest_slope_1k.hdr",
  lobby: "st_fagans_interior_1k.hdr",
  night: "dikhololo_night_1k.hdr",
  park: "rooitou_park_1k.hdr",
  studio: "studio_small_03_1k.hdr",
  sunset: "venice_sunset_1k.hdr",
  warehouse: "empty_warehouse_01_1k.hdr"
};
const CUBEMAP_ROOT = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/";
const isArray = (arr) => Array.isArray(arr);
const defaultFiles = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function useEnvironment({
  files = defaultFiles,
  path = "",
  preset = void 0,
  colorSpace = void 0,
  extensions
} = {}) {
  if (preset) {
    validatePreset(preset);
    files = presetsObj[preset];
    path = CUBEMAP_ROOT;
  }
  const multiFile = isArray(files);
  const {
    extension,
    isCubemap
  } = getExtension(files);
  const loader = getLoader(extension);
  if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
  const gl = useThree((state) => state.gl);
  reactExports.useLayoutEffect(() => {
    if (extension !== "webp" && extension !== "jpg" && extension !== "jpeg") return;
    function clearGainmapTexture() {
      useLoader.clear(loader, multiFile ? [files] : files);
    }
    gl.domElement.addEventListener("webglcontextlost", clearGainmapTexture, {
      once: true
    });
  }, [files, gl.domElement]);
  const loaderResult = useLoader(loader, multiFile ? [files] : files, (loader2) => {
    if (extension === "webp" || extension === "jpg" || extension === "jpeg") {
      loader2.setRenderer(gl);
    }
    loader2.setPath == null || loader2.setPath(path);
    if (extensions) extensions(loader2);
  });
  let texture = multiFile ? (
    // @ts-ignore
    loaderResult[0]
  ) : loaderResult;
  if (extension === "jpg" || extension === "jpeg" || extension === "webp") {
    var _renderTarget;
    texture = (_renderTarget = texture.renderTarget) == null ? void 0 : _renderTarget.texture;
  }
  texture.mapping = isCubemap ? CubeReflectionMapping : EquirectangularReflectionMapping;
  texture.colorSpace = colorSpace !== null && colorSpace !== void 0 ? colorSpace : isCubemap ? "srgb" : "srgb-linear";
  return texture;
}
const preloadDefaultOptions = {
  files: defaultFiles,
  path: "",
  preset: void 0,
  extensions: void 0
};
useEnvironment.preload = (preloadOptions) => {
  const options = {
    ...preloadDefaultOptions,
    ...preloadOptions
  };
  let {
    files,
    path = ""
  } = options;
  const {
    preset,
    extensions
  } = options;
  if (preset) {
    validatePreset(preset);
    files = presetsObj[preset];
    path = CUBEMAP_ROOT;
  }
  const {
    extension
  } = getExtension(files);
  if (extension === "webp" || extension === "jpg" || extension === "jpeg") {
    throw new Error("useEnvironment: Preloading gainmaps is not supported");
  }
  const loader = getLoader(extension);
  if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
  useLoader.preload(loader, isArray(files) ? [files] : files, (loader2) => {
    loader2.setPath == null || loader2.setPath(path);
    if (extensions) extensions(loader2);
  });
};
const clearDefaultOptins = {
  files: defaultFiles,
  preset: void 0
};
useEnvironment.clear = (clearOptions) => {
  const options = {
    ...clearDefaultOptins,
    ...clearOptions
  };
  let {
    files
  } = options;
  const {
    preset
  } = options;
  if (preset) {
    validatePreset(preset);
    files = presetsObj[preset];
  }
  const {
    extension
  } = getExtension(files);
  const loader = getLoader(extension);
  if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
  useLoader.clear(loader, isArray(files) ? [files] : files);
};
function validatePreset(preset) {
  if (!(preset in presetsObj)) throw new Error("Preset must be one of: " + Object.keys(presetsObj).join(", "));
}
function getExtension(files) {
  var _firstEntry$split$pop;
  const isCubemap = isArray(files) && files.length === 6;
  const isGainmap = isArray(files) && files.length === 3 && files.some((file) => file.endsWith("json"));
  const firstEntry = isArray(files) ? files[0] : files;
  const extension = isCubemap ? "cube" : isGainmap ? "webp" : firstEntry.startsWith("data:application/exr") ? "exr" : firstEntry.startsWith("data:application/hdr") ? "hdr" : firstEntry.startsWith("data:image/jpeg") ? "jpg" : (_firstEntry$split$pop = firstEntry.split(".").pop()) == null || (_firstEntry$split$pop = _firstEntry$split$pop.split("?")) == null || (_firstEntry$split$pop = _firstEntry$split$pop.shift()) == null ? void 0 : _firstEntry$split$pop.toLowerCase();
  return {
    extension,
    isCubemap,
    isGainmap
  };
}
function getLoader(extension) {
  const loader = extension === "cube" ? CubeTextureLoader : extension === "hdr" ? RGBELoader : extension === "exr" ? EXRLoader : extension === "jpg" || extension === "jpeg" ? HDRJPGLoader : extension === "webp" ? GainMapLoader : null;
  return loader;
}
const isRef = (obj) => obj.current && obj.current.isScene;
const resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function setEnvProps(background, scene, defaultScene, texture, sceneProps = {}) {
  var _target$backgroundRot, _target$backgroundRot2, _target$environmentRo, _target$environmentRo2;
  sceneProps = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...sceneProps
  };
  const target = resolveScene(scene || defaultScene);
  const oldbg = target.background;
  const oldenv = target.environment;
  const oldSceneProps = {
    // @ts-ignore
    backgroundBlurriness: target.backgroundBlurriness,
    // @ts-ignore
    backgroundIntensity: target.backgroundIntensity,
    // @ts-ignore
    backgroundRotation: (_target$backgroundRot = (_target$backgroundRot2 = target.backgroundRotation) == null || _target$backgroundRot2.clone == null ? void 0 : _target$backgroundRot2.clone()) !== null && _target$backgroundRot !== void 0 ? _target$backgroundRot : [0, 0, 0],
    // @ts-ignore
    environmentIntensity: target.environmentIntensity,
    // @ts-ignore
    environmentRotation: (_target$environmentRo = (_target$environmentRo2 = target.environmentRotation) == null || _target$environmentRo2.clone == null ? void 0 : _target$environmentRo2.clone()) !== null && _target$environmentRo !== void 0 ? _target$environmentRo : [0, 0, 0]
  };
  if (background !== "only") target.environment = texture;
  if (background) target.background = texture;
  applyProps(target, sceneProps);
  return () => {
    if (background !== "only") target.environment = oldenv;
    if (background) target.background = oldbg;
    applyProps(target, oldSceneProps);
  };
}
function EnvironmentMap({
  scene,
  background = false,
  map,
  ...config
}) {
  const defaultScene = useThree((state) => state.scene);
  reactExports.useLayoutEffect(() => {
    if (map) return setEnvProps(background, scene, defaultScene, map, config);
  });
  return null;
}
function EnvironmentCube({
  background = false,
  scene,
  blur,
  backgroundBlurriness,
  backgroundIntensity,
  backgroundRotation,
  environmentIntensity,
  environmentRotation,
  ...rest
}) {
  const texture = useEnvironment(rest);
  const defaultScene = useThree((state) => state.scene);
  reactExports.useLayoutEffect(() => {
    return setEnvProps(background, scene, defaultScene, texture, {
      backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
      backgroundIntensity,
      backgroundRotation,
      environmentIntensity,
      environmentRotation
    });
  });
  reactExports.useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);
  return null;
}
function EnvironmentPortal({
  children,
  near = 0.1,
  far = 1e3,
  resolution = 256,
  frames = 1,
  map,
  background = false,
  blur,
  backgroundBlurriness,
  backgroundIntensity,
  backgroundRotation,
  environmentIntensity,
  environmentRotation,
  scene,
  files,
  path,
  preset = void 0,
  extensions
}) {
  const gl = useThree((state) => state.gl);
  const defaultScene = useThree((state) => state.scene);
  const camera = reactExports.useRef(null);
  const [virtualScene] = reactExports.useState(() => new Scene());
  const fbo = reactExports.useMemo(() => {
    const fbo2 = new WebGLCubeRenderTarget(resolution);
    fbo2.texture.type = HalfFloatType;
    return fbo2;
  }, [resolution]);
  reactExports.useEffect(() => {
    return () => {
      fbo.dispose();
    };
  }, [fbo]);
  reactExports.useLayoutEffect(() => {
    if (frames === 1) {
      const autoClear = gl.autoClear;
      gl.autoClear = true;
      camera.current.update(gl, virtualScene);
      gl.autoClear = autoClear;
    }
    return setEnvProps(background, scene, defaultScene, fbo.texture, {
      backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
      backgroundIntensity,
      backgroundRotation,
      environmentIntensity,
      environmentRotation
    });
  }, [children, virtualScene, fbo.texture, scene, defaultScene, background, frames, gl]);
  let count = 1;
  useFrame(() => {
    if (frames === Infinity || count < frames) {
      const autoClear = gl.autoClear;
      gl.autoClear = true;
      camera.current.update(gl, virtualScene);
      gl.autoClear = autoClear;
      count++;
    }
  });
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, createPortal(/* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, children, /* @__PURE__ */ reactExports.createElement("cubeCamera", {
    ref: camera,
    args: [near, far, fbo]
  }), files || preset ? /* @__PURE__ */ reactExports.createElement(EnvironmentCube, {
    background: true,
    files,
    preset,
    path,
    extensions
  }) : map ? /* @__PURE__ */ reactExports.createElement(EnvironmentMap, {
    background: true,
    map,
    extensions
  }) : null), virtualScene));
}
function EnvironmentGround(props) {
  var _props$ground, _props$ground2, _scale, _props$ground3;
  const textureDefault = useEnvironment(props);
  const texture = props.map || textureDefault;
  reactExports.useMemo(() => extend({
    GroundProjectedEnvImpl: GroundProjectedEnv
  }), []);
  reactExports.useEffect(() => {
    return () => {
      textureDefault.dispose();
    };
  }, [textureDefault]);
  const args = reactExports.useMemo(() => [texture], [texture]);
  const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
  const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
  const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1e3;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(EnvironmentMap, _extends({}, props, {
    map: texture
  })), /* @__PURE__ */ reactExports.createElement("groundProjectedEnvImpl", {
    args,
    scale,
    height,
    radius
  }));
}
function Environment(props) {
  return props.ground ? /* @__PURE__ */ reactExports.createElement(EnvironmentGround, props) : props.map ? /* @__PURE__ */ reactExports.createElement(EnvironmentMap, props) : props.children ? /* @__PURE__ */ reactExports.createElement(EnvironmentPortal, props) : /* @__PURE__ */ reactExports.createElement(EnvironmentCube, props);
}
export {
  Environment as E,
  Float as F
};
