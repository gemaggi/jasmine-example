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

  describe("isOver21()", () =>{
    const nowStub = new Date("2018-03-13");

    it("Returns true when the age is 21", () => {
      spyOn(Date, "now").and.returnValue(nowStub);
      expect(isOver21("1997-01-01")).toBe(true);
    });

    it("Returns true when the age is over 21", () => {
      spyOn(Date, "now").and.returnValue(nowStub);
      expect(isOver21("1992-01-01")).toBe(true);
    });

    it("Returns false when the age is under 21", () => {
      spyOn(Date, "now").and.returnValue(nowStub);
      expect(isOver21("2000-01-01")).toBe(false);
    });
  });
});
