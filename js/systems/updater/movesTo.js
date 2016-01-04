/**
 * movesTo.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “movesTo” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import deepFreeze from "deep-freeze";

function calculateRatio({ x, y }) {
    if (x === 0 || y === 0) {
        return 1;
    }
    const ax = Math.abs(x),
        ay = Math.abs(y);
    return ax > ay ? ay / ax : ax / ay;
}

function calculateIncrement(delta, ratio, speed) {
    let increment = {
        x: delta.x < 0 ? -1 * pickRatio(delta.x, delta.y, ratio) * speed : pickRatio(delta.x, delta.y, ratio) * speed,
        y: delta.y < 0 ? -1 * pickRatio(delta.y, delta.x, ratio) * speed : pickRatio(delta.y, delta.x, ratio) * speed
    };
    if (Math.abs(increment.x) >= Math.abs(delta.x)) {
        increment.x = delta.x;
    }
    if (Math.abs(increment.y) >= Math.abs(delta.y)) {
        increment.y = delta.y;
    }
    return increment;
}

function pickRatio(thisDelta, thatDelta, ratio) {
    return Math.abs(thisDelta) < Math.abs(thatDelta) ? ratio : 1;
}

export default (component, spriteComponent) => {
    const target = {
            x: component.x,
            y: component.y
        },
        speed = component.speed,
        position = {
            x: spriteComponent.position.x,
            y: spriteComponent.position.y
        },
        delta = {
            x: target.x - position.x,
            y: target.y - position.y
        },
        ratio = calculateRatio(delta),
        increment = calculateIncrement(delta, ratio, speed);
    position.x += increment.x;
    position.y += increment.y;
    const retVal = [
        position.x === target.x && position.y === target.y ? undefined : component,
        deepFreeze({
            ...spriteComponent,
            position
        })
    ];
    return retVal;
}

