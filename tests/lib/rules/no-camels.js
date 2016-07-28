/**
 * @fileoverview all underscores all the time
 * @author Anil Kulkarni
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-camels"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-camels", rule, {

    valid: [
        //"var smart_code = 3",
        //"var PascalCase = 2",
    ],

    invalid: [
        {
            code: "var dumbCode = 2;",
            errors: [{
                message: "RESPECT MAH AUTHORITAH",
                type: "VariableDeclaration",
            }],
            output: "var dumb_code = 2;",
        }
    ]
});
