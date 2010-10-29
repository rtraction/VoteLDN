function onTapHandler(button, event)
{
	if(button.contestType == "councillor") activeItems.push(councillorPanel);
	else if(button.contestType == "trustee") activeItems.push(trusteePanel);
	
	var pnlTitle = '';
	if(button.contestType == "councillor") pnlTitle = "Councillor - " + button.connm;
	else if(button.contestType == "trustee") pnlTitle = "School Board Trustee<br/>" + button.connm;
	
	tabpanel.setCard(getContestPanel(button.conid, pnlTitle, button.aid),{type: 'slide', direction: 'left'});
	
	// back button
	var dockedItems = tabpanel.getDockedItems();
	var header = dockedItems[0];
	header.getComponent(0).show();	
}

function buildContestButtons(contests, contestType) {
	var buttons = new Array();
	var btnClass = "";
	
	for(var i = 0; i < contests.length; i++) {
	if(i == 0) btnClass = "listButton first";
	else if(i == contests.length-1) btnClass = "listButton last";
	else btnClass = "listButton";
	
		buttons[i] = new Ext.Button({
			text:contests[i].attributes.areanm,
			handler:onTapHandler,
			cls:btnClass
		});
		
		// add the ContestId (conid), Name (connm) and Area ID (aid) to the button
		buttons[i].contestType = contestType;
		buttons[i].conid = contests[i].attributes.id;
		buttons[i].connm = contests[i].attributes.areanm;
		buttons[i].aid = contests[i].attributes.aid;
	}
	
	return buttons;
}

function getContestListPanel(contestType) {
	var pnl = null;
	if(contestType == "councillor") {
		pnl = new Ext.Panel({
			layout: {
				type: 'vbox'
			},
			scroll:'vertical',
			iconCls:'team',
			title:'Councillors',
			items: buildContestButtons(councillorContests, "councillor"),
			cls:'list-councillors',
			dockedItems:[{ dock: 'top', layout: { pack: 'center' }, html: '<div class="sub-title"><h1>Councillor</h1></div>'}]
		});
	} else if(contestType == "trustee") {
		pnl = new Ext.Panel({
			layout: {
				type: 'vbox'
			},
			scroll:'vertical',
			iconCls:'team',
			title:'School Board<br/>Trustees',
			items: buildContestButtons(trusteeContests, "trustee"),
			cls:'list-trustees',
			dockedItems:[{ dock: 'top', layout: { pack: 'center' }, html: '<div class="sub-title"><h1>School Board Trustee</h1></div>'}]
		});
	}
	
	return pnl;
}