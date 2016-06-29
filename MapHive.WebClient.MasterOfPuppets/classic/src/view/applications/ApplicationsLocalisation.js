//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.applications.ApplicationsLocalisation', {
        extend: 'mh.module.data.DataViewBaseLocalisation',

        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {
                gridTitle: {
                    en: 'Applications',
                    pl: 'Aplikacje'
                },
                formTitle: {
                    pl: 'Widok rekordu',
                    en: 'Data view'
                },
                name: {
                    en: 'Name',
                    pl: 'Nazwa'
                },
                url: {
                    en: 'Url',
                    pl: 'Adres url'
                },
                shortName: {
                    en: 'Short name',
                    pl: 'Skrót'
                },
                description: {
                    en: 'Description',
                    pl: 'Opis'
                },
                useSplashscreen: {
                    en: 'Use splashscreen?',
                    pl: 'Użyć splashscreen?'
                },
                isCommon: {
                    en: 'Is common?',
                    pl: 'Publicznie dostępna?'
                },
                requiresAuth: {
                    en: 'Requires auth?',
                    pl: 'Wymaga autentykacji?'
                },
                isDefault: {
                    en: 'Is default?',
                    pl: 'Jest domyślna?'
                },

                appNavigateToTooltip: {
                    en: 'Launch the application in a new window.',
                    pl: 'Uruchom aplikację w nowym oknie.'
                },
                appNavigateToDynamicTooltip: {
                    en: 'Launch the <b>{app_name}</b> application in a new window.',
                    pl: 'Uruchom aplikację <b>{app_name}</b> w nowym oknie.'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());