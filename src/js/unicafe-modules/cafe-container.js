
var UI = require('ui');
var storage = require('unicafe-modules/local-storage-wrapper');


module.exports = (function(){

    // list of available unicafes
    // each have attribtutes:
    //  id
    //  name
    //  campus 
    var restaurantList = [
        {
            id: 10,
            title: 'Chemicum',
            campus: 2,
        },
        {
            id: 11,
            title: 'Exactum',
            campus: 2,
        },
        {
            id: 16,
            title: 'Biokeskus',
            campus: 5,
        },
        {
            id: 17,
            title: 'Korona',
            campus: 5,
        },
        {
            id: 4,
            title: 'Päärakennus',
            campus: 1,
        },
        {
            id: 3,
            title: 'Porthania',
            campus: 1,
        },
        {
            id: 34,
            title: 'Porthania Opettajat',
            campus: 1,
        },
        {
            id: 18,
            title: 'Viikuna',
            campus: 5,
        },
        {
            id: 9,
            title: 'Ylioppilasaukio',
            campus: 1,
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
                items: restaurantListWeighted() //restaurantList
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
        return new UI.Menu({
            sections: [{
                items: list
            }]
        });
    }

    function restaurantListWeighted(){
        var list = restaurantList;
        var weights = storage.cafeWeights();

        if(weights){
            // do the weighting
        }

        return list;
    }


    return {
        all: allCafes,
        byCampus: restaurantsByCampus,
        campuses: campuses
    };
})();