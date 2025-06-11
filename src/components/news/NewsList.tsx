/*
  "lastBuildDate":"Wed, 11 Jun 2025 16:04:45 +0900",
	"total":5239452,
	"start":1,
	"display":100,
	"items":[
		{
			"title":"프로<b>야구<\/b> 한화, 고동진 코치 1군 등록…전력 분석 등 직무 수행",
			"originallink":"https:\/\/www.newsis.com\/view\/NISX20250611_0003209258",
			"link":"https:\/\/m.sports.naver.com\/kbaseball\/article\/003\/0013298045",
			"description":"프로<b>야구<\/b> 한화 이글스가 1군 코치진을 보강했다. 한화는 11일 전날(10일) 고동진 퓨처스(2군)리그 1루·외야 코치를 1군 전력분석코치로 등록했다고 밝혔다. 고동진 전력분석코치는 향후 선수단 전력 분석과 훈련 지원 등... ",
			"pubDate":"Wed, 11 Jun 2025 16:02:00 +0900"
 */
import {Fragment,useState,useRef} from "react";
import {useQuery} from "@tanstack/react-query";
import axios, {AxiosResponse} from "axios";
/*
     function NewsList(){

     }
     export default NewsList;
     ---------------------------------
     export function NewList(){}
     --------------------------------
     export const NewsList=()=>{} => component
     --------------------------------
     const NewList=()=>{
     }
     export default NewsList;
     --------------------------------

     1. Java
     2. Oracle : MySQL (MyBatis,JPA)
     3. JSP
     4. Spring / Spring - Boot
       ------------------------
     **5. NodeJS
     6. Python / Django
     7. ElasticSearch
     8. JavaScript / TypeScript
          **Jquery / Vue / React
            |       |      |  TanStack-Query / Redux
           Ajax    Vuex/Pinia ----------------------- next/nuxt

     9. AWS
     의심
     기본 : X
 */
interface NewsData{
    title:string;
    originallink:string;
    link:string;
    description:string;
    pubDate:string;
}
interface NewsResponse{
    lastBuildDate:string;
    total:number;
    start:number;
    display:number;
    items:NewsData[]
}
interface NewsProps{
    data:NewsResponse
}
function NewsList(){
   const [fd,setFd]=useState<string>("맛집");
   const fdRef=useRef<HTMLInputElement>(null);
   const {isLoading,isError,error,data,refetch:newsFind}=useQuery<AxiosResponse,Error>({
       queryKey:['news-list',fd],
       queryFn: async()=> await axios.get('http://localhost:3355/news/list',{
           params:{
               query:fd
           }
       })
   })
    if(isLoading)
        return <h3>서버에서 데이터 전송 지연</h3>
    if(isError)
        return <h3>서버 에러 발생 : {`${error}`}</h3>
    //const news:NewsProps|undefined=data?.items
    //console.log(news)
    const find=()=>{
        if(fd==="")
        {
            fdRef.current?.focus()
            return;
        }
        if(fdRef.current)
        {
            setFd(fdRef.current?.value)
        }
        newsFind()
    }
   return (
       <Fragment>
           <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
               <div className="container h-100">
                   <div className="row h-100 align-items-center">
                       <div className="col-12">
                           <div className="bradcumb-title text-center">
                               <h2>네이버 뉴스 검색</h2>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <section className="archive-area section_padding_80">
               <div className="container">
                   <div className="row">
                       <input type={"text"} className={"input-sm"}
                              size={20} ref={fdRef} />
                       <button className={"btn-sm btn-danger"} onClick={find}>검색</button>
                   </div>
                   <div className="row" style={{"marginTop":"20px"}}>
                       <table className="table">
                           <tbody>
                           <tr>
                               <td>
                                   {
                                       data?.data.items &&
                                       data?.data.items.map((n:NewsData)=>
                                         <table className={"table"}>
                                             <tbody>
                                             <tr>
                                                 <td><a href={n.link}><h3 style={{"color":"orange"}} dangerouslySetInnerHTML={{__html: n.title}}></h3></a></td>
                                             </tr>
                                             <tr>
                                                 <td dangerouslySetInnerHTML={{__html: n.description}}></td>
                                             </tr>
                                             </tbody>
                                         </table>
                                       )
                                   }
                               </td>
                           </tr>
                           </tbody>
                       </table>
                   </div>
               </div>
           </section>
       </Fragment>
   )
}
export default NewsList;
