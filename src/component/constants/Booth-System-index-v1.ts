import R8BoothImg1 from "../../assets/booth/r8booth-img1.png"
import R8BoothImg2 from "../../assets/booth/r8booth-img2.png"
import R8BoothImg3 from "../../assets/booth/r8booth-img3.png"
import R8BoothImg4 from "../../assets/booth/r8booth-img4.png"
import R8BoothImg5 from "../../assets/booth/r8booth-img5.png"
import wFrameBoothImg1 from "../../assets/booth/w-frame-img1.png"
import wFrameBoothImg2 from "../../assets/booth/w-frame-img2.png"
import wFrameBoothImg3 from "../../assets/booth/w-frame-img3.png"
import wFrameBoothImg4 from "../../assets/booth/w-frame-img4.png"
import wFrameBoothImg5 from "../../assets/booth/w-frame-img5.png"
import MaximaImg1 from "../../assets/booth/maxima-booth-img1.png"
import MaximaImg2 from "../../assets/booth/maxima-booth-img2.png"
import MaximaImg3 from "../../assets/booth/maxima-booth-img3.png"
import MaximaImg4 from "../../assets/booth/maxima-booth-img4.png"
import MaximaImg5 from "../../assets/booth/maxima-booth-img5.png"
import CustomBoothImg1 from "../../assets/booth/custom-booth.png"
import CustomBoothImg2 from "../../assets/booth/custome-img2.png"
import CustomBoothImg3 from "../../assets/booth/custome-img3.jpg"
import CustomBoothImg4 from "../../assets/booth/custome-img4.png"
import CustomBoothImg5 from "../../assets/booth/custome-img5.png"
import SetBoothImg1 from "../../assets/booth/SetBooth-img1.png"
import SetBoothImg2 from "../../assets/booth/SetBooth-img2.png"
import BoothSet2Img1 from "../../assets/booth/SetBooth-set2-img1.png"
import BoothSet2Img2 from "../../assets/booth/SetBooth-set2-img2.png"
import BoothSet3Img1 from "../../assets/booth/SetBooth-set3-img1.png"
import BoothSet3Img2 from "../../assets/booth/SetBooth-set3-img2.png"
import ArtDisplayPanelImg1 from "../../assets/booth/air-display-panel-img1.png"
import ArtDisplayPanelImg2 from "../../assets/booth/air-display-panel-img2.png"
import NamePlateAndPrintingImg1 from "../../assets/booth/Name Plate and Printing-img1.png"
import NamePlateAndPrintingImg2 from "../../assets/booth/Name Plate and Printing-img2.png"
import CarpetImg1 from "../../assets/booth/Carpet-img1.png"
import CarpetImg2 from "../../assets/booth/Carpet-img2.png"
import RentalEventImg1 from "../../assets/booth/rental-event-img1.png"
import RentalEventImg2 from "../../assets/booth/rental-event-img2.png"
import RentalEventImg3 from "../../assets/booth/rental-event-img3.png"
import RentalEventImg4 from "../../assets/booth/rental-event-img4.png"
import RentalEventImg5 from "../../assets/booth/rental-event-img5.png"
import PhotoBoothImg1 from "../../assets/booth/activityImg1.jpeg"
import PhotoBoothImg2 from "../../assets/booth/activityImg2.jpeg"
import PhotoBoothImg3 from "../../assets/booth/activityImg3.jpeg"
import PhotoBoothImg4 from "../../assets/booth/activityImg4.jpeg"
import PhotoBoothImg5 from "../../assets/booth/activityImg5.jpeg"
import WorkShopImg1 from "../../assets/booth/work-shop-img1.jpeg"
import WorkShopImg2 from "../../assets/booth/work-shop-img2.jpeg"
import WorkShopImg3 from "../../assets/booth/work-shop-img3.jpeg"
import WorkShopImg4 from "../../assets/booth/work-shop-img4.jpeg"
import WorkShopImg5 from "../../assets/booth/work-shop-img5.jpeg"


