import { useState } from "react";
import { BackHome } from "../../utils/helper";

const accordionData = [
  {
    id: 1,
    title: "Lorem ipsum 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo quo laboriosam magnam. Sint in blanditiis aliquam. In nam iusto libero repellat aliquam? Omnis.",
  },
  {
    id: 2,
    title: "Lorem ipsum 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo quo laboriosam magnam. Sint in blanditiis aliquam. In nam iusto libero repellat aliquam? Omnis.",
  },
  {
    id: 3,
    title: "Lorem ipsum 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo quo laboriosam magnam. Sint in blanditiis aliquam. In nam iusto libero repellat aliquam? Omnis.",
  },
  {
    id: 4,
    title: "Lorem ipsum 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo quo laboriosam magnam. Sint in blanditiis aliquam. In nam iusto libero repellat aliquam? Omnis.",
  },
];

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiple, setEnableMultiple] = useState<boolean>(false);
  const [selectedIDs, setSelectedIDs] = useState<number[]>([]);

  const handleSingleSelection = (id: React.SetStateAction<number | null>) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelection = (id: number) => {
    const idsClone = [...selectedIDs];
    const currentIdIndex = idsClone.indexOf(id);

    if (currentIdIndex === -1) idsClone.push(id);
    else idsClone.splice(currentIdIndex, 1);

    setSelectedIDs(idsClone);
  };

  return (
    <>
      <BackHome />
      <section aria-labelledby="Accordion">
        <div className="container">
          <div className="mb-20 text-center">
            <h1 className="mb-12 text-5xl">Accordion </h1>
            <button
              onClick={() => setEnableMultiple((prev) => !prev)}
              className={enableMultiple ? "btn-link !bg-slate-800" : "btn-link"}
            >
              {enableMultiple ? "Disable" : "Enable"} Multiple Selection
            </button>
          </div>
          <div className="flex flex-col items-start gap-4">
            {accordionData?.map((item) => (
              <div
                key={item.id}
                className="w-full rounded-md bg-slate-100 px-6 py-4"
              >
                <div
                  onClick={
                    enableMultiple
                      ? () => handleMultiSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                  className="mb-4 flex cursor-pointer items-center justify-between gap-4"
                >
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={
                      selectedIDs.includes(item.id) || selected === item.id
                        ? "h-4 w-4 rotate-180"
                        : "h-4 w-4 transition-transform duration-200 ease-in-out"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {enableMultiple ? (
                  selectedIDs.includes(item.id) ? (
                    <p>{item.description}</p>
                  ) : null
                ) : selected === item.id ? (
                  <p>{item.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
