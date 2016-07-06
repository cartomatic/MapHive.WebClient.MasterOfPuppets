//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.langs.LangsModel', {
        extend: 'mh.module.data.DataViewBaseModel',
        alias: 'viewmodel.mofp-langs',

    requires: [
        'mh.data.model.Lang'
    ],

    stores: {
            gridstore:{
                model: 'mh.data.model.Lang',
                data: []
                //Note: autoLoad, remoteSort, remoteFilter is automatically set to true in the dataview base and override whatever may be set here

            }
        }
    });

}());