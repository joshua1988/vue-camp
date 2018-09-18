<!--#includes file="../../include/setting.asp"-->
<!--#includes file="../../include/dbconnect.asp"-->



<%
  '로그인처리
  cust_id = Session("cust_id")
  company = Session("company")

  gwanlicheck = request("gwanlicheck")
  upjongcode = request("upjongcode")

  logincheck = 0
  if company <> "" then
    logincheck = 1
%>
<%
  ' 업종중복체크  
  set rs_upjong = server.createobject("adodb.recordset")
  strsql1 = "select upjong_code,upjong_name  from nupjong where custnum = " & view_customernum &" and  yeargubun = '"&upgijunyear&"' order by upjong_code asc "
  rs_upjong.open strsql1, dbcon, 1
  jsboyuupjongcnt = rs_upjong.recordcount
  totupjong = ""

  dim jasaupjongarr(3000,2)
  togeon1 = 0
  togeon2 = 0
  togeon3 = 0
  togoenchu = 0
  for i = 1 to jsboyuupjongcnt 
    jasaupjongarr(i,1) = rs_upjong("upjong_code") 
    jasaupjongarr(i,2) = rs_upjong("upjong_name") 
    if jasaupjongarr(i,1) = "0001" then
      togeon1 = 1
    elseif jasaupjongarr(i,1) = "0002" then
      togeon2 = 1
    elseif jasaupjongarr(i,1) = "0003" then
      togeon3 = 1
    end if
    rs_upjong.movenext
  next  
  if togeon1 = 1 and togeon2 = 1 and togeon3 <> 1   then
    jasaupjongarr(jsboyuupjongcnt+1,1) = "0003"
    jsboyuupjongcnt = jsboyuupjongcnt + 1
    togoenchu = 1
  end if
  rs_upjong.Close
  Set rs_upjong = Nothing
 
'###########자사업종구분처리
  
  if upjongcode <> "" then
    upjongcode = request("upjongcode")
  else
    upjongcode = "99"
  end if

  if upjongcode = "99" then
    upjongview = upjongview & "<option value='99' selected>자사업종 전체</option> "
  else
    upjongview = upjongview & "<option value='99' >자사업종 전체</option> "
  end if

  upjongview = upjongview & "<option value='98' >-----------------</option>"
  upjongview = upjongview & "<option value='98' ></option>"
  upjongview = upjongview & "<option value='98' ></option>"
  upjongview = upjongview & "<option value='00' >업종 전체</option>"
  for i1 = 1 to upjonggrcnt
    upjongview = upjongview & "<option value='98' >-----------------</option>"
    if upjongcode = replace(upjonggr(i1,0,1),"aa","bb") then
      upjongview = upjongview & "<option value='"&replace(upjonggr(i1,0,1),"aa","bb")&"' selected >"&upjonggr(i1,0,2)&"</option> "
    else
      upjongview = upjongview & "<option value='"&replace(upjonggr(i1,0,1),"aa","bb")&"' >"&upjonggr(i1,0,2)&"</option> "
    end if
    upjongview = upjongview & "<option value='98' >-----------------</option>"
    for i2 = 1 to upjonggbcnt(i1)
      if upjongcode = upjonggr(i1,i2,1) then
        upjongview = upjongview & "<option value='"&upjonggr(i1,i2,1)&"' selected>"&upjonggr(i1,i2,2)&"</option> "
      else
        upjongview = upjongview & "<option value='"&upjonggr(i1,i2,1)&"' >"&upjonggr(i1,i2,2)&"</option> "
      end if
    next
  next  
  upjongview = upjongview & "<option value='98' ></option>"
  upjongview = upjongview & "<option value='98' >-----------------</option>"

  if upjongcode = "88" then
    upjongview = upjongview & "<option value='88' selected>선택한 업종 전체</option>"
  else
    upjongview = upjongview & "<option value='88' >선택한 업종 전체</option>"
  end if
  upjongview = upjongview & "<option value='98' >-----------------</option>"
%>
<!-- #includes  file="sisulcon/bidlisttuchal2include.asp" -->


<!DOCTYPE html>
<html>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-101858077-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-101858077-2');
</script>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<title>비드프로 입찰사이트</title>
<meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, height=device-height">
<link rel="apple-touch-icon-precomposed" href="/image/mbidprowall.png" />
<link rel="stylesheet" type="text/css" href="/include/tabmenu.css">
<link rel="stylesheet" type="text/css" href="/include/slidemenu.css">
<link rel="stylesheet" type="text/css" href="/include/bidprostyle2.css">
<meta name='format-detection' content='telephone=yes'>
<!-- 제이쿼리 실행js/jq -->

