import { all } from "axios";
import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            let maxPrice = action.payload.map((p) => p.price);
            maxPrice = Math.max(...maxPrice);
            return {
                ...state,
                all_products: [...action.payload],
                filtered_products: [...action.payload],
                filters: {
                    ...state.filters,
                    max_price: maxPrice,
                    price: maxPrice,
                },
            };
        case SET_GRIDVIEW:
            return {
                ...state,
                grid_view: true,
            };
        case SET_LISTVIEW:
            return {
                ...state,
                grid_view: false,
            };
        case UPDATE_SORT:
            return {
                ...state,
                sort: action.payload,
            };
        case SORT_PRODUCTS:
            const { sort, filtered_products } = state;
            let tempProducts = [...filtered_products];
            switch (sort) {
                case "price-lowest":
                    tempProducts = tempProducts.sort(
                        (a, b) => a.price - b.price
                    );

                    return { ...state, filtered_products: tempProducts };

                case "price-highest":
                    tempProducts = tempProducts.sort(
                        (a, b) => b.price - a.price
                    );

                    return { ...state, filtered_products: tempProducts };
                case "name-a":
                    tempProducts = tempProducts.sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    });
                    return { ...state, filtered_products: tempProducts };
                case "name-z":
                    tempProducts = tempProducts.sort((a, b) => {
                        return b.name.localeCompare(a.name);
                    });
                    return { ...state, filtered_products: tempProducts };
                default:
                    return { ...state, filtered_products: tempProducts };
            }
        case UPDATE_FILTERS:
            const { name, value } = action.payload;
            return { ...state, filters: { ...state.filters, [name]: value } };

        case FILTER_PRODUCTS:
            const { all_products } = state;
            const { text, company, category, color, price, shipping } =
                state.filters;
            // filtering
            let tempPro = [...all_products];
            //text
            if (text) {
                tempPro = tempPro.filter((product) => {
                    return product.name.toLowerCase().startsWith(text);
                });
            }
            //category
            if (category !== "all") {
                tempPro = tempPro.filter(
                    (product) => product.category === category
                );
            }

            //company

            if (company !== "all") {
                tempPro = tempPro.filter(
                    (product) => product.company === company
                );
            }

            //colors

            if (color !== "all") {
                tempPro = tempPro.filter((product) => {
                    return product.colors.find((c) => c === color);
                });
            }

            //price

            tempPro = tempPro.filter((product) => product.price <= price);

            //shipping

            if (shipping) {
                tempPro = tempPro.filter(
                    (product) => product.shipping === true
                );
            }

            return {
                ...state,
                filtered_products: tempPro,
            };

        case CLEAR_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    company: "all",
                    category: "all",
                    color: "all",
                    price: state.filters.max_price,
                    shipping: false,
                },
            };
        default:
            break;
    }
    return state;
};

export default filter_reducer;
