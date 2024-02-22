import { useState } from "react";
import { tabsContent } from "../../utils/tabsData";
import BackHome from "../features/BackHome";

const NavTabs = () => {
  const [curIndex, setCurIndex] = useState(0);

  return (
    <>
      <BackHome />
      <section aria-labelledby="NavTabs" className="mt-24">
        <div className="container">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              {tabsContent?.map((tab) => (
                <button
                  key={tab.id}
                  className={
                    tab.id - 1 === curIndex
                      ? "btn-link !bg-slate-800"
                      : "btn-link"
                  }
                  onClick={() => setCurIndex(tab.id - 1)}
                >
                  Tab {tab.id}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-semibold">
                {tabsContent[curIndex].title}
              </h2>
              <p>{tabsContent[curIndex].content}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTabs;
