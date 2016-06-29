//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('MasterOfPuppets.view.users.DataEditFormLocalisation', {
        extend: 'MasterOfPuppets.view.users.UsersLocalisation',
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