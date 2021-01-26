import React from "react";
import { ReactComponent as IconFeaturesBuyOnline } from "../assets/IconFeaturesBuyOnline.svg";
import { ReactComponent as IconFeaturesLocalAgent } from "../assets/IconFeaturesLocalAgent.svg";
import { ReactComponent as IconFeaturesMobile } from "../assets/IconFeaturesMobile.svg";
import { ReactComponent as IconFeaturesPaperless } from "../assets/IconFeaturesPaperless.svg";
import { ReactComponent as IconFeaturesNewCarReplacement } from "../assets/IconFeaturesNewCarReplacement.svg";
import { ReactComponent as IconFeaturesImmediateCoverage } from "../assets/IconFeaturesImmediateCoverage.svg";
import { ReactComponent as IconFeaturesAutomaticPayment } from "../assets/IconFeaturesAutomaticPayment.svg";
import { ReactComponent as IconFeaturesOnlineIdCards } from "../assets/IconFeaturesOnlineIdCards.svg";
import { ReactComponent as IconFeaturesSR22 } from "../assets/IconFeaturesSR22.svg";
import { ReactComponent as IconFeaturesRoadside } from "../assets/IconFeaturesRoadside.svg";
import { ReactComponent as IconFeaturesRideshare } from "../assets/IconFeaturesRideshare.svg";
import { ReactComponent as IconFeaturesRentersBundle } from "../assets/IconFeaturesRentersBundle.svg";
import { ReactComponent as IconFeaturesRateLock } from "../assets/IconFeaturesRateLock.svg";
import { ReactComponent as IconFeaturesOnlineServicing } from "../assets/IconFeaturesOnlineServicing.svg";
import { ReactComponent as IconFeaturesNonOwner } from "../assets/IconFeaturesNonOwner.svg";
import { ReactComponent as IconFeaturesNoCreditCheck } from "../assets/IconFeaturesNonOwner.svg";
import { ReactComponent as IconFeaturesLowDownPayment } from "../assets/IconFeaturesLowDownPayment.svg";
import { ReactComponent as IconFeaturesDriverExclusion } from "../assets/IconFeaturesDriverExclusion.svg";
import { ReactComponent as IconFeaturesCreditCard } from "../assets/IconFeaturesCreditCard.svg";
import { ReactComponent as IconFeatures247Support } from "../assets/IconFeatures247Support.svg";

