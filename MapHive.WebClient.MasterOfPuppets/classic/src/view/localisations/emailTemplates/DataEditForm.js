//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.emailTemplates.DataEditForm', {

        extend: 'MasterOfPuppets.view.localisations.emailTemplates.DataViewForm',
    
        xtype: 'mofp-email-templates-data-edit-form',

        viewModel: {
            type: 'mofp-email-templates-data-edit-form'
        },

        controller: 'mofp-email-templates-data-edit-form',

    requires: [
        'MasterOfPuppets.view.localisations.emailTemplates.DataEditFormController',
        'MasterOfPuppets.view.localisations.emailTemplates.DataEditFormModel'
    ]
});

}());