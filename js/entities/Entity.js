/**
 * Entity.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Jan 2016
 */

export default class Entity {
    constructor(id, ...components) {
        this.id = id;
        this.componentMap = new Map();
        for (const component of components) {
            this.componentMap.set(component.id, component);
        }
    }

    [Symbol.iterator]() {
        return this.componentMap[Symbol.iterator]();
    }

    get(key) {
        return this.componentMap.get(key);
    }

    set(component) {
        return this.componentMap.set(component.id, component);
    }

    delete(key) {
        return this.componentMap.delete(key);
    }

    keys() {
        return this.componentMap.keys();
    }

    values() {
        return this.componentMap.values();
    }

    update(...components) {
        const newComponents = new Map([ ...this.componentMap ]);
        components.forEach(component => newComponents.set(component.id, component));
        return new Entity(this.id, ...newComponents.values());
    }

    toString() {
        return `entity ${this.id}`;
    }
}
