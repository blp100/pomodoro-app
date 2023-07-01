import Header from "../components/header";
import StatusBar from "../components/status-bar";
import Timer from "../components/timer";
import Setting from "../components/setting";
import { useState } from "react";
import { initialTabs as tabs } from "../lib/constants";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const [countingStatus, setCountingStatus] = useState("pause");
  const clickStatuseHandler = (item) =>{
    if (countingStatus !== "counting"){
      setSelectedTab(item);
    }
  }
  const statusHandler = (item) => {
      setSelectedTab(item);
  };

  return (
    <>
      <Header />
      <StatusBar selectedTab={selectedTab} statusHandler={clickStatuseHandler} />
      <Timer
        timerData={selectedTab}
        statusHandler={statusHandler}
        countingStatus={countingStatus}
        setCountingStatus={setCountingStatus}
      />
      <Setting />
    </>
  );
};

export default Page;
