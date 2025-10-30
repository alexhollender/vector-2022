"use client";

import * as React from "react";
import Link from "next/link";

const AttributionDemoPage: React.FC = () => {
  const [optionOne, setOptionOne] = React.useState(false);
  const [optionTwo, setOptionTwo] = React.useState(false);
  const [optionThree, setOptionThree] = React.useState(false);
  const [optionFour, setOptionFour] = React.useState(false);

  return (
    <>
      <div className="w-full h-full fixed inset-0 bg-[#1D1E1F]">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="p-12 flex flex-col items-center justify-center gap-y-10">
            <h1 className="text-2xl font-bold italic uppercase text-white font-sans text-center">
              Place cards on the timeline in the correct order
            </h1>
            <div className="bg-[#9DADBA] px-8 py-4 text-xl font-bold italic uppercase text-[#1D1E1F] rounded-lg -skew-x-12">
              <p className="skew-x-12">Best Streak</p>
              <p className="text-4xl skew-x-12">12</p>
            </div>
            <button className="bg-[#025B8E] px-6 py-3 text-xl font-bold italic uppercase text-white rounded-full">
              Start Game
            </button>
          </div>
        </div>

        <footer className="w-full h-28 fixed bottom-0 left-0 right-0">
          <div className="px-12 flex flex-col items-center justify-center gap-y-4">
            <p className="text-base text-white text-center">
              All data sourced from{" "}
              <Link
                href="https://www.wikidata.org/"
                className="text-white underline"
              >
                Wikidata
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.wikipedia.org/"
                className="text-white underline"
              >
                Wikipedia
              </Link>
              .
            </p>
            <p className="text-base text-white text-center">
              Have feedback? Please report it on{" "}
              <Link
                href="https://github.com/wikidata/attribution-demo"
                className="text-white underline"
              >
                GitHub
              </Link>
              .
            </p>
            <div className="flex items-center justify-center gap-x-4"></div>
          </div>
        </footer>
      </div>
      <ConfigPanel
        optionOne={optionOne}
        setOptionOne={setOptionOne}
        optionTwo={optionTwo}
        setOptionTwo={setOptionTwo}
        optionThree={optionThree}
        setOptionThree={setOptionThree}
        optionFour={optionFour}
        setOptionFour={setOptionFour}
      />
    </>
  );
};

export default AttributionDemoPage;

interface ConfigPanelProps {
  optionOne: boolean;
  setOptionOne: (value: boolean) => void;
  optionTwo: boolean;
  setOptionTwo: (value: boolean) => void;
  optionThree: boolean;
  setOptionThree: (value: boolean) => void;
  optionFour: boolean;
  setOptionFour: (value: boolean) => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  optionOne,
  setOptionOne,
  optionTwo,
  setOptionTwo,
  optionThree,
  setOptionThree,
  optionFour,
  setOptionFour,
}) => {
  const CheckboxItem: React.FC<{
    label: string;
    checked: boolean;
    onChange: (value: boolean) => void;
  }> = ({ label, checked, onChange }) => (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="h-4 w-4"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );

  return (
    <div className="w-64 bg-white rounded-lg fixed top-4 right-4 shadow-lg p-4">
      <div className="flex flex-col gap-3 text-sm text-gray-900">
        <CheckboxItem
          label="Item 1"
          checked={optionOne}
          onChange={setOptionOne}
        />
        <CheckboxItem
          label="Item 2"
          checked={optionTwo}
          onChange={setOptionTwo}
        />
        <CheckboxItem
          label="Item 3"
          checked={optionThree}
          onChange={setOptionThree}
        />
        <CheckboxItem
          label="Item 4"
          checked={optionFour}
          onChange={setOptionFour}
        />
      </div>
    </div>
  );
};
