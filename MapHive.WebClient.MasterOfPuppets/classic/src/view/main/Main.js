//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * App's viewport
     */
    Ext.define('MasterOfPuppets.view.main.Main', {
        extend: 'mh.module.sideNav.SideNav',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Card',
        'Ext.layout.container.HBox',
        'Ext.list.Tree',
        'Ext.plugin.Viewport',
        'MasterOfPuppets.view.main.MainController',
        'Ext.plugin.Viewport'
    ],

        //make the component be a viewport
        plugins: 'viewport',

        controller: 'viewport',

        useRouter: true
    });

}());