//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.langs.LangsController', {
        extend: 'mh.module.data.DataViewBaseController',
        alias: 'controller.mofp-langs',

        requires: [
            'MasterOfPuppets.view.localisations.langs.LangsLocalisation'
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