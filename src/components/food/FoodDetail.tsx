import {Fragment,useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {useNavigate,useParams} from "react-router-dom";
import apiClient from "../../http-commons";
// react / vue => 화면 UI (HTML)
// 서버로부터 데이터를 어떻게 받을까? => 속도
// 같은 값을 가지고 오는 경우 => 어떻게 처리 : cache => 키
// => class형식 : function 형식 => 값을 유지할 수 있는 변수 => useState() => Hooks => 16버전
/*
      하위 태그에 전송 => props (태그의 속성값)
      -------- 많은 경우에 => 전송이 많다 ------- store => redux => 단순한 프로그램

      웹사이트 개발
      ----------- spring / db => 나올 수 있는 모든 내용이
                  ------------
                  | 유지보수 : Front (Jquery => Vue , react)
                  | 각 업체에서 서버 담당 : MSA
                    ------------------ NodeJS


 */
function FoodDetail(){
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>맛집 상세보기</h2>
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