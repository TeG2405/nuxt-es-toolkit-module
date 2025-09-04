import { defineNuxtModule, addImports } from "nuxt/kit";

export interface EsToolkitOptions {
  prefix: string;
  names: string[];
  exclude: string;
}

export default defineNuxtModule<EsToolkitOptions>({
  meta: {
    name: "nuxt-es-toolkit",
    configKey: "esToolkit",
    compatibility: {
      nuxt: "^3.0.0 || ^4.0.0",
    },
  },
  defaults: {
    prefix: "use",
    exclude: "^[is|to][A-Z]",
    names: ["get", "map", "isEmpty"],
  },
  setup(options) {
    const exclude = new RegExp(options.exclude);
    addImports(
      options.names.map((name) => {
        if (exclude && exclude.test(name)) return { from: "es-toolkit/compat", name };
        return { from: "es-toolkit/compat", name, as: `${options.prefix}${name.charAt(0).toUpperCase()}${name.slice(1)}` };
      }),
    );
  },
});
