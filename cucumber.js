/**
 * @exports Cucumber default config
 */
 module.exports = {
	default: {
		dryRun: false,
		strict: true,
		paths: ['src/features/**/*.feature'],
		requireModule: ['ts-node/register'],
		require: ['src/steps/**/*.steps.ts', 'src/utils/hooks.ts'],
		format: ['json:reports/cucumber-report.json', '@cucumber/pretty-formatter'],
		parallel: 1,
		formatOptions: {
			snippetInterface: 'async-await',
			colorsEnabled: true,
			theme: {
				tag: ['yellow'],
				'feature keyword': ['magenta', 'bold'],
				'feature name': ['bold', 'underline'],
				'feature description': ['yellow', 'italic'],
				'scenario keyword': ['red'],
				'scenario name': ['bold', 'underline'],
				'step keyword': ['italic'],
				'step text': ['green']
			}
		}
	}
};
