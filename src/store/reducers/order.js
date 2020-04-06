import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'
import { purchaseBurgerFail, fetchOrdersSuccess } from '../actions/order';
const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, { loading: true });
}
const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId, purchased: true });
    return {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    };
}

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
}

const fetchOrdersFail = (state, action) => {
    return updateObject(state, { loading: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);

        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });

        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, { loading: true });

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrderSuccess(state, action);

        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);
        default:
            return state;
    }
};
export default reducer;