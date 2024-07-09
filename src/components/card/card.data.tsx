import copper_1 from "/public/assets/Copper_1.png"
import ground_rods from "/public/assets/ground_rods.jpg"
import galvanized_6 from "/public/assets/galvanized_6m.jpg"
import galvanized_rods from "/public/assets/galvanized_rods.jpg"

export interface ICardData {
    url:string
    cost: number
    title:string
    description: {
        title: string
    }
}

export const CopperData:ICardData[] = [{
    url:`${copper_1}`,
    cost:14890,
    title:"Комплект Заземления Омедненный 6м",
    description: {
        title: "В комплект входит:<br>" +
            "1. Стержень омедн. D14 L=1500мм - 4 шт<br>" +
            "2. Муфта латунная (D14) - 4 шт.<br>" +
            "3. Наконечник стартовый (D14) - 1 шт.<br>" +
            "4. Зажим универсальный - 1 шт.<br>" +
            "5. Головка ударная (D14) - 1 шт.<br>" +
            "6. Смазка 100 гр. - 1 шт.<br>" +
            "Масса - 8 кг."
    }
    },
    {
        url:`${copper_1}`,
        cost:28990,
        title:"Комплект Заземления Омедненный 9м",
        description: {
            title: "В комплект входит:<br>1. Стержень омедн. D14 L 1500мм - 6 шт.<br>2. Муфта латунная (D14) - 6 шт.<br>3. Наконечник стартовый (D14)- 3 шт.<br>4. Зажим универсальный - 3 шт.<br>5. Головка направляющая (D14) - 2 шт.<br>6. Насадка SDS-max - 1 шт.<br>7. Смазка 100 гр. - 1 шт.<br>Масса - 14 кг."
        }
    },
    {
        url:`${ground_rods}`,
        cost:14700,
        title:"Стержни Заземления Омедненные",
        description:{
            title:""
        }
    }
]
export const GalvanizedData:ICardData[] = [
    {
        url:`${galvanized_6}`,
        cost:16800,
        title:"Комплект Заземления Оцинкованный 6м",
        description: {
            title:  "В комплект входит:<br>" +
                "1. Стержень оцинк. D16 L=1500мм - 4 шт.<br>" +
                "2. Муфта оцинк. (D16) - 4 шт.<br>" +
                "3. Наконечник стартовый (D16) - 1 шт.<br>" +
                "4. Зажим универсальный оцинк - 1 шт.<br>" +
                "5. Головка ударная (D16) - 1 шт.<br>" +
                "6. Смазка 100 гр. - 1 шт.<br>" +
                "Масса - 10 кг."
        }
    },
    {
        url:`${galvanized_6}`,
        cost:32990,
        title:"Комплект Заземления Оцинкованный 9м",
        description: {
            title: "В комплект входит:<br>" +
                "1. Стержень оцинк. D16 L=1500мм - 6 шт.<br>" +
                "2. Муфта оцинкованная (D16) - 6 шт.<br>" +
                "3. Наконечник стартовый (D16) - 3 шт.<br>" +
                "4. Зажим универсальный оцинк. - 3 шт.<br>" +
                "5. Головка ударная (D16) - 2 шт.<br>" +
                "6. Насадка SDS-max - 1 шт.<br>" +
                "7. Смазка 100 гр. - 1 шт.<br>" +
                "Масса - 17 кг."
        }
    },{
        url:`${galvanized_rods}`,
        cost:14990,
        title:"Cтержни Заземления Оцинкованные",
        description:{
            title:""
        }
    },
]
