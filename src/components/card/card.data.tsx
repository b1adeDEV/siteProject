export interface ICardData {
    url:string
    cost: number
    title:string
    count:number
}

export const CopperData:ICardData[] = [{
    url:"/public/assets/Copper_1.png",
    cost:14890,
    title:"Комплект Заземления Омедненный 6м",
    count: 1
    },
    {
        url:"/public/assets/Copper_1.png",
        cost:28990,
        title:"Комплект Заземления Омедненный 9м",
        count: 1
    },
    {
        url:"/public/assets/copper_15m.png",
        cost:59990,
        title:"Комплект Заземления Омедненный 15м",
        count: 1
    },
    {
        url:"/public/assets/ground_rods.jpg",
        cost:14700,
        title:"Стержни Заземления Омедненные",
        count: 1
    }
]
export const GalvanizedData:ICardData[] = [
    {
        url:"/public/assets/galvanized_6m.jpg",
        cost:16800,
        title:"Комплект Заземления Оцинкованный 6м",
        count: 1
    },
    {
        url:"/public/assets/galvanized_6m.jpg",
        cost:32990,
        title:"Комплект Заземления Оцинкованный 9м",
        count: 1
    },{
        url:"/public/assets/galvanized_9m.jpg",
        cost:45600,
        title:"Комплект Заземления Оцинкованный 15м ",
        count: 1
    },{
        url:"/public/assets/galvanized_rods.jpg",
        cost:14990,
        title:"Cтержни Заземления Оцинкованные",
        count: 1
    },
]
