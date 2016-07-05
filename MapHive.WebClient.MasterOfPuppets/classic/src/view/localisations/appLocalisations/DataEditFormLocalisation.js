//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.DataEditFormLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsLocalisation'
        ],
        statics: {
            extends: 'MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsLocalisation',
            localisation: {}
        }

    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());