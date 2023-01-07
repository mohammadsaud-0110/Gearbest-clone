let gridview = JSON.parse(localStorage.getItem("allitems")) || [
    {
        "title": "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
        "price": "18999",
        "image": "https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg",
        "detail": "Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471",
        "category": "mobile&tablet"
    },
    {
        "title": "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
        "price": "9499",
        "image": "https://m.media-amazon.com/images/I/81t6Av5DvXL._SL1500_.jpg",
        "detail": "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1 13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came",
        "category": "mobile&tablet"
    },
    {
        "title": "Nokia 105 Single SIM, Keypad Mobile Phone with Wireless FM Radio | Charcoal",
        "price": "1299",
        "image": "https://m.media-amazon.com/images/I/51GSe9rxsoL._SL1080_.jpg",
        "detail": "All-new redesigned Nokia mobile which is familiar and easy to use Island style keypad phone with white key lettering High quality 1.77” screen",
        "category": "mobile&tablet"
    },
    {
        "title": "iQOO Z6 5G by vivo (Chromatic Blue, 6GB RAM, 128GB Storage) | Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Battery",
        "price": "16999",
        "image": "https://m.media-amazon.com/images/I/61cU9G3nwVL._SL1000_.jpg",
        "detail": "Snapdragon 695 5G Mobile Platform allows you to level up your performance with efficient 6nm Process, with an ANTUTU Score of 410563. Also, we get a 15% improved CPU performance & improved 30% GPU performance (As compared to Snapdragon 690G)",
        "category": "mobile&tablet"
    },
    {
        "title": "OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "price": "15490",
        "image": "https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg",
        "detail": "6.49\" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels. Larger screen to body ratio of 90.5%.Side Fingerprint Sensor",
        "category": "mobile&tablet"
    },
    {
        "title": "Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)",
        "price": "30490",
        "image": "https://m.media-amazon.com/images/I/61JamrBdMSL._SL1500_.jpg",
        "detail": "A13 Bionic chip with Neural Engine 8MP Wide back camera, 12MP Ultra Wide front camera with Centre Stage",
        "category": "mobile&tablet"
    },
    {
        "title": "Xiaomi Pad 5| Qualcomm Snapdragon 860| 120Hz Refresh Rate| 6GB, 128GB| 2.5K+ Display (10.95-inch/27.81cm)|1 Billion Colours| Dolby Vision Atmos| Quad Speakers| Wi-Fi| Gray",
        "price": "26999",
        "image": "https://m.media-amazon.com/images/I/61Eb9vtdSML._SL1500_.jpg",
        "detail": "Qualcomm Snapdragon 860 Octa-core processor | 6GB RAM | 128GB Internal Storage",
        "category": "mobile&tablet"
    },
    {
        "title": "Lenovo Tab P11 Plus Tablet (11 inch (27.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Voice Calling), Slate Grey with 2K Display, Quad Speakers with Dolby Atmos, 7700 mAH Battery and TUV Certified Eye Protection",
        "price": "26499",
        "image": "https://m.media-amazon.com/images/I/511mMK0LW2L._SL1080_.jpg",
        "detail": "Calling supported (Y); 6 GB RAM| 128 GB ROM expandable upto 256 GB; Processor description - Mediatek Helio G90T octa core processor; Operating system - Android 11 OS",
        "category": "mobile&tablet"
    },
    {
        "title": "HP 14s, AMD Ryzen 5-5500U 14 inches(35cm) FHD, IPS, Micro-Edge Display Laptop (8GB RAM/512GB SSD /Radeon Graphics/Windows 11/Alexa/Backlit Keyboard/MS Office/1.46kg, 14s-fq1092au)",
        "price": "46499",
        "image": "https://m.media-amazon.com/images/I/91icKaQZAvL._SL1500_.jpg",
        "detail": "Do Check Partner offer section for Exciting offers from HP. Processor: AMD Ryzen 5 5500U (up to 4.0 GHz max boost clock(2i),8 MB L3 cache, 6 cores, 12 threads)| Memory & Storage: 8GB (1x8GB) DDR4 3200,Upto 16 GB DDR4-3200 SDRAM (2 x 8 GB)| Storage: 512 GB PCIe NVMe M.2 SSD Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2019 |McAfee LiveSafe Display & Graphics: 35.6 cm (14\") diagonal, FHD, IPS, micro-edge,250 nits, 157 ppi, 45%NTSC |Graphics: AMD Radeon Graphics Ports: 1 SuperSpeed USB Type-C 5Gbps signaling rate,2 SuperSpeed USB Type-A 5Gbps signaling rate,1 headphone/microphone combo, 1 AC smart pin,1 HDMI 1.4b Features: Camera: HP True Vision 720p HD camera with integrated dual array digital microphones| Audio: Dual Speakers| Keyboard: Full-size, backlit, natural silver keyboard | Alexa Built In | Battery: 3-cell, 41 Wh Li-ion, Support battery fast charge| Networking: Realtek RTL8821CE-M 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo,MU-MIMO supported, Miracast compatible",
        "category": "laptop&computer"
    },
    {
        "title": "Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop (16GB/512GB PCIe SSD/Windows 11/Fingerprint Login/Metal Body/Backlit KB/1.38Kg), Gray, NobelM-WFQ9AHNE",
        "price": "44990",
        "image": "https://m.media-amazon.com/images/I/71guAvSMbSL._SL1500_.jpg",
        "detail": "【 Stylish Appearance】 Honor Magicbook 14 has a Premium Aluminium Metal Body with 15.9MM Thickness, 4.8 MM Narrow Bezels, and the weight of the laptop is only 1.38kg, which allows you to carry it easily, making it very convenient for travel and work 【Eye Comfort Mode】 It has 14” FHD Full View IPS Anti-Glare Screen. And has the Support of TÜV Rheinland Low Blue Light Certification, and Flicker Free Certification. It Protects your eyes at all times, and your eyes will no longer be fatigued when working 【 65W Type-C Fast Charging 】HONOR MagicBook 14 has a large battery capacity of 56 Wh, which can power local video watching for about 11 hours. The 65W portable charger can supplement about 65% battery capacity for HONOR MagicBook 14 in 1 hour 【Fast Speed Laptop】Ryzen 5 5500U Processor, 2.1 GHz base speed, 4.0 GHz Max Speed, 6 Cores, 12 Threads | AMD Radeon Graphics. 16GB DDR4 RAM & 512GB PCIe SSD, making it perfect for your office and study needs. 【Security and Privacy】2-in-1 Fingerprint Power Button save you the trouble of entering passwords. Webcam: 720P HD Pop-up Camera with Privacy Mode, always protecting your privacy. 【 Backlit Keyboard 】 Honor Magicbook 14 comes with Backlit keyboard that allows you to type comfortably even in low-light & dark conditions 【Operating System】Pre-Loaded Windows 11 Home 64-bit",
        "category": "laptop&computer"
    },
    {
        "title": "Casio FX-991ES Plus-2nd Edition Scientific Calculator, Black",
        "price": "1295",
        "image": "https://m.media-amazon.com/images/I/61Ru5SQHc+L._SL1100_.jpg",
        "detail": "Redesigned ES PLUS series calculators featuring easy-to-understand Natural Textbook Display, Non-Programmable Scientific Calculator with 417 Functions Stylish design but same function as Casio FX-991ESPLUS 1st edition, 10-digit mantissa + 2-digit exponential display Basic Trigonometrical & Statistics Functions, and many more functions Colour coded keypad for easy key differentiation, Simple and easy to use, Comes with new slide on hard case 3-years warranty by manufacturer",
        "category": "electronics&office"
    },
    {
        "title": "Zync T5 WiFi Home Cinema Portable Projector with Built-in YouTube Supports WiFi, 2800 Lumens LED+LCD Technology Support HDMI/ SD Card 1 Year Manufacture Warranty",
        "price": "6999",
        "image": "https://m.media-amazon.com/images/I/41VRXKedtvL.jpg",
        "detail": "Inbuilt Youtube , connect wifi and enjoy youtube videos Built wifi chip for faster data tranmision for screencast and Miracast Best For home and office presentation. Operation: manual / remote control,Power consumption: 70W max loudspeaker: 4 Ohm 3W,Interface: x 2 / HDMI / SD Card / audio (3.5mm)",
        "category": "electronics&office"
    },
    {
        "title": "MI Xiaomi Wireless Home Security Camera 2i 2022 Edition | Full HD Picture | 360 View | 2MP | AI Powered Motion Detection | Enhanced Night Vision| Talk Back Feature (2 Way Calling), 1080p, White",
        "price": "2991",
        "image": "https://m.media-amazon.com/images/I/51Rvl7DuOUL._SL1500_.jpg",
        "detail": "Full HD Picture AI Powered Motion Detection Infrared Night Vision; 360° Panorama Talk Back Feature (2-Way Audio)",
        "category": "electronics&office"
    },
    {
        "title": "Logitech K480 Wireless Multi-Device Keyboard for Windows, macOS, iPadOS, Android or Chrome OS, Bluetooth, Compact, Compatible with PC, Mac, Laptop, Smartphone, Tablet - Black",
        "price": "2595",
        "image": "https://m.media-amazon.com/images/I/61fl+k9O-FL._SL1500_.jpg",
        "detail": "Type on Any Device: A new type of wireless computer keyboard for your desk that also works with your tablet and smartphone; connect with any Bluetooth-enabled device with external keyboard support. Easy-Switch Dial: Simply turn the dial of the Logitech K480 keyboard to switch typing between 3 connected Bluetooth wireless devices, you can work with Windows, macOS, Chrome OS, Android, and iPadOS.",
        "category": "electronics&office"
    },
    {
        "title": "Targus HyperDrive NET 6-in-2 USB-C Hub",
        "price": "5999",
        "image": "https://m.media-amazon.com/images/I/81QwUf4rAyS._SL1500_.jpg",
        "detail": "Fast and Reliable Ethernet-Get the most reliable and fast internet connection for work, play, and video conferencing. Crystal Clear 4K 30Hz HDR Video Output - Experience high-resolution 4K 30Hz video on HDMI displays (requires a direct HDMI to HDMI connection). High-Speed USB-C - HyperDrive delivers the fastest USB-C capable of 40Gbps data transfer, 5K video output, and 100W power delivery. Dual USB-C Data & Power Delivery - HyperDrive is the only USB hub for MacBook Pro and MacBook Air with two USB-C ports that support power delivery and data (40Gbps/100W + 5Gbps/60W). Convenient Expansion Ports - Additional two USB-A 3.0 ports for high-speed data transfer. (Apple SuperDrive not supported) / Seamless Color, Material, and Finish - Aluminum enclosure designed to perfectly match your Apple device in every way.",
        "category": "electronics&office"
    },
    {
        "title": "HP Deskjet 2331 Colour Printer, Scanner and Copier for Home/Small Office, Compact Size, Reliable, Easy Set-Up Through Smart App On Your Pc Connected Through USB, Ideal for Home.",
        "price": "3999",
        "image": "https://m.media-amazon.com/images/I/615Kr5gtGhL._SL1500_.jpg",
        "detail": "SIMPLE SET UP FROM YOUR PC: Use the HP Smart app to set up with USB in few easy steps. Automatic paper sensor : No;RELIABLE CONNECTIVITY : High-speed USB 2.0 Connectivity Highly printer for your print, scan and copy needs; SAVE YOUR PRODUCTIVE TIME: High speed printing for Home needs; Black: Up to 7.5 ppm (ISO) ;Color: Up to 5.5 ppm (ISO) PEACE OF MIND SERVICE SUPPORT: HP ON-SITE 1-YEAR WARRANTY (Use genuine HP 805 Black Original Ink Cartridge,HP 805 Tri-Colour Original Ink Cartridge) VERSATILE PRINT/MEDIA OPTIONS: Supports A4; B5; A6; DL envelope",
        "category": "printer"
    },
    {
        "title": "Epson EcoTank L3252 Wi-Fi All-in-One Ink Tank Printer (Black)",
        "price": "15599",
        "image": "https://m.media-amazon.com/images/I/512f8pCW7vL._SL1200_.jpg",
        "detail": "Printer Type - Ink Tank; Functionality - All-in-One (Print, Scan, Copy) , Scanner type - Flatbed; Printer Output - Colour; Connectivity - Wi-Fi, USB, App; Scanner Resolution - 1200 x 2400 dpi; Airprint - No OS Compatibility Windows XP / XP Professional / Vista / 7 / 8 / 8.1 / 10Windows Server 2003 / 2008 / 2012 / 2016 / 2019Mac OS X 10.6.8 or later; Mobile connectivity - Yes; Enlarge/reduce option - Yes; Duplex- Manual Maximum Print Speed - 15 pages (Colour), Maximum Print Speed - 33 pages (Black & White); Print cost - 7 paise (Black & White); 18 paise (Colour) - As per ISO standards; Maximum Print Resolution - 5760 x 1440 Page size supported - A4, Legal size, letter, A5, A6, B5, C6, DL; Max paper thickness -256 GSM; Power wattage - 12W",
        "category": "printer"
    },
    {
        "title": "ORTUR Laser Master 3 10W Output Power Laser Engraver Laser Cutter add App Offline Control High Power and Metal with Air Assist Nozzle",
        "price": "150000",
        "image": "https://www.gearbest.com/u_file/2212/14/products/a65ab5762f.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_640,w_640",
        "detail": "Super High Power Laser Engraver - ORTUR's newest real 10W optical power laser engraver. The laser output power soars up with the latest generation of two 5.5W laser coupling technology, is able to cut off 10mm pine board with only one pass, and even cut the 30mm thick black acrylics without any issues.  10W Upgraded Laser Module - The focusing spot area of the new laser is only 1/3 of other ordinary lasers and Integrated Air Assist/Dual Fans/Foldable Focal Gauge/All in 235g Weight. Combine precision engraving and high energy cutting at the same time. It can work very well at high speed of 20000mm/mm, save you over half time than other similar brands.",
        "category": "printer"
    },
    {
        "title": "Creality 3D Ender-3 DIY Easy-Assemble with Resume Printing Support PLA, ABS, TPU 3D Printer (Multicolour, 220 x 220 x 250mm Printing Size)",
        "price": "14449",
        "image": "https://m.media-amazon.com/images/I/61DBNeWAOTL._SL1000_.jpg",
        "detail": "Beautiful Color Display: Enjoy The Simple And User Intuitive 4.3 Inch Color Display Which Speeds Up Your Workflow Through A Click-Wheel Knob Design Integrated Handy Toolbox: Embedded In The Base You??Ll Find A Little Compartment For Storing Nozzles, Needles, Pliers And Other Tools. We Already Love This One New Injection Tensioner: New To The Ender Series Are Two Knobs That Will Let You Tighten The Printer??S Belts With Ease. This Belt Tensioner Solves Earlier Issues Faced By The Users With A Revolutionary New Design Thinking Quick Resume Function: This Perk Was Made Popular By The Prusa I3 Mk3 3D Printer. Outages Or Disconnections Should Be No Problem For Ender 3 V2 Because It Can Fully Recover And Resume The Print When It??S Back Up Effortless Filament Feeding: Creality Added A Rotary Knob On The Bowden Feeding Mechanism So You Can Load The Filament By Hand For A Speedy Setup",
        "category": "printer"
    },
    {
        "title": "USHA Quartz Room Heater with Overheating Protection (3002, Ivory, 800 Watts)",
        "price": "1199",
        "image": "https://m.media-amazon.com/images/I/91QD2VbJL-L._SL1500_.jpg",
        "detail": "Meant for Spot Heating; Voltage/Frequency: 230V/50Hz/1 Phase Room Size: Upto 150 sq ft; Ideal for a small room only, i.e., up to 120 sq. ft. Touch Sensor: No. :Tip-over Switch : Yes",
        "category": "home&garden"
    },
    {
        "title": "Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)",
        "price": "649",
        "image": "https://m.media-amazon.com/images/I/51DGcy8eBCL._SL1080_.jpg",
        "detail": "CLASSIC DESIGN: The classical mirror polish of the appearance makes your electric kettle unique and aesthetic, which can match any type of kitchen design and 360° swivel base is connected with standard power cord for safe usage and convenient storage",
        "category": "home&garden"
    },
    {
        "title": "Sansar Green Makita ELM3720 Electric Lawn Mower 37 cm 1400W",
        "price": "12466",
        "image": "https://m.media-amazon.com/images/I/41t+Fml2g-L.jpg",
        "detail": "Electric Lawn Mower",
        "category": "home&garden"
    },
    {
        "title": "PROFESSIONAL Tools and Hardware 12\" Chain Saw Attachment for 4 Inch Angle Grinder",
        "price": "849",
        "image": "https://m.media-amazon.com/images/I/51PNw5S1kaL._SL1200_.jpg",
        "detail": "This Chain Saw Bracket Set Fits 100mm Angle Grinder And Safety Of Sawing, Effectively Improve The Efficiency Of Your Work.",
        "category": "home&garden"
    }
];

display(gridview)

function display(data){
    for(let i=0;i<16;i++){
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",data[i].image);
        let title = document.createElement("h4");
        title.textContent = data[i].category;
        let price = document.createElement("p");
        price.textContent = "₹ "+ data[i].price;
        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.addEventListener("click",()=>{
            alert("Log in OR Sign up");
        })
        card.append(image,title,price,btn);
        document.querySelector(".grid-view").append(card);
    }
    
}


