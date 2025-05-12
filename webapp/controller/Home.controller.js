sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("cpapp.login.controller.Home", {
        onInit() {
        },
        onLogin:function(){
            let sId = this.getView().byId("userId").getValue();
            let sPassword = this.getView().byId("password").getValue();

            if(!sId && !sPassword){
                MessageToast.show("Please enter both User ID and Password.");
                return;
            }

            const oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");

            oCrossAppNavigator.toExternal({
                target: {
                    semanticObject: "getStockInfo",    // Replace with your semantic object
                    action: "display"              // Replace with your action
                },
                params: {
                    "userId": sId
                }
            });

        }
    });
});