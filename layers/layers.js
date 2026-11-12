ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2435183.007660, 5132565.144450, 2448361.910629, 5139015.241975]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_L2A_NRG_SvetiNikole_19102026_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'L2A_NRG_SvetiNikole_19102026<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/L2A_NRG_SvetiNikole_19102026_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_L2A_RGB_SvetiNikole_19102026_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'L2A_RGB_SvetiNikole_19102026<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/L2A_RGB_SvetiNikole_19102026_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_SvetiNikole_19102026_NDVI_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SvetiNikole_19102026_NDVI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SvetiNikole_19102026_NDVI_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_L2A_NRG_SvetiNikole_07042026_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'L2A_NRG_SvetiNikole_07042026<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/L2A_NRG_SvetiNikole_07042026_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_L2A_RGB_SvetiNikole_07042026_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'L2A_RGB_SvetiNikole_07042026<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/L2A_RGB_SvetiNikole_07042026_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_SvetiNikole_07042026_NDVI_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SvetiNikole_07042026_NDVI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SvetiNikole_07042026_NDVI_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_L2A_NRG_SvetiNikole_29102025_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'L2A_NRG_SvetiNikole_29102025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/L2A_NRG_SvetiNikole_29102025_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_L2A_RGB_SvetiNikole_29102025_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'L2A_RGB_SvetiNikole_29102025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/L2A_RGB_SvetiNikole_29102025_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_SvetiNikole_29102025_NDVI_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SvetiNikole_29102025_NDVI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SvetiNikole_29102025_NDVI_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439166.038119, 5134577.711550, 2444339.815720, 5137649.186562]
        })
    });
var lyr_GoogleMapsSvetiNikole23042025_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Google Maps Sveti Nikole 23042025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GoogleMapsSvetiNikole23042025_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439191.542657, 5134628.720625, 2444365.320257, 5137700.195637]
        })
    });
var lyr_Legend_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Legend<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Legend_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2439191.542657, 5134628.720625, 2444365.320257, 5137700.195637]
        })
    });
var format_AreaSvetiNikole_12 = new ol.format.GeoJSON();
var features_AreaSvetiNikole_12 = format_AreaSvetiNikole_12.readFeatures(json_AreaSvetiNikole_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaSvetiNikole_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaSvetiNikole_12.addFeatures(features_AreaSvetiNikole_12);
var lyr_AreaSvetiNikole_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaSvetiNikole_12, 
                style: style_AreaSvetiNikole_12,
                popuplayertitle: 'Area Sveti Nikole',
                interactive: true,
                title: '<img src="styles/legend/AreaSvetiNikole_12.png" /> Area Sveti Nikole'
            });
var group_October2025 = new ol.layer.Group({
                                layers: [lyr_L2A_NRG_SvetiNikole_29102025_7,lyr_L2A_RGB_SvetiNikole_29102025_8,lyr_SvetiNikole_29102025_NDVI_9,lyr_GoogleMapsSvetiNikole23042025_10,],
                                fold: "open",
                                title: 'October 2025'});
var group_April2026 = new ol.layer.Group({
                                layers: [lyr_L2A_NRG_SvetiNikole_07042026_4,lyr_L2A_RGB_SvetiNikole_07042026_5,lyr_SvetiNikole_07042026_NDVI_6,],
                                fold: "open",
                                title: 'April 2026'});
var group_October2026 = new ol.layer.Group({
                                layers: [lyr_L2A_NRG_SvetiNikole_19102026_1,lyr_L2A_RGB_SvetiNikole_19102026_2,lyr_SvetiNikole_19102026_NDVI_3,],
                                fold: "open",
                                title: 'October 2026'});

lyr_GoogleSatellite_0.setVisible(true);lyr_L2A_NRG_SvetiNikole_19102026_1.setVisible(true);lyr_L2A_RGB_SvetiNikole_19102026_2.setVisible(true);lyr_SvetiNikole_19102026_NDVI_3.setVisible(true);lyr_L2A_NRG_SvetiNikole_07042026_4.setVisible(true);lyr_L2A_RGB_SvetiNikole_07042026_5.setVisible(true);lyr_SvetiNikole_07042026_NDVI_6.setVisible(true);lyr_L2A_NRG_SvetiNikole_29102025_7.setVisible(true);lyr_L2A_RGB_SvetiNikole_29102025_8.setVisible(true);lyr_SvetiNikole_29102025_NDVI_9.setVisible(true);lyr_GoogleMapsSvetiNikole23042025_10.setVisible(true);lyr_Legend_11.setVisible(true);lyr_AreaSvetiNikole_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_October2026,group_April2026,group_October2025,lyr_Legend_11,lyr_AreaSvetiNikole_12];
lyr_AreaSvetiNikole_12.set('fieldAliases', {'id': 'id', 'Lokacija': 'Lokacija', });
lyr_AreaSvetiNikole_12.set('fieldImages', {'id': 'TextEdit', 'Lokacija': 'TextEdit', });
lyr_AreaSvetiNikole_12.set('fieldLabels', {'id': 'hidden field', 'Lokacija': 'hidden field', });
lyr_AreaSvetiNikole_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});