import copper_1 from "/public/assets/Copper_1.png"
import copper_15 from "/public/assets/copper_15m.png"
import ground_rods from "/public/assets/ground_rods.jpg"
import galvanized_6 from "/public/assets/galvanized_6m.jpg"
import galvanized_9 from "/public/assets/galvanized_9m.jpg"
import galvanized_rods from "/public/assets/galvanized_rods.jpg"

export interface ICardData {
    url:string
    cost: number
    title:string
    count:number
}

export const CopperData:ICardData[] = [{
    url:`${copper_1}`,
    cost:14890,
    title:"Комплект Заземления Омедненный 6м",
    count: 1
    },
    {
        url:`${copper_1}`,
        cost:28990,
        title:"Комплект Заземления Омедненный 9м",
        count: 1
    },
    {
        url:`${copper_15}`,
        cost:59990,
        title:"Комплект Заземления Омедненный 15м",
        count: 1
    },
    {
        url:`${ground_rods}`,
        cost:14700,
        title:"Стержни Заземления Омедненные",
        count: 1
    }
]
export const GalvanizedData:ICardData[] = [
    {
        url:`${galvanized_6}`,
        cost:16800,
        title:"Комплект Заземления Оцинкованный 6м",
        count: 1
    },
    {
        url:`${galvanized_6}`,
        cost:32990,
        title:"Комплект Заземления Оцинкованный 9м",
        count: 1
    },{
        url:`${galvanized_9}`,
        cost:45600,
        title:"Комплект Заземления Оцинкованный 15м ",
        count: 1
    },{
        url:`${galvanized_rods}`,
        cost:14990,
        title:"Cтержни Заземления Оцинкованные",
        count: 1
    },
]
