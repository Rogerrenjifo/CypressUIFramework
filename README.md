# cypress
This projet build an ui automated test cases implemented in cypress.

![Alt text](image.gitpng)

# Install node js 
sudo apt updatenode
sudo apt install nodejs
# NOTES
to work with allure reports the version of cypress should be 12.14.0 an upper version has a bug 
https://github.com/cypress-io/cypress/issues/27113
 # Commands
 just for the first time 
 > npm install -D cypress@12.14.0
 > npm i -D @shelex/cypress-allure-plugin (https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
 > sudo npm install -g allure-commandline
 > npm init -y
# if the project is created just type 
> npm install

 npx cypress open
 npx cypress run --env allure=true
 npm run all
 unset GTK_PATH (to fix a java issue in vscode)
 allure open

 # run script 
 npm run all



# Urls
## Cypress documentation
> https://docs.cypress.io/guides/overview/why-cypress
## Cypress bootcamp course
> https://www.udemy.com/course/bootcamp-cypress-como-crear-un-framework-desde-cero/
## Page under test 
> https://www.demoblaze.com/
## Report url
> https://testreportbucketrrenjifo.s3.amazonaws.com/index.html
