import React, { useEffect, useState } from 'react';
import './StyleBodyHomePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT_QUANTITY, INCREMENT_QUANTITY, RESET_COUNTER } from '../../store/actions/actionTypes';
import COFFE from '../../../src/images/dobbleCoffeBean.svg';
import TEABAG from '../../../src/images/bagTea.svg';

export const BodyHomePage = () => {
    const counter = useSelector((state) => state.counter)
    console.log("in my counter ", counter);
    console.log("in my state", counter);

    const [tea, setTea] = useState(false);
    const [coffee, setCoffee] = useState(false);
    const [activeTea, setActiveTea] = useState(false);
    const [activeCoffee, setActiveCoffee] = useState(false);
    let [price, setPrice] = useState(0);


    const dispatch = useDispatch();

    const HandlerTea = (e) => {
        dispatch({ type: RESET_COUNTER })
        setActiveCoffee(false);
        setActiveTea(!activeTea);
        setPrice(0);
        setCoffee(false);
        setTea(true);
    }


    const HandlerCoffee = (e) => {
        dispatch({ type: RESET_COUNTER })
        setActiveTea(false);
        setActiveCoffee(!activeCoffee);
        setPrice(0);
        setTea(false);
        setCoffee(true);
    }

    useEffect(() => {
        console.log("it works in my use effect", tea);

    }, [tea])

    const HandlerIncrementQuantity = () => {
        dispatch({ type: INCREMENT_QUANTITY })
        if (coffee === true) {
            let parNum = Number((price + 0.80).toFixed(2));
            console.log("in my coffe ", coffee)
            setPrice(parNum)
        } else if (tea === true) {
            let parsNumber = Number((price + 0.40).toFixed(2));
            setPrice(price = parsNumber)
        }
    }

    const HandlerDecrementQuantity = () => {
        dispatch({ type: DECREMENT_QUANTITY })
        if (coffee === true) {
            var pareNum = Number((price - 0.80).toFixed(2))
            setPrice(pareNum)
        } else if (tea === true) {
            let parsNumber = Number((price - 0.40).toFixed(2));
            setPrice(price = parsNumber)
        }
    }

    const HandlerConfirmationButton = () => {
        alert("Confirmation has been send");
    }

    console.log(coffee);
    return (

        <section className="main-container-body-homepage">
            <div className="container-body-homepage">
                <div className="main-container-name-quantity-up">
                    <div className="wrapper-name-quantity">
                        <div className="wrapper-name-left">
                            <input type="text" className="input-name-text" placeholder="Kürzel eingeben..." />
                            <div className="wrapper-icon-tea-coffee">
                                <div className={`div-icon-coffee ${activeCoffee ? "active-element" : ""}`} onClick={HandlerCoffee}>
                                    <img className="icon-coffee-cup" src={COFFE} alt="" />
                                </div>
                                <div className={`div-icon-tea ${activeTea ? "active-element" : ""}`} onClick={HandlerTea}>
                                    <img className="icon-tea-bag" src={TEABAG} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-quantity-right">
                            <div className="wrapper-button-display">
                                <button className="button-decrement" onClick={HandlerDecrementQuantity}>-</button>
                                <div className="counter">{counter}</div>
                                <button className="button-increment" onClick={HandlerIncrementQuantity}>+</button>
                            </div>
                            <div className="wrapper-button-submit">
                                <button className="button-submit" onClick={HandlerConfirmationButton}>Bestätigen</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container-total-quantity-down">
                    <div className="main-wrapper-hr">
                        <div className="wrapper-hr"><hr className="hr" /></div>
                    </div>
                    <div className="total-quantity">
                        <div className="write-quantity">Gesamtpreis</div>
                        <div className="quantity-numbers">CHF {price === 0 ? price : price + "0"}</div>
                    </div>
                </div>
            </div>
        </section>

    )
}