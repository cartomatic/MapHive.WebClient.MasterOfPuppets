//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.users.UsersController', {
        extend: 'mh.module.data.DataViewBaseController',
        alias: 'controller.mofp-users',

        requires: [
            'MasterOfPuppets.view.users.UsersLocalisation'
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
        },

        /**
         * Custom delete btn handler - should not allow deleting users that have already been deleted
         * @param btn
         */
        onBtnDeleteClick: function(btn){
            var recs = this.lookupReference('grid').getSelection() || [];
            if(recs[0]){
                if(recs[0].get('isAccountClosed')){
                    Ext.Msg.show({
                        title: this.getTranslation('userInactiveTitle'),
                        message: this.getTranslation('userInactiveMsg'),
                        width: 300,
                        buttons: Ext.Msg.OK,
                        amimateTarget: btn,
                        icon: Ext.Msg.ERROR
                    });
                    return;
                }

                this.callMeParent('onBtnDeleteClick', arguments);
            }
        },

        /**
         * isUserActive column renderer
         * @param value
         * @param metadata
         * @param record
         * @param rowIndex
         * @param colIndex
         * @param store
         * @param view
         * @returns {string}
         */
        rendererIsAccountClosed: function(value, metadata, record, rowIndex, colIndex, store, view){
            return value ?
                this.getGridIconWithTooltipHtml('wg-icon-inactive', this.getTranslation('userInactiveTooltip')) :
                this.getGridIconWithTooltipHtml('wg-icon-active', this.getTranslation('userActiveTooltip'));
        }
    });

}());