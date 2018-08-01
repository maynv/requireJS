define ( [],function(){
        "use strict";
    /* private */
        /* private variables */
        var STORE_NAME = "Store";
        /* private methods */
        function saveTaskData(tasks){
            localStorage.setItem( STORE_NAME , JSON.stringify(tasks));
        }
        function loadTaskData(){
            var storedTask = localStorage.getItem(STORE_NAME);
            if(storedTask){
                return JSON.parse(storedTask);
            }
            return [];
        }

        function clearTaskData(){
            localStorage.removeItem(STORE_NAME);
        }

    /* public */
        return {
            save : saveTaskData,
            load : loadTaskData,
            clear : clearTaskData
        };

});