<script language="JavaScript" src="/include/jquery-2.1.1.min.js"></script>
<script language="JavaScript" src="/include/jquery-ui.min.js"></script>
<script language="JavaScript" src="/include/ajax.js"></script>
<script type="text/javascript" src="/include/searchcon/searchcon.js"></script>
<script language="JavaScript" src="/include/customSwipePage.js"></script>

<script src="/include/slidejquery.js"></script>
<script LANGUAGE="JavaScript" src='/include/dropdownarr.js'></script>
<script LANGUAGE="JavaScript" src='/include/gigwanlink.js'></script>
<script LANGUAGE="JavaScript" src='/include/gigwanlinkform.js'></script>
<script language="JavaScript" src="/include/restrictinclude.js"></script>
<!-- 달력관련(Jquery) -->
<link href="/include/jquery-ui_datepicker_pro.css" rel="stylesheet" type="text/css"/>
<script language="JavaScript" src="/include/ui.datepicker_pro.js"></script>
<!-- 달력관련(Jquery) -->
<!-- 업종창 내에서 이루어지는 js -->
<script src="/include/searchcon/alupjongajax/upjongajax.js"></script>

<script type="text/javascript">
var rtnarr = new Array(500);

var jsjiyukcode = "<%=jiyukcodejasa%>";
var topBar = $("#top_fix_Zone").offset();
var open = $("#content1").offset();
// 전역변수 (모든업종은 업종코드와 업종명으로 구성되어있는데 gupjongarr는 code와name을 담은 배열임)
var gupjongarr = new Array();
<% if upjongcodes <> "" then %>
  <%
  upjongcodesarr = split(upjongcodes,"^")
  upjongnamesarr = split(upjongnames,"^")
  %>
  <% for i = 0 to ubound(upjongcodesarr) %>
    gupjongarr.push([ "<%=upjongcodesarr(i)%>", "<%=upjongnamesarr(i)%>"]);
  <% next %>
<% end if %>

