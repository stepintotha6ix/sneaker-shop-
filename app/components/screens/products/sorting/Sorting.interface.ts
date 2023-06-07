export enum EnumSorting{
    LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
    HIGH_TO_LOW_PRICE = 'HIGH_TO_LOW_PRICE',
    NEWEST = 'NEWEST',
   
}
export interface ISortingItem{
    label: 'Price: High-Low' | 'Price: Low-High' | 'Newest' ;
    value: EnumSorting
}