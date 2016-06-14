function initJQuery() {    
    if (typeof(jQuery) == 'undefined') {
        document.write('<script type="text/javascript" src="/~/media/Designer/Global/JS/jquery141min.js"></script>');
    }           
}
initJQuery();

// Based on https://developer.mozilla.org/en/DOM/Storage
var invalidateList = new Array();
(function() {
  var domain = location.hostname.match(/\.digikey\..*/)[0];
  
	var storage = {
		getItem: function(sKey) {
			var aCouples = document.cookie.split(/;\s*/);
			for ( var i = 0; i < aCouples.length; i++) {
				var iCouple = aCouples[i].split('=');
				if (iCouple.length > 1) {
					var iKey = unescape(iCouple[0]);
					var iValue = unescape(iCouple[1]);
					if (iKey === sKey) {
						return iValue;
					}
				}
			}
		},
		setItem: function(sKey, sValue) {
			if (!sKey) {
				return;
			}
			document.cookie = escape(sKey) + "=" + escape(sValue) +
			  "; path=/; domain=" + domain +";";
		},
		removeItem: function(sKey) {
			if (!sKey) {
				return;
			}
			var sExpDate = new Date();
			sExpDate.setDate(sExpDate.getDate() - 1);
			document.cookie = escape(sKey) + "=; expires=" + sExpDate.toGMTString() +
			  "; path=/; domain=" + domain + ";";
		}
	};

	function unpack(data) {
		var kvs = data.split(';');
		var res = {};
		for ( var i = 0; i < kvs.length; i++) {
			var parts = kvs[i].split('=');
			res[parts[0]] = parts[1];
		}
		return res;
	}

	function pack(data) {
	  var res = [];
	  for (var key in data) {
	    res.push(key + '=' + data[key]);
	  }
	  return res.join(';');
	}
	
	//Gather data for the cookie.  The parameter isWebtrends is optional and defaults to false.
	function gatherTrackingData(node, isWebtrends) {
	  var index = isWebtrends ? 0 : -1;
	  var res = {};
	  while (true) {
	    var data = $(node).attr('data-webtrends');
	    if (!data) { 
		data = $(node).attr('wt_name'); 
	    }
	    if (data) {
	      data = unpack(data);
	      for (var key in data) {
	        if (!res[key] && key.lastIndexOf("WT.", 0) === index) {
	          res[key] = data[key];
	        }
	      }
	    }
	    
	    node = node.parentNode;
	    
	    if (node == document) {
	      break;
	    } else if ($(node).attr('data-wt-root') === "true") {
	      break;
	    }
	  }
	  return pack(res);
	}
	
	// Edit tag object
	var wtdata = storage.getItem('wt-tracking');	
	storage.removeItem('wt-tracking');
	if (wtdata) {
		wtdata = unpack(wtdata);
		if (typeof _tag != 'undefined') {		
			for (var key in wtdata) {
				_tag["WT"][key.replace("WT.","")] = wtdata[key];
				invalidateList.push(key.replace("WT.",""));								
			}
		} else {
			for (var key in wtdata) {
				document.write('<meta name="' + key + '" content="' + wtdata[key] + '">');
			}
		}
		
	}
	
	//Edit UDO
	var udodata = storage.getItem('udo-data');
	storage.removeItem('udo-data');
	if (udodata) {
		udodata = unpack(udodata);
		if (typeof utag_data != 'undefined') {
			for (var key in udodata) {
				utag_data[key] = udodata[key];				
			}
		}		
	}

	// Prepare anchor tags	
	$(function () {
		function mousedown() {
			var wtdata = gatherTrackingData(this, true);
			var udodata = gatherTrackingData(this);
			if (wtdata) {
				storage.setItem('wt-tracking', wtdata);
			}
			if (udodata) {
				storage.setItem('udo-data', udodata);
			}
		}

		function keydown(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if(code == 13) { 
				var wtdata = gatherTrackingData(this, true);
				var udodata = gatherTrackingData(this);
				if (wtdata) {
				  storage.setItem('wt-tracking', wtdata);
				}
				if (udodata) {
				  storage.setItem('udo-data', udodata);
				}
			}
		}

	  if ($('a').live) {
	    $('a').live('mousedown', mousedown);
	    $('a').live('keydown', keydown);
	  } else {
	    $(document).on('mousedown', 'a', mousedown);
	    $(document).on('keydown', 'a', keydown);
	  }
	});
}());
