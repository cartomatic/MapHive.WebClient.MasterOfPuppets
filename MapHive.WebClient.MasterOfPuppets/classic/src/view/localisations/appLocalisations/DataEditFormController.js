//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.DataEditFormController', {
        extend: 'mh.module.data.GenericEditFormController',
        alias: 'controller.mofp-app-localisations-data-edit-form',

        requires: [
            'MasterOfPuppets.view.localisations.appLocalisations.DataEditFormLocalisation'
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
            this.injectLocalisationToViewModel();

            //enable input fields - this view inherits from a display only view
            this.lookupReference('applicationName').setReadOnly(false);
            this.lookupReference('className').setReadOnly(false);
            this.lookupReference('translationKey').setReadOnly(false);

            this.lookupReference('translations').enableEditMode();
        }
    });

}());