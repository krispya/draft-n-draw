# Draft-n-Draw

### 🖍️ A utility for drawing debug visualizations in threejs.

Easily visualize bounding boxes, raycasts, points, lights and more in threejs. Fully typed, it can be used with vanilla JS or TypeScript and also has convenient React components for use in react-three-fiber.

```bash
npm install @draft-n-draw/vanilla
# or
npm install @draft-n-draw/react
```

## How it works

You begin by creating a drafter for your scene.

```js
import { Drafter } from '@draft-n-draw/vanilla';

const drafter = new Drafter(scene);
```

Then anywhere you are debugging request a draw.

```js
drafter.drawBox3(myBox3);
drafter.drawRay({ origin, direction, distance });
```

By default, draws only last a single frame and are kept active by being called in a loop. This way you can safely inline them in functions you are debugging without worrying about spawning too many scene objects or cleaning them up when done — Draft-n-Draw will handle that for you.

If instead you want the draw to persist, you can specify it in the draw options.

```js
drafter.drawSpotLight(mySpotLight, { persist: true });
```

👉 Note: This will cause a new draw to be persisted on screen each call, so be careful!

A persisted draw can be cleaned up using the `dispose()` method with the object being visualized as the key.

```js
drafter.dispose(mySpotLight);
```

Finally, there are additional draw options for controlling the visuals such as drawing on top and adjusting color or opacity.

```js
drafter.drawWireSphere({ center, radius }, { color: 'yellow', alwaysOnTop: true, opacity: 0.5 });
```

## API

The draw coverage is a work in progress. Our drafter is learning on the job!
First we have the generic `draw()` method which can draw any custom visualization or helper. It has all the generic options discussed above.

| Method | Object         | Options                                                                                         |
| ------ | -------------- | ----------------------------------------------------------------------------------------------- |
| draw() | THREE.Object3D | `{ color: THREE.ColorRepresentation, alwaysOnTop: boolean, opacity: number, persist: boolean }` |

And then we have draws for math objects. Unless stated otherwise all options are shared with `draw()`.

| Method           | Object                                                                  | Special options    |
| ---------------- | ----------------------------------------------------------------------- | ------------------ |
| drawBox3         | THREE.Box3                                                              | None.              |
| drawRay          | `{ origin: THREE.Vector3, direction: THREE.Vector3, distance: number }` | None.              |
| drawPoint        | THREE.Vector3                                                           | radius: number     |
| drawWireTriangle | THREE.Triangle                                                          | None.              |
| drawTriangle     | THREE.Triangle                                                          | winZFight: boolean |
| drawWireSphere   | `{ center: THREE.Vector3, radius: number }` or THREE.Sphere             | None.              |
| drawSphere       | `{ center: THREE.Vector3, radius: number }` or THREE.Sphere             | None.              |

And finally some draws for lights. Unless stated otherwise all options are shared with `draw()`.

| Method               | Object                 | Special options |
| -------------------- | ---------------------- | --------------- |
| drawSpotlight        | THREE.SpotLight        | None.           |
| drawPointlight       | THREE.PointLight       | None.           |
| drawDirectionalLight | THREE.DirectionalLight | None.           |
| drawHemisphereLight  | THREE.HemisphereLight  | None.           |
