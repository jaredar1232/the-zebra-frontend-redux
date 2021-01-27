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
  // Only returns if values exist
  if (props.features) {
    // Takes in a features array. Returns an array of feature components
    const buildFeatures = (featureNamesArray) => {
      let featuresComponentArray = [];

      for (let i = 0; i < featureNamesArray.length; i++) {
        const featuresObject = {
          IconFeaturesBuyOnline: <IconFeaturesBuyOnline key={i} />,
          IconFeaturesLocalAgent: <IconFeaturesLocalAgent key={i} />,
          IconFeaturesMobile: <IconFeaturesMobile key={i} />,
          IconFeaturesPaperless: <IconFeaturesPaperless key={i} />,
          IconFeaturesNewCarReplacement: (
            <IconFeaturesNewCarReplacement key={i} />
          ),
          IconFeaturesImmediateCoverage: (
            <IconFeaturesImmediateCoverage key={i} />
          ),
          IconFeaturesAutomaticPayment: (
            <IconFeaturesAutomaticPayment key={i} />
          ),
          IconFeaturesOnlineIdCards: <IconFeaturesOnlineIdCards key={i} />,
          IconFeaturesSR22: <IconFeaturesSR22 key={i} />,
          IconFeaturesRoadside: <IconFeaturesRoadside key={i} />,
          IconFeaturesRideshare: <IconFeaturesRideshare key={i} />,
          IconFeaturesRentersBundle: <IconFeaturesRentersBundle key={i} />,
          IconFeaturesRateLock: <IconFeaturesRateLock key={i} />,
          IconFeaturesOnlineServicing: <IconFeaturesOnlineServicing key={i} />,
          IconFeaturesNonOwner: <IconFeaturesNonOwner key={i} />,
          IconFeaturesNoCreditCheck: <IconFeaturesNoCreditCheck key={i} />,
          IconFeaturesLowDownPayment: <IconFeaturesLowDownPayment key={i} />,
          IconFeaturesDriverExclusion: <IconFeaturesDriverExclusion key={i} />,
          IconFeaturesCreditCard: <IconFeaturesCreditCard key={i} />,
          IconFeatures247Support: <IconFeatures247Support key={i} />,
        };
        let iconName = featureNamesArray[i].icon;
        featuresComponentArray.push(featuresObject[iconName]);
      }
      return featuresComponentArray;
    };

    return (
      <div className="feature-icons"> {buildFeatures(props.features)}</div>
    );
  } else {
    return null;
  }
};

export default Features;
