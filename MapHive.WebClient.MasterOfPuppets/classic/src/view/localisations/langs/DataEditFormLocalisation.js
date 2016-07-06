//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.localisations.langs.DataEditFormLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'MasterOfPuppets.view.localisations.langs.LangsLocalisation'
        ],
        statics: {
            extends: 'MasterOfPuppets.view.localisations.langs.LangsLocalisation',
            localisation: {}
        }

    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());