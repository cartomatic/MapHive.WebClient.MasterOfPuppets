//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.applications.DataEditForm', {

        extend: 'MasterOfPuppets.view.applications.DataViewForm',
    
        xtype: 'mofp-applications-data-edit-form',

        viewModel: {
            type: 'mofp-applications-data-edit-form'
        },

        controller: 'mofp-applications-data-edit-form',

        requires: [
            'MasterOfPuppets.view.applications.DataEditFormController',
            'MasterOfPuppets.view.applications.DataEditFormModel'
        ]
});

}());