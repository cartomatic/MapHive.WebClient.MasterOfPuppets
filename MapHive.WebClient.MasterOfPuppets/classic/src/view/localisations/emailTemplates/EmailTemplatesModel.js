//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.emailTemplates.EmailTemplatesModel', {
        extend: 'mh.module.data.DataViewBaseModel',
        alias: 'viewmodel.mofp-email-templates',

    requires: [
        'mh.data.model.EmailTemplateLocalisation'
    ],

    stores: {
            gridstore:{
                model: 'mh.data.model.EmailTemplateLocalisation',
                data: []
                //Note: autoLoad, remoteSort, remoteFilter is automatically set to true in the dataview base and override whatever may be set here

            }
        }
    });

}());