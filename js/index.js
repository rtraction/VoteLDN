Ext.ns('election');

/* Globals */
var appTitle = 'London 2010';
var tabpanel;	// main panel
var mayorPanel;
var councillorPanel;
var trusteePanel;
var infoPanel;
var councillorResultsPanels = new Array();
var trusteeResultsPanels = new Array();
var activeItems=[];
var pnlContest = new Array();
var councillorContests = getCouncillorContests();
var trusteeContests = getTrusteeContests();

election.Main = {
    init: function() {
	
    	/* initialize the tab panels */
    	mayorPanel = getContestPanel("1001", "Mayor", "1");
    	mayorPanel.iconCls = "user";
    	mayorPanel.contestType = "mayor";
    	mayorPanel.conid = "1001";
    	mayorPanel.aid = "1";
		
		councillorPanel = getContestListPanel("councillor");
		councillorPanel.contestType = "councillor";
		councillorPanel.conid = "-1";	/* not a data panel */
		councillorPanel.aid = "-1";	/* not a data panel */
		
		trusteePanel = getContestListPanel("trustee");
		trusteePanel.contestType = "trustee";
		trusteePanel.conid = "-1";	/* not a data panel */
		trusteePanel.aid = "-1";	/* not a data panel */
		
		infoPanel = new Ext.Panel({
			iconCls: 'info', title: 'Info',
			html: '<div class="info-panel"><div class="timestamp">'+showTimestamp()+'</div>'+
			'<div class="developed-by">Site designed and developed by <a href="http://www.rtraction.com">rTraction</a></div>'+
			'<div class="feed-source">Data Feed Courtesy <a href="http://london.ca">The City of London</a></div></div>',
			dockedItems:[{
				dock: 'top',
				layout: { pack: 'center' },
				html: '<div class="sub-title"><h1>Information</h1></div>'
			}]
		});
	
		/* Build the TabPanel */
		tabpanel = new Ext.TabPanel({
            fullscreen: true,
            tabBar: {
                dock: 'bottom',
                scroll: 'horizontal',
                sortable: true,
                layout: {
                    pack: 'center'
                }
            },
            cls: 'card1',
            items: [
				mayorPanel,
				councillorPanel,
				trusteePanel,
				infoPanel
            ],
            dockedItems: 
			[{
                cls:'header',
				xtype: 'toolbar',
                dock: 'top',
				title:appTitle,
				items: [{
                    text: 'Back',
                    ui: 'back',
					hidden: true,
                    handler: function() {
						var card = activeItems.pop();
                        tabpanel.setCard(card,{type: 'slide', direction: 'right'});
						if(activeItems.length<=0){this.hide();}
                    }
                }]
            }]
        });
	}
}

Ext.setup({
    icon: 'images/icon.png',
    tabletStartupScreen: 'images/tablet_startup.png',
    phoneStartupScreen: 'images/phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
    		
		election.Main.init();
		
		/* Now that the election is over we have a copy of the final results and don't need to retrieve them any more */
		/*getElectionData();		
		setInterval ( "getElectionData()", 600000 );*/
    }
});