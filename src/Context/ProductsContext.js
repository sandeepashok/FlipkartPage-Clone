import { createContext, useState, useEffect } from "react";
import { products } from "../SampleData";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([...products]);
  const [productList, setProductList] = useState([...products]);
  const [filterState, setFilterState] = useState({
    sort: "",
    department: [],
    categories: [],
    brands: []
  });

  const sortProductCards = (sortBy) => {
    const filterStateCopy = { ...filterState };
    filterStateCopy.sort = sortBy;
    setFilterState(filterStateCopy);
  };

  const departmentSelectionHandler = (department) => {
    const filterStateCopy = { ...filterState };
    if (!filterState.department.includes(department)) {
      filterStateCopy.department = [...filterState.department, department];
    }
    if (filterState.department.includes(department)) {
      const filteredDept = filterStateCopy.department.filter((dept) => {
        return dept !== department;
      });
      filterStateCopy.department = [...filteredDept];
    }

    setFilterState(filterStateCopy);
  };

  const categorySelectionHandler = (category) => {
    const filterStateCopy = { ...filterState };
    if (!filterState.categories.includes(category)) {
      filterStateCopy.categories = [...filterState.categories, category];
    }
    if (filterState.categories.includes(category)) {
      const filteredcategory = filterStateCopy.categories.filter((categ) => {
        return categ !== category;
      });
      filterStateCopy.categories = [...filteredcategory];
    }
    setFilterState(filterStateCopy);
  };

  const brandSelectionHandler = (brand) => {
    const filterStateCopy = { ...filterState };
    if (!filterState.brands.includes(brand)) {
      filterStateCopy.brands = [...filterState.brands, brand];
    }
    if (filterState.brands.includes(brand)) {
      const filteredBrand = filterStateCopy.brands.filter((attribute) => {
        return attribute !== brand;
      });
      filterStateCopy.brands = [...filteredBrand];
    }
    setFilterState(filterStateCopy);
  };

  const AllFiltersHandler = () => {
    const productsCopy = [...productList];
    const filteredDepartment = productsCopy.filter((product) => {
      return filterState.department.includes(product.gender);
    });
    let filteredDepartmentCopy = [];
    Array.isArray(filteredDepartment) && filteredDepartment.length
      ? (filteredDepartmentCopy = [...filteredDepartment])
      : (filteredDepartmentCopy = [...productList]);

    const filteredcategory = filteredDepartmentCopy.filter((product) => {
      return filterState.categories.includes(product.category);
    });

    let filteredcategoryCopy = [];
    Array.isArray(filteredcategory) && filteredcategory.length
      ? (filteredcategoryCopy = [...filteredcategory])
      : (filteredcategoryCopy = [...filteredDepartmentCopy]);

    const filteredBrand = filteredcategoryCopy.filter((product) => {
      return filterState.brands.includes(product.brand);
    });

    let filteredBrandCopy = [];
    Array.isArray(filteredBrand) && filteredBrand.length
      ? (filteredBrandCopy = [...filteredBrand])
      : (filteredBrandCopy = [...filteredcategoryCopy]);

    if (filterState.sort === "asc") {
      setAllProducts([
        ...filteredBrandCopy.sort((a, b) => (a.price > b.price ? 1 : -1))
      ]);
    } else if (filterState.sort === "dec") {
      setAllProducts([
        ...filteredBrandCopy.sort((a, b) => (a.price < b.price ? 1 : -1))
      ]);
    } else {
      setAllProducts([...filteredBrandCopy]);
    }
  };

  useEffect(() => {
    AllFiltersHandler();
  }, [filterState]);

  const clearAll = () => {
    setFilterState({
      sort: "",
      department: [],
      categories: [],
      brands: [],
      rating: 0,
      include: false
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        sortProductCards,
        departmentSelectionHandler,
        categorySelectionHandler,
        brandSelectionHandler,
        filterState,
        clearAll,
        allProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
