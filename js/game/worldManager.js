/**
 * worldManager.js
 *
 * The "world" map is the central registry for all entities.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 14 Dec 2014
 */
import futureEvents from "../util/futureEvents";
import throwWhen from "../util/throwWhen";

let world = null;

const validate = throwWhen(
    () => world === null, "world has not been initialized, dude");

//let bar = "foo";
////const checkBar = throwWhen(bar => { return bar !== "bar"; }, "bar should be bar");
//const checkBar = throwWhen(bar => bar !== "bar", "bar should be bar");
//const foo = checkBar(() => console.log("[PH_LOG] hello"));
//foo();


function init() {
    if (world) {
        throw new Error("world is already initialized");
    }
    world = new Map();
}

function hasEntity(entityId) {
    return world.has(entityId);
}

function hasComponent(entityId, componentId) {
    return world.get(entityId).has(componentId);
}

function forEachEntityWithComponents(...needles) {
    return callback => {
        world.forEach((id, haystack) => {
            let applicable = true;
            needles.forEach((index, needle) => {
                if (haystack.get(needle) === undefined) {
                    applicable = false;
                    return false;
                }
            });
            if (!applicable) {
                return;
            }
            callback.call({
                id,
                components: haystack
            }, id, haystack);
        });
    };
}

function addEntity(entityId, components) {
    if (hasEntity(entityId)) {
        throw new Error("Attempted to add entity " + entityId + ", which is already registered");
    }
    const entity = new Map();
    components.forEach(component => entity.set(component.id, component));
    entity.set("cleanup", futureEvents.on("cleanup-" + entityId));
    world.set(entityId, entity);
}

function removeEntity(entityId) {
    if (!hasEntity(entityId)) {
        throw new Error("Attempted to remove entity " + entityId + ", which is not registered");
    }
    futureEvents.fire("cleanup-" + entityId);
    world.delete(entityId);
}

function addComponent(entityId, component) {
    if (!hasEntity(entityId)) {
        throw new Error("Attempted to add component " + component.id + " to unknown entity " + entityId);
    }
    const components = world.get(entityId);
    if (hasComponent(entityId, component.id)) {
        throw new Error("Attempted to add component " + component.id + " to entity " + entityId + ", which " +
            "has already been added to that entity");
    }
    components.set(component.id, component);
}

function setComponent(entityId, component) {
    if (!hasEntity(entityId)) {
        throw new Error("Attempted to set component " + component.id + " of unknown entity " + entityId);
    }
    const components = world.get(entityId);
    if (!hasComponent(entityId, component.id)) {
        throw new Error("Attempted to set component " + component.id + " of entity " + entityId + ", which " +
            "does not have that component");
    }
    components.set(component.id, component);
}

function getEntity(id) {
    if (!hasEntity(id)) {
        throw new Error("Attempted to get entity " + id + ", which does not exist");
    }
    const components = world.get(id);
    return { id, components };
}

function getComponentOfEntity(entityId, componentId) {
    if (!hasEntity(entityId)) {
        throw new Error("Attempted to get component " + componentId + " from non-existent entity " + entityId);
    }
    if (!hasComponent(componentId)) {
        throw new Error("Attempted to get component " + componentId + " from entity " + entityId + ", which the " +
            "entity does not have");
    }
    return world.get(entityId).get(componentId);
}

function getComponentsById(componentId) {
    const results = [];
    for (const [ , components ] of world) {
        if (components.has(componentId)) {
            results.push(components.get(componentId))
        }
    }
}

function getEntitiesByComponent(componentId) {
    const results = [];
    for (const [ id, components ] of world) {
        if (components.has(componentId)) {
            results.push({
                id,
                components
            });
        }
    }
    return results;
}

function getEntitiesByComponents(...args) {
    const results = [];
    for (const [ id, components ] of world) {
        let applicable = true;
        args.forEach(componentId => {
            if (!components.has(componentId)) {
                applicable = false;
            }
        });
        if (applicable) {
            results.push({
                id, components
            });
        }
    }
    return results;
}

function getEntityIdByCoordinates(x, y) {
    let entityId = null;
    for (const [ id, components ] of world) {
        if (!components.has("positioned")) {
            continue;
        }
        const positioned = components.get("positioned");
        if (positioned.coordinates.x === x && positioned.coordinates.y === y) {
            entityId = id;
            break;
        }
    }
    return entityId;
}

export default {
    init,
    forEachEntityWithComponents: validate(forEachEntityWithComponents),
    hasEntity: validate(hasEntity),
    hasComponent: validate(hasComponent),
    addEntity: validate(addEntity),
    removeEntity: validate(removeEntity),
    addComponent: validate(addComponent),
    setComponent: validate(setComponent),
    getEntity: validate(getEntity),
    getComponentOfEntity: validate(getComponentOfEntity),
    getComponentsById: validate(getComponentsById),
    getEntitiesByComponent: validate(getEntitiesByComponent),
    getEntitiesByComponents: validate(getEntitiesByComponents),
    getEntityIdByCoordinates: validate(getEntityIdByCoordinates)
};
