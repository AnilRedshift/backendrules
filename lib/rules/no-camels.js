/**
 * @fileoverview all underscores all the time
 * @author Anil Kulkarni
 */
"use strict";
var camelCase = require('camelcase');
var decamelize = require('decamelize');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    // variables should be defined here

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        VariableDeclaration: function(node) {
            if (node.declarations.length === 1) {
                var declaration = node.declarations[0];
                if (declaration.type === 'VariableDeclarator' && declaration.id.type === 'Identifier') {
                    var name = declaration.id.name;
                    if (name[0].toLowerCase() === name[0]) {
                        if (decamelize(name) !== name) {
                            context.report(node, 'RESPECT MAH AUTHORITAH');
                        }
                    }
                }
            }
            //console.log(node.declarations[0].id.name);
        }
        // give me methods

    };

};

module.exports.schema = [
    // fill in your schema
];
