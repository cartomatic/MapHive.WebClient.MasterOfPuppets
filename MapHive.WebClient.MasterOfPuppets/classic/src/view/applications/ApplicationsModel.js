//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.applications.ApplicationsModel', {
        extend: 'mh.module.data.DataViewBaseModel',
        alias: 'viewmodel.mofp-applications',

        requires: [
            'mh.data.model.Application',
            'mh.mixin.ApiMap'
        ],

        mixins: [
            'mh.mixin.ApiMap'
        ],

        stores: {
            gridstore: {
                model: 'mh.data.model.Application',
                data: []
                //Note: autoLoad, remoteSort, remoteFilter is automatically set to true in the dataview base and override whatever may be set here
            }
        }
    });

}());