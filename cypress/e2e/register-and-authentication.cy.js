import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMEthods } from "../pages/common-page/common-page.methods";
import { SignUpMethods } from "../pages/signup/signup.methods";
import { Logger } from "../support/logger";

const user = CommonPageMEthods.generateRandomString();
const password = CommonPageMEthods.generateRandomString(5);
const existingUser = "random01";

describe(CommonPageData.testSuites.register, () => {
  it("Registration of a valid user", () => {
    Logger.stepNumber(1);
    Logger.step("Navigate to the homepage.");
    CommonPageMEthods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Click on 'Sign up' in the navigation bar");
    CommonPageMEthods.clickOnSignupOption();

    Logger.stepNumber(3);
    Logger.step("Fill in all mandatory fields with valid information");
    SignUpMethods.insertUserName(user);
    SignUpMethods.insertPassword(password);

    Logger.stepNumber(4);
    Logger.step("Click on 'Sign up' to register the user");
    SignUpMethods.clickOnSignupButton();
    Logger.verification("Verify 'sign up successful' message");
    SignUpMethods.verifySignupSuccesfulMessageIsDisplayed();
  });
  it("Registration of an invalid user", () => {
    Logger.stepNumber(1);
    Logger.step("Navigate to the homepage.");
    CommonPageMEthods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Click on 'Sign up' in the navigation bar");
    CommonPageMEthods.clickOnSignupOption();

    Logger.stepNumber(3);
    Logger.step("Fill in all mandatory fields with invalid information");
    SignUpMethods.insertUserName(existingUser);
    SignUpMethods.insertPassword(password);

    Logger.stepNumber(4);
    Logger.step("Click on 'Sign up' to register the user");
    SignUpMethods.clickOnSignupButton();
    Logger.verification("Verify 'This user already exist.' message");
    SignUpMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed();
  });
});
