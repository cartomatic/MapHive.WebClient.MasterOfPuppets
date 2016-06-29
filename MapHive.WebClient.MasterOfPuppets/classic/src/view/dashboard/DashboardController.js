//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.dashboard.DashboardController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.mofp-dashboard',

        requires: [
            'MasterOfPuppets.view.dashboard.DashboardLocalisation'
        ],

        mixins: [
            'mh.mixin.Localisation'
        ],

        routes: {
            'test': 'onTest',
            'test/:someArg': 'onTest',
            'test/:someArg/:someOtherArg': 'onTest'
        },

        /**
         * Called when the view is created
         */
        init: function() {
            //some initial translations...
            var vw = this.getView();

            vw.setTitle(this.getTranslation('title'));
            vw.setHtml(this.getTranslation('tempContent'));
        },

        /**
         * Handles test route
         * @param someArg
         * @param someOtherArg
         */
        onTest: function(someArg, someOtherArg){
            console.warn('onTest', 'someArg', someArg);
            console.warn('onTest', 'someOtherArg', someOtherArg);
        }
    });

}());