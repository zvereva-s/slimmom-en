
import { useState, useEffect } from 'react';
import Select from 'react-select';

import useForm from '../../../shared/hooks/useForm';
import { searchProductInfo } from 'services/api/diari';

import TextField from '../../../shared/components/TextField';
import Button from '../../../shared/components/Button/Button';

import { initialState } from './initialState';
import { fields } from './fields';

import btnStyles from '../../../shared/styles/buttons.module.css';
import styles from './diary-add-product.module.css';


const DiaryAddProductForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { grams } = state;

  const [products, setProducts] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [valueFromList, setValueFromList] = useState('');

  const handleInput = ({ target }) => {
    setValueFromList(target.value);
  };

  useEffect(() => {
    const getSearchList = async value => {
      setProducts(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const productList = await searchProductInfo(value);

        setProducts({
          items: productList,
        });
      } catch (error) {
        setProducts(prevState => ({
          ...prevState,
          error: error,
        }));
      } finally {
        setProducts(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };


    getSearchList(valueFromList);
  }, [valueFromList]);


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="1"></label>
        <input
          className={styles.input}
          id="1"
          list="products"
          type="text"
          name="productName"
          onChange={handleInput}
          placeholder="Enter product name"
          value={valueFromList}
          autoComplete="off"
          required
        />
        {/* <Select /> */}
        <datalist className={styles.datalist} id="productSearch">
          {products.items.length > 0 &&
            products.items.map(product => (
              <option
                className={styles.item}
                onClick={handleInput}
                value={product.title.ru}
                key={product._id}
              >
                {product.title.ru}
              </option>
            ))}
        </datalist>
      </div>


      <TextField onChange={handleChange} value={grams} {...fields.grams} />
      <Button className={btnStyles.add} type="submit" text="Add" />
    </form>
  );
};

export default DiaryAddProductForm;

