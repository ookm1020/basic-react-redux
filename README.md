# Create-React-App Project (Redux)

- State Manager : Redux
- Plugins : eslint, prettier
- Project structure : ducks

## Install

```bash
npm install eslint --save-dev
```

```bash
npm install eslint-config-airbnb --save-dev
```

```bash
npm install eslint-plugin-react --save-dev
```

```bash
npx eslint --init
```

```bash
npm install prettier --save-dev
```

```bash
npm install eslint-config-prettier --save-dev
```

### Add File

#### [ .eslintrc.json ]

```json
{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}
```

 #### [ .prettierrc ]

```
필요에 따라 작성
```
