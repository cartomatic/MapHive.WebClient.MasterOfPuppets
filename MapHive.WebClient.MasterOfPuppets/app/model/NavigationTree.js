//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * A customised tree model for the nav menu so it is possible to extract some xtra data off a node interface
     */
    Ext.define('MasterOfPuppets.model.NavigationTree', {
        extend: 'Ext.data.TreeModel',
    
        fields: [

            /**
             * identifier of a view;
             */
            { name: 'viewIdentifier', type: 'string', allowNull: false },

            /**
             * hash to be used when navigating
             */
            { name: 'routes', type: 'auto', defaultValue: []},

            /**
             * initial route to be used when clicking the nav menu btn for the first time
             */
            { name: 'initialRoute', type: 'string'},

            /**
             * Currently active route for a nav menu node
             */
            { name: 'currentRoute', type: 'string'},

            /**
             * view class to be instantiated when switching to a particular view
             */
            { name: 'view', type: 'string', allowNull: false }
        ]
    });

}());