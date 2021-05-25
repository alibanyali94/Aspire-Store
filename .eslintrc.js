module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
   "extends": ["react-app", "prettier"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react","prettier"
    ],
    "rules":  {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "trailingComma": "es5",
        "semi": true,
        "jsxSingleQuote": true,
        "singleQuote": true,
        "useTabs": true
      }
    ]
  }
};
