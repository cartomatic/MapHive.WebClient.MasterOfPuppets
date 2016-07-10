//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.dashboard.DashboardLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'mh.module.dataView.DataViewBaseLocalisation'
        ],
        statics: {
            extends: 'mh.module.dataView.DataViewBaseLocalisation',
            localisation: {
                title: {
                    en: 'Dashboard'
                },
                tempContent: {
                    en: 'This is gonna a be the Dashboard view'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());