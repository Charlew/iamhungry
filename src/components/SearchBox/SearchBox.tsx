import React, { useState, useContext } from "react";
import { SelectField } from "../SelectField/SelectField";
import { InputField } from "../InputField/InputField";
import { diets, intolerances, mealTypes } from "../../constans";
import { AppContext } from "../../context/context";
import styles from "./SearchBox.module.scss";

const SearchBox: React.FC = () => {
  const { fetchRecipes } = useContext(AppContext);

  const [name, setName] = useState<string>("");
  const [diet, setDiet] = useState<string>("");
  const [intolerance, setIntolerance] = useState<string>("");
  const [mealType, setMealType] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.nameField}>
        <InputField handleChange={setName} placeholder="Enter meal name" />
      </div>
      <div className={styles.selectFields}>
        <SelectField options={mealTypes} handleChange={setMealType} />
        <SelectField options={diets} handleChange={setDiet} />
        <SelectField options={intolerances} handleChange={setIntolerance} />
      </div>
      <button className={styles.buttonSearch} onClick={fetchRecipes}>
        <div>Find meal</div>
      </button>
    </div>
  );
};

export { SearchBox };
