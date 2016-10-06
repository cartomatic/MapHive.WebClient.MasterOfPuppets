(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Lock screen used to lock the UI from user interaction; adds item to centered vbox layout
     */
    Ext.define('MasterOfPuppets.view.auth.Auth', {
        extend: 'mh.module.auth.Auth',

        requires: [
        ],

        cls: 'mofp-locking-screen',

        // //this can be wrapped into a config property, but does not have to
        // 'loginView|setUI': 'blue-panel',
        // 'btnForgotPass|setUI': 'orange-button',
        // 'btnForgotPass|setScale': 'medium',
        // 'btnLogin|setUI': 'green-button',
        // 'btnLogin|setScale': 'medium',
        //
        // 'forgotPassView|setUI': 'orange-panel',
        // 'btnResetPass|setUI': 'orange-button',
        // 'btnResetPass|setScale': 'medium',
        // 'btnResetPassCancel|setUI': 'green-button',
        // 'btnResetPassCancel|setScale': 'medium',

        /**
         * Called when the view is created
         */
        constructor: function(config){

            //first make sure to init the base stuff!
            this.superclass.constructor.call(this);
        }
    });
}());