const Features = (props) => {
  // Takes in a features array. Returns an array of feature elements
  const buildFeatures = (featureNamesArray) => {
    let featuresArray = [];

    // TODO: REFACTOR
    /** 
    I know... This "seems" hideous. Its just a for loop
    looping over an array of feature names. Inside is a 
    20 statement ternary. If a name matches a ternary then 
    the svg component is pushed into the features array. 
    Will refactor if time allows. Maybe a string to JSX library?
    */
    for (let i = 0; i < featureNamesArray.length; i++) {
      //   console.log(featureNamesArray[i].icon);
      let iconName = featureNamesArray[i].icon;

      //   featuresArray.push(JSON.parse(`<${iconName} />`));

      //   let pushable =
      //     iconName === "IconFeaturesBuyOnline" ? (
      //       <IconFeaturesBuyOnline />
      //     ) : featureNamesArray[i].icon === "IconFeaturesLocalAgent" ? (
      //       <IconFeaturesLocalAgent />
      //     ) : featureNamesArray[i].icon === "IconFeaturesMobile" ? (
      //       <IconFeaturesMobile />
      //     ) : featureNamesArray[i].icon === "IconFeaturesPaperless" ? (
      //       <IconFeaturesPaperless />
      //     ) : featureNamesArray[i].icon === "IconFeaturesNewCarReplacement" ? (
      //       <IconFeaturesNewCarReplacement />
      //     ) : featureNamesArray[i].icon === "IconFeaturesImmediateCoverage" ? (
      //       <IconFeaturesImmediateCoverage />
      //     ) : featureNamesArray[i].icon === "IconFeaturesAutomaticPayment" ? (
      //       <IconFeaturesAutomaticPayment />
      //     ) : featureNamesArray[i].icon === "IconFeaturesOnlineIdCards" ? (
      //       <IconFeaturesOnlineIdCards />
      //     ) : featureNamesArray[i].icon === "IconFeaturesSR22" ? (
      //       <IconFeaturesSR22 />
      //     ) : featureNamesArray[i].icon === "IconFeaturesRoadside" ? (
      //       <IconFeaturesRoadside />
      //     ) : featureNamesArray[i].icon === "IconFeaturesRideshare" ? (
      //       <IconFeaturesRideshare />
      //     ) : featureNamesArray[i].icon === "IconFeaturesRentersBundle" ? (
      //       <IconFeaturesRentersBundle />
      //     ) : featureNamesArray[i].icon === "IconFeaturesRateLock" ? (
      //       <IconFeaturesRateLock />
      //     ) : featureNamesArray[i].icon === "IconFeaturesOnlineServicing" ? (
      //       <IconFeaturesOnlineServicing />
      //     ) : featureNamesArray[i].icon === "IconFeaturesNonOwner" ? (
      //       <IconFeaturesNonOwner />
      //     ) : featureNamesArray[i].icon === "IconFeaturesNoCreditCheck" ? (
      //       <IconFeaturesNoCreditCheck />
      //     ) : featureNamesArray[i].icon === "IconFeaturesLowDownPayment" ? (
      //       <IconFeaturesLowDownPayment />
      //     ) : featureNamesArray[i].icon === "IconFeaturesDriverExclusion" ? (
      //       <IconFeaturesDriverExclusion />
      //     ) : featureNamesArray[i].icon === "IconFeaturesCreditCard" ? (
      //       <IconFeaturesCreditCard />
      //     ) : featureNamesArray[i].icon === "IconFeatures247Support" ? (
      //       <IconFeatures247Support />
      //     ) : null;

      //   featuresArray.push(pushable);

      if (iconName === "IconFeaturesBuyOnline") {
        featuresArray.push(<IconFeaturesBuyOnline />);
      }
      if (featureNamesArray[i].icon === "IconFeaturesLocalAgent") {
        featuresArray.push(<IconFeaturesLocalAgent />);
      }
      if (featureNamesArray[i].icon === "IconFeaturesMobile") {
        featuresArray.push(<IconFeaturesMobile />);
      }
      if (featureNamesArray[i].icon === "IconFeaturesPaperless") {
        featuresArray.push(<IconFeaturesPaperless />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesNewCarReplacement") {
        featuresArray.push(<IconFeaturesNewCarReplacement />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesImmediateCoverage") {
        featuresArray.push(<IconFeaturesImmediateCoverage />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesAutomaticPayment") {
        featuresArray.push(<IconFeaturesAutomaticPayment />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesOnlineIdCards") {
        featuresArray.push(<IconFeaturesOnlineIdCards />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesSR22") {
        featuresArray.push(<IconFeaturesSR22 />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesRoadside") {
        featuresArray.push(<IconFeaturesRoadside />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesRideshare") {
        featuresArray.push(<IconFeaturesRideshare />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesRentersBundle") {
        featuresArray.push(<IconFeaturesRentersBundle />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesRateLock") {
        featuresArray.push(<IconFeaturesRateLock />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesOnlineServicing") {
        featuresArray.push(<IconFeaturesOnlineServicing />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesNonOwner") {
        featuresArray.push(<IconFeaturesNonOwner />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesNoCreditCheck") {
        featuresArray.push(<IconFeaturesNoCreditCheck />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesLowDownPayment") {
        featuresArray.push(<IconFeaturesLowDownPayment />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesDriverExclusion") {
        featuresArray.push(<IconFeaturesDriverExclusion />);
      }

      if (featureNamesArray[i].icon === "IconFeaturesCreditCard") {
        featuresArray.push(<IconFeaturesCreditCard />);
      }

      if (featureNamesArray[i].icon === "IconFeatures247Support") {
        featuresArray.push(<IconFeatures247Support />);
      }
    }
    return featuresArray;
  };

  return <div> {buildFeatures(props.features)}</div>;
};

export default Features;
