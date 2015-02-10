describe('pigLatin', function() {
  it("prints ay if the word starts with the letter a", function() {
    expect(pigLatin("A")).to.equal("aay")
  });

  it("prints ay if the word starts with a vowel", function() {
    expect(pigLatin("elixer")).to.equal("elixeray")
  });

  it("prints ay if the word starts with the letter i", function() {
    expect(pigLatin("Is")).to.equal("isay")
  });

  it("prints ay if the word starts with a vowel", function() {
    expect(pigLatin("Onion")).to.equal("onionay")
  });

  it("prints ay if the word starts with a vowel", function() {
    expect(pigLatin("Union")).to.equal("unionay")
  });

  it("prints ay if the word starts with l test!", function() {
    expect(pigLatin("latin")).to.equal("atinlay")
  });
});
