/**
 * Entities.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Jan 2016
 */

export default class Entities {
    constructor(...entities) {
        this.entityMap = new Map();
        for (const entity of entities) {
            this.entityMap.set(entity.id, entity);
        }
    }

    [Symbol.iterator]() {
        return this.entityMap[Symbol.iterator]();
    }

    get(key) {
        return this.entityMap.get(key);
    }

    set(entity) {
        return this.entityMap.set(entity.id, entity);
    }

    delete(key) {
        return this.entityMap.delete(key);
    }

    keys() {
        return this.entityMap.keys();
    }

    values() {
        return this.entityMap.values();
    }

    update(entity) {
        const newEntities = new Map([ ...this.entityMap ]);
        newEntities.set(entity.id, entity);
        return new Entities(...newEntities.values());
    }
}
