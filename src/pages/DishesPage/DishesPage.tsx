import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishItem from '../../components/DishItem/DishItem';
import { fetchDishes } from '../../store/dishesAction';
import { AppDispatch, RootState } from '../../store/store';
import s from './Dishes.module.scss';
import DishForm from '../../components/DishForm/DishForm';

const DishesPage: React.FC = () => {
    const [isShowForm, setIsShowForm] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.dishes);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    if (loading) {
        return (
            <div className={s.loading}>
                <div className={s.spinner}></div>
            </div>
        );
    }
    if (error) {
        return <div className={s.error}>An error occured!</div>;
    }

    return (
        <>
            <div className='container'>
                <div className={`${s.dishes} container`}>
                    <h2>Dishes</h2>
                    <button className={s.addButton} onClick={() => setIsShowForm(true)}>Add dish</button>
                </div>
                {items.map(dish => (
                    <DishItem title={dish.title} price={dish.price} img={dish.img} key={dish.id} />
                ))}

                {
                    isShowForm && <DishForm />
                }
            </div>
        </>
    );
};

export default DishesPage;