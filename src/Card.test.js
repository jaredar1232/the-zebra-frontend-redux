import { render } from "@testing-library/react";
import Card from "./components/Card";
// Bring in mock card data
import aCardData from "../TestData";

describe("test card component", () => {
  test("Card renders correctly", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    expect(queryByTestId("card-test-id")).toBeTruthy;
  });

  test("VerifiedMark component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const verifiedMark = queryByTestId("verifiedmark-test-id");
    expect(verifiedMark).toBeInTheDocument();
  });

  test("Logo component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const logo = queryByTestId("logo-test-id");
    expect(logo).toBeTruthy();
  });

  test("carrier-name element renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const carrierName = queryByTestId("carriername-test-id");
    expect(carrierName).toBeTruthy();
  });

  test("Stars component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const stars = queryByTestId("stars-test-id");
    expect(stars).toBeTruthy();
  });

  test("Features component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const features = queryByTestId("features-test-id");
    expect(features).toBeTruthy();
  });

  test("tagline element renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const tagline = queryByTestId("tagline-test-id");
    expect(tagline).toBeTruthy();
  });

  test("tag element renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const tag = queryByTestId("tag-test-id");
    expect(tag).toBeTruthy();
  });

  test("Price component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const price = queryByTestId("price-test-id");
    expect(price).toBeTruthy();
  });

  test("Button component renders on Card", () => {
    // Changes the type value to be a card of type 0
    let changeType = aCardData;
    changeType.type = 0;

    const { queryByTestId } = render(
      <Card aCardData={changeType} key={aCardData.name} />
    );
    const button = queryByTestId("button-test-id");
    expect(button).toBeTruthy();
  });

  test("FeatureslistDropdown component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const featureslistdropdown = queryByTestId("featureslistdropdown-test-id");

    expect(featureslistdropdown).toBeTruthy();
  });

  test("DetailsDropdown component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const detailsdropdown = queryByTestId("detailsdropdown-test-id");
    expect(detailsdropdown).toBeTruthy();
  });

  test("Chevron component renders on Card", () => {
    const { queryByTestId } = render(
      <Card aCardData={aCardData} key={aCardData.name} />
    );
    const chevron = queryByTestId("chevron-test-id");
    expect(chevron).toBeTruthy();
  });
});

// test("renders nav ", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/minutes!/i);
//   expect(linkElement).toBeInTheDocument();
// });
