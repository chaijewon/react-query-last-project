import {FC} from "react";
import {PagePrintProps} from "../../types";
const PagePrint:FC<PagePrintProps>=({data,setCurpage})=>{
    const {curpage,totalpage,startPage , endPage}=data

    const pageArr=[]

    if(startPage>1)
    {
        pageArr.push(
            <li className={"page-item"}>
                <a className={"page-link nav-link"}>&lt;</a>
            </li>
        )
    }

    for(let i:number=startPage;i<=endPage;i++)
    {
        pageArr.push(
            <li className={i===curpage?"active page-item":"page-item"}>
                <a className={"page-link nav-link"}>{i}</a>
            </li>
        )
    }

    if(endPage<totalpage)
    {
        pageArr.push(
            <li className={"page-item"}>
                <a className={"page-link nav-link"}>&gt;</a>
            </li>
        )
    }
    return (
        <ul className={"pagination"}>
            {pageArr}
        </ul>
    )
}

export default PagePrint;