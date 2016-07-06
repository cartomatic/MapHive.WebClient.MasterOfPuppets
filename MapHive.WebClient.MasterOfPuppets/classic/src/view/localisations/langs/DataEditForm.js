//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.langs.DataEditForm', {

        extend: 'MasterOfPuppets.view.localisations.langs.DataViewForm',
    
        xtype: 'mofp-app-langs-data-edit-form',

        viewModel: {
            type: 'mofp-langs-data-edit-form'
        },

        controller: 'mofp-langs-data-edit-form',

    requires: [
        'MasterOfPuppets.view.localisations.langs.DataEditFormController',
        'MasterOfPuppets.view.localisations.langs.DataEditFormModel'
    ]
});

}());