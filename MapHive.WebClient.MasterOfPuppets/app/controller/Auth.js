//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Created by domin on 4/22/2016.
     */
    Ext.define('MasterOfPuppets.controller.Auth', {
        extend: 'mh.controller.Auth',

        requires: [
            'MasterOfPuppets.view.auth.Auth'
        ],

        //could also be wrapped into config property
        authUi: 'MasterOfPuppets.view.auth.Auth',

        /**
         * Called when the controller is created
         */
        init: function(){
            //first make sure to init the base stuff!
            this.superclass.init.call(this);
        },

        /**
         * Shows a logon UI.
         */
        showLogonUi: function(){
            //Note: Authentication controller requires a UI module exposing a standardised API! see mh.module.auth.Auth for details

            this.hideSplash();

            //this.getAuthUiInstance().showLogonView();

            //<debug>
            if(true){
                this.getAuthUiInstance().showLogonViewWithAutoLogon('dev@maphive.net', 'test');
            }
            else {
                //</debug>
                this.getAuthUiInstance().showLogonView();
                //<debug>
            }
            //</debug>
        }

    });

}());