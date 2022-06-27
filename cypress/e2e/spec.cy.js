describe('empty spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  const nameInput = () => cy.get("input[name=name]");
  const pepperoni = () => cy.get("input[name=pepperoni]");
  const sausage = () => cy.get("input[name=sausage]");
  const button = () => cy.get("button[id=order-button]");

  it("sanity check", () => {
    expect(1+1).to.equal(2);
    expect({}).not.to.equal({});
    cy.contains("Toppings").should("exist");
  })

  describe("text & checkbox selections function and can submit order", () => {
    it("submit button starts out disabled", () => {
      button().should("be.disabled")
    })
    it("can enter text in name box and enable button", () => {
      nameInput()
      .should("have.value", "")
      .type("Arnold")
      .should("have.value", "Arnold");

      button().should("be.enabled")
    })
    it("can select multiple toppings", () => {
      pepperoni().click();
      sausage().click();
      pepperoni().should("be.checked");
      sausage().should("be.checked");
    })
    it("can submit form", () => {
      nameInput().type("Bernard");
      pepperoni().click();
      sausage().click();
      button().click();
      nameInput().should("have.value", "");
      pepperoni().should("not.be.checked");
      sausage().should("not.be.checked");
    })
  })
})