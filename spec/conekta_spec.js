describe("Conekta js", function() {

  beforeEach(function(){
    loadFixtures("credit_card.html");
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send');
  });


  it("the window should contain a conekta object", function() {
    expect(window.Conekta).toExist();
  });


  it("the window should contain a conektaAjax function", function() {
    expect(window.conektaAjax).toBeDefined();
    expect(window.conektaAjax).toBeDefined();
  });

  it("Should call AJAx request ", function() {
    $('button').click();
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
  });


  it("should retunr call xDomainPost ", function() {
    spyOn(Conekta._helpers, 'xDomainPost').and.callThrough();
    $('button').click();
    expect(Conekta._helpers.xDomainPost).toHaveBeenCalled();
  });

  it("should validate a card expiration date", function () {
    today = new Date()
    year = today.getFullYear()
    month = today.getMonth() + 1 // .getMonth() returns months 0 to 11

    expect(window.Conekta).toExist();
    expect(window.Conekta.card).toExist();

    validation_result = window.Conekta.card.validateExpirationDate(month, year)
    expect(validation_result)

    month = today.getMonth() + 1

    if(month > 12){
      month = 1
      year = today.getFullYear() + 1
    }

    validation_result = window.Conekta.card.validateExpirationDate(month, year)
    expect(validation_result)

    month = today.getMonth() - 1

    if(month < 1){
      month = 12
      year = today.getFullYear() - 1
    }
    
    validation_result = window.Conekta.card.validateExpirationDate(month, year)
    expect( ! validation_result)
  })


});