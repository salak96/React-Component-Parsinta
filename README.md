# React + Vite

-   Install via terminal

```bash
npm create vite@latest my-react-app -- --template react
```

-   Install node modules

```bash
npm install
```

-   Start project

```bash
npm run dev
```

# Instal Prettier

-   Install via terminal

```bash
npm install --save-dev --save-exact prettier
```

-   Create prettier json

```bash
touch .prettierrc.json
```
- add format to .prettierrc.json
```bash
{
    "tabWidth": 4,
    "jsxSingleQuote": true,
    "singleQuote": true,
    "semi": true
}
```
-   run prettier terminal

```bash
npx prettier . --write
```
- edit package.json
```bash
 "scripts": {
        "format": "prettier . --write ."  #add
    },
```

