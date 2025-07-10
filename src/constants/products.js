export const PRODUCTS_LIST = {
    CAMERAS : [
        // 2mp
        {
            name : '2MP Bullet Camera (normal)',
            resolution : 2,
            type : 'bullet',
            spec : 'normal',
            prodType : 'camera',
            price:1200
        },
        {
            name : '2MP Dome Camera (normal)',
            resolution : 2,
            type : 'dome',
            spec : 'normal',
            prodType : 'camera',
            price:1150
        },
        {
            name : '2MP Bullet Night Vision Camera',
            resolution : 2,
            type : 'bullet',
            spec : 'night vision',
            prodType : 'camera',
            price:1550
        },
        {
            name : '2MP Dome Night Vision Camera',
            resolution : 2,
            type : 'dome',
            spec : 'night vision',
            prodType : 'camera',
            price:1500
        },
        // 5mp
        {
            name : '5MP Bullet Camera (normal)',
            resolution : 5,
            type : 'bullet',
            spec : 'normal',
            prodType : 'camera',
            price:1700
        },
        {
            name : '5MP Dome Camera (normal)',
            resolution : 5,
            type : 'dome',
            spec : 'normal',
            prodType : 'camera',
            price:1650
        },
        {
            name : '5MP Bullet Night Vision Camera',
            resolution : 5,
            type : 'bullet',
            spec : 'night vision',
            prodType : 'camera',
            price:2200
        },
        {
            name : '5MP Dome Night Vision Camera',
            resolution : 5,
            type : 'dome',
            spec : 'night vision',
            prodType : 'camera',
            price:2150
        },
    ],

    DVRS : [
        // 2MP
        {
            name : '2MP 4 Channel DVR',
            resolution : 2,
            channels : 4,
            prodType : 'dvr',
            price:2980
        },
        {
            name : '2MP 8 Channel DVR',
            resolution : 2,
            channels : 8,
            prodType : 'dvr',
            price:4150
        },
        {
            name : '2MP 16 Channel DVR',
            resolution : 2,
            channels : 16,
            prodType : 'dvr',
            price:7800
        },
        {
            name : '2MP 32 Channel DVR',
            resolution : 2,
            channels : 32,
            prodType : 'dvr',
            price:15900
        },
    
        // 5MP

         {
            name : '5MP 4 Channel DVR',
            resolution : 5,
            channels : 4,
            prodType : 'dvr',
            price:4200
        },
        {
            name : '5MP 8 Channel DVR',
            resolution : 5,
            channels : 8,
            prodType : 'dvr',
            price:6250
        },
        {
            name : '5MP 16 Channel DVR',
            resolution : 5,
            channels : 16,
            prodType : 'dvr',
            price:13800
        },
        {
            name : '5MP 32 Channel DVR',
            resolution : 5,
            channels : 32,
            prodType : 'dvr',
            price:25350
        },
        {
            name : '5MP 64 Channel DVR',
            resolution : 5,
            channels : 64,
            prodType : 'dvr',
            price:39900
        },
    ],

    NVRS : [
        {
            name : '4 Channel NVR',
            channels : 4,
            prodType : 'nvr',
            price : 4890
        },
        {
            name : '8 Channel NVR',
            channels : 8,
            prodType : 'nvr',
            price : 9100
        },
        {
            name : '16 Channel NVR',
            channels : 16,
            prodType : 'nvr',
            price : 15800
        },
        {
            name : '32 Channel NVR',
            channels : 32,
            prodType : 'nvr',
            price :  24900
        },
        {
            name : '64 Channel NVR',
            channels : 64,
            prodType : 'nvr',
            price : 39900
        },
    ],

    HDDS : [
        {
            name : '500 GB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'500gb'
        },
        {
            name : '1 TB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'1tb'
        },
        {
            name : '2 TB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'2tb'
        },
         {
            name : '3 TB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'3tb'
        },
         {
            name : '4 TB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'4tb'
        },
         {
            name : '6 TB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'6tb'
        },
         {
            name : '8 TB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'8tb'
        },
         {
            name : '10 TB Hard Disk',
            prodType : 'hdd',
            price:1650,
            size:'10tb'
        },
    ]
}

export const PRODUCT_CATEGORES = [
    {
        name : 'Cameras',
        key :'CAMERAS'
    },
    {
        name : 'DVRs',
        key :'DVRS'
    },
    {
        name : 'NVR & IP',
        key :'NVRS'
    },
    {
        name : 'Hard Disks',
        key :'HDDS'
    },
]
