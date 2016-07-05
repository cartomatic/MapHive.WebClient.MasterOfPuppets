//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsModel', {
        extend: 'mh.module.data.DataViewBaseModel',
        alias: 'viewmodel.mofp-app-localisations',

    requires: [
        'mh.data.model.AppLocalisation'
    ],

    stores: {
            gridstore:{
                model: 'mh.data.model.AppLocalisation',
                data: []
                //Note: autoLoad, remoteSort, remoteFilter is automatically set to true in the dataview base and override whatever may be set here

            }
        }
    });

}());