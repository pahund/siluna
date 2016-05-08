module.exports = wallaby => {
    return {
        files: [
            "js/**/*.js"
        ],

        tests: [
            "test/**/*Spec.js"
        ],
        env: {
            type: "node"
        },
        compilers: {
            "**/*.js": wallaby.compilers.babel()
        },
        setup() {
            require("jsdom-global")();
        }
    };
};
