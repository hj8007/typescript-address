# TypeScript
[![Reference](https://img.shields.io/badge/-co--studying-000000?style=flat&logo=GitHub&link=https://github.com/co-studying/typescript-todos)](https://github.com/co-studying/typescript-todos)

### 1. 기본 프로젝트 생성
```
$ npm init -y
```


### 2. 패키지 설치
`package.json`
```json
"devDependencies": {
  "@babel/core": "^7.15.5",
  "@babel/preset-env": "^7.15.6",
  "@babel/preset-typescript": "^7.15.0",
  "@typescript-eslint/eslint-plugin": "^4.31.2",
  "@typescript-eslint/parser": "^4.31.2",
  "eslint": "^7.32.0",
  "eslint-plugin-prettier": "^4.0.0",
  "prettier": "^2.4.1",
  "typescript": "^4.4.3"
}
```

```bash
$ npm install
```


### 3. tsconfig.json & .eslintrc.js 파일 생성
`tsconfig.json`
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "target": "ES5",
    "lib": ["ES2015", "DOM", "DOM.Iterable"],
    "noImplicitAny": true,
    "strict": true,
    "strictFunctionTypes": true
  },
  "include": ["./src/**/*"]
}
```

`.eslintrc.js`
```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    'prefer-const': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
```




