//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.users.DataEditFormLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'MasterOfPuppets.view.users.UsersLocalisation'
        ],
        statics: {
            inherits: 'MasterOfPuppets.view.users.UsersLocalisation',
            localisation: {}
        }

    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());