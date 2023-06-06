import { Banner } from "../components/Banner";
import { HomeBootcamp } from "../components/HomeBootcamp";
import { HomeCards } from "../components/HomeCards";

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  dataLayer: {
      userId: '001',
      userProject: 'project',
      page: 'home'
  },
  dataLayerName: 'PageDataLayer'
}

export const Home = () => {
  TagManager.dataLayer(tagManagerArgs)
  return (
    <>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <HomeBootcamp />
      </div>

      <HomeCards />
    </>
  );
};
