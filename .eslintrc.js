module.exports = {
	extends: 'airbnb',
	env: {
		browser: true,
	},
	rules: {
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
		}],

		// forbid comparison to negative zero
		'no-compare-neg-zero': 'error',

		// allow else after return - although unnecessary, it often improves readability
		'no-else-return': 'off',

		// allow calling Object.prototype methods directly on object instances
		'no-prototype-builtins': 'off',


		// ** BEST PRACTICES **

		// disallow reassignment of function parameters as it just leads to confusing code and bugs.
		// Allow modification of parameter properties (this is done in many places in our apps and
		// is less problematic than reassigning the parameter itself - but still, mutation is best
		// avoided where possible)
		'no-param-reassign': ['error', {
			props: false
		}],

		// only pass Error instances to the reject function of promises
		'prefer-promise-reject-errors': 'error',

		// disallow providing the 10 radix when calling parseInt. Not needed in ES5-compliant environments
		radix: ['error', 'as-needed'],


		// ** STRICT MODE **

		// don't show errors for either including or omitting 'use strict'
		strict: 'off',


		// ** VARIABLES **

		// disallow use of variables before they are defined
		// allow use of functions before definition (function declarations are hoisted)
		// allow use of variables before declaration, if the variables are declared in an upper scope
		'no-use-before-define': ['error', {
			functions: false,
			classes: true,
			variables: false
		}],


		// ** STYLISTIC ISSUES **

		// don't check for named function expressions - because we use these in many places, and it
		// would be needless work to change them (for now)
		'func-names': 'off',

		// use tabs for indentation - otherwise as per AirBnB style guide
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// MemberExpression: null,
			// CallExpression: {
			// parameters: null,
			// },
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
		}],

		'new-cap': ['error', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List', 'Immutable.Record'],
			properties: false,
		}],

		// require empty line before return statement, for readability
		'newline-before-return': 'error',

		// allow multiple empty lines, because linter errors are annoying when just clearing coding space
		'no-multiple-empty-lines': 'off',

		// allow unary operators in for loop afterthoughts, but otherwise prohibit, as errant
		// whitespace can change source code semantics
		'no-plusplus': ['error', {
			allowForLoopAfterthoughts: true
		}],

		// allow tabs, since that's what we're using for indentation
		'no-tabs': 'off',

		// allow dangling underscores
		'no-underscore-dangle': 'off',

		// require a space at the beginning of comments, except for block comments with multiple **
		// block comments also require a space at the end
		'spaced-comment': ['error', 'always', {
			block: {
				exceptions: ['**'],
				balanced: true,
			},
		}],


		// ** ES6 **

		'arrow-parens': ['error', 'always'],

		// enforce use of const instead of let where the variable isn't reassigned
		// since no-use-before-define is set with the functions = false option,
		// ignoreReadBeforeAssign can be set to false without causing conflicting rules
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: false,
		}],
		'no-console': 'off',
		'react/jsx-closing-tag-location': 'error',

		// enforce .js extensions for files containing jsx
		'react/jsx-filename-extension': ['error', {
			extensions: ['.js']
		}],

		// enforce JSX indentation using tabs, not spaces
		'react/jsx-indent': ['error', 'tab'],

		// enforce props indentation, using tabs
		'react/jsx-indent-props': ['error', 'tab'],

		// require JSX in an array or iterator to have a key prop
		'react/jsx-key': 0,

		// prevent redundant use of shouldComponentUpdate when extending React.PureComponent
		'react/no-redundant-should-component-update': 'error',

		// don't enfoce use of stateless functional components
		'react/prefer-stateless-function': 'off',

		// require propTypes to be sorted alphabetically, for readability
		'react/sort-prop-types': ['error', {
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false,
		}],
		'react/prop-types': 0,
	},
};
