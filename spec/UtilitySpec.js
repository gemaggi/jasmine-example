describe("Utility functions", function () {

  describe("fullName()", function() {
    it("concatenates 2 name parts with a space", function() {
      expect(fullName("Billy", "Bob")).toEqual("Billy Bob");
    });
  });
  describe("ageInYears()", () => {
    it("Returns the age from a birthday", ()=>{
      expect(ageInYears("1980-05-17")).toEqual(37);
    });
  });
});
