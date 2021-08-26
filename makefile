build:
	yarn cli
	yarn build
	yarn publish --access public
	yarn deploy-storybook
	git add .
	git commit -m "$(m)"
	git push
