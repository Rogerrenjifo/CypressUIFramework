import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMEthods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { SignUpMethods } from "../pages/signup/signup.methods";
import { Logger } from "../support/logger";

const user = CommonPageMEthods.generateRandomString();
const password = CommonPageMEthods.generateRandomString(5);
const existingUser = LoginData.validCredentials.username;
const existingPassword = LoginData.validCredentials.password;

describe(CommonPageData.testSuites.register, () => {
  it("Valid login", () => {
    Logger.stepNumber(1);
    Logger.step("Navigate to the homepage.");
    CommonPageMEthods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Click on 'Log in' in the navigation bar");
    CommonPageMEthods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.step("Enter a valid username and password");
    LoginMethods.insertUserName(existingUser);
    LoginMethods.insertPassword(existingPassword);

    Logger.stepNumber(4);
    Logger.step("Click on 'Log in' to log in.");
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verify 'sign up successful' message");
    LoginMethods.verifySignedUser(LoginData.validCredentials.username);
  });
  
  it("Invalid Login", () => {
    Logger.stepNumber(1);
    Logger.step("Navigate to the homepage.");
    CommonPageMEthods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Click on 'Log in' in the navigation bar");
    CommonPageMEthods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.step("Enter a invalidvalid username and password");
    LoginMethods.insertUserName(existingUser);
    LoginMethods.insertPassword("asdsadssgcccvbbroger");

    Logger.stepNumber(4);
    Logger.step("Click on 'Log in' to log in.");
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verify that an error message displayed");
    LoginMethods.verifyWrongPasswordMessage();
  });
});
