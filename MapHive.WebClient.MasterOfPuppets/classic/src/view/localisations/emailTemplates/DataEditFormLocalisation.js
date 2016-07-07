//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.localisations.emailTemplates.DataEditFormLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'MasterOfPuppets.view.localisations.emailTemplates.EmailTemplatesLocalisation'
        ],
        statics: {
            extends: 'MasterOfPuppets.view.localisations.emailTemplates.EmailTemplatesLocalisation',
            localisation: {}
        }

    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());