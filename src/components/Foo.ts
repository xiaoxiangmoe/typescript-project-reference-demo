export type FooProps = { a: number };
export function Foo(props: FooProps) {
  return null;
}
/**
 * this file is included in both `tsconfig.app.json` and `tsconfig.test.json`
 * 
 * So we should follow the order of `references` in `tsconfig.json`
 * 
 * `tsconfig.app.json` comes before `tsconfig.test.json`, so we should use config file `tsconfig.app.json` in vscode
 * 
 */
const cwd = process.cwd()

