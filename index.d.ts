import type { Rule } from "eslint";
import type { Node } from "estree";

declare function traverse<TNode = Node>(
  context: Rule.RuleContext,
  node: TNode,
  visitor: (
    path: traverse.Path<TNode>
  ) => void | typeof traverse.SKIP | typeof traverse.STOP
): void;

declare namespace traverse {
  const SKIP: unique symbol;
  const STOP: unique symbol;

  interface Path<TNode = Node> {
    node: TNode;
    parent: TNode | null;
    parentKey: string | null;
    parentPath: Path<TNode> | null;
  }
}

export = traverse;
