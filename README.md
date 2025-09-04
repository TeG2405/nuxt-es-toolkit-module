# nuxt4 ex-toolkit module
Модуль интеграции ex-toolkit в nuxt

## Использование
``` js
export default defineNuxtConfig({
    modules: [
        ['nuxt-es-toolkit-module', {
            prefix: "use",
            exclude: "^[is|to][A-Z]",
            names: ["get", "map", "isEmpty"],
        }]
    ],
})
```
