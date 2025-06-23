import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turborepo.com/docs/guides/generating-code

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("script-gen", {
    description: "Adds a new vite-node script",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the script?",
      },
      {
        type: "input",
        name: "dir",
        message: "What directory should the script be placed in?",
        default: "src"
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{pathCase dir}}/{{kebabCase name}}.ts",
        templateFile: "templates/script.hbs",
      },
      {
        type: "append",
        path: "package.json",
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{kebabCase name}}": "./{{pathCase dir}}/{{kebabCase name}}.ts",',
      },
    ],
  });
}
