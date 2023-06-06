import { ApplyForm } from "../components/ApplyForm";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  dataLayer: {
      userId: '001',
      userProject: 'project',
      page: 'apply'
  },
  dataLayerName: 'PageDataLayer'
}

export const Apply = () => {
  TagManager.dataLayer(tagManagerArgs)
  return (
    <div className="flex flex-col justify-center bg-coolgray">
      <div className="text-center bg-seaside py-8 shadow-lg">
        <h1 className="text-coolgray text-5xl font-bold drop-shadow-xl uppercase">
          Become
        </h1>
        <h1 className="text-coolgray text-5xl font-bold drop-shadow-xl uppercase">
          A
        </h1>
        <h1 className="text-coolgray text-5xl font-bold drop-shadow-xl uppercase">
          web
        </h1>
        <h1 className="text-coolgray text-5xl font-bold drop-shadow-xl uppercase">
          developer!
        </h1>
      </div>
      <ApplyForm />
    </div>
  );
};
