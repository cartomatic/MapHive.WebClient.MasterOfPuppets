//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.DataEditFormLocalisation', {
        extend: 'MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsLocalisation',
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {}
        }

    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());