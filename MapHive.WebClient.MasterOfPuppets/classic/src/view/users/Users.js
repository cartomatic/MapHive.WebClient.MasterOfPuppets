//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.users.Users', {
        extend: 'mh.module.data.DataViewBase',

        requires: [
            'Ext.grid.Panel',
            'Ext.grid.filters.Filters',
            'MasterOfPuppets.view.users.DataEditForm',
            'MasterOfPuppets.view.users.DataViewForm',
            'MasterOfPuppets.view.users.UsersController',
            'MasterOfPuppets.view.users.UsersModel'
        ],

        xtype: 'mofp-users',

        viewModel: {
            type: 'mofp-users'
        },
    
        controller: 'mofp-users',

        grid: {
            xtype: 'grid',
            plugins: 'gridfilters',
            bind: {store: '{gridstore}'},
            columns: [
                {
                    bind: {text: '{localisation.email}'},
                    dataIndex: 'email',
                    flex: 1,
                    filter: {
                        // required configs
                        type: 'string'
                    }
                },
                {
                    dataIndex: 'isAccountClosed',
                    text:'', //needed so col header does not reserve space for col title
                    width: 35,
                    renderer: 'rendererIsAccountClosed',
                    enableColumHide: false,
                    menuDisabled: true
                }
            ]
        },
        gridIconCls: 'x-fa fa-user',
        form: 'MasterOfPuppets.view.users.DataViewForm',
        //formWidth: 300,
        editForm: 'MasterOfPuppets.view.users.DataEditForm'
    });

}());