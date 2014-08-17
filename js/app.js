

/*************** CodeCanyon ***************/
function getSingleItemCodecanyon(id) {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", 'http://marketplace.envato.com/api/v3/item:'+id+'.json', true);
	oReq.send(null);
	oReq.responseType = "text";
	oReq.onreadystatechange = function()
	{
		if (oReq.readyState == 4)
		{
			var resp = JSON.parse(oReq.responseText)
			    html = '';
			html += '<p>Author: '+resp['item']['user']+'</p>';
			html += '<p>Cost: '+resp['item']['cost']+'</p>';
			html += '<p>Sales: '+resp['item']['sales']+'</p>';
			html += '<p>Rating: '+resp['item']['rating_decimal']+'</p>';
			html += '<p>Uploaded on: '+resp['item']['uploaded_on']+'</p>';
			html += '<p>Last update: '+resp['item']['last_update']+'</p>';
			html += '<p>Category: '+resp['item']['category']+'</p>';
			html += '<p>Tags: '+resp['item']['tags']+'</p>';
			document.getElementById('singleitem').innerHTML = html;
			document.getElementById('titlesingleitem').innerHTML = resp['item']['item'];
		}
	}
}

function getInfosCodecanyon(url) {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.send(null);
	oReq.responseType = "text";
	oReq.onreadystatechange = function()
	{
		if (oReq.readyState == 4)
		{
			var resp = JSON.parse(oReq.responseText)
			    html = '';
			for (var i=0; i<resp['new-files'].length; i++) {
				html += '<li><aside><img src="'+resp['new-files'][i]['thumbnail']+'" width="80px" height="80px"></aside>';
				html += '<a class="btn-itemdetail" href="#" id="'+resp['new-files'][i]['id']+'">';
				html += '<p>'+resp['new-files'][i]['item']+'</p>';
				html += '<p>'+resp['new-files'][i]['user']+'</p>';
				html += '</a></li>';
			}
			localStorage.setItem("lastitemcodecanyon", resp['new-files'][0]['id']);
			document.getElementById('listitemscodecanyon').innerHTML = html;
			var codecanyon = document.querySelectorAll('.btn-itemdetail');
			for (var i = 0; i < codecanyon.length; i++) {
				var thiss = codecanyon[i];
				codecanyon[i].addEventListener ('click', function() {
				document.querySelector('#itemdetail').className = 'current skin-dark';
				document.querySelector('[data-position="current"]').className = 'left skin-dark';
				getSingleItemCodecanyon(this.id);
			  });
			}
		}
	}
}

function notificationNewItemCodecanyon(url) {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.send(null);
	oReq.responseType = "text";
	oReq.onreadystatechange = function()
	{
		if (oReq.readyState == 4)
		{
			var resp = JSON.parse(oReq.responseText);
			if (resp['new-files'][0]['id'] != localStorage.getItem('lastitemcodecanyon')) {
				var img = 'http://wmsdardar.com/envato/icon-32.png';
				var notification = new Notification('Envato', { body: 'New items in Codecanyon', icon: img });
				notification.addEventListener('click', function() {launchSelf();});
				getInfosCodecanyon('http://marketplace.envato.com/api/v3/new-files:codecanyon,wordpress.json');
			}
			
		}
	}
}


/********************* ThemeForest **********************/
function getSingleItemThemeforest(id) {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", 'http://marketplace.envato.com/api/v3/item:'+id+'.json', true);
	oReq.send(null);
	oReq.responseType = "text";
	oReq.onreadystatechange = function()
	{
		if (oReq.readyState == 4)
		{
			var resp = JSON.parse(oReq.responseText)
			    html = '';
			html += '<p>Author: '+resp['item']['user']+'</p>';
			html += '<p>Cost: '+resp['item']['cost']+'</p>';
			html += '<p>Sales: '+resp['item']['sales']+'</p>';
			html += '<p>Rating: '+resp['item']['rating_decimal']+'</p>';
			html += '<p>Uploaded on: '+resp['item']['uploaded_on']+'</p>';
			html += '<p>Last update: '+resp['item']['last_update']+'</p>';
			html += '<p>Category: '+resp['item']['category']+'</p>';
			html += '<p>Tags: '+resp['item']['tags']+'</p>';
			document.getElementById('singleitemthemeforest').innerHTML = html;
			document.getElementById('titlesingleitemthemeforest').innerHTML = resp['item']['item'];
		}
	}
}

