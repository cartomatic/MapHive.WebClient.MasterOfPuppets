//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.main.MainLocalisation', {
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {
                dashboard: {
                    en: 'Dashboard',
                    pl: 'Kokpit???'
                },
                users: {
                    en: 'Users',
                    pl: 'Użytkownicy'
                },
                applications: {
                    en: 'Apps',
                    pl: 'Aplikacje'
                },
                localisations: {
                    en: 'Localisations',
                    pl: 'Tłumaczenia'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());