//상세페이지 ajax로 가져오기
function ajaxDetail(num,k,objt){
  var allData = { "num": num , "k" : k };
  $.ajax({ 
    type: 'post' , 
    url: 'bidlistview1.asp' , 
    data: allData,
    dataType : 'html' , 
    success: function(data) { 
      
      var test = document.getElementsByName("ipchalDetail");
      if (test[k].innerHTML != ""){
        test[k].innerHTML = "";
      }else{
        for(i=0; i<test.length; i++){
          if (i != k) {
            
            test[i].innerHTML="";
            
          }
        }
        test[k].innerHTML=data;

        $('body,html').animate({scrollTop:0},10);

        var open = $(objt).offset();
        var barThis = $("#top_fix_Zone");
        if (barThis.attr('class')=="header2" ){
          $('body,html').animate({scrollTop : open.top-190},200);        
        }else{
          $('body,html').animate({scrollTop : open.top-175},200);      
        }
      }

    },
    error: function(request,status,error) {
          //console.log(error);
          //alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      } 
  }); 
}

</script>
<style>
*{
  -webkit-text-size-adjust: none;
  margin: 0;
  padding: 0;
}
.ui-page-active{ outline:none; }

body{
    /*white-space: nowrap;*/
    text-overflow: clip;   
}

input {
-webkit-appearance: block;
}
.ui-datepicker{
          font-size : 16px;
          width : 97%;
}
.ui-datepicker select.ui-datepicker-month{
        width:30%;  
        font-size: 13px;
        
}
.ui-datepicker select.ui-datepicker-year{
        width:40%;     
        font-size: 13px; 
        
}
</style>
</head>

<body>
<form name="form1">
<input type="hidden" name="prenum2" value="">
<%

  
  listcount = list.recordcount
  
  countview = 50

  
  
  if listcount > 0 then
    
    list.pagesize = countview
    list.absolutepage = pageno
    page_list = 10
  end if

  if list.pagecount = pageno then
    listloop = listcount mod list.pagesize
    if listloop = 0 then
      listloop = list.pagesize
    end if
  else
    listloop = list.pagesize
  end if
  listpagecount = list.pagecount


%>
<div data-role="page" id="bidpropad" data-next="/tuchal/tuchalbefore.asp" data-prev="/hnakchaledu/mpro_edu.asp" data-dom-cache="true" > 
  <div id="container" >
    <!--#includes file="../../include/header.asp" -->

    <!--#includes file="../../include/menulist.asp" -->

    <div id="contentLayer"></div>

    <div id="content" >
      <p>
        <!-- 여기다 원하는 부분을 입력하시오 -->
        
          <div class="pathway" style="width: 30%;"><img src="/image/titlebar.gif" width="18" height="20" style="position: relative; top: 4px;">공사공고현황</div>
          <ul class="tab"  >            
            <a href="/aipchal/useritem/akonggosearchitem.asp"><li data-tab="tab3" >물품</li></a>
            <a href="/aipchal/usersvc/akonggosearchsvc.asp"><li data-tab="tab2" >용역</li></a>
            <a href="akonggosearch.asp"><li class="current" data-tab="tab1" >공사</li></a>        
          </ul>
          <ul class="magnifyingglass" style="position: relative; top: 20px;" ><img id="magnifyingglass" src="/image/magnifyingglass.gif" width="25px" height="25px"></ul>
          
        

        <div class="everytab" style="position: relative; top: -17px;">
      <!-- //////tab1/////////////////////////////////////////// -->
          <div id="tab1" class="tabcontent current" style="width: 95%;  ">   

            <div class="searchtoggle" style="height: 100%; display: none;" >        
              <div class="titleboxclass" style="height: 240px;"> 
                
                <div class="boxclass">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 9pt; border-top: 1px solid #ccccca; position: relative; top: -6px;">
                    <tr>
                      <td height="5"></td>
                    </tr>
                    <tr>
                      <td width="30%" height="30">
                          <!-- 공고명/공번 -->
                        <select name="baljucheocode" id="baljucheocode" data-enhance="false" data-role="none" style="margin: 0; padding:0; width: 95%; ">
                          <option value="00" <%if baljucheocode = "00" then%>selected<%end if%> >전체 공고기관</option>
                        </select>    
                      </td>
                    </tr>
                    <tr>
                      <td height="30">
                        <select name="upjongcode" style="width:95%; margin: 0; padding:0; " data-role="none">
                          <%=upjongview%>                      
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table width="94%" border="0" cellspacing="0" cellpadding="0" style="position: relative; left: 7px;">
                          <tr>
                            <td width="48%" align="left">
                              <input type="text" name="predate" id="predate" value="<%=predate%>" onfocus="blur()" data-role="none" style="width: 90%; border: 1px solid #aaaaa9; font-size: 9pt; padding:1px 0; margin: 0; text-align: center;">
                            <td width="2%" style="position: relative; left: -4px;">~</td>
                            <td width="48%" align="left">
                              <input type="text" name="postdate" id="postdate" value="<%=postdate%>" onfocus="blur()" data-role="none" style="width: 90%; border: 1px solid #aaaaa9; font-size: 9pt; padding:1px 0; margin:0; text-align: center;">
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td height="30" colspan="2"></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
          <!-- serachtoggle end div -->
          </div> 
<!-- spgubun : 회원구분 0:일반, 정 1: 특별         -->
<%if spgubun = 0 then%>
            <div class="header2" id="top_fix_Zone"   >
              <table width="100%" border="0" cellspacing="0" cellpadding="0" class="titletable" style="font-size: 10pt; position: relative; top: 13px;">
                <tr>
                  <td >공고명</td>
                  <td align="right">추정가격</td>
                  <td align="right" width="80">업종/지역</td>
                </tr>
                <tr>
                  <td>공고번호/공고기관</td>
                  <td align="right">공동협정/적격</td>
                  <td align="right">입찰마감</td>
                </tr>
              </table>                 
            </div>

            <div class="konggolist" id="top_Cont_Zone"  >
<% if listcount= 0 then %>  
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 10pt;">
              <tr>
                <td colspan="3" height="20"></td>
              </tr>
              <tr>
                <td rowspan="3" width="20%"></td>
                <td>검색된 데이터가 없습니다.</td>
              </tr>
              <tr>
                <td>검색조건을 선택하여 다시 검색하세요.</td>
              </tr>
              <tr>
                <td>이용문의: ☎ 02 -6124 - 6300</td>
              </tr>
            </table>
<% else
for i = 1 to listloop
  num = list("num") 
  viewjiyung = ""

  %>            
  <!-- #includes  file="sisulcon/bidlisttuchal2subinclude.asp" -->       
              <div class="konggocontent" id="scrollPosition" name="scrollPosition" onclick="ajaxDetail(<%=num%>,<%=i-1%>,this); visitcolorfunc(<%=i-1%>);" data-role="none" style="border-bottom: 1px solid #ccccca; position: relative; top: -10px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 9pt;line-height: 17px;">
                  <tr>
                    <td height="8"></td>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="colorname<%=i-1%>" width="170" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; word-break: normal; color: #316be6;"><%=kongsaname%>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td align="right" class="visitcolor<%=i-1%>"><%=formatnumber(chujeongamt,0)%></td>
                    <td align="right" width="80" class="visitcolor<%=i-1%>"><%=mid(upjong,1,4)%>/<%=mid(jiyukf,1,3)%></td>

                  </tr>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="160" class="visitcolor<%=i-1%>"  style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; word-break: normal;"><%=konggono%></td>
                        </tr>
                      </table>
                <% if nakchalcheck = "1"   then %>
                      <table width="96%" border="0" cellspacing="0" cellpadding="0"  class="tableclassnon"   >
                        <tr> 
                          <td><font color='#ff0000'><b>축하드립니다!</b></font></td>
                        </tr>
                      </table>
                <% end if %>
                      <table width="96%" border="0" cellspacing="0" cellpadding="0"  class="tableclassnon"  style="display:<% if yesreserve = "0"  then %>None<%end if%>;" id="reservetr1str<%=i%>" >
                        <tr> 
                          <td height="18"    > <a href="/breakdown/prodb/mclaim2_list.asp"><font color="#FF0000"><b>내역신청예약</b></font></a></td>
                        </tr>
                      </table>
                    </td>
                    <td align="right"><%=jiyukcheckview%></td>
                    <td align="right" class="visitcolor<%=i-1%>"><%=mid(magamdate,3,8)%></td>
                  </tr>
                  <tr>
                    <td class="visitcolor<%=i-1%>" width="160" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; word-break: normal;"><%=baljucheo%></td>
                    <td id="results" align="right" width="80"><%=viewresults%></td>
                  </tr>
                  <tr>
                    <td height="8"></td>
                  </tr>
                </table>
              </div>

              <div>                               
                <p id ="ipchalDetail" name="ipchalDetail"></p>
              </div>

<%
list.movenext
  next
end if 
%>
<%end if%>
            </div>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 10pt;">
              <tr>
                <td align="right">총&nbsp;<%=formatnumber(listcount,0)%>건</td>
              </tr>
            </table>
        </div>
        <!-- ↑everytab div끝 -->
    </div>
  </div>
</div>
<div id="Layer1" style="position:absolute; left:6px; top:5px; width:1px; height:1px; z-index:1; visibility: hidden"><iframe src="about:blank"  name="myframe" width="1" height="1"scrolling="auto" frameborder="0"></iframe></div>
<frame name="user" src="/include/user.asp" marginheight="0" marginwidth="0" scrolling="no" noresize></frame>
<input type="hidden" name="rtnvalyes" value="0">
<input type="hidden" name="installcheck" value="0">
<input type="hidden" name="pageno"  value="<%=pageno%>">
<input type="hidden" name="startpage" >
<input type="hidden" name="page_count"  >
<input type="hidden" name="checknum">
<input type="hidden" name="gwcnt" value="0" >
<input type="hidden" name="upcount" value="0">
<input type="hidden" name="jiyukcodef">
<input type="hidden" name="contgubunf"> 
<input type="hidden" name="upjongcodef">
<input type="hidden" name="baljucheocodef" value="">
<input type="hidden" name="onkeyupcheck" value="">
<input type="hidden" name="imgstate" value="<%=konggolistcasepm%>">
<input type="hidden" name="prejiyukcode"   >
<input type="hidden" name="preupjongcode"   >
<input type="hidden" name="iljunflag" value="<%=iljunflag%>" size="5" maxlength="5">
<input type="hidden" name="sdate" value="" size="5" maxlength="10">
<input type="hidden" name="dtgubun" value="" size="2" maxlength="3">
<input type="hidden" name="yygubun" value="" size="2" maxlength="3">
<input type="hidden" name="gwanlicheck" value="<%=gwanlicheck%>" size="2" maxlength="3">
<input type="hidden" name="jasasubpre" value="0" size="2" maxlength="3">
<input type="hidden" name="pathgo"  value="1">
</form>
</body>
</html>
<%
  list.close
  set list = nothing

  dbcon.close
  set dbcon = nothing
%>