function getInfosThemeforest(url) {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.send(null);
	oReq.responseType = "text";
	oReq.onreadystatechange = function()
	{
		if (oReq.readyState == 4)
		{
			var resp = JSON.parse(oReq.responseText)
			    html = '';
			for (var i=0; i<resp['new-files'].length; i++) {
				html += '<li><aside><img src="'+resp['new-files'][i]['thumbnail']+'" width="80px" height="80px"></aside>';
				html += '<a class="btn-itemdetailthemeforest" href="#" id="'+resp['new-files'][i]['id']+'">';
				html += '<p>'+resp['new-files'][i]['item']+'</p>';
				html += '<p>'+resp['new-files'][i]['user']+'</p>';
				html += '</a></li>';
			}
			localStorage.setItem("lastitemthemeforest", resp['new-files'][0]['id']);
			document.getElementById('listitemsthemeforest').innerHTML = html;
			var themeforest = document.querySelectorAll('.btn-itemdetailthemeforest');
			for (var i = 0; i < themeforest.length; i++) {
				var thiss = themeforest[i];
				themeforest[i].addEventListener ('click', function() {
				document.querySelector('#itemdetailthemeforest').className = 'current skin-dark';
				document.querySelector('[data-position="current"]').className = 'left skin-dark';
				getSingleItemThemeforest(this.id);
			  });
			}
		}
	}
}


function notificationNewItemThemeforest(url) {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.send(null);
	oReq.responseType = "text";
	oReq.onreadystatechange = function()
	{
		if (oReq.readyState == 4)
		{
			var resp = JSON.parse(oReq.responseText);
			if (resp['new-files'][0]['id'] != localStorage.getItem('lastitemthemeforest')) {
				var img = 'http://wmsdardar.com/envato/icon-32.png';
				var notification = new Notification('Envato', { body: 'New items in ThemeForest', icon: img });
				notification.addEventListener('click', function() {launchSelf();});
				getInfosThemeforest('http://marketplace.envato.com/api/v3/new-files:themeforest,wordpress.json');
			}
			
		}
	}
}




/*********************** Launch Notification ******************/
function launchSelf() {
  var request = window.navigator.mozApps.getSelf();
  request.onsuccess = function() {
    if (request.result) {
      request.result.launch();
    }
  };
}


/*********************** Listeners *********************************/
//-------------------------------------------------------------------//
document.querySelector('#btn-itemdetail-back').addEventListener ('click', function () {
  document.querySelector('#itemdetail').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});

// Display ThemeForest items Page

document.querySelector('#btn-themeforest').addEventListener ('click', function () {
  document.querySelector('#themeforest').className = 'current skin-dark';
  document.querySelector('[data-position="current"]').className = 'left skin-dark';
});

document.querySelector('#btn-themeforest-back').addEventListener ('click', function () {
  document.querySelector('#themeforest').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});

document.querySelector('#btn-itemdetailthemeforest-back').addEventListener ('click', function () {
  document.querySelector('#itemdetailthemeforest').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});

/*********** Functions ***************/

getInfosCodecanyon('http://marketplace.envato.com/api/v3/new-files:codecanyon,wordpress.json');
getInfosThemeforest('http://marketplace.envato.com/api/edge/new-files:themeforest,wordpress.json') 
setInterval(function(){
	notificationNewItemCodecanyon('http://marketplace.envato.com/api/v3/new-files:codecanyon,wordpress.json');
	notificationNewItemThemeforest('http://marketplace.envato.com/api/v3/new-files:themeforest,wordpress.json');
},60000);


