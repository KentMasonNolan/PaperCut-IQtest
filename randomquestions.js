function printJobHook(inputs, actions) {
  if (!inputs.job.isAnalysisComplete) {
    // Full job details are not yet available. Return and wait to be called again.
    return;
  }
  // Change this to the URL of an image accessible by all client workstations.
  var LOGO_URL = "http://%PC_SERVER%/images/login-logo.png";
  var ranNumber = Math.floor(Math.random()*4);
  
  var questionSet = new Array();
  questionSet[0] =  "<html>"
    + "<div style='height:200px'>"
    + "<div style='text-align: center'><img src='" + LOGO_URL + "'></img></div><br>"
    + "<b>WARNING: YOU ARE ABOUT TO USE THE IT DEPTARTMENT COMPUTER.<br><br>"
    + "Before your print can proceed, you must answer the question below. "
    + "Fail to answer the questions and you lose your money and your print.</b><br><br>"
    + "<hr>"
    + "What is the server IP range?" 
    + "<form><input type='radio' name='answer' value='correct'>192.168.0.101-112<br>"
    + "<input type='radio' name='answer' value='wrong'>192.168.0.201-212<br>"
    + "<input type='radio' name='answer' value='wrong'>192.168.0.01-12<br>"
    + "<input type='radio' name='answer' value='wrong'>192.168.254.00-11<br></form>"
    + "</div></html>";
  
  questionSet[1] =  "<html>"
    + "<div style='height:200px'>"
    + "<div style='text-align: center'><img src='" + LOGO_URL + "'></img></div><br>"
    + "<b>WARNING: YOU ARE ABOUT TO USE THE IT DEPTARTMENT COMPUTER.<br><br>"
    + "Before your print can proceed, you must answer the question below. "
    + "Fail to answer the questions and you lose your money and your print.</b><br><br>"
    + "<hr>"
    + "What is the name of the two ESX host?" 
    + "<form><input type='radio' name='answer' value='correct'> Borris & Dorris<br>"
    + "<input type='radio' name='answer' value='wrong'>John & Jane<br>"
    + "<input type='radio' name='answer' value='wrong'>Don & Diane<br>"
    + "<input type='radio' name='answer' value='wrong'>Max & Maxine<br></form>"
    + "</div></html>";
  
  questionSet[2] =  "<html>"
    + "<div style='height:200px'>"
    + "<div style='text-align: center'><img src='" + LOGO_URL + "'></img></div><br>"
    + "<b>WARNING: YOU ARE ABOUT TO USE THE IT DEPTARTMENT COMPUTER.<br><br>"
    + "Before your print can proceed, you must answer the question below. "
    + "Fail to answer the questions and you lose your money and your print.</b><br><br>"
    + "<hr>"
    + "What server is the proxy running on?" 
    + "<form><input type='radio' name='answer' value='correct'>SRVInternet<br>"
    + "<input type='radio' name='answer' value='wrong'>SRVStudent<br>"
    + "<input type='radio' name='answer' value='wrong'>SRVPrint<br>"
    + "<input type='radio' name='answer' value='correct'>SRVIntranet<br></form>"
    + "</div></html>";
  
  questionSet[3] =  "<html>"
    + "<div style='height:200px'>"
    + "<div style='text-align: center'><img src='" + LOGO_URL + "'></img></div><br>"
    + "<b>WARNING: YOU ARE ABOUT TO USE THE IT DEPTARTMENT COMPUTER.<br><br>"
    + "Before your print can proceed, you must answer the question below. "
    + "Fail to answer the questions and you lose your money and your print.</b><br><br>"
    + "<hr>"
    + "What do we use user authentication?" 
    + "<form><input type='radio' name='answer' value='correct'>NTLM<br>"
    + "<input type='radio' name='answer' value='wrong'>OD<br>"
    + "<input type='radio' name='answer' value='wrong'>LDAP<br>"
    + "<input type='radio' name='answer' value='wrong'>Linux PAM<br></form>"
    + "</div></html>";
  
  questionSet[4] =  "<html>"
    + "<div style='height:200px'>"
    + "<div style='text-align: center'><img src='" + LOGO_URL + "'></img></div><br>"
    + "<b>WARNING: YOU ARE ABOUT TO USE THE IT DEPTARTMENT COMPUTER.<br><br>"
    + "Before your print can proceed, you must answer the question below. "
    + "Fail to answer the questions and you lose your money and your print.</b><br><br>"
    + "<hr>"
    + "What is the only server not connected to the internal fiber?" 
    + "<form><input type='radio' name='answer' value='wrong'> SRVBdc<br>"
    + "<input type='radio' name='answer' value='correct'>SRVBackup<br>"
    + "<input type='radio' name='answer' value='wrong'>SRVSlave<br>"
    + "<input type='radio' name='answer' value='wrong'>SRVInternet2<br></form>"
    + "</div></html>";
  
  var response = actions.client.promptForForm(questionSet[ranNumber],{"hideJobDetails": true, "questionID": "quiz", "fastResponse": true});
  if (response["answer"] == "wrong") {
    actions.job.cancel();
    actions.client.promptOK("Cancelled!",{"hideJobDetails": true});
	return;
  } else if (response["answer"] == "correct") {
    actions.client.promptOK("It worked!",{"hideJobDetails": true});
    return;
  }
}