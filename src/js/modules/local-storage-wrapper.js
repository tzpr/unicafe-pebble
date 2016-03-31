
var localStorageWrapper = (function localStorageApi(){


    function resetFavMeals(){
        // erase favourite meals from local storage
    }

    function resetRestaurantSelections(){
        // erase restaurant selections from local storage
    }

    function saveFavMeal(meal){

    }

    function saveRestaurantSelection(restaurantId){

    }


    return{
        saveFavouriteMeal: saveFavMeal,
        resetFavouriteMeals: resetFavMeals,
        saveRestaurantSelection: saveRestaurantSelection,
        resetRestaurantSelections: resetRestaurantSelections
    };

})();


module.exports = localStorageWrapper;