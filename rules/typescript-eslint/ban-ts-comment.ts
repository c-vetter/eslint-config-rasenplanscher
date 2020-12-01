export const typescriptEslintBanTsComment = {
	id: '@typescript-eslint/ban-ts-comment',
	key: 'ban-ts-comment',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Bans `@ts-<directive>` comments from being used or requires descriptions after directive',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md'
		},
		messages: {
			tsDirectiveComment: 'Do not use “@ts-{{directive}}” because it alters compilation errors.',
			tsDirectiveCommentRequiresDescription: 'Include a description after the “@ts-{{directive}}” directive to explain why the @ts-{{directive}} is necessary. The description must be {{minimumDescriptionLength}} characters or longer.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					'ts-expect-error': {
						oneOf: [
							{
								type: 'boolean',
								default: true
							},
							{
								enum: [
									'allow-with-description'
								]
							}
						]
					},
					'ts-ignore': {
						oneOf: [
							{
								type: 'boolean',
								default: true
							},
							{
								enum: [
									'allow-with-description'
								]
							}
						]
					},
					'ts-nocheck': {
						oneOf: [
							{
								type: 'boolean',
								default: true
							},
							{
								enum: [
									'allow-with-description'
								]
							}
						]
					},
					'ts-check': {
						oneOf: [
							{
								type: 'boolean',
								default: true
							},
							{
								enum: [
									'allow-with-description'
								]
							}
						]
					},
					minimumDescriptionLength: {
						type: 'number',
						default: 3
					}
				},
				additionalProperties: false
			}
		]
	}
}