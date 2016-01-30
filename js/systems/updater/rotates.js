/**
 * rotates.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “rotates” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */

export default (component, spriteComponent) => {
    const dr = component.dr,
        r = spriteComponent.rotation + dr;
    return [
        component,
        {
            ...spriteComponent,
            rotation: r
        }
    ];
}

