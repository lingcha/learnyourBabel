const acorn = require("acorn");
const guangKeywordPlugin = require("./guangKeywordPlugin");

const Parser = acorn.Parser;
acorn.defaultOptions.ecmaVersion = "2022";
acorn.defaultOptions.allowHashBang = false;

const newParser = Parser.extend(guangKeywordPlugin);
var program = `
    guang
    const a = 1
`;

const ast = newParser.parse(program, {
  allowHashBang: false,
});

if (ast) {
  console.log(ast);
}
