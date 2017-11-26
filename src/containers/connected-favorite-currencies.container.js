import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvaibleCur } from '../actions';
import { filterAvaibleCur } from '../actions';

import { FavoriteCurrencies } from '../components/favorite-currecies';


const mapStateToProps = (state) => {
    return {
        favoriteCurData: state.curToFavorite.favoriteCurData
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFilterTextChange: (target) => {
//             dispatch(filterAvaibleCur(target));
//         }
//     };
// };

export const ConnectedFavoriteCurrencies = connect(
    mapStateToProps
    // mapDispatchToProps
)(FavoriteCurrencies);
