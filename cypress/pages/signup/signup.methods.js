import { CommonPageMEthods } from "../common-page/common-page.methods";
import { SignUpElements } from "./signup.elements";

export class SignUpMethods {
  static insertUserName(username) {
    SignUpElements.textboxes.username.invoke("val", username);
  }

  static insertPassword(password) {
    SignUpElements.textboxes.password.invoke("val", password);
  }

  static clickOnSignupButton() {
    SignUpElements.buttons.signup.click();
  }

  static login(username, password) {
    this.insertUserName(username);
    this.insertPassword(password);
    this.clickOnLoginButton();
  }
  static verifySignupSuccesfulMessageIsDisplayed() {
    CommonPageMEthods.verifyAlert("Sign up successful.");
  }
}
