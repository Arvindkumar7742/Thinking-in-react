import { useState } from "react";
import "./App.css"
import fruitData from './data.js'

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

return (
  <tr>
    <td>{name}</td>
    <td>{product.price}</td>
  </tr>
);
  
}

function ProductCategoryRow({ category }){
  return(
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

function ProductTable({ products }){
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
function App() {
  const [newData,changeNewData] = useState(fruitData);
  function changeHandler1(target){
    if(target.target.checked){
      let filteredData = newData.filter((data)=>{
        if(data.stocked==true){
          return data;
        }
      })
      console.log(filteredData);
      changeNewData(filteredData);
    }
    else{
      changeNewData(fruitData);
    }
  }
  function changeHandler2(target){
    //Pending will do in future
  }
  return (
    <div>
      <div>
        <input type="text" id="fname" name="fname" placeholder="Search..." onChange={changeHandler2}/><br/>
        <input type="checkbox" id="check" name="checkName" onChange={changeHandler1}/>
        <label for="checkName" >{' '}Check the stocked products</label>
      </div>
    <div className="ProductTable">
      <ProductTable  products={newData}/>
    </div>
    </div>
  );
}

export default App;
