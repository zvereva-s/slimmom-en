import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useForm from '../../../shared/hooks/useForm';
import useDate from 'shared/hooks/useDate';
import { searchProductInfo } from 'services/api/diari';

import { addDayProduct } from 'redux/diary/diary-operations';

import TextField from '../../../shared/components/TextField';
import Button from '../../../shared/components/Button/Button';

import { initialState } from './initialState';
import { fields } from './fields';

import btnStyles from '../../../shared/styles/buttons.module.css';
import styles from './diary-add-product.module.css';


const DiaryAddProductForm = () => {
  const { state, handleChange, reset} = useForm({
    initialState
  });
  const { grams } = state;

  const dispatch = useDispatch();

  const [products, setProducts] = useState({
    items: [],
    loading: false,
    error: null,
  });
 
  const [valueFromList, setValueFromList] = useState('');
  const [diplayList, setDiplayList] = useState(true);

  const { items } = products;

  const product = {
    date: useDate(),
    productId: items.length && items.find(el => el.title.ru === valueFromList)?._id,
    weight: Number(grams),
  }

  const onAddProduct = (product) => {
    dispatch(addDayProduct(product))
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setValueFromList("")
    reset()
  };

  const handleInput = ({ target }) => {
    setValueFromList(target.value);
  };
  const onFocus = () => setDiplayList(true);

  const handleOption = e => {
    setDiplayList(false);
    handleInput(e);
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

    if (!valueFromList) return;

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
          onFocus={onFocus}
        />


        {diplayList && (
          <datalist className={styles.datalist} id="productSearch">
            {products.items.length > 0 &&
              products.items.map(product => (
                <option
                  className={styles.item}
                  onClick={handleOption}
                  value={product.title.ru}
                  key={product._id}
                >
                  {product.title.ru}
                </option>
              ))}
          </datalist>
        )}
      </div>

      <TextField onChange={handleChange} value={grams} {...fields.grams} />
      <Button className={btnStyles.add} type="submit" text="Add" />
    </form>
  );
};

export default DiaryAddProductForm;

