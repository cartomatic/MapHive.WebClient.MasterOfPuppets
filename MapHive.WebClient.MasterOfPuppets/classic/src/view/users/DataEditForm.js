//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.users.DataEditForm', {

        extend: 'MasterOfPuppets.view.users.DataViewForm',
    
        xtype: 'mofp-users-data-edit-form',

        viewModel: {
            type: 'mofp-users-data-edit-form'
        },

        controller: 'mofp-users-data-edit-form',

    requires: [
        'MasterOfPuppets.view.users.DataEditFormController',
        'MasterOfPuppets.view.users.DataEditFormModel'
    ]
});

}());