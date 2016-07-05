//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsController', {
        extend: 'mh.module.data.DataViewBaseController',
        alias: 'controller.mofp-app-localisations',

        requires: [
            'MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsLocalisation'
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
        }
    });

}());