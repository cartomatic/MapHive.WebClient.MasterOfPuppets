//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.users.DataEditFormController', {
        extend: 'mh.module.data.GenericEditFormController',
        alias: 'controller.mofp-users-data-edit-form',

        requires: [
            'MasterOfPuppets.view.users.DataEditFormLocalisation'
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
            this.lookupReference('email').setReadOnly(false);
            this.lookupReference('isAccountClosed').setReadOnly(false);
            this.lookupReference('isAccountVerified').setReadOnly(false);

        }
    });

}());