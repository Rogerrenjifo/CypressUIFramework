import { SignUpElements } from "./signup.elements";


export class LoginMethods{
  static insertUserName(username){
    SignUpElements.textboxes.username.invoke('val', username)
  }

  static insertPassword(password){
    SignUpElements.textboxes.password.invoke('val', password)
  }

  static clickOnLoginButton(){
    SignUpElements.buttons.login.click()
  }

  static login(username, password){
    this.insertUserName(username)
    this.insertPassword(password)
    this.clickOnLoginButton()
  }
}
