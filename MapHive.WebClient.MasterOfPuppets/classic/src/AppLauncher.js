//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * App launcher - need to use it here, so the proper azzurra scss is brought in!
     */
    Ext.define('MasterOfPuppets.AppLauncher', {

    requires: [
        'Ext.tip.QuickTipManager',
        'MasterOfPuppets.view.main.Main',
        'mh.module.appBar.AppBar'
    ],

    constructor: function(config){

            Ext.QuickTips.init();

            //init the GUI
            Ext.create('MasterOfPuppets.view.main.Main', {
                dockedItems: [
                    //standardised app top tbar
                    {
                        xtype: 'mh-app-bar',
                        cls: 'mh-app-bar-shadow'
                    }
                ]
            });
        }
    });

}());