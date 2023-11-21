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

-   add format to .prettierrc.json

```bash
{
    "tabWidth": 4,
    "jsxSingleQuote": true,
    "singleQuote": true,
    "semi": true,
    "printWidth": 150,
    "bracketSpacing": true,
    "bracketSameLine": true
}
```

-   run prettier terminal

```bash
npx prettier . --write
```

-   edit package.json

```bash
 "scripts": {
        "format": "prettier . --write ."  #add
    },
```

# Install Tailwind CCS

-   Install via terminal

```bash
npm install -D tailwindcss postcss autoprefixer
```

-   Create tailwind config

```bash
npx tailwindcss init -p
```

-   Add content to tailwind.config.js

```bash
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

-   Add index.css

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Install Icons [https://tabler.io/docs/icons/react]

-   Install via terminal

```bash
npm install @tabler/icons-react
```

# Install CLSX

-   Install via terminal

```bash
npm install clsx
```

# Tailwind FORM

-   Install via terminal

```bash
npm install -D @tailwindcss/forms
```

-   Add plugins to tailwind.config.js

```bash
plugins: [
        require('@tailwindcss/forms'),
    ],
```

# Install AXIOS

-   Install via terminal

```bash
npm install axios
```

-   create axios

```
import axios from 'axios';

    async function getUser() {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(data);

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUser(); #call function getUser
    })
```
