# cypress
This projet build an ui automated test cases implemented in cypress.

# NOTES
to work with allure reports the version of cypress should be 12.14.0 an upper version has a bug 
https://github.com/cypress-io/cypress/issues/27113
 # Commands
 npm install -D cypress@12.14.0
 npm i -D @shelex/cypress-allure-plugin (https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
 sudo npm install -g allure-commandline
 npm init -y


 npx cypress open
 npx cypress run --env allure=true
 npm run allure-report
 unset GTK_PATH (to fix a java issue in vscode)
 allure open