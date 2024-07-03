sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'pk/com/catalogservserless/test/integration/FirstJourney',
		'pk/com/catalogservserless/test/integration/pages/POsList',
		'pk/com/catalogservserless/test/integration/pages/POsObjectPage',
		'pk/com/catalogservserless/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('pk/com/catalogservserless') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);