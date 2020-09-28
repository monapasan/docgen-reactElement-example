const docgen = require("react-docgen-typescript");
const fs = require("fs");

const tsConfigParser = docgen.withCustomConfig("./tsconfig.json", {
  shouldExtractValuesFromUnion: true,
});

const COMPONENT_TO_SRC = {
  ChildrenAsReactElement: "./src/ChildrenAsReactElement/index.tsx",
  ChildrenAsString: "./src/ChildrenAsString/index.tsx",
};

const props = tsConfigParser.parse(Object.values(COMPONENT_TO_SRC));

fs.writeFile("./src/types.json", JSON.stringify(props, null, 2), (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
