//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.applications.DataEditFormLocalisation', {
        requires: [
            'mh.localisation.Localisation',
            'MasterOfPuppets.view.applications.ApplicationsLocalisation'
        ],
        statics: {
            extends: 'MasterOfPuppets.view.applications.ApplicationsLocalisation',
            localisation: {}
        }

    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());