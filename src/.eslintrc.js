module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: "babel-eslint",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    extends: [
        "eslint:recommended"
    ],
    rules: {
        "semi": [2, "never"],
        "indent": [4, "tab"],
        "no-console": "off",
        "no-debugger": "off",
        "prettier/prettier": "off",
        "no-cond-assign": "off",
        "no-extra-boolean-cast": "off",
        "no-unused-vars": 0,
        "no-control-regex": "off",
        "no-undef": "off"
    },
    globals: {
        "dataLayer": false,
        "TimelineLite": false,
        "TimelineMax": false,
        "TweenLite": false,
        "TweenMax": false,
        "Back": false,
        "Bounce": false,
        "Circ": false,
        "Cubic": false,
        "Ease": false,
        "EaseLookup": false,
        "Elastic": false,
        "Expo": false,
        "Linear": false,
        "Power0": false,
        "Power1": false,
        "Power2": false,
        "Power3": false,
        "Power4": false,
        "Quad": false,
        "Quart": false,
        "Quint": false,
        "RoughEase": false,
        "Sine": false,
        "SlowMo": false,
        "SteppedEase": false,
        "Strong": false,
        "Draggable": false,
        "SplitText": false,
        "VelocityTracker": false,
        "CSSPlugin": false,
        "ThrowPropsPlugin": false,
        "BezierPlugin": false,
        "select": false,
        '"fullpage': false
    }
}