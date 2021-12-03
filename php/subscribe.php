<?php
// Your Account API & List ID
$api_key = "c3846fa1dc6a517b5b364c603359af67-us9"; // YOUR-API-KEY-HERE
$list_id = "1f71448818"; // YOUR-LIST-ID-HERE

// Check $recipient
if($recipient === '' || $list_id === '' ) {
	returnAndExitAjaxResponse(
		constructAjaxResponseArray(
			FALSE,
			'APIDATA_IS_NOT_SET',
			array('error_message'=> 'API KEY / LIST ID is not set. Please configure the script.')
		)
	);
}

// make sure that $_POST['fname'] is not blank
$_fname = (empty($_POST['fname'])) ? 'No name specified' : $_POST['fname'];

/**
 * see https://apidocs.mailchimp.com/api/2.0/lists/subscribe.php
 * When using a wrapper or XML-RPC, this is generally the parameter order.
 * When building JSON objects or serialized HTTP requests parameter order does not matter
 */
// var_dump($thememountain_mailchimp_form_settings,$email,$fname,$api_key,$list_id);
try {
	include_once('MailChimp/MailChimp.php');
	$MailChimp = new \DrewM\MailChimp\MailChimp($api_key);
	$result = $MailChimp->post("lists/$list_id/members", array(
		'email_address' => $_POST['email'],
		'status'        => 'subscribed',
		'merge_fields'  => array(
			'FNAME'     => $_fname,
			'LNAME'     => ''
			)
		)
	);
	
	if($result['status'] == 'subscribed') {
		returnAndExitAjaxResponse(
			constructAjaxResponseArray(TRUE,'')
		);
	} else {
		returnAndExitAjaxResponse(
			constructAjaxResponseArray(FALSE,'',array('error_message'=>$result['title']) )
		);
	}
} catch (Exception $_e) {
	returnAndExitAjaxResponse(
		constructAjaxResponseArray(FALSE,'ERROR_AT_MAILCHIMP',$_e->getMessage(),$list_id)
	);
}

/*
	Construct ajax response array
	Input: Result (bool), Message (optional), Data to be sent back in array
*/
function constructAjaxResponseArray ($_response, $_message = '', $_json = null) {
	$_responseArray = array();
	$_response = ( $_response === TRUE ) ? TRUE : FALSE;
	$_responseArray['response'] = $_response;
	if(isset($_message)) $_responseArray['message'] = $_message;
	if(isset($_json)) $_responseArray['json'] = $_json;

	return $_responseArray;
}
/*
	Returns in the Gframe ajax format.
	Input: data array processed by constructAjaxResponseArray ()
	Outputs as a html stream then exits.
*/
function returnAndExitAjaxResponse ($_ajaxResponse) {
	if(!$_ajaxResponse){
		$_ajaxResponse = array('response'=>false,'message'=>'Unknown error occurred.');
	}
	header("Content-Type: application/json; charset=utf-8");
	echo json_encode($_ajaxResponse);
	die();
}