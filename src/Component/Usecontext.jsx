import React, { useEffect, useState } from "react";
import Data from '../Data.json';
import Product from '../Product.json'

export const Context = React.createContext([]);

const Usecontext = props => {

    const [data, setData] = useState([]);
    const [product , setProduct] =useState([])

    useEffect(() => {
      setData(Data);
      setProduct(Product)
   }, []);

  
    return (
      <Context.Provider value={{data,product}}>
         {props.children}
      </Context.Provider>
    );
  };

  export default Usecontext;