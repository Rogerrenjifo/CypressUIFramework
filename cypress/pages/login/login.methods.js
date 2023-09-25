import { CommonPageElements } from "../common-page/common-page.elements";
import { CommonPageMEthods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods {
  static insertUserName(username) {
    LoginElements.textboxes.username.invoke("val", username);
  }

  static insertPassword(password) {
    LoginElements.textboxes.password.invoke("val", password);
  }

  static clickOnLoginButton() {
    LoginElements.buttons.login.click();
  }

  static login(username, password) {
    this.insertUserName(username);
    this.insertPassword(password);
    this.clickOnLoginButton();
  }
  static verifySignedUser(username) {
    CommonPageElements.topMenu.loggedUserName.should(
      "have.text",
      `Welcome ${username}`
    );
  }
  static verifyWrongPasswordMessage() {
    CommonPageMEthods.verifyAlert("Wrong password.");
  }
}
