# UX Environment Explorer

This D3.js react app allows the user to visually analyse the various user experience environments of a website and their distribution in terms of page impressions, users, sessions and other metrics.

The expected input data: 
device	String	KDA device inclduing 'robot’ labeling
operatingSystem	String	e.g. Windows NT
browser	String	e.g. Chrome
browserGroup	String	e.g. Chrome, smaller Browsers are grouped as 'Others'
browserVersion	String	e.g. 101.0.4951.64
userAgentClass	String	e.g.Browser, Webview Browser, …
screenWidth	String	‘1280’
screenHeight	String	‘720’
users	Integer	# of users
sessions	Integer	# of sessions
pis	Integer	# of pis
accPis	Integer	# of accelerated Pis by Speed Kit
greenLcpPis	Integer	# of PIs with a goof LCP
yellowLcpPis	Integer	# of PIs with a to be improved LCP
redLcpPis	Integer	# of PIs with a poor LCP
addToCartEvents	Integer	3 of add to cart events
conversions	Integer	# of conversions