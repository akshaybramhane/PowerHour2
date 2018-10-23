({
	showToast : function(component, event, type, title, msg) {
        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title" 	: title,
            "message"	: msg,
            "duration"	:'5000',
            "type"		: type,
            "mode"		: 'dismissible'
        });
        toastEvent.fire();
    }
})