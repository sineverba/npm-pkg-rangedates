import { rangeDates } from "../index";

jest.useFakeTimers();
const mockDate = new Date("2023-04-17T00:00:00.000Z").getTime();
jest.setSystemTime(mockDate);

describe("Test rangeDates", () => {
  it("Should return date with month and year", () => {
    const expectedResult = {
      dateStart: "200001",
      dateEnd: "202312"
    };
    expect(rangeDates("200001", "202312", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if dateEnd is missing", () => {
    const expectedResult = {
      dateStart: "200001",
      dateEnd: "202304"
    };
    expect(rangeDates("200001", null, "YYYYMM")).toStrictEqual(expectedResult);
  });

  it("Should return date if dateStart is missing", () => {
    const expectedResult = {
      dateStart: "202304",
      dateEnd: "202401"
    };
    expect(rangeDates(null, "20240101", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should swap date if dateStart is greater than dateEnd", () => {
    const expectedResult = {
      dateStart: "200001",
      dateEnd: "202304"
    };
    expect(rangeDates("202304", "200001", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if outputFormat is missing", () => {
    const expectedResult = {
      dateStart: "2000-01-01",
      dateEnd: "2023-12-01"
    };
    expect(rangeDates("200001", "202312")).toStrictEqual(expectedResult);
  });

  it("Should return date with month without zero padding", () => {
    const expectedResult = {
      dateStart: "201503",
      dateEnd: "202112"
    };
    expect(rangeDates("20153", "202112", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if start is undefined", () => {
    const expectedResult = {
      dateStart: "202304",
      dateEnd: "202312"
    };
    expect(rangeDates("undefined", "202312", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if start is undefined + 1 char", () => {
    const expectedResult = {
      dateStart: "202304",
      dateEnd: "202312"
    };
    expect(rangeDates("undefined4", "202312", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if start is undefined + 2 char", () => {
    const expectedResult = {
      dateStart: "202304",
      dateEnd: "202312"
    };
    expect(rangeDates("undefined04", "202312", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if end is undefined", () => {
    const expectedResult = {
      dateStart: "200001",
      dateEnd: "202304"
    };
    expect(rangeDates("200001", "undefined", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if end is undefined + 1 char", () => {
    const expectedResult = {
      dateStart: "200001",
      dateEnd: "202304"
    };
    expect(rangeDates("200001", "undefined4", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });

  it("Should return date if end is undefined + 2 char", () => {
    const expectedResult = {
      dateStart: "200001",
      dateEnd: "202304"
    };
    expect(rangeDates("200001", "undefined04", "YYYYMM")).toStrictEqual(
      expectedResult
    );
  });
});
