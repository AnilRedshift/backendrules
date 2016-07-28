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

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var dumbCode = 2;",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
