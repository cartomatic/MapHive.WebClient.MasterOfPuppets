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
        }

    });

}());