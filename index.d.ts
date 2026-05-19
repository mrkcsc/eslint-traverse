import type { Rule } from "eslint";
import type { Node } from "estree";

declare function traverse(
  context: Rule.RuleContext,
  node: Node,
  visitor: traverse.Visitor
): void;

declare namespace traverse {
  const SKIP: unique symbol;
  const STOP: unique symbol;

  interface Path {
    node: Node;
    parent: Node | null;
    parentKey: string | null;
    parentPath: Path | null;
  }

  type Visitor = (path: Path) => void | typeof SKIP | typeof STOP;
}

export = traverse;
