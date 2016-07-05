//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.DataEditForm', {

        extend: 'MasterOfPuppets.view.localisations.appLocalisations.DataViewForm',
    
        xtype: 'mofp-app-localisations-data-edit-form',

        viewModel: {
            type: 'mofp-app-localisations-data-edit-form'
        },

        controller: 'mofp-app-localisations-data-edit-form',

    requires: [
        'MasterOfPuppets.view.localisations.appLocalisations.DataEditFormController',
        'MasterOfPuppets.view.localisations.appLocalisations.DataEditFormModel'
    ]
});

}());