describe("Utility functions", function () {

  describe("fullName()", function() {
    it("concatenates 2 name parts with a space", function() {
      expect(fullName("Billy", "Bob")).toEqual("Billy Bob");
    });
  });
});
