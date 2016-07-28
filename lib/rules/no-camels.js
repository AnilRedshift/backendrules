/**
 * @fileoverview all underscores all the time
 * @author Anil Kulkarni
 */
"use strict";
var camelCase = require('camelcase');
var decamelize = require('decamelize');

function create(context) {
    return {
        VariableDeclaration: function(node) {
            if (node.declarations.length === 1) {
                var declaration = node.declarations[0];
                if (declaration.type === 'VariableDeclarator' && declaration.id.type === 'Identifier') {
                    var name = declaration.id.name;
                    if (name[0].toLowerCase() === name[0]) {
                        if (decamelize(name) !== name) {
                            context.report({
                                node: node,
                                message: 'RESPECT MAH AUTHORITAH',
                                fix: function(fixer) {
                                    return fixer.replaceText(declaration.id, decamelize(name));
                                }
                            });
                        }
                    }
                }
            }
        }
    };

};

module.exports = {
    meta: {
    },
    create: create,
    fixable: 'code',
};
