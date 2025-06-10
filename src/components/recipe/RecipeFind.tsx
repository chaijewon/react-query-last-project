import {Fragment,useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import apiClient from "../../http-commons";
import axios from "axios";
import {Link} from "react-router-dom";
import ListImage from "../commons/ListImage";
import PagePrint from "../commons/PagePrint";
interface Recipe{
    no:number;
    poster:string;
    title:string;
    chef:string;
    hit:number;
    likecount:number;
    num:number;
}
interface RecipeResponse{
    data:Recipe[];
}
function RecipeFind(){
   const [curpage, setCurpage] = useState<number>(1);
   const [title, setTitle] = useState<string>("간식");
   const {isLoading,isError,error,data}=useQuery<RecipeResponse,Error>({
        queryKey:['recipe-find',title,curpage],
        queryFn: async () => await axios.get( `http://localhost:3355/recipe/find?page=${curpage}&fd=${title}` ),
   })
    if(isLoading){
        return <h3 className={"text-center"}>Loading...</h3>
    }
    if(isError)
        return <h3 className={"text-center"}>{error?.message}</h3>;

    console.log(data?.data)
   return (
       <Fragment>
           <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
               <div className="container h-100">
                   <div className="row h-100 align-items-center">
                       <div className="col-12">
                           <div className="bradcumb-title text-center">
                               <h2>레시피 검색</h2>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <section className="archive-area section_padding_80">
               <div className="container">
                   <div className="row">
                       <input type={"text"} className={"input-sm"} size={20}/>
                       <button className={"btn-danger btn-sm"}>검색</button>
                   </div>
                   <div className="row" style={{marginTop:"20px"}}>

                   </div>
               </div>
           </section>
       </Fragment>
   )
}
export default RecipeFind

/*
   export default RecipeFind(){
   }
 */