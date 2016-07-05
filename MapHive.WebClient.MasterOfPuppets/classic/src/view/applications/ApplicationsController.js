//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.applications.ApplicationsController', {
        extend: 'mh.module.data.DataViewBaseController',

        alias: 'controller.mofp-applications',

        requires: [
            'MasterOfPuppets.view.applications.ApplicationsLocalisation'
        ],

        mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'mh.mixin.GridUtils'
        ],
    
        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);

            //activate active column tooltips
            this.activateActiveColsTooltips(this.lookupReference('grid'));
        },

        /**
         * appNavigateTo actionColumn click handler
         * @param view
         * @param rowIdx
         * @param colIdx
         * @param item
         * @param e
         * @param record
         */
        onAppNavigateToClick: function(view, rowIdx, colIdx, item, e, record){
            if(record && record.get('url')){
                window.open(record.get('url'));
            }
        },

        /**
         * Customised get tip handler for the appNavigateTo action column
         * @param v
         * @param metadata
         * @param r
         * @param rowIndex
         * @param colIndex
         * @param store
         */
        getTipAppNavigateTo: function(v, metadata, r, rowIndex, colIndex, store){
            return this.getTranslation('appNavigateToDynamicTooltip').replace('{app_name}', r.get('name'));
        }
    });

}());