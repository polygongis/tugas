var wms_layers = [];
var format_Indo_Kab_Kot_0 = new ol.format.GeoJSON();
var features_Indo_Kab_Kot_0 = format_Indo_Kab_Kot_0.readFeatures(json_Indo_Kab_Kot_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indo_Kab_Kot_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Indo_Kab_Kot_0.addFeatures(features_Indo_Kab_Kot_0);var lyr_Indo_Kab_Kot_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indo_Kab_Kot_0, 
                style: style_Indo_Kab_Kot_0,
                title: '<img src="styles/legend/Indo_Kab_Kot_0.png" /> Indo_Kab_Kot'
            });var format_TITIKKOORDINATEDITGIS_1 = new ol.format.GeoJSON();
var features_TITIKKOORDINATEDITGIS_1 = format_TITIKKOORDINATEDITGIS_1.readFeatures(json_TITIKKOORDINATEDITGIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKKOORDINATEDITGIS_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TITIKKOORDINATEDITGIS_1.addFeatures(features_TITIKKOORDINATEDITGIS_1);var lyr_TITIKKOORDINATEDITGIS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIKKOORDINATEDITGIS_1, 
                style: style_TITIKKOORDINATEDITGIS_1,
                title: '<img src="styles/legend/TITIKKOORDINATEDITGIS_1.png" /> TITIK KOORDINAT EDIT GIS'
            });var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_2.addFeatures(features_jalan_2);var lyr_jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_2_0.png" /> Ahmad yani<br />\
    <img src="styles/legend/jalan_2_1.png" /> Antasari<br />\
    <img src="styles/legend/jalan_2_2.png" /> by pass soekarno hatta<br />\
    <img src="styles/legend/jalan_2_3.png" /> DI Panjaitan<br />\
    <img src="styles/legend/jalan_2_4.png" /> Diponegoro<br />\
    <img src="styles/legend/jalan_2_5.png" /> Endo Suratmin<br />\
    <img src="styles/legend/jalan_2_6.png" /> Gajah Mada<br />\
    <img src="styles/legend/jalan_2_7.png" /> gg. rumah<br />\
    <img src="styles/legend/jalan_2_8.png" /> gg.melati<br />\
    <img src="styles/legend/jalan_2_9.png" /> gg.singkep 1<br />\
    <img src="styles/legend/jalan_2_10.png" /> H. Komarudin<br />\
    <img src="styles/legend/jalan_2_11.png" /> Imam Bonjol<br />\
    <img src="styles/legend/jalan_2_12.png" /> jalam perumahan<br />\
    <img src="styles/legend/jalan_2_13.png" /> jalan kantor<br />\
    <img src="styles/legend/jalan_2_14.png" /> jalan lokal<br />\
    <img src="styles/legend/jalan_2_15.png" /> jalan perumahan<br />\
    <img src="styles/legend/jalan_2_16.png" /> jalan raya natar<br />\
    <img src="styles/legend/jalan_2_17.png" /> jalan sebiyai<br />\
    <img src="styles/legend/jalan_2_18.png" /> jl trans sumatera<br />\
    <img src="styles/legend/jalan_2_19.png" /> jl. Kacapiring<br />\
    <img src="styles/legend/jalan_2_20.png" /> jl. komplek<br />\
    <img src="styles/legend/jalan_2_21.png" /> jl. sekolah<br />\
    <img src="styles/legend/jalan_2_22.png" /> Jl. Sutan Jamil<br />\
    <img src="styles/legend/jalan_2_23.png" /> Kapt Abdul Haq<br />\
    <img src="styles/legend/jalan_2_24.png" /> kapten abdul haq<br />\
    <img src="styles/legend/jalan_2_25.png" /> Karimun Jawa<br />\
    <img src="styles/legend/jalan_2_26.png" /> Kartini<br />\
    <img src="styles/legend/jalan_2_27.png" /> M. Yamin<br />\
    <img src="styles/legend/jalan_2_28.png" /> MT Haryono<br />\
    <img src="styles/legend/jalan_2_29.png" /> Nusa Indah<br />\
    <img src="styles/legend/jalan_2_30.png" /> Pramuka<br />\
    <img src="styles/legend/jalan_2_31.png" /> Pulau Legundi<br />\
    <img src="styles/legend/jalan_2_32.png" /> Pulau Linggano<br />\
    <img src="styles/legend/jalan_2_33.png" /> Pulau Singkep<br />\
    <img src="styles/legend/jalan_2_34.png" /> Radin inten<br />\
    <img src="styles/legend/jalan_2_35.png" /> Sento Alibasa<br />\
    <img src="styles/legend/jalan_2_36.png" /> Sudirman<br />\
    <img src="styles/legend/jalan_2_37.png" /> Teuku Umar<br />\
    <img src="styles/legend/jalan_2_38.png" /> Tirtayasa<br />\
    <img src="styles/legend/jalan_2_39.png" /> Woltermongosidi<br />\
    <img src="styles/legend/jalan_2_40.png" /> Yos Sudarso<br />\
    <img src="styles/legend/jalan_2_41.png" /> ZA Pagar alam<br />\
    <img src="styles/legend/jalan_2_42.png" /> <br />'
        });var format_lokasi_3 = new ol.format.GeoJSON();
