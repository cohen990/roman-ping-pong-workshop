describe("a properly set up test suite", () => {
    it("should have a test that fails", () => {
        expect(true).toBe(false);
    })

    it("should have a test that passes", () => {
        expect(true).toBe(true);
    })
})
