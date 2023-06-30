import Header from "../components/header";
import StatusBar from "../components/status-bar";
import Timer from "../components/timer";
import Setting from "../components/setting";
import { useState } from "react";
import { initialTabs as tabs } from "../lib/constants";

const Page = () => {
  const [timerData, setTimerLabel] = useState(tabs[0]);
  const statusHandler = (item) => {
    setTimerLabel(item);
  };

  return (
    <>
      <Header />
      <StatusBar statusHandler={statusHandler} />
      <Timer timerData={timerData} />
      <Setting />
    </>
  );
};

export default Page;
