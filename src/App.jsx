import { useState } from "react";
import Loader from "./sections/Loader";
import MainContent from "./sections/MainContent";

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone ? (
        <Loader onFinish={() => setLoadingDone(true)} />
      ) : (
        <MainContent />
      )}
    </>
  );
};

export default App;
