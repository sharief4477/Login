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

            sap.ushell.Container.getServiceAsync("CrossApplicationNavigation").then(function (oCrossAppNavigator) {
                oCrossAppNavigator.toExternal({
                    target: {
                        semanticObject: "getStockInfo",  
                        action: "Display"
                    },
                    params: {
                        userId: sId 
                    }
                });
            }).catch(function (err) {
                console.error("Failed to get CrossApplicationNavigation service:", err);
            });

        }
    });
});