export const BoothData = [
    {
        id: "1",
        titleMain: "Booth System",
        link: "/booth-system",
        data: [
                {
                    title: "R8 Booth",
                    price: "฿ 1,200",
                    title2 : null,

                    descriptionTitle: "บริการให้เช่าบูธมาตรฐาน บูธสำเร็จรูป บูธนิทรรศการ ",
                    Description: ["ขนาด 2x2 เมตร ราคา 1200 บาท บูธ 3 วัน", "ขนาด 2x3 เมตร ราคา 1350 บาท/บูธ 3 วัน", "ขนาด 3x3 เมตร ราคา 1450 บาท/บูธ 3 วัน"],
                    descriptionTitle2: null ,
                    Implementation: "ออเดอร์ขั้นต่ำ 3 บูธขึ้นไป กรณีเช่าต่ำกว่า 3 บูธ คิดเป็นผนัง ผนังละ 600 บาท",
                    img: [
                        R8BoothImg1,
                        R8BoothImg2,
                        R8BoothImg3,
                        R8BoothImg4,
                        R8BoothImg5
                    ]
                },
                {
                    title: "Wooden Frame Booth",
                    price: "฿ 1,600",
                    title2 : null,

                    descriptionTitle: "บริการให้เช่าบูธโครงไม้ เหมาะกับกิจกรรมแฟร์ในห้างสรรพสินค้า หรืองานที่มีคอนเซปกลาง ต้องการตกแต่งบูธให้เหมือนกัน โดยที่ยังมีพื้นที่ในการจัดแสดงหรือขายสินค้า และน้ำหนักไม่เยอะ",
                    descriptionTitle2: null ,
                    Description: ["ขนาด 2x2 เมตร ราคา 1600 บาท/บูธ 3 วัน", "ขนาด 2x3 เมตร ราคา 1700 บาท/บูธ 3 วัน", "ขนาด 3x3 เมตร ราคา 1800 บาท/บูธ 3 วัน"],
                    Implementation: "ออเดอร์ขั้นต่ำ 3 บูธขึ้นไป",
                    img: [
                        wFrameBoothImg1,
                        wFrameBoothImg2,
                        wFrameBoothImg3,
                        wFrameBoothImg4,
                        wFrameBoothImg5
                    ]
                    
                },
                {
                    title: "Maxima Booth",
                    price: "฿ 3,150",
                    title2 : null,

                    descriptionTitle: "บริการให้เช่าบูธ Maxima เหมาะสำหรับการออกบูธที่มีพื้นที่ในการออกแบบมากกว่าบูธมาตรฐาน หรือต้องการลูกเล่น ความโดดเด่น และมีการใช้ฟีเจอร์ต่างๆ ภายในบูธ แต่มีเวลาติดตั้งจำกัด",
                    descriptionTitle2: null ,
                    Description: ["ขนาด 2x2 เมตร ราคา 3150 บาท/บูธ 3 วัน", "ขนาด 2x3 เมตร ราคา 3400 บาท/บูธ 3 วัน", "ขนาด 3x3 เมตร ราคา 3850 บาท/บูธ 3 วัน"],
                    Implementation: "Exhibition Booth หรือต้องการ Custom Booth โดยใช้วัสดุจาก Maxima Booth เริ่มต้น 25000 บาท",
                    img: [
                        MaximaImg1,
                        MaximaImg2,
                        MaximaImg3,
                        MaximaImg4,
                        MaximaImg5
                    ]
                },
                {
                    title: "Custom Booth/Exhibition",
                    price: "฿ 120,000",
                    title2 : null,

                    descriptionTitle: "บริการออกแบบโครงสร้าง หรือออกแบบการตกแต่งบูธ โดยเป็นการขึ้นโครงสร้างใหม่ หรือใช้โครงสร้างที่ต่างไปจากบูธมาตรฐาน",
                    descriptionTitle2: null ,
                    // Description: ["ขนาด 2x2 เมตร ราคา 3150 บาท/บูธ 3 วัน", "ขนาด 2x3 เมตร ราคา 3400 บาท/บูธ 3 วัน", "ขนาด 3x3 เมตร ราคา 3850 บาท/บูธ 3 วัน"],
                    // Implementation: "Exhibition Booth หรือต้องการ Custom Booth โดยใช้วัสดุจาก Maxima Booth เริ่มต้น 25000 บาท",
                    img: [
                        CustomBoothImg1,
                        CustomBoothImg2,
                        CustomBoothImg3,
                        CustomBoothImg4,
                        CustomBoothImg5
                    ]
                },
        ]
    },
    {
        id: "2",
        titleMain: "Booth Set",
        link: "/booth-set",
        data: [
            {
                title: "Booth Set 1",
                price: "฿ 1,500",
                title2 : null,

                descriptionTitle: "บริการให้เช่าบูธมาตรฐาน บูธสำเร็จรูป บูธนิทรรศการ พร้อมเช่าอุปกรณ์ออกบูธ จับเป็นเซทให้แล้ว",
                descriptionTitle2: null ,
                Description: ["บูธขนาด 2x2 เมตร พร้อมป้ายชื่อ"],
                Implementation: "ราคานี้เป็นวัสดุ R8 Booth หากต้องการใช้บูธวัสดุอื่น และขนาดอื่น รบกวนติดต่อพนักงานเพื่อสอบถามเพิ่มเติม",
                img: [
                     SetBoothImg1,
                     SetBoothImg2,
                ]
            },
            {
                title: "Booth Set 2",
                price: "฿ 1,900",
                title2 : null,

                descriptionTitle: "บริการให้เช่าบูธมาตรฐาน บูธสำเร็จรูป บูธนิทรรศการ พร้อมเช่าอุปกรณ์ออกบูธ จับเป็นเซทให้แล้ว",
                descriptionTitle2: null ,
                Description: ["บูธขนาด 2x2 เมตร","ป้ายองค์กร/ป้ายชื่อบูธ","โต๊ะหน้าขาว 1 ตัว","เก้าอี้ 2 ตัว","และถังขยะ 1 ใบ"],
                Implementation: "ราคานี้เป็นวัสดุ R8 Booth หากต้องการใช้บูธวัสดุอื่น และขนาดอื่น รบกวนติดต่อพนักงานเพื่อสอบถามเพิ่มเติม",
                img: [
                    BoothSet2Img1,
                    BoothSet2Img2,
                ]
            },
            {
                title: "Booth Set 3",
                price: "฿ 2,100",
                title2 : null,

                descriptionTitle: "บริการให้เช่าบูธมาตรฐาน บูธสำเร็จรูป บูธนิทรรศการ พร้อมเช่าอุปกรณ์ออกบูธ จับเป็นเซทให้แล้ว",
                descriptionTitle2: null ,
                Description: ["บูธขนาด 2x2 เมตร","ป้ายองค์กร/ป้ายชื่อบูธ","โต๊ะหน้าขาว 1 ตัว","เก้าอี้ 2 ตัว","และถังขยะ 1 ใบ","ปลั๊กไฟพ่วงภายในบูธ 1 ชิ้น","และอุปกรณ์ส่องสว่าง(ไฟ) 1 ชิ้น"],
                Implementation: "ราคานี้เป็นวัสดุ R8 Booth หากต้องการใช้บูธวัสดุอื่น และขนาดอื่น รบกวนติดต่อพนักงานเพื่อสอบถามเพิ่มเติม" ,
                img: [
                    BoothSet3Img1,
                    BoothSet3Img2,
                ]
            }
        ]
    },
    {
        id:"3",
        titleMain: "Element Design",
        link: "/element-design",
        data:[
            {
            title: "Art Display Panel",
            price: "฿ 1,200",
            title2 : null,

            descriptionTitle: "บริการออกแบบ และผลิต สื่อสิ่งพิมพ์สำหรับออกบูธหรือจัดงานโดยติดตั้งผ่านบอร์ดนิทรรศการ ",
            descriptionTitle2: null ,
            Description: ["เช่าบอร์ดนิทรรศการเปล่า ขนาด 1x2.5 เมตร ราคา 1200 บาท/แผ่น 3 วัน","ออกแบบและผลิตสื่อ พร้อมบอร์ดนิทรรศการ ราคาเริ่มต้น 4500 บาท"],
            Implementation: "",
            img: [
                ArtDisplayPanelImg1,
                ArtDisplayPanelImg2,
                ]
            },
            {
                title: "Name Plate and Printing",
                price: "฿ 300",
                title2 : null,

                descriptionTitle: "บริการออกแบบ และผลิต สื่อสิ่งพิมพ์สำหรับออกบูธหรือจัดงาน ไม่ว่าจะเป็นป้ายบูธ หรือสื่อสิ่งพิมพ์อิ้งค์เจ็ท",
                descriptionTitle2: null ,
                Description: ["ป้ายองค์กร ป้ายชื่อบูธ ขนาด 2.00x0.30 เมตร ราคา 300 บาท/ชิ้น","ออกแบบสื่อสิ่งพิมพ์พร้อมผลิต สำหรับออกบูธหรือจัดงาน ราคาเริ่มต้น 1500 บาท (ขนาดเปลี่ยนไปตามขนาดและวัสดุที่พิมพ์)"],
                Implementation: "",
                img: [
                    NamePlateAndPrintingImg1,
                    NamePlateAndPrintingImg2,
                    ]
            },
            {
                title: "Carpet",
                price: "฿ 100",
                title2 : null,

                descriptionTitle: "บริการให้เช่า / ซื้อ-ขาย พรมสำหรับออกบูธหรือจัดงาน และบริการปูพรมเพื่อยกระดับงานของคุณ ราคาเริ่มต้น 100 บาท/ตร.ม.",
                descriptionTitle2: null ,
                Description: null,
                Implementation: "",
                img: [
                    CarpetImg1,
                    CarpetImg2,
                    ]
            },
        ]
        
    },
    {
        id:"4",
        titleMain: "Event Rental",
        link: "/event-rental",
        data:[
            {
            title: "Event Rental",
            price: "฿ 50",
            title2 : null,
            descriptionTitle: null,
            descriptionTitle2: null ,
            Description: ["โต๊ะหน้าขาว ขนาด 120x60 เซนติเมตร ราคา 400 บาท/ตัว","เก้าอี้พลาสติก ราคาเริ่มต้น 50 บาท/ตัว","ชั้นวางของ ชั้นวางแสดงสินค้า ราคาเริ่มต้น 1000 บาท/ชิ้น","อุปกรณ์ไฟ สำหรับให้แสงสว่าง ราคาเริ่มต้น 350 บาท/ชิ้น","อุปกรณ์ให้ความเย็น พัดลมแอร์เคลื่อนที่","ขนาดเล็ก ราคา 1350 บาท/ตัว","ขนาดใหญ่ ราคา 1650 บาท/ตัว","ปลั๊กไฟพ่วงภายในบูธ ราคา 300 บาท/ชิ้น"],
            Implementation: "สนใจเช่าอุปกรณ์อื่นๆ สามารถติดต่อเพื่อสอบถามเพิ่มเติมกับเราได้เลย",
            img: [
                RentalEventImg5,
                RentalEventImg4,
                RentalEventImg1,
                RentalEventImg2,
                RentalEventImg3,
                ]
            },
        ]
    },
    {
        id:"5",
        titleMain: "Activity",
        link: "/activity",
        data:[
            {
            title: "Photobooth",
            price: null,
            title2 : "THE BOXXET x DUMPSHOT Photobooth",
            descriptionTitle: "บริการกิจกรรมโฟโต้บูธ (Photobooth) เพื่อช่วยเพิ่มสีสันและประสบการณ์ที่ดีให้กับแขกที่มาร่วมบูธหรืองานจัดแสดงของคุณ" ,
            descriptionTitle2: " โดยเราได้จับมือร่วมกับแบรนด์โฟโต้บูธเพื่อเสนอราคาพิเศษ และให้บริการคุณแบบครบวงจรมากขึ้นกว่าเดิม" ,
            Description: null,
            Implementation: null,
            img: [
                PhotoBoothImg1,
                PhotoBoothImg2,
                PhotoBoothImg3,
                PhotoBoothImg4,
                PhotoBoothImg5
                ]
            },
            {
                title: "Workshop",
                price: null,
                title2 : "THE BOXXET Workshop",
                descriptionTitle: "THE BOXXET x DUMPSHOT Photobooth บริการจัดกิจกรรมเวิร์คช็อปเสริมภาพลักษณ์ สร้างบรรยากาศ และประสบการณ์ที่ดีให้กับแขกของคุณ",
                descriptionTitle2: null ,
                Description: null,
                Implementation: "สนใจจัดกิจกรรม สามารถติดต่อแจ้งรายละเอียดและสอบถามเพิ่มเติมกับเราได้เลย",
                img: [
                    WorkShopImg1,
                    WorkShopImg2,
                    WorkShopImg3,
                    WorkShopImg4,
                    WorkShopImg5,
                    ]
                },
        ]
    }
]