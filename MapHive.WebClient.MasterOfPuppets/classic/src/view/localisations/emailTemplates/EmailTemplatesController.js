//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.emailTemplates.EmailTemplatesController', {
        extend: 'mh.module.data.DataViewBaseController',
        alias: 'controller.mofp-email-templates',

        requires: [
            'MasterOfPuppets.view.localisations.emailTemplates.EmailTemplatesLocalisation'
        ],

        mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);
        }
    });

}());