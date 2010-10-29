function getContestPanel(conid, pnlTitle, aid) {
	var pnl = new Ext.Panel({
		layout: {
			type: 'vbox'
		},
		scroll:'vertical',
		title:pnlTitle,
		html:getContestData(conid, pnlTitle, aid),
		dockedItems:[{ dock: 'top', layout: { pack: 'center' }, html: '<div class="sub-title"><h1>'+pnlTitle+'</h1></div>'}]
	});
	
	pnl.contestType = "";
	pnl.conid = conid;
	pnl.aid = aid;
	
	return pnl;
}

function findContestPanel(contestType, conid) {
	if(contestType == "councillor") {
		for(var i = 0; i < councillorResultsPanels.length; i++) {
			if(councillorResultsPanels[i].conid == conid) return councillorResultsPanels[i]; 
		}
	}
}

function getContestData(conid, pnlTitle, aid) {
	var pnlContent = '';
	var results = getContestResults(conid);
	var maxBarWidth = 215;
	var percent = 0.0;
	
	/* calculate total votes cast */
	var totalVotes = getAreaTotalVotes(aid);
	
	var statusCls = '';
	
	for(var i = 0; i < results.length; i++) {
		if(totalVotes > 0) percent = Number((results[i].attributes.vot/totalVotes)*100).toFixed(1);
		
		if((results[i].attributes.tot == 1) && (results[i].attributes.e == 1)) statusCls = ' winner';
	
		pnlContent += '<div id="choice-'+results[i].attributes.id+'" class="choice-wrapper'+statusCls+'"><div class="choice"><div class="name">'+
		results[i].attributes.lnm+', '+results[i].attributes.fnm+'</div><div class="vote-count">Votes: '+results[i].attributes.vot+'/'+totalVotes+'</div></div>'+ 
		'<div class="results">'+ 
		'<div class="vote-percent">'+percent+'%</div>'+ 
		'<div class="vote-bar" style="width:'+(maxBarWidth*((results[i].attributes.vot/totalVotes))).toFixed(0)+'px;"></div></div>'+
		'<div class="winner-star"></div></div>';
		
		statusCls = '';
	}
	
	return pnlContent;
}