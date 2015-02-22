

// Create the URL

var portals = [
    'data.austintexas.gov',
    'data.cityofnewyork.us',
    'data.hawaii.gov',
    'bronx.lehman.cuny.edu',
    'data.sfgov.org',
    'data.baltimorecity.gov',
    'data.raleighnc.gov',
    'data.ok.gov',
    'data.seattle.gov',
    'data.montgomerycountymd.gov',
    'finances.worldbank.org',
    'data.cityofboston.gov',
    'data.act.gov.au',
    'data.kcmo.org',
    'data.providenceri.gov'];

var months2012 = [
    '/api/site_metrics.json?start=1325376000000&end=1327968000000',
    '/api/site_metrics.json?start=1328054400000&end=1330387200000',
    '/api/site_metrics.json?start=1330560000000&end=1333152000000',
    '/api/site_metrics.json?start=1333238400000&end=1335744000000',
    '/api/site_metrics.json?start=1335830400000&end=1338422400000',
    '/api/site_metrics.json?start=1338508800000&end=1341014400000',
    '/api/site_metrics.json?start=1341100800000&end=1343692800000',
    '/api/site_metrics.json?start=1343779200000&end=1346371200000',
    '/api/site_metrics.json?start=1346457600000&end=1348963200000',
    '/api/site_metrics.json?start=1349049600000&end=1351641600000',
    '/api/site_metrics.json?start=1351728000000&end=1354233600000',
    '/api/site_metrics.json?start=1354320000000&end=1356912000000'];

var months2013 = [
    '/api/site_metrics.json?start=1356998400000&end=1359590400000',
    '/api/site_metrics.json?start=1359676800000&end=1362009600000',
    '/api/site_metrics.json?start=1362096000000&end=1364688000000',
    '/api/site_metrics.json?start=1364774400000&end=1367280000000',
    '/api/site_metrics.json?start=1367366400000&end=1369958400000',
    '/api/site_metrics.json?start=1370044800000&end=1372550400000',
    '/api/site_metrics.json?start=1372636800000&end=1375228800000',
    '/api/site_metrics.json?start=1375315200000&end=1377907200000',
    '/api/site_metrics.json?start=1377993600000&end=1380499200000',
    '/api/site_metrics.json?start=1380585600000&end=1383177600000',
    '/api/site_metrics.json?start=1383264000000&end=1385769600000',
    '/api/site_metrics.json?start=1385856000000&end=1388448000000'];


var months2014 = [
    '/api/site_metrics.json?start=1388534400000&end=1391126400000',
    '/api/site_metrics.json?start=1391212800000&end=1393545600000',
    '/api/site_metrics.json?start=1393632000000&end=1396224000000',
    '/api/site_metrics.json?start=1396310400000&end=1398816000000',
    '/api/site_metrics.json?start=1398902400000&end=1401494400000',
    '/api/site_metrics.json?start=1401580800000&end=1404086400000',
    '/api/site_metrics.json?start=1404172800000&end=1406764800000',
    '/api/site_metrics.json?start=1406851200000&end=1409443200000',
    '/api/site_metrics.json?start=1409529600000&end=1412035200000',
    '/api/site_metrics.json?start=1412121600000&end=1414713600000',
    '/api/site_metrics.json?start=1414800000000&end=1417305600000',
    '/api/site_metrics.json?start=1417392000000&end=1419984000000'];

