import React, { useState } from "react";
import { myData } from "./data/Data";
import SingleCard from "./components/SingleCard";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18next";
import TopToBtn from "./components/TopToBtn";
import { Select, Space } from "antd";

const App = () => {
  const [state, setState] = useState(myData);
  console.log(state);

  const { t } = useTranslation();

  const changeLng = (lang) => {
    i18n.changeLanguage(lang);
  };

  const sortProducts = (value) => {
    if (value == "all") {
      setState(myData);
      return;
    } else if (value === "highest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    }
    else if (value === "lowest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    }
    else if (value === "a-z") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.title.localeCompare(b.title));
      setState(sortedProducts);
    }
    else if (value === "z-a") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.title.localeCompare(a.title));
      setState(sortedProducts);
    }
  };

  return (
    <>
      <section>
        <Select
          defaultValue="All"
          style={{ width: 120 }}
          onChange={sortProducts}
          options={[
            { value: "all", label: "All" },
            { value: "a-z", label: "A-Z" },
            { value: "z-a", label: "Z-A" },
            { value: "lowest-price", label: "Lowest-price" },
            { value: "highest-price", label: "Highest-price" },
          ]}
        />

        <button className="btn btn-primary m-2" onClick={() => changeLng("az")}>
          az
        </button>
        <button className="btn btn-primary m-2" onClick={() => changeLng("en")}>
          en
        </button>
        <TopToBtn />

        <h1>{t("header.0")}</h1>

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
