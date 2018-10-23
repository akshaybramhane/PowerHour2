({
    payViaPaytm : function(component, event, helper) {
        var action = component.get("c.makepaytmPayment");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") 
            {	
                if(response.getReturnValue() == 'SUCCESS'){
                    helper.showToast(component, event, 'success', 'Success!','Payment done successfully...!');
                }
            }
        });
        $A.enqueueAction(action);
    }
})