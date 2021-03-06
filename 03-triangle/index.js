// @ts-check

import { init, clear, blit, triangle } from "../lib/draw.js";
import { black, randomColor } from "../lib/color.js";
import { randomPoint2 } from "../lib/math.js";
import { loop } from "../lib/loop.js";

init();

clear(black);

loop(() => {
    const p1 = randomPoint2();
    const p2 = randomPoint2();
    const p3 = randomPoint2();
    const color = randomColor();
    triangle(p1, p2, p3, color);
    blit();
});
