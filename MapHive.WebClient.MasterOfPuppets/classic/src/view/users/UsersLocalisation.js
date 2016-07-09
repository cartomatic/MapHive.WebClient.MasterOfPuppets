//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.users.UsersLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'mh.module.data.DataViewBaseLocalisation'
        ],
        statics: {
            extends: 'mh.module.data.DataViewBaseLocalisation',
            localisation: {
                gridTitle: {
                    en: 'Users',
                    pl: 'Użytkownicy'
                },
                name: {
                    en: 'Name',
                    pl: 'Nazwa'
                },
                forename: {
                    en: 'Forename',
                    pl: 'Imię'
                },
                surname: {
                    en: 'Surname',
                    pl: 'Nazwisko'
                },
                email: {
                    en: 'Email',
                    pl: 'Email'
                },
                department: {
                    en: 'Department',
                    pl: 'Dział'
                },
                isAccountClosed: {
                    en: 'Account closed?',
                    pl: 'Konto zamknięte?'
                },
                isAccountVerified: {
                    en: 'Is account verified?',
                    pl: 'Konto zweryfikowane?'
                },
                organizations: {
                    en: 'Organizations',
                    pl: 'Organizacje'
                },
                userActiveTooltip: {
                    en: 'User account is active.',
                    pl: 'Konto użytkownika jest aktywne.'
                },
                userInactiveTooltip: {
                    en: 'User account is not active!',
                    pl: 'Konto użytkownika jest nieaktywne!'
                },
                userInactiveTitle: {
                    en: 'Cannot delete user.',
                    pl: 'Nie można usunąć użytkownika'
                },
                userInactiveMsg: {
                    en: 'User account is already marked as inactive. You cannot delete it again.',
                    pl: 'Konto użytkownika zostało już oznaczone jako nieaktywne. Nie można skasować go ponownie.'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());