//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsLocalisation', {
        extend: 'mh.module.data.DataViewBaseLocalisation',

        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation:{
                applicationName: {
                    en: 'Application',
                    pl: 'Aplikacja'
                },
                className: {
                    en: 'Class name',
                    pl: 'Klasa'
                },
                translationKey: {
                    en: 'Translation key',
                    pl: 'Klucz'
                },
                translations: {
                    en: 'Translations',
                    pl: 'Tłumaczenia'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());