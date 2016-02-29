/**
 * moveToPointStopper.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Feb 2016
 */
import { MOVES_WITH_ACCELERATION } from "../components";
export default (prevEntity) => {
    const prevComponent = prevEntity.get(MOVES_WITH_ACCELERATION);
    if (!prevComponent) {
        return prevEntity;
    }
    return prevEntity.update({
        ...prevComponent,
        targetSpeed: 0
    });
}
