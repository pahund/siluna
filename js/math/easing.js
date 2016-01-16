/**
 * easing.js
 *
 * Based on jQuery easing functions by George McGinley Smith.
 *
 * @see https://github.com/danro/jquery-easing
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */

export const
    NO_EASING = "NO_EASING",
    EASE_IN_QUAD = "EASE_IN_QUAD",
    EASE_OUT_QUAD = "EASE_OUT_QUAD",
    EASE_IN_OUT_QUAD = "EASE_IN_OUT_QUAD",
    EASE_IN_CUBIC = "EASE_IN_CUBIC",
    EASE_OUT_CUBIC = "EASE_OUT_CUBIC",
    EASE_IN_OUT_CUBIC = "EASE_IN_OUT_CUBIC",
    EASE_IN_QUART = "EASE_IN_QUART",
    EASE_OUT_QUART = "EASE_OUT_QUART",
    EASE_IN_OUT_QUART = "EASE_IN_OUT_QUART",
    EASE_IN_QUINT = "EASE_IN_QUINT",
    EASE_OUT_QUINT = "EASE_OUT_QUINT",
    EASE_IN_OUT_QUINT = "EASE_IN_OUT_QUINT",
    EASE_IN_SINE = "EASE_IN_SINE",
    EASE_OUT_SINE = "EASE_OUT_SINE",
    EASE_IN_OUT_SINE = "EASE_IN_OUT_SINE",
    EASE_IN_EXPO = "EASE_IN_EXPO",
    EASE_OUT_EXPO = "EASE_OUT_EXPO",
    EASE_IN_OUT_EXPO = "EASE_IN_OUT_EXPO",
    EASE_IN_CIRC = "EASE_IN_CIRC",
    EASE_OUT_CIRC = "EASE_OUT_CIRC",
    EASE_IN_OUT_CIRC = "EASE_IN_OUT_CIRC",
    EASE_IN_ELASTIC = "EASE_IN_ELASTIC",
    EASE_OUT_ELASTIC = "EASE_OUT_ELASTIC",
    EASE_IN_OUT_ELASTIC = "EASE_IN_OUT_ELASTIC",
    EASE_IN_BACK = "EASE_IN_BACK",
    EASE_OUT_BACK = "EASE_OUT_BACK",
    EASE_IN_OUT_BACK = "EASE_IN_OUT_BACK",
    EASE_IN_BOUNCE = "EASE_IN_BOUNCE",
    EASE_OUT_BOUNCE = "EASE_OUT_BOUNCE",
    EASE_IN_OUT_BOUNCE = "EASE_IN_OUT_BOUNCE";

export function noEasing(t, b, c, d) {
    return c * t / d + b;
}

export function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}

export function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}

export function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}

export function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}

export function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}

export function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}

export function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}

export function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

export function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

export function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}

export function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

export function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

export function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}

export function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

export function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

export function easeInExpo(t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

export function easeOutExpo(t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}

export function easeInOutExpo(t, b, c, d) {
    if (t == 0) {
        return b;
    }
    if (t == d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

export function easeInCirc(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

export function easeOutCirc(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}

export function easeInOutCirc(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

export function easeInElastic(t, b, c, d) {
    let s = 1.70158,
        p = 0,
        a = c;
    if (t == 0) {
        return b;
    }
    if ((t /= d) == 1) {
        return b + c;
    }
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}

export function easeOutElastic(t, b, c, d) {
    let s = 1.70158,
        p = 0,
        a = c;
    if (t == 0) {
        return b;
    }
    if ((t /= d) == 1) {
        return b + c;
    }
    if (!p) {
        p = d * .3;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
}

export function easeInOutElastic(t, b, c, d) {
    let s = 1.70158,
        p = 0,
        a = c;
    if (t == 0) {
        return b;
    }
    if ((t /= d / 2) == 2) {
        return b + c;
    }
    if (!p) {
        p = d * (.3 * 1.5);
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
}

export function easeInBack(t, b, c, d, s) {
    if (s == undefined) {
        s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}

export function easeOutBack(t, b, c, d, s) {
    if (s == undefined) {
        s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

export function easeInOutBack(t, b, c, d, s) {
    if (s == undefined) {
        s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
}

export function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
}

export function easeOutBounce(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
}

export function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
        return easeInBounce(t * 2, 0, c, d) * .5 + b;
    }
    return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
}

/* eslint complexity: [2, 32] */
export function getByType(type) {
    switch (type) {
        case NO_EASING: return noEasing;
        case EASE_IN_QUAD: return easeInQuad;
        case EASE_OUT_QUAD: return easeOutQuad;
        case EASE_IN_OUT_QUAD: return easeInOutQuad;
        case EASE_IN_CUBIC: return easeInCubic;
        case EASE_OUT_CUBIC: return easeOutCubic;
        case EASE_IN_OUT_CUBIC: return easeInOutCubic;
        case EASE_IN_QUART: return easeInQuart;
        case EASE_OUT_QUART: return easeOutQuart;
        case EASE_IN_OUT_QUART: return easeInOutQuart;
        case EASE_IN_QUINT: return easeInQuint;
        case EASE_OUT_QUINT: return easeOutQuint;
        case EASE_IN_OUT_QUINT: return easeInOutQuint;
        case EASE_IN_SINE: return easeInSine;
        case EASE_OUT_SINE: return easeOutSine;
        case EASE_IN_OUT_SINE: return easeInOutSine;
        case EASE_IN_EXPO: return easeInExpo;
        case EASE_OUT_EXPO: return easeOutExpo;
        case EASE_IN_OUT_EXPO: return easeInOutExpo;
        case EASE_IN_CIRC: return easeInCirc;
        case EASE_OUT_CIRC: return easeOutCirc;
        case EASE_IN_OUT_CIRC: return easeInOutCirc;
        case EASE_IN_ELASTIC: return easeInElastic;
        case EASE_OUT_ELASTIC: return easeOutElastic;
        case EASE_IN_OUT_ELASTIC: return easeInOutElastic;
        case EASE_IN_BACK: return easeInBack;
        case EASE_OUT_BACK: return easeOutBack;
        case EASE_IN_OUT_BACK: return easeInOutBack;
        case EASE_IN_BOUNCE: return easeInBounce;
        case EASE_OUT_BOUNCE: return easeOutBounce;
        case EASE_IN_OUT_BOUNCE: return easeInOutBounce;
    }
}
