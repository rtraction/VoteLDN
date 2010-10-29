<?php
$user_agent = $_SERVER['HTTP_USER_AGENT'];
if(preg_match('/ipad/i',$user_agent) || preg_match('/ipod/i',$user_agent) || preg_match('/iphone/i',$user_agent) || preg_match('/android/i',$user_agent)) {
	// all good to continue
} else {
	// This Sencha app is not going to look go so send them to Share London for Election Results
	header( 'Location: http://sharelondon.ca/elections/2010/results' ) ;
}
?>
<!DOCTYPE html> 
<html> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
<title>London 2010</title>

<link rel="apple-touch-icon" href="/images/icon.png" />

<!-- Ext Touch CSS --> 
<link rel="stylesheet" href="css/sencha-touch.css" type="text/css"> 
<link rel="stylesheet" href="css/style.css" type="text/css"> 

<!-- Ext Touch JS --> 
<script type="text/javascript" src="js/ext-touch.js"> </script> 

<!-- Data JS -->
<script type="text/javascript" src="js/data.js"></script>

<!-- Application JS -->
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/contestPanel.js"></script>
<script type="text/javascript" src="js/contestListPanel.js"></script>

</head> 
<body> 
</body> 
</html>