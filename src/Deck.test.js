import React from "react";
import renderer from "react-test-renderer";
import carrierCardData from "../TestData";
import { Deck, sortData } from "./components/Deck";

describe("Deck Unit Testing", () => {
  describe("test decks sortdata helper", () => {
    test("deck has a sortdata helper", () => {
      expect(sortData).toBeDefined();
    });

    test("initial card should be low card", () => {
      expect(carrierCardData[0].name).toMatch("Low Card");
    });

    test("initial card should not be high card", () => {
      expect(carrierCardData[0].name).not.toMatch("High Card");
    });

    // Test price keywords
    test("sort highest price returns high card first ", () => {
      expect(sortData("highest", carrierCardData)[0].name).toMatch("High Card");
    });

    test("sort highest price should not return low card first ", () => {
      expect(sortData("highest", carrierCardData)[0].name).not.toMatch(
        "Low Card"
      );
    });

    test("sort lowest price returns low card first ", () => {
      expect(sortData("lowest", carrierCardData)[0].name).toMatch("Low Card");
    });

    test("sort lowest price should not return high card first ", () => {
      expect(sortData("lowest", carrierCardData)[0].name).not.toMatch(
        "High Card"
      );
    });

    // Test rating keywords
    test("sort best rating returns high card first ", () => {
      expect(sortData("best", carrierCardData)[0].name).toMatch("High Card");
    });

    test("sort best rating should not return low card first ", () => {
      expect(sortData("best", carrierCardData)[0].name).not.toMatch("Low Card");
    });

    test("sort worst rating returns low card first ", () => {
      expect(sortData("worst", carrierCardData)[0].name).toMatch("Low Card");
    });

    test("sort worst rating should not return high card first ", () => {
      expect(sortData("worst", carrierCardData)[0].name).not.toMatch(
        "High Card"
      );
    });

    // Test alphabetical keywords: lowcard always first
    test("sort alphabetical a-z returns low card first ", () => {
      expect(sortData("alphabeticalA", carrierCardData)[0].name).toMatch(
        "Low Card"
      );
    });

    test("sort alphabetical a-z does not return high card first ", () => {
      expect(sortData("alphabeticalA", carrierCardData)[0].name).not.toMatch(
        "High Card"
      );
    });

    test("sort alphabetical z-a returns low card first ", () => {
      expect(sortData("alphabeticalZ", carrierCardData)[0].name).toMatch(
        "Low Card"
      );
    });

    test("sort alphabetical z-a does not return high card first ", () => {
      expect(sortData("alphabeticalZ", carrierCardData)[0].name).not.toMatch(
        "High Card"
      );
    });
  });

  describe("test decks render", () => {
    test("deck renders correctly", () => {
      const formValue = "best";
      const tree = renderer
        .create(
          <Deck carrierCardData={carrierCardData} formValue={formValue} />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