var features_lokasi_3 = format_lokasi_3.readFeatures(json_lokasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokasi_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_lokasi_3.addFeatures(features_lokasi_3);var lyr_lokasi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lokasi_3, 
                style: style_lokasi_3,
                title: '<img src="styles/legend/lokasi_3.png" /> lokasi'
            });var format_rumah_4 = new ol.format.GeoJSON();
var features_rumah_4 = format_rumah_4.readFeatures(json_rumah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumah_4.addFeatures(features_rumah_4);var lyr_rumah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rumah_4, 
                style: style_rumah_4,
    title: 'rumah<br />\
    <img src="styles/legend/rumah_4_0.png" /> bunderan<br />\
    <img src="styles/legend/rumah_4_1.png" /> bunderan RI<br />\
    <img src="styles/legend/rumah_4_2.png" /> GSG Unila<br />\
    <img src="styles/legend/rumah_4_3.png" /> kantor<br />\
    <img src="styles/legend/rumah_4_4.png" /> Lap. Saburai<br />\
    <img src="styles/legend/rumah_4_5.png" /> Lapangan waydadi<br />\
    <img src="styles/legend/rumah_4_6.png" /> Lesehan<br />\
    <img src="styles/legend/rumah_4_7.png" /> masjid<br />\
    <img src="styles/legend/rumah_4_8.png" /> pool damri<br />\
    <img src="styles/legend/rumah_4_9.png" /> RS Imanuel<br />\
    <img src="styles/legend/rumah_4_10.png" /> rumah<br />\
    <img src="styles/legend/rumah_4_11.png" /> stadion<br />\
    <img src="styles/legend/rumah_4_12.png" /> Taman Gajah<br />\
    <img src="styles/legend/rumah_4_13.png" /> <br />\
    <img src="styles/legend/rumah_4_14.png" /> Central Plaza<br />\
    <img src="styles/legend/rumah_4_15.png" /> FEB<br />\
    <img src="styles/legend/rumah_4_16.png" /> FH<br />\
    <img src="styles/legend/rumah_4_17.png" /> Hutan Kota<br />\
    <img src="styles/legend/rumah_4_18.png" /> hutan kotan<br />\
    <img src="styles/legend/rumah_4_19.png" /> Mall Kartini<br />\
    <img src="styles/legend/rumah_4_20.png" /> Mall MBK<br />\
    <img src="styles/legend/rumah_4_21.png" /> Rektorat Unila<br />\
    <img src="styles/legend/rumah_4_22.png" /> RM Garuda<br />\
    <img src="styles/legend/rumah_4_23.png" /> Cofe shop<br />\
    <img src="styles/legend/rumah_4_24.png" /> Kantor DPRD<br />\
    <img src="styles/legend/rumah_4_25.png" /> Kantor Gubernur<br />\
    <img src="styles/legend/rumah_4_26.png" /> Lap. Gubernur<br />\
    <img src="styles/legend/rumah_4_27.png" /> Laut<br />'
        });

lyr_Indo_Kab_Kot_0.setVisible(true);lyr_TITIKKOORDINATEDITGIS_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_lokasi_3.setVisible(true);lyr_rumah_4.setVisible(true);
var layersList = [lyr_Indo_Kab_Kot_0,lyr_TITIKKOORDINATEDITGIS_1,lyr_jalan_2,lyr_lokasi_3,lyr_rumah_4];
lyr_Indo_Kab_Kot_0.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', });
lyr_TITIKKOORDINATEDITGIS_1.set('fieldAliases', {'NO': 'NO', 'EAST (E/X)': 'EAST (E/X)', 'SOUTH (S/Y)': 'SOUTH (S/Y)', 'NAMA TEMPAT': 'NAMA TEMPAT', 'KETERANGAN': 'KETERANGAN', });
lyr_jalan_2.set('fieldAliases', {'id': 'id', 'Nama jalan': 'Nama jalan', });
lyr_lokasi_3.set('fieldAliases', {'id': 'id', 'lokasi': 'lokasi', 'foto': 'foto', });
lyr_rumah_4.set('fieldAliases', {'id': 'id', 'rumah': 'rumah', });
lyr_Indo_Kab_Kot_0.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', });
lyr_TITIKKOORDINATEDITGIS_1.set('fieldImages', {'NO': 'TextEdit', 'EAST (E/X)': 'TextEdit', 'SOUTH (S/Y)': 'TextEdit', 'NAMA TEMPAT': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_jalan_2.set('fieldImages', {'id': 'TextEdit', 'Nama jalan': 'TextEdit', });
lyr_lokasi_3.set('fieldImages', {'id': 'TextEdit', 'lokasi': 'TextEdit', 'foto': 'Photo', });
lyr_rumah_4.set('fieldImages', {'id': 'TextEdit', 'rumah': 'TextEdit', });
lyr_Indo_Kab_Kot_0.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'inline label', });
lyr_TITIKKOORDINATEDITGIS_1.set('fieldLabels', {'NO': 'no label', 'EAST (E/X)': 'no label', 'SOUTH (S/Y)': 'no label', 'NAMA TEMPAT': 'inline label', 'KETERANGAN': 'no label', });
lyr_jalan_2.set('fieldLabels', {'id': 'no label', 'Nama jalan': 'inline label', });
lyr_lokasi_3.set('fieldLabels', {'id': 'no label', 'lokasi': 'no label', 'foto': 'inline label', });
lyr_rumah_4.set('fieldLabels', {'id': 'no label', 'rumah': 'no label', });
lyr_rumah_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});