var months36 = [
    '/api/site_metrics.json?start=1325376000000&end=1327968000000',
    '/api/site_metrics.json?start=1328054400000&end=1330387200000',
    '/api/site_metrics.json?start=1330560000000&end=1333152000000',
    '/api/site_metrics.json?start=1333238400000&end=1335744000000',
    '/api/site_metrics.json?start=1335830400000&end=1338422400000',
    '/api/site_metrics.json?start=1338508800000&end=1341014400000',
    '/api/site_metrics.json?start=1341100800000&end=1343692800000',
    '/api/site_metrics.json?start=1343779200000&end=1346371200000',
    '/api/site_metrics.json?start=1346457600000&end=1348963200000',
    '/api/site_metrics.json?start=1349049600000&end=1351641600000',
    '/api/site_metrics.json?start=1351728000000&end=1354233600000',
    '/api/site_metrics.json?start=1354320000000&end=1356912000000',
    '/api/site_metrics.json?start=1356998400000&end=1359590400000',
    '/api/site_metrics.json?start=1359676800000&end=1362009600000',
    '/api/site_metrics.json?start=1362096000000&end=1364688000000',
    '/api/site_metrics.json?start=1364774400000&end=1367280000000',
    '/api/site_metrics.json?start=1367366400000&end=1369958400000',
    '/api/site_metrics.json?start=1370044800000&end=1372550400000',
    '/api/site_metrics.json?start=1372636800000&end=1375228800000',
    '/api/site_metrics.json?start=1375315200000&end=1377907200000',
    '/api/site_metrics.json?start=1377993600000&end=1380499200000',
    '/api/site_metrics.json?start=1380585600000&end=1383177600000',
    '/api/site_metrics.json?start=1383264000000&end=1385769600000',
    '/api/site_metrics.json?start=1385856000000&end=1388448000000',
    '/api/site_metrics.json?start=1388534400000&end=1391126400000',
    '/api/site_metrics.json?start=1391212800000&end=1393545600000',
    '/api/site_metrics.json?start=1393632000000&end=1396224000000',
    '/api/site_metrics.json?start=1396310400000&end=1398816000000',
    '/api/site_metrics.json?start=1398902400000&end=1401494400000',
    '/api/site_metrics.json?start=1401580800000&end=1404086400000',
    '/api/site_metrics.json?start=1404172800000&end=1406764800000',
    '/api/site_metrics.json?start=1406851200000&end=1409443200000',
    '/api/site_metrics.json?start=1409529600000&end=1412035200000',
    '/api/site_metrics.json?start=1412121600000&end=1414713600000',
    '/api/site_metrics.json?start=1414800000000&end=1417305600000',
    '/api/site_metrics.json?start=1417392000000&end=1419984000000'];

var $currentURL = '';
var $results = document.getElementById("results");
var $dataPortal = document.getElementById("data-portal");
var $yearSelected = document.getElementById("year");
var numMonths;

// Display data from URL on page
var $displayData = document.getElementById("displayData");

function clearOutputs(){
  $('#displayData').text('');
  $('#results').text('');
  dataObj = [];
};

function setNumberOfMonths(){
	if ( $yearSelected.value === '36 Months' ){
		numMonths = 36;
	} else {
		numMonths = 12;
	}
};

function displayData() {
  var URL = $currentURL;
  var currentEndpoint = '';
  var currentMonthNum;

  $('button').click(function(e){
    e.preventDefault();
    clearOutputs();
    setNumberOfMonths();
    $('#results').append("<p>Fetched data from: </p>");

    for (i=0; i < numMonths; i++){

    	var currentMonthNum = i;


      if ( $yearSelected.value === '36 Months' ){
        currentEndpoint = "https://" + $dataPortal.value + months36[i];
      } else if ( $yearSelected.value === '2014' ){
        currentEndpoint = "https://" + $dataPortal.value + months2013[i];
      } else if ( $yearSelected.value === '2013' ){
        currentEndpoint = "https://" + $dataPortal.value + months2013[i];
      } else {
        currentEndpoint = "https://" + $dataPortal.value + months2012[i];
      }

      console.log("Requesting Month " + currentMonthNum + " data from: " + currentEndpoint);
      $('#results').append("<a href='" + currentEndpoint + "'>" + currentEndpoint + "</a><br>");
      
      (function(currentMonthNum){
	      $.ajax({
	          url: currentEndpoint,
	          type: "GET",
	          dataType: "json",
	          dataObj: [],
	          currentMonth: currentMonthNum,
	      }).done(function(data, status, jqXHR) {
          console.log("Returned Month #" + (currentMonthNum + 1) + " data with status of " + status);
	        var socrataData = jqXHR.responseJSON;
	        // Adding 1 to the month number to start from 1 (instead of 0)
	        socrataData.month = currentMonthNum + 1;
	        socrataData.portal = $dataPortal.value;
	        dataObj.push(socrataData);
	        var dataTextObj = JSON.stringify(dataObj);
	        $('#displayData').text(dataTextObj);

	      }).fail(function(xhr, status, err) {
	          console.log('fail', status, err);
	      });
      })(i);
    }
  });
}


displayData();

