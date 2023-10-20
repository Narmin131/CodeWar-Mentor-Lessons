import React, { useState } from "react";
import { myData } from "./data/Data";
import SingleCard from "./components/SingleCard";
import { Select, Space } from "antd";
import i18n from "./i18next";
import { useTranslation } from "react-i18next";
const App = () => {
  const [state, setState] = useState(myData);
  console.log(state);

  // let arr = ["a", "d", "b", "c"];
  // let sortedArray = arr.sort();
  // console.log(sortedArray);

  const sortProducts = (category) => {
    if (category == "all") {
      setState(myData);
      return;
    } else if (category === "highest-price") {
      let copyData = [...state];
      let sortedArray = copyData.sort((a, b) => a.price - b.price);
      setState(sortedArray);
    } else if (category === "lowest-price") {
      let copyData = [...state];
      let sortedArray = copyData.sort((a, b) => b.price - a.price);
      setState(sortedArray);
    } else if (category === "a-z") {
      let copyData = [...state];
      let sortedArray = copyData.sort((a, b) => a.title.localeCompare(b.title));
      setState(sortedArray);
    } else if (category === "z-a") {
      let copyData = [...state];
      let sortedArray = copyData.sort((a, b) => b.title.localeCompare(a.title));
      setState(sortedArray);
    }
  };

  // change lang

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();
  return (
    <>
      <section>
        <h1>{t("header.0")}</h1>
        <h2>{t("header.1")}</h2>

        <button
          className="btn btn-primary m-2"
          onClick={() => changeLang("az")}
        >
          az
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => changeLang("en")}
        >
          en
        </button>

        <Select
          defaultValue="All"
          style={{
            width: 120,
          }}
          onChange={sortProducts}
          options={[
            {
              value: "highest-price",
              label: "Highest-price",
            },
            {
              value: "lowest-price",
              label: "Lowest-price",
            },
            {
              value: "a-z",
              label: "A-Z",
            },
            {
              value: "z-a",
              label: "Z-A",
            },
            {
              value: "all",
              label: "All",
            },
          ]}
        />
        <div className="container">
          <div className="row">
            {state.map((item, index) => {
              return <SingleCard product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
