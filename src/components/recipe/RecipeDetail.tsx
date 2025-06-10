import {useNavigate,useParams} from "react-router-dom";
import {Fragment} from "react";
import apiClient from "../../http-commons";
import {useQuery} from "@tanstack/react-query";
interface RecipeDetailData {
    no:number;
    likecount:number;
    poster:string;
    title:string;
    chef:string;
    chef_poster:string;
    chef_profile:string;
    info1:string;
    info2:string;
    info3:string;
    content:string;
    foodmake:string;
    data:string;
}
interface RecipeDetailResponse {
    vo:RecipeDetailData;
    mList:[];
    iList:[];
    dList:[]
}
interface RealResponse {
    data:RecipeDetailResponse;
}
function RecipeDetail() {
    const {no}=useParams();
    const nav = useNavigate();
    const {isLoading,isError,error,data} = useQuery<RealResponse,Error>({
        queryKey:["recipe-detail",no],
        queryFn:async ()=> await apiClient(`/recipe/detail/${no}`)
    });
    if(isLoading){
        return <h3 className={"text-center"}>Loading...</h3>
    }
    if(isError)
        return <h3 className={"text-center"}>{error?.message}</h3>;

    const recipe=data?.data
    console.log(recipe?.vo)
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>레시피 상세보기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default RecipeDetail;