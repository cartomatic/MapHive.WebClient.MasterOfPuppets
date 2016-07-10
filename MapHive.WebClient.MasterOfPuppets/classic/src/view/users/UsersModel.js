//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.users.UsersModel', {
        extend: 'mh.module.dataView.DataViewBaseModel',
        alias: 'viewmodel.mofp-users',

        requires: [
            'mh.data.model.User'
        ],

        stores: {
            gridstore:{
                model: 'mh.data.model.User',
                data: [],
                //Note: autoLoad, remoteSort, remoteFilter is automatically set to true in the dataview base and override whatever may be set here
                //initially sort users on accountClosed
                sorters: [
                    {
                        property: 'isAccountClosed', direction: 'ASC'
                    }
                ]
            }
        }
    });

}());