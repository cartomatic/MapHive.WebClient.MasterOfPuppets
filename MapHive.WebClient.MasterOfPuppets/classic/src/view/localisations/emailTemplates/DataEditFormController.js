//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.emailTemplates.DataEditFormController', {
        extend: 'mh.module.data.GenericEditFormController',
        alias: 'controller.mofp-email-templates-data-edit-form',

        requires: [
            'MasterOfPuppets.view.localisations.emailTemplates.DataEditFormLocalisation'
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
            this.lookupReference('name').setReadOnly(false);
            this.lookupReference('description').setReadOnly(false);
            this.lookupReference('applicationName').setReadOnly(false);
            this.lookupReference('identifier').setReadOnly(false);
            this.lookupReference('isBodyHtml').setReadOnly(false);


            this.lookupReference('translations').enableEditMode();
        }
    });

}());