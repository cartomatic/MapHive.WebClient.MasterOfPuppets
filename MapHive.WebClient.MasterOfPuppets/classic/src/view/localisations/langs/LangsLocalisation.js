//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.langs.LangsLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'mh.module.data.DataViewBaseLocalisation'
        ],
        statics: {

            extends: 'mh.module.data.DataViewBaseLocalisation',

            localisation:{
                langCode: {
                    en: 'Lang code',
                    pl: 'Kod'
                },
                name: {
                    en: 'Name',
                    pl: 'Nazwa'
                },
                description: {
                    en: 'Description',
                    pl: 'Opis'
                },
                isDefault: {
                    en: 'Default?',
                    pl: 'Domyślny?'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());