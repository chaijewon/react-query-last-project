export  interface Recipe {
    title: string;
    hit: number;
    likecount: number;
    poster: string;
    chef: string;
    no: number;
    num: number;
}
export interface RecipeListData {
    list:Recipe[];
    curpage: number;
    totalpage: number;
    startPage: number;
    endPage: number;
}

export interface ListImageProps {
    recipe: Recipe;
    index: number;
}