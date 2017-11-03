
var UI = require('ui');
var storage = require('unicafe-modules/local-storage-wrapper');


module.exports = (function(){

    // list of available unicafes
    var restaurantList = [
        {
            id: 10,
            title: 'Chemicum',
            campus: 2,
            weight: 0
        },
        {
            id: 11,
            title: 'Exactum',
            campus: 2,
            weight: 0
        },
        {
            id: 16,
            title: 'Biokeskus',
            campus: 5,
            weight: 0
        },
        {
            id: 17,
            title: 'Korona',
            campus: 5,
            weight: 0
        },
        {
            id: 4,
            title: 'Päärakennus',
            campus: 1,
            weight: 0
        },
        {
            id: 3,
            title: 'Porthania',
            campus: 1,
            weight: 0
        },
        {
            id: 34,
            title: 'Porthania Opettajat',
            campus: 1,
            weight: 0
        },
        {
            id: 18,
            title: 'Viikuna',
            campus: 5,
            weight: 0
        },
        {
            id: 9,
            title: 'Ylioppilasaukio',
            campus: 1,
            weight: 0
        },
    ];

    var campusList = [
        {
            id: 5,
            title: ' Viikki '
        },
        {
            id: 2,
            title: ' Kumpula '
        },
        {
            id: 1,
            title: ' Keskusta '
        },
    ];

    function campuses(){
        return new UI.Menu({
            sections: [{
                items: campusList
            }]
        });        
    }
    
    function allCafes(){
        return new UI.Menu({
            sections: [{
                items: restaurantListWeighted()
            }]
        });
    }

    function restaurantsByCampus(campusId){
        var list = [];
        for (var i = 0, n = restaurantList.length; i < n; i += 1) {
            if (restaurantList[i].campus === campusId) {
                list.push(restaurantList[i]);
            }
        }
        return list;
    }

    function restaurantsMenuByCampus(campusId){
        return new UI.Menu({
            sections: [{
                items: restaurantsByCampus(campusId)
            }]
        });
    }

    function restaurantListWeighted(){
        var weights = storage.cafeWeights(); // {"16": 4, "10", 1}

        if (weights) {
            // update weights
            for (var i = 0, n = restaurantList.length; i < n; i += 1) {
                if (weights[restaurantList[i].id]) {   
                    restaurantList[i].weight = weights[restaurantList[i].id];
                }
            }

            restaurantList.sort(function(a, b) {
                return b.weight - a.weight;
            });
            return restaurantList;
        }
        return restaurantList;
    }


    return {
        all: allCafes,
        byCampus: restaurantsMenuByCampus,
        campuses: campuses,
        cafeListByCampus: restaurantsByCampus
    };
})();