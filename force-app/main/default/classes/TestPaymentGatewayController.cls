@isTest
public class TestPaymentGatewayController {
	// this is the controller for the lightning component
	// reject this change please
	
    public static void testMakePaytmPayment(){
    	
    	String result = PaymentGatewayController.makePaytmPayment();
    	System.assertEquals('SUCCESS',result);	
    }
}