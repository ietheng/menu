function MenuItem({ name, price, nutritionInfo }) {
  return (
    <>
      <p>
        <strong>{name}</strong> | {price}
        <NutritionalInfo nutritionInfo={nutritionInfo} />
      </p>
    </>
  );
}

function Category({ title, foods }) {
  return (
    <div>
      <h2>{title}</h2>
      {foods}
    </div>
  );
}

const friedChicken = (
  <>
    <MenuItem name={"2pc Fried Chicken Set"} price={"RM 10.00"} />
    <MenuItem name={"6 piece nugget"} price={"RM 6.00"} />
  </>
);

const desserts = (
  <>
    <MenuItem name={"Ice Cream"} price={"RM 5.00"} />
    <MenuItem name={"Apple Pie"} price={"RM 2.00"} />
  </>
);

function App() {
  return (
    <>
      <h1>Uncle Haris Fried Chicken</h1>
      <Category title={"Fried Chicken"} foods={friedChicken} />
      <Category title={"Desserts"} foods={desserts} />
    </>
  );
}

function NutritionalInfo({ nutritionInfo }) {
  return (
    <div>
      <p>Calories: {nutritionInfo.calories} kcal</p>
      <p>Protein: {nutritionInfo.protein} g</p>
      <p>Carbs: {nutritionInfo.carbs} g</p>
      <p>Fat: {nutritionInfo.fat} g</p>
    </div>
  );
}

export default App;
