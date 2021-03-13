import type { Expression } from "estree"
import type {
    EscapeCharacterSet,
    UnicodePropertyCharacterSet,
} from "regexpp/ast"
import type { RegExpVisitor } from "regexpp/visitor"
import {
    createRule,
    defineRegexpVisitor,
    fixerApplyEscape,
    getRegexpLocation,
    getRegexpRange,
} from "../utils"

export default createRule("negation", {
    meta: {
        docs: {
            description: "enforce use of escapes on negation",
            // TODO In the major version
            // recommended: true,
            recommended: false,
        },
        fixable: "code",
        schema: [],
        messages: {
            unexpected:
                "Unexpected negated character class. Use '{{negatedCharSet}}' instead.",
        },
        type: "suggestion", // "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()

        /**
         * Create visitor
         * @param node
         */
        function createVisitor(node: Expression): RegExpVisitor.Handlers {
            return {
                onCharacterClassEnter(ccNode) {
                    if (!ccNode.negate || ccNode.elements.length !== 1) {
                        return
                    }
                    const element = ccNode.elements[0]
                    if (element.type === "CharacterSet") {
                        const negatedCharSet = getNegationText(element)
                        context.report({
                            node,
                            loc: getRegexpLocation(sourceCode, node, ccNode),
                            messageId: "unexpected",
                            data: { negatedCharSet },
                            fix(fixer) {
                                const range = getRegexpRange(
                                    sourceCode,
                                    node,
                                    ccNode,
                                )
                                if (range == null) {
                                    return null
                                }
                                return fixer.replaceTextRange(
                                    range,
                                    fixerApplyEscape(negatedCharSet, node),
                                )
                            },
                        })
                    }
                },
            }
        }

        return defineRegexpVisitor(context, {
            createVisitor,
        })
    },
})

/**
 * Gets the text that negation the CharacterSet.
 */
function getNegationText(
    node: EscapeCharacterSet | UnicodePropertyCharacterSet,
) {
    let text: string
    if (node.kind === "digit") {
        text = "d"
    } else if (node.kind === "space") {
        text = "s"
    } else if (node.kind === "word") {
        text = "w"
    } else if (node.kind === "property") {
        text = "p"
    } else {
        throw new Error(`unknown kind:${node.kind}`)
    }
    if (!node.negate) {
        text = text.toUpperCase()
    }
    if (node.kind === "property") {
        if (node.value != null) {
            text += `{${node.key}=${node.value}}`
        } else {
            text += `{${node.key}}`
        }
    }

    return `\\${text}`
}