import { useState } from 'react';
import Select from 'react-select';

import useForm from '../../../shared/hooks/useForm';
import { searchProductInfo } from 'services/api/diari';

import TextField from '../../../shared/components/TextField';
import Button from '../../../shared/components/Button/Button';

import { initialState } from './initialState';
import { fields } from './fields';

import btnStyles from '../../../shared/styles/buttons.module.css';

const DiaryAddProductForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { grams } = state;

  const onSearchProduct = ({ target }) => {
    const { value } = target;

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
    getSearchList(value);
  };

  const [products, setProducts] = useState({
    items: [],
    loading: false,
    error: null,
  });

    const options = products.items.map(el => ({ value: el.title.ru, label: el.title.ru }));
    

    
  return (
      <form onSubmit={handleSubmit}>
          {/* <div>
            <label htmlFor='1'></label>
                    <input className='input' id='1' list="products" type="text" name="productName" onChange={onSearchProduct} placeholder='Enter product name' required />
                    <datalist className="datalist" id="productSearch">
                    {products.length && products.items.map(item => <option value={item.title.ru} key={item._id}></option>)}
                    </datalist>
        </div> */}
          <div>
              <input onChange={onSearchProduct} name='productName' />
              <Select options={options} />
         </div>
        
      <TextField onChange={handleChange} value={grams} {...fields.grams} />
      <Button className={btnStyles.add} type="submit" text="Add" />
    </form>
  );
};

export default DiaryAddProductForm;
