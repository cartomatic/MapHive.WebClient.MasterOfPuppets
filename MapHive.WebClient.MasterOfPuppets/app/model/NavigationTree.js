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
             * hash to be used when navigating
             */
            { name: 'hash', type: 'string', allowNull: false },

            /**
             * view class to be instantiated when switching to a particular view
             */
            { name: 'view', type: 'string', allowNull: false }
        ]
    });

}());