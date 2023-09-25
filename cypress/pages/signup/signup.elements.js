export class SignUpElements {
  static get textboxes() {
    return {
      get username() {
        return cy.get("#sign-username");
      },
      get password() {
        return cy.get("#sign-password");
      },
    };
  }
  static get buttons() {
    return {
      get close() {
        return cy.contains("button", "Close");
      },
      get signup() {
        return cy.contains("button", "Sign up");
      },
    };
  }
}
