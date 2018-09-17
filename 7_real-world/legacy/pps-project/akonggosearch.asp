<!--#includes file="../../include/setting.asp"-->
<!--#includes file="../../include/dbconnect.asp"-->



<%

  '로그인처리
  cust_id = Session("cust_id")
  company = Session("company")


  logincheck = 0
  if company <> "" then
    logincheck = 1
    set rs_company = server.createobject("adodb.recordset")
    sqlstr = "select *  from customer where cust_id ='" &cust_id &"'"
    rs_company.open sqlstr, dbcon, 1
    view_customernum = rs_company("num")
    customernum = rs_company("num")
    company = rs_company("company")
'############
    jiyukcodejasa = rs_company("address_check")
    jasajiyukcode = rs_company("address_check")
    address_check = rs_company("address_check")
    address_check_name = rs_company("address_check_name")
    nsiguncode =  rs_company("nsiguncode")
    nsigunname =  rs_company("nsigunname")
'############
    svcyn = rs_company("svcyn")
    if svcyn = "" then
      svcyn = "0"
    end if    
    sa_no =  rs_company("sa_no")
    spgubun = rs_company("spgubun")
    if isnull(spgubun) or spgubun = "" then
      spgubun = "0"
    end if  
    svccheck = rs_company("svccheck") 
    rs_company.close
    set rs_company = nothing
  else
    logincheck = 0 
    sa_no =  ""
    spgubun = "0"
  end if

  dateselect = "11"
  sort = "7"
  if  dateselect = "13" then
    sort = "2"
  elseif dateselect = "12" then
    sort = "5"
  elseif dateselect = "11"  then 
    sort = "7"
  elseif dateselect = "00" then 
    sort = "9"
  end if

  pregigan  = 0
  postgigan = dategigan
  if dateselect = "13"  then
    dateselect = "11"
  end if

  set prouiview = server.createobject("adodb.recordset")
  sqlstr = "select  jasacheck,listcount1,dateselect,dategigan,jasasang   from proui where custnum ="&view_customernum
  prouiview.open sqlstr, dbcon, 1
  if prouiview.BOF = false then
    if request("jasacheck") = "" then
      jasacheck = prouiview("jasacheck")
    end if
    countview = prouiview("listcount1")
    dateselect = prouiview("dateselect")
    dategigan = prouiview("dategigan")
    jasasang = prouiview("jasasang")
  else
    jasasang = "0"
  end if

  gwanlicheck = request("gwanlicheck")
  upjongcode = request("upjongcode")

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
  dim upjonggr(50,2500,2),upjonggbcnt(50),jsupjonggr(50,2500,2),jsupjonggbcnt(50)
  for i = 1 to 20
    upjonggbcnt(i) = 0
    jsupjonggbcnt(i) = 0
  next

  set listupjonggr = server.createobject("adodb.recordset")
  sqlgr = "select distinct sisulgrcode,sisulgrname from g2bupjong where sisulyn = '1'   order by sisulgrcode "
  listupjonggr.open sqlgr,dbcon,1
  upjonggrcnt = listupjonggr.recordcount
  for i = 1 to upjonggrcnt
    upjonggr(i,0,1) = "aa" & listupjonggr("sisulgrcode")
    upjonggr(i,0,2) = i&"." & listupjonggr("sisulgrname")
    sisulgrcode = listupjonggr("sisulgrcode")
    set listupjong = server.createobject("adodb.recordset")
    listupjongsql = "select g2bupjongcode,g2bupjongnamesm from g2bupjong where  sisulyn = '1' and  sisulgrcode = '"& sisulgrcode&"'   order by ordercode "
    listupjong.open listupjongsql,dbcon,1
    upjongcnt = listupjong.recordcount
    upjonggbcnt(i) = upjongcnt
    for isub = 1 to upjonggbcnt(i)
      upjonggr(i,isub,1) = listupjong("g2bupjongcode")
      upjonggr(i,isub,2) = listupjong("g2bupjongnamesm")
      listupjong.movenext
    next  
    listupjong.Close
    Set listupjong = Nothing
    listupjonggr.movenext
  next
  listupjonggr.Close
  Set listupjonggr = Nothing

  '###########자사업종구분처리
  totchugacnt = 0
  for i = 1 to jsboyuupjongcnt 
    for i1 = 1 to upjonggrcnt
      for i2 = 1 to upjonggbcnt(i1)
        if jasaupjongarr(i,1) = upjonggr(i1,i2,1)   then
          jsupjonggbcnt(i1) = jsupjonggbcnt(i1) + 1
          if jsupjonggbcnt(i1) = 1 then
            jsupjonggr(i1,0,1) = upjonggr(i1,0,1)
            jsupjonggr(i1,0,2) = upjonggr(i1,0,2)
          end if
          jsupjonggr(i1,jsupjonggbcnt(i1),1) = upjonggr(i1,i2,1)
          jsupjonggr(i1,jsupjonggbcnt(i1),2) = upjonggr(i1,i2,2)
          if (togoenchu = 1 and jasaupjongarr(i,1) = "0003") then
            jsupjonggr(i1,jsupjonggbcnt(i1),2) = "토목+건축"
          end if          
          totchugacnt = totchugacnt + 1
        end if
      next
    next
  next
  '10가지 그룹에 속하지 않는 없종은 기타업에 추가
  if jsboyuupjongcnt > totchugacnt then 
    for i = 1 to jsboyuupjongcnt 
      yesno = 0
      for i1 = 1 to upjonggrcnt
        for i2 = 1 to upjonggbcnt(i1)
          if jasaupjongarr(i,1) = upjonggr(i1,i2,1) then
            yesno = 1 
            Exit for
          end if
        next
        if yesno = 1 then
          Exit for
        end if
      next
      if yesno = 0 then
        jsupjonggbcnt(upjonggrcnt) = jsupjonggbcnt(upjonggrcnt) + 1
        jsupjonggr(upjonggrcnt,jsupjonggbcnt(upjonggrcnt),1) =  jasaupjongarr(i,1)      
        jsupjonggr(upjonggrcnt,jsupjonggbcnt(upjonggrcnt),2) =  jasaupjongarr(i,1)      
      end if
    next  
  end if 
  
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

  for i1 = 1 to upjonggrcnt
    if  jsupjonggbcnt(i1) > 0 then
      upjongview = upjongview & "<option value='98' >-----------------</option>"
      if upjongcode = jsupjonggr(i1,0,1) then
        upjongview = upjongview & "<option value='"&jsupjonggr(i1,0,1)&"' selected>"&jsupjonggr(i1,0,2)&"</option> "
      else
        upjongview = upjongview & "<option value='"&jsupjonggr(i1,0,1)&"' >"&jsupjonggr(i1,0,2)&"</option> "
      end if
      upjongview = upjongview & "<option value='98' >-----------------</option>"
      for i2 = 1 to jsupjonggbcnt(i1)
        if jsupjonggr(i1,i2,1) = jsupjonggr(i1,i2,2) then
          sqlstr = "select g2bupjongnamesm from g2bupjong where g2bupjongcode = '"& jsupjonggr(i1,i2,1)&"'  "
          set upjongstr = dbCon.execute(sqlstr)
          if upjongstr.BOF = false then
            jsupjonggr(i1,i2,2) = upjongstr("g2bupjongnamesm")
          end if
            if upjongcode = jsupjonggr(i1,i2,1) then
              upjongview = upjongview & "<option value='"&jsupjonggr(i1,i2,1)&"' selected>"&jsupjonggr(i1,i2,2)&"</option> "
            else
              upjongview = upjongview & "<option value='"&jsupjonggr(i1,i2,1)&"' >"&jsupjonggr(i1,i2,2)&"</option> "
            end if
        else
          if upjongcode = jsupjonggr(i1,i2,1) then
            upjongview = upjongview & "<option value='"&jsupjonggr(i1,i2,1)&"' selected>"&jsupjonggr(i1,i2,2)&"</option> "
          else
            upjongview = upjongview & "<option value='"&jsupjonggr(i1,i2,1)&"' >"&jsupjonggr(i1,i2,2)&"</option> "
          end if
        end if
      next
    end if  
  next  

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
<%
   ' response.write listsql
   dim  upjong_get(10000),upjong_get2(10000),law_get(10000)
  set listupjong = server.createobject("adodb.recordset")
  listupjongsql = "select g2bupjongcode,g2bupjongname,g2bupjongname2,law from g2bupjong where sisulyn = '1' "
  listupjong.open listupjongsql,dbcon,1
  if listupjong.bof = false then
    for i = 1 to listupjong.recordcount
      if not isnull(listupjong("g2bupjongcode")) and listupjong("g2bupjongcode") <> "" then
        g2bupjongcode = cint(listupjong("g2bupjongcode"))
      else
        g2bupjongcode = 0
      end if
      if g2bupjongcode > 0 then
        law_get(g2bupjongcode) = listupjong("law")
        upjong_get(g2bupjongcode) = listupjong("g2bupjongname")
        upjong_get2(g2bupjongcode) = listupjong("g2bupjongname2")
      end if
      listupjong.movenext
    next
  end if
  listupjong.Close
  Set listupjong = Nothing

  dim  cont_get(80000),cont_get2(80000)
  set listcont = server.createobject("adodb.recordset")
  listcontsql = "select contcode,contbangbub,contbangbubsm from contbangbub  "
  listcont.open listcontsql,dbcon,1
  if listcont.bof = false then
    for i = 1 to listcont.recordcount
      if not isnull(listcont("contcode")) and listcont("contcode") <> "" then
        contcode = Cdbl(listcont("contcode"))
      else
        contcode = 0
      end if
      if contcode > 0 then
        cont_get(contcode) = listcont("contbangbub")
        cont_get2(contcode) = listcont("contbangbubsm")
      end if
      listcont.movenext
    next
  end if
  listcont.Close
  Set listcont = Nothing



%> 

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

<!-- <link rel="stylesheet" href="/include/jquery.mobile-1.4.5.css" />
<script language="JavaScript" src="/include/jquery.mobile-1.4.5.js"></script> -->
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

// display업종. 좌측의 업종을 추가하거나 우측의업종을 삭제하면 그 결과를 찍어주는 함수
function disp_upjong() {
  var f1 = document.form1;
  var len = gupjongarr.length;
  var ustr = "";
  var upjongcodes = "";
  var upjongnames = "";

  if(gupjongarr != null && len > 0) {
    ustr = "<table border='0' cellspacing='0' cellpadding='0'  class='tableclassnon' >";
    for( i = 0; i< len;i++ ) {
      ustr += "<tr id='gupjongline' height='19' >";
        ustr += "<td style='padding-top:1px;padding-left:5px;' valign='top' >";
      ustr += "<span style='width:47;overflow:hidden;cursor:pointer;' id='gupjong' onclick='selectUpjongright(this,"+(i+1)+",\""+gupjongarr[i][0]+"\",\""+gupjongarr[i][1]+"\")'  ondblclick='outUpjong(\""+gupjongarr[i][0]+"\",\""+gupjongarr[i][1]+"\");' >";
      ustr += ""+gupjongarr[i][0]+"</span></td>";
      ustr += "<td style='padding-top:1px;' valign='top'  >";
      ustr += "<span style='overflow:hidden;cursor:pointer;' id='gupjong'  onclick='selectUpjongright(this,"+(i+1)+",\""+gupjongarr[i][0]+"\",\""+gupjongarr[i][1]+"\")'  ondblclick='outUpjong(\""+gupjongarr[i][0]+"\",\""+gupjongarr[i][1]+"\");' >";
      ustr += ""+gupjongarr[i][1]+"</span></td>";
      ustr += "<td  height='18' >&nbsp;</td>";
      ustr += "</tr>";

      //선택한 업종을 hidden 값에 넣는다.
      if( i == 0 ) {
        upjongcodes = gupjongarr[i][0];
        upjongnames = gupjongarr[i][1];
      } else {
        upjongcodes += "^"+gupjongarr[i][0];
        upjongnames += "^"+gupjongarr[i][1];          
      } 
    }
    ustr += "</table>";

    document.all.gupjonglist.innerHTML = ustr;
  } else {
    document.all.gupjonglist.innerHTML = "";
  }

  f1.upjongcodes.value = upjongcodes;
  f1.upjongnames.value = upjongnames;
}


//datepicker 
$(function(){
  $("#predate").datepicker(date0Calendar);
  $("#postdate").datepicker(date0nCalendar);
  $("#ui-datepicker-div").hide(); //자동으로 생성되는 div객체 숨김 
  $("#predate").mousedown(function() {
      $('#ui-datepicker-div').toggle();    
  });
  $("#postdate").mousedown(function() {
      $('#ui-datepicker-div').toggle();    
  });
});

$(function(){
  $("#baljumag").click(function(){
      $('#gigwanpopup').toggle();
  });
  $("#contmag").click(function() {
      $('#contpopup').toggle();   
  });
  $("#upjongmag").click(function() {
      $('#upjongpopup').toggle();    
  });
  $("#jiyukmag").click(function() {
      $('#jiyukpopup').toggle();  
  });
});

// 검색조건 토글(돋보기)
$(document).ready(function()
{
  $("ul.magnifyingglass").click(function(){
    $("div.searchtoggle").slideToggle(300,function(){


      if ($("#magnifyingglass").attr("src")=="/image/magnifyingglassh.gif"){
        $("#magnifyingglass").attr("src","/image/magnifyingglass.gif");  
      }else{
        $("#magnifyingglass").attr("src","/image/magnifyingglassh.gif");        
      }
    });
          
  });
});


//1번검색버튼누르면 검색조건사라짐
$(document).ready(function()
{
  $(".searchBtn1").click(function(){
    $("div.searchtoggle").slideUp("fast");   
    
  });
});


 //탭
$(function() {
  $('ul.tab li').click(function() {
    // var activeTab = $(this).attr('data-tab');
    $('ul.tab li').removeClass('current');
    $('.tabcontent').removeClass('current');
    $(this).addClass('current');
    // $('#' + activeTab).addClass('current');
  })
});  




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




//상세페이지 '닫기'누르면 닫힘
function closeview(k){
  var test = document.getElementsByName("ipchalDetail");

  test[k].innerHTML="";
}


//조건검색
function findkonggo(n)
{
  var f1 = document.form1;
  num = f1.gubun.value;


  if (n==2) {    
    if (f1.keyword1.value == "")  {
      if(f1.keyfield1.value == "konggono") {
        alert("공고번호를 입력한 후 검색하여 주세요.   ")
        f1.keyword1.focus();
        return false;
      }
      else {              
        alert("공고명칭을 입력한 후 검색하여 주세요.   ")
        f1.keyword1.focus();
        return false;
      }
    }else{ 

    f1.gubun.value="2";
    }
  }
  
    f1.action="akonggosearch.asp" ;
  

    f1.submit();

}




//지역고르면 시군구고르는 select
function sjiyuk(ff) 
{
  var f1 = document.form1;
  gugunidx = ff.value.replace('c','');
  if (gugunidx == "99") gugunidx = jsjiyukcode;
  if (gugunidx >= "11" && gugunidx <= "27" ) {}
  else gugunidx = "00" 
  var gugunarr = eval("sgguviewarr"+gugunidx);
  var sgugun = f1.gugunname;

  sgugun.options.length = 0;

  for(i=0;i<gugunarr.length;i++) {
    sgugun.options[i] = new  Option(gugunarr[i][1],gugunarr[i][1]);
  }
}

//

//로그인confirm
function loginpageview(){
  if (confirm("로그인이 필요한 서비스입니다. \n 로그인하시겠습니까?")==true){
    document.location="/maindir/poplogin.asp"
    }
}

//헤더2 세팅(일정스크롤 이하부터 헤더고정/상단스크롤고정 )
$(document).ready(function(){

	topBar = $("#top_fix_Zone").offset();

	$(window).scroll(function(){

		
    var docScrolly = $(document).scrollTop()+120;
		var barThis = $("#top_fix_Zone");
		var fixNext = $("#top_Cont_Zone");

    if (docScrolly > topBar.top){ //스크롤이 내려가면
      barThis.addClass("top_bar_fix");
      fixNext.addClass("pd_top_80");
    }else{
      barThis.removeClass("top_bar_fix");
      fixNext.removeClass("pd_top_80");    
    }

	});

});


//한글자동활성화
$(document).ready(function(){
  $("#keyword").css("ime-mode","active")
});
$(document).ready(function(){
  $("#keyword1").css("ime-mode","active")
});



//input type text변경
 function telkeypad(tel){
  var telpad = document.getElementById("keyword")
    if(tel.value=="konggono"){
      telpad.type="tel";
    } else{
      telpad.type="text";
    }
 }

//로그아웃
function checklogout() {
    var f1 = document.form1;
    f1.action = "/maindir/logout_process.asp";
    f1.submit();
}

<%if spgubun = "1" then %> 
function tuchalsave(i,ipchalno,konggono,tuchalamtspe,passyn,gubun,kongsaname)
{
f1 = document.form1 
  var obj_tuchalcheck  = eval("f1.tuchalcheck"+i);
  if(passyn != "9") {
    var mssg = ""
    mssg = "당해 입찰공고는 검수중입니다.          \n"
    mssg = mssg + "검수가 완료(금일 12시 이전까지)되면 분석요청하십시오.           \n\n"
    mssg = mssg + "“검수”라 함은 공고내용이 관련법령에 적합한지 여부를           \n"
    mssg = mssg + "프로가 다시 확인하는 것을 말합니다. \n"
    alert(mssg)
    obj_tuchalcheck.checked = false;
    return false;
  }
  path = 1;
  if (gubun == 1) {
    if (obj_tuchalcheck.checked == true)  {
      obj_tuchalcheck.style.backgroundColor = "#ffffff";
      <!-- proMark(obj_tuchalcheck,'ffffff'); -->
           myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=1&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=0&path="+path ;
    }
    else  {
          if (tuchalamtspe > 0 ) {
             alert("현재 투찰가격 저장이 이루어진 공사이므로 삭제하실 수 없습니다.  ");
             obj_tuchalcheck.checked = true;
          }
          else    {
        var msg = kongsaname + "\n\n위 공고에 대한 입찰가격요청을 취소하시겠습니까?";
        if(confirm(msg) == true )  {
          obj_tuchalcheck.style.backgroundColor = "#ffffff";
          <!-- proMark(obj_tuchalcheck,'ffffff'); -->
          myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=0&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=0&path="+path ;
        }
        else obj_tuchalcheck.checked = true;
      }           
    }
  } 
  else if (gubun == 2 ) {
    if (obj_tuchalcheck.checked == false)  {
      obj_tuchalcheck.checked = true;
    }
    obj_tuchalcheck.style.backgroundColor = "#ffffff";
    <!-- proMark(obj_tuchalcheck,'ffffff'); -->
        myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=1&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=0&path="+path ;
  }
  else if (gubun == 3 ) {
    if (obj_tuchalcheck.checked == false)  {
      obj_tuchalcheck.checked = true;
    }
    obj_tuchalcheck.style.backgroundColor = "#ff0000";
    <!-- proMark(obj_tuchalcheck,'ff0000'); -->
        myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=1&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=1&path="+path ;
  }
}
<% end if %>

function openbid(s,baljucheo,i,li_num,tdval,parmbujok)
{
  f1 =  document.form1
  changeyes = 3;
  if (tdval <= changeyes || tdval == 9 ) {  
    <% if request("openparmcheck") <> "1" then %>
      parent.parent.parent.bleftframe.document.location = "bidtuchaltoggle.asp?num="+s+"&li_num="+li_num+"&parmbujok="+parmbujok+"&inum="+i+"&spancount=<%=spancount%>&pathgubun=1&chgparm=2";  
    <% else%>
      window.open("bidtuchal.asp?num="+s+"&li_num="+li_num+"&parmbujok="+parmbujok+"&bigcheck=1&chgparm=2"  ,"konggoview22","left= 500,top= 0, width=508,height="+(screen.availHeight-120)+",toolbar=no,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no");
    <% end if %>
    f1.currentnum.value = li_num;
    checkcolor(i,tdval);
  } 
  if (tdval == 11) tdval = 1;
  else if (tdval == 33) tdval = 3;
  // checkcolorbb(i,tdval);
}

function openresultview1(konggono,num,i,tuchalyn,li_num)
{
 document.location ="../../ipchal/cis/divresult.asp?openparm=1&num="+num+"&li_num="+i 
}

<%if spgubun = "1" then %> 
function tuchalsave(i,ipchalno,konggono,tuchalamtspe,passyn,gubun,kongsaname)
{
f1 = document.form1 
  var obj_tuchalcheck  = eval("f1.tuchalcheck"+i);
  if(passyn != "9") {
    var mssg = ""
    mssg = "당해 입찰공고는 검수중입니다.          \n"
    mssg = mssg + "검수가 완료(금일 12시 이전까지)되면 분석요청하십시오.           \n\n"
    mssg = mssg + "“검수”라 함은 공고내용이 관련법령에 적합한지 여부를           \n"
    mssg = mssg + "프로가 다시 확인하는 것을 말합니다. \n"
    alert(mssg)
    obj_tuchalcheck.checked = false;
    return false;
  }
  path = 1;
  if (gubun == 1) {
    if (obj_tuchalcheck.checked == true)  {
      obj_tuchalcheck.style.backgroundColor = "#ffffff";
      <!-- proMark(obj_tuchalcheck,'ffffff'); -->
           myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=1&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=0&path="+path ;
    }
    else  {
          if (tuchalamtspe > 0 ) {
             alert("현재 투찰가격 저장이 이루어진 공사이므로 삭제하실 수 없습니다.  ");
             obj_tuchalcheck.checked = true;
          }
          else    {
        var msg = kongsaname + "\n\n위 공고에 대한 입찰가격요청을 취소하시겠습니까?";
        if(confirm(msg) == true )  {
          obj_tuchalcheck.style.backgroundColor = "#ffffff";
          <!-- proMark(obj_tuchalcheck,'ffffff'); -->
          myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=0&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=0&path="+path ;
        }
        else obj_tuchalcheck.checked = true;
      }           
    }
  } 
  else if (gubun == 2 ) {
    if (obj_tuchalcheck.checked == false)  {
      obj_tuchalcheck.checked = true;
    }
    obj_tuchalcheck.style.backgroundColor = "#ffffff";
    <!-- proMark(obj_tuchalcheck,'ffffff'); -->
       myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=1&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=0&path="+path ;
  }
  else if (gubun == 3 ) {
    if (obj_tuchalcheck.checked == false)  {
      obj_tuchalcheck.checked = true;
    }
    obj_tuchalcheck.style.backgroundColor = "#ff0000";
    <!-- proMark(obj_tuchalcheck,'ff0000'); -->
        myframe.document.location = "tuchalhwakinsave.asp?hwakinyn=1&ipchalno="+ipchalno+"&konggono="+konggono+"&emerge=1&path="+path ;
  }
}
<% end if %>

function checkcolor(num,tdval)
{
  f1 =  document.form1
  prenum = f1.prenum.value
  var obj_flagcheck = eval("f1.flagcheck"+prenum);
  tdvallen = 9;
  if (prenum != "0") {
    divmain =  "td0color" + prenum
    document.all[divmain].style.background = "";
    document.all[divmain].style.color = "#3c3c3c";
    divmain =  "trcolor" + prenum
    document.all[divmain].style.background = "#ffffff";
    var obj_flagcheck = eval("f1.flagcheck"+prenum);
    for (i=1;i<=tdvallen;i++) {
      divmain =  "td" +i+"color" + prenum
      if (i == 4 && obj_flagcheck.value == "1") {}
      else if (prenum == num)   document.all[divmain].style.background = "#<%=bgcol1%>";
      else  document.all[divmain].style.background = "#ffffff"; 
    }
  }
  divmain =  "td0color" + num
  document.all[divmain].style.background = "#0A246A";
  document.all[divmain].style.color = "#ffffff";
  divmain =  "trcolor" + num
  document.all[divmain].style.background = "#<%=bgcol1%>";
  var obj_flagcheck = eval("f1.flagcheck"+num);
  for (i=1;i<=tdvallen;i++) {
    divmain =  "td" +i+"color" + num
    if (i == 4 && obj_flagcheck.value == "1") {}
    else  document.all[divmain].style.background = "#<%=bgcol1%>"; 
  } 
  f1.prenum.value = num
}
function checkcolorbb(num,tdval)
{
  f1 =  document.form1
  prenum = f1.prenum.value
  prenumbb = f1.prenumbb.value
  pretdval = f1.pretdval.value
  var obj_flagcheck = eval("f1.flagcheck"+prenumbb);
  if (prenumbb != "0") {
    divmain =  "td" +pretdval+"color" + prenumbb
    if (pretdval == 4 && obj_flagcheck.value == "1") {}
    else if (prenum == prenumbb)  document.all[divmain].style.background = "#<%=bgcol1%>"; 
    else  document.all[divmain].style.background = "#ffffff"; 
  }
  divmain =  "td" +tdval+"color" + num
  var obj_flagcheck = eval("f1.flagcheck"+num);
  if (tdval == 4 && obj_flagcheck.value == "1") {}
  else document.all[divmain].style.background = "#<%=bgcol2%>"; 
  f1.prenumbb.value = num;
  f1.pretdval.value = tdval;
}


function changecombo()
{

  var f1 = document.form1;
  var gwanlicheck = f1.gwanlicheck.value;
  console.log(f1.gwanlicheck.value)
  if(f1.gwanlicheck.value == "1") {
    f1.gwanlicheck.value="0"
  }else{
    f1.gwanlicheck.value="1"
  } 
  // checkfind(1);
}

function checkfind(pageno)
{
  var f1 = document.form1;
  f1 =  document.form1
  var predate = f1.predate.value;  
  var postdate = f1.postdate.value;      
  var predateArray = predate.split("/");  
  var postdateArray = postdate.split("-");  
  var predateObj = new Date(predateArray[0], Number(predateArray[1])-1, predateArray[2]);  
  var postdateObj = new Date(postdateArray[0], Number(postdateArray[1])-1, postdateArray[2]);  
  var betweenDay = (predateObj.getTime() - postdateObj.getTime())/1000/60/60/24;  

  endyesr = 366
  if (Math.abs(betweenDay) > endyesr) {
    messageview =  "\n"
    messageview =  messageview + "안녕하세요                     \n"
    messageview =  messageview + "정확한 예측서비스를 제공해 드리는 ㈜비드프로입니다.                    \n\n"
    messageview =  messageview + "검색기간은 1년 이내로 제한하고 있습니다.                    \n\n"
    messageview =  messageview +  predate + "부터 " +postdate+ "까지 검색을 요청하였으나          \n"
    messageview =  messageview + "검색기간을 1년이내로 변경한 후 검색하십시오.                      \n"
    alert(messageview);
    //f1.predate.focus();
    return ;
  }

  // var jasacheck = f1.jasacheck.value;
  var contgubunf  = f1.contgubunf.value;
  var jiyukcodef  = f1.jiyukcodef.value;
  var upjongcodef  = f1.upjongcodef.value;
  var baljucheocodef  = f1.baljucheocodef.value;
  var gugunname  = f1.gugunname.value;
  var gwanlicheck = f1.gwanlicheck.value;
  var keyword = f1.keyword.value;
  var startpage = f1.startpage.value;

  parmlink = "&contgubunf="+contgubunf+"&baljucheocodef="+baljucheocodef+"&gugunname="+gugunname+"&gwanlicheck="+gwanlicheck+"&jiyukcodef="+jiyukcodef+"&upjongcodef="+upjongcodef

  if (f1.keyword.value == "%" ){f1.keyword.value = ""}
  
    document.location="akonggosearch.asp?openparmcheck=<%=request("openparmcheck")%>"+parmlink+"&upjongcode="+f1.upjongcode.value+"&jiyukcode="+f1.jiyukcode.value+"&baljucheocode="+f1.baljucheocode.value+"&contgubun="+f1.contgubun.value+"&dateselect="+f1.dateselect.value+"&predate="+f1.predate.value+"&postdate="+f1.postdate.value+"&keyfield="+f1.keyfield.value+"&sort="+f1.sort.value+"&keyword="+keyword+"&pageno="+pageno+"&startpage ="+startpage ; 
  
}

function paging(n){
  var f1 = document.form1;
  var pageno = f1.pageno.value;
  var startpage = f1.startpage.value;
  if(n==1){
    pageno = parseInt(pageno) + 1;
  }else if(n==2){
    pageno = parseInt(pageno) - 1; 
  }
  checkfind(pageno);
}

function deletequart(num)
{
  deletenum = String(num) 
  addnum = ""
  for(i=0; i < deletenum.length ;i++)    {
    if (deletenum.substr(i,1) != '"' && deletenum.substr(i,1) != "'")       addnum = addnum + deletenum.substr(i,1)
  }
  return  addnum ;
}

//업종창 열고 닫기
var upjongtoggle1 = 0;
function upjongtogglecheck()
{
  var f1 = document.form1;
  if (upjongtoggle1 == 0) {
    document.all.upjonginputstr.style.display = "";  
    upjongtoggle1 = 1;
    Layerc101.style.visibility  = "";
    
  }
  else {
    document.all.upjonginputstr.style.display = "none"; 
    upjongtoggle1 = 0;
    Layerc101.style.visibility  = "hidden";
  }
}

function upjongpopup(){
  var num=0;
  var k=0;
  var allData = { "num": num , "k" : k };
  baljuclose();
  $.ajax({ 
    type: 'post' , 
    url: '/include/searchcon/alupjongajax/upjongajax.asp' , 
    data: allData,
    dataType : 'html' , 
    success: function(data) { 
    
    var test = document.getElementById("upjongpopup");
       
       test.innerHTML=data ;
       

    },
    error: function(request,status,error) {
          //console.log(error);
          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      } 
  }); 
}

function upjongclose(){
  var test = document.getElementById("upjongpopup");
  test.innerHTML="";
}
function checkup()
{
  f1 = document.form1
  if (f1.keyfield.value != "kongsanames") {
    if (f1.keyword.value.length >= 1) {
      f1.baljucheocode.options[0].selected = true;
      f1.contgubun.options[0].selected = true;
      f1.jiyukcode.options[1].selected = true;
      f1.gugunname.options[0].selected = true;
      f1.upjongcode.value = "00";
    }
    else if (f1.keyword.value.length == 0) { 
      if (f1.jasacheck.value == "10" || f1.jasacheck.value == "11" || f1.jasacheck.value == "14" || f1.jasacheck.value == "50" || f1.jasacheck.value == "60") {
        f1.jiyukcode.value = f1.prejiyukcode.value;
        f1.upjongcode.value = f1.preupjongcode.value;
      }
    } 
  }
}
function visitcolorfunc(i){ 
  $(".colorname"+i).attr("style","color:purple");
  $(".colorname"+i).css("display","inline-block");  
  $(".colorname"+i).css("white-space","nowrap");
  $(".colorname"+i).css("overflow","hidden");
  $(".colorname"+i).css("text-overflow","ellipsis");
  $(".colorname"+i).css("word-break","normal");
}

function changejasa(f,n){
  var f1 = document.form1;
  if (f1.jasasub[1].checked == true){
    alert("PC버전에서 확인하세요")
  }
}

function gwanimgcheck() {
  var f1 = document.form1;
console.log(f1.gwanlicheck.value)
  if(f1.gwanlicheck.value == "0") {
    f1.gwanlicheck.value = "1";
  } else {

    f1.gwanlicheck.value = "0";
  }

   changecombo();
}

function openjktop(num)
{
  if (restrictcheck('<%=Session("cust_gubun")%>',<% if Session("g2bcheck") = "N" then %>1<%else%>0<%end if%>) == "1" ) {
    rtnarr[0] = document.location = "/ipchal/cis/gdjkfile/gdmain.asp?num="+num 
    openjk = "1"
  }
}

function openwinsmallyega(s,konggono,no,cha)
{
  if ( konggono.length == 14) {
    gongo_bunho = no
    gongo_chasu = cha
    gongsa_bunho = ""
    gongsa_chasu = ""
    gongsa_name = ""
    ipchal_date = ""
    <% if  List("baljucheosimsa_code") = "31" then %>
      document.location = "www.d2b.go.kr/index.do" 
    <% elseif  List("baljucheosimsa_code") = "47" then %>
      document.location = "www.d2b.go.kr/index.do" 
    <% elseif  List("baljucheosimsa_code") = "37" then %>
      document.location = "www.d2b.go.kr/index.do" 
    <% else  %>
    document.location = "http://www.g2b.go.kr:8081/ep/price/baseamt/selectBaseAmtDtlPopup.do?taskClCd=3&bidno="+gongo_bunho+"&bidseq="+gongo_chasu 
    <% end if %>
    }
    else {
    <% if  List("baljucheosimsa_code") = "13" then '방위사업청%>
      document.location = "http://www.d2b.go.kr/index.do" 
    <% end if %>
  }
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
                          <option value="11" <%if baljucheocode = "11" then%>selected<%end if%>>조달청</option>
                          <option value="13" <%if baljucheocode = "13" then%>selected<%end if%>>방위사업청</option>
                          <option value="12" <%if baljucheocode = "12" then%>selected<%end if%>>행정안전부</option>
                          <option value="01" <%if baljucheocode = "01" then%>selected<%end if%>>공공기관</option>
                          <option>----------------</option>
                          <option value="19" <%if baljucheocode = "19" then%>selected<%end if%>>한국전력공사</option>
                          <option value="62" <%if baljucheocode = "62" then%>selected<%end if%>>중부발전(주)</option>
                          <option value="63" <%if baljucheocode = "63" then%>selected<%end if%>>동서발전(주)</option>
                          <option value="64" <%if baljucheocode = "64" then%>selected<%end if%>>남동발전(주)</option>
                          <option value="65" <%if baljucheocode = "65" then%>selected<%end if%>>남부발전(주)</option>
                          <option value="66" <%if baljucheocode = "66" then%>selected<%end if%>>서부발전(주)</option>
                          <option value="67" <%if baljucheocode = "67" then%>selected<%end if%>>남동발전분당화력발전</option>
                          <option value="61" <%if baljucheocode = "61" then%>selected<%end if%>>수력원자력(주)</option>
                          <option value="32" <%if baljucheocode = "32" then%>selected<%end if%>>한국농어촌공사</option>
                          <option value="15" <%if baljucheocode = "15" then%>selected<%end if%>>한국토지주택</option>
                          <option value="16" <%if baljucheocode = "16" then%>selected<%end if%>>한국도로공사</option>
                          <option value="44" <%if baljucheocode = "44" then%>selected<%end if%>>한국수자원공사</option>
                          <option value="18" <%if baljucheocode = "18" then%>selected<%end if%>>한국가스공사</option>
                          <option value="35" <%if baljucheocode = "35" then%>selected<%end if%>>철도공사</option>
                          <option value="71" <%if baljucheocode = "71" then%>selected<%end if%>>철도공사(선로)</option>
                          <option value="72" <%if baljucheocode = "72" then%>selected<%end if%>>철도공사(신호)</option>
                          <option value="73" <%if baljucheocode = "73" then%>selected<%end if%>>철도공사(궤도)</option>
                          <option value="38" <%if baljucheocode = "38" then%>selected<%end if%>>인천국제공항</option>
                          <option value="41" <%if baljucheocode = "41" then%>selected<%end if%>>한국공항공사</option>
                          <option value="42" <%if baljucheocode = "42" then%>selected<%end if%>>한국마사회</option>
                          <option value="43" <%if baljucheocode = "43" then%>selected<%end if%>>한국석유공사</option>
                          <option value="45" <%if baljucheocode = "45" then%>selected<%end if%>>한국조폐공사</option>
                          <option value="46" <%if baljucheocode = "46" then%>selected<%end if%>>한국지역난방공사</option>
                          <option value="50" <%if baljucheocode = "50" then%>selected<%end if%>>한국철도시설공단</option>
                          <option value="70" <%if baljucheocode = "70" then%>selected<%end if%>>한국광해관리공단</option>
                          <option value="68" <%if baljucheocode = "68" then%>selected<%end if%>>한국방송공사</option>
                          <option value="69" <%if baljucheocode = "69" then%>selected<%end if%>>수협중앙회</option>
                          <option value="74" <%if baljucheocode = "74" then%>selected<%end if%>>산림청</option>
                          <option value="98" <%if baljucheocode = "98" then%>selected<%end if%>>S2B학교장터</option>
                          <option value="21" <%if baljucheocode = "21" then%>selected<%end if%>>기타기관</option>
                          <option value="00" >-------------</option>
                          <option value="88"  <%if baljucheocode = "88" then%>selected<%end if%>>선택한 공고기관</option>
                          <option value="00" >-------------</option>
                        </select>    
                      </td>
                      <td colspan="3" height="30" align="left">
                        <!-- text input -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td>
                              &nbsp;<img src="/image/magnifying1.svg" id="baljumag" width="20" height="20" style="fill: #3dad29; position: relative; top: 4px; left: 2px;" onclick="gigwanpopup()">
                            </td>
                          </tr>
                        </table>    
                      </td>
                      <td width="45"></td>
                    </tr>
                    <tr>
                      <td width="30%" height="30">
                        <!-- 기간설정 -->
                        <select name="contgubun" style="margin: 0; padding:0; width: 95%; " onChange="searchoption3()" data-role="none" >
                          <option value="00000" <%if contgubun="00000" then%>selected<%end if%>>계약방법</option>
                          <option value="00000" >----------------</option>
                          <option value="Z0010" <%if contgubun="Z0010" then%>selected<%end if%>>일반경쟁</option>
                          <option value="00000" >----------------</option>
                          <option value="10000" <%if contgubun="10000" then%>selected<%end if%>>일반경쟁</option>
                          <option value="10030" <%if contgubun="10030" then%>selected<%end if%>>일반경쟁+PQ</option>
                          <option value="00000" >----------------</option>
                          <option value="Z0020" <%if contgubun="Z0020" then%>selected<%end if%>>제한경쟁 전체</option>
                          <option value="00000" >----------------</option>
                          <option value="20000" <%if contgubun="20000" then%>selected<%end if%>>제한경쟁</option>
                          <option value="20740" <%if contgubun="20740" then%>selected<%end if%>>지역제한</option>
                          <option value="20730" <%if contgubun="20730" then%>selected<%end if%>>문화재제한</option>
                          <option value="21000" <%if contgubun="21000" then%>selected<%end if%>>시평액 70%+PQ</option>
                          <option value="Z0022" <%if contgubun="Z0022" then%>selected<%end if%>>실적제한</option>
                          <option value="Z0023" <%if contgubun="Z0023" then%>selected<%end if%>>재난복구</option>
                          <option value="Z0025" <%if contgubun="Z0025" then%>selected<%end if%>>특허ㆍ신기술</option>
                          <option value="Z0026" <%if contgubun="Z0026" then%>selected<%end if%>>여성ㆍ사회적기업간경쟁</option>
                          <option value="00000" >----------------</option>
                          <option value="20720" <%if contgubun="20720" then%>selected<%end if%>>실적제한</option>
                          <option value="21080" <%if contgubun="21080" then%>selected<%end if%>>실적+PQ</option>
                          <option value="00000" >----------------</option>
                          <option value="Z0024" <%if contgubun="Z0024" then%>selected<%end if%>>등급제한</option>
                          <option value="00000" >----------------</option>
                          <option value="20010" <%if contgubun="20010" then%>selected<%end if%>>1등급</option>
                          <option value="20020" <%if contgubun="20020" then%>selected<%end if%>>2등급</option>
                          <option value="20030" <%if contgubun="20030" then%>selected<%end if%>>3등급</option>
                          <option value="20040" <%if contgubun="20040" then%>selected<%end if%>>4등급</option>
                          <option value="20050" <%if contgubun="20050" then%>selected<%end if%>>5등급</option>
                          <option value="20060" <%if contgubun="20060" then%>selected<%end if%>>6등급</option>
                          <option value="20070" <%if contgubun="20070" then%>selected<%end if%>>7등급</option>
                          <option value="21010" <%if contgubun="21010" then%>selected<%end if%>>1등급+PQ</option>
                          <option value="21020" <%if contgubun="21020" then%>selected<%end if%>>2등급+PQ</option>
                          <option value="21030" <%if contgubun="21030" then%>selected<%end if%>>3등급+PQ</option>
                          <option value="21040" <%if contgubun="21040" then%>selected<%end if%>>4등급+PQ</option>
                          <option value="00000" >----------------</option>
                          <option value="50" <%if contgubun="50" then%>selected<%end if%>>공동수급대상</option>
                          <option value="00000" >----------------</option>
                          <option value="51" <%if contgubun="51" then%>selected<%end if%>>공동입찰</option>
                          <option value="52" <%if contgubun="52" then%>selected<%end if%>>분담입찰</option>
                          <option value="53" <%if contgubun="53" then%>selected<%end if%>>공동+분담</option>
                          <option value="00000" >----------------</option>
                          <option value="55" <%if contgubun="55" then%>selected<%end if%>>복합업종</option>
                          <option value="54" <%if contgubun="54" then%>selected<%end if%>>주계약자관리방식</option>
                          <option value="56" <%if contgubun="56" then%>selected<%end if%>>지역의무</option>
                          <option value="57" <%if contgubun="57" then%>selected<%end if%>>지역가점</option>
                          <option value="00000" >----------------</option>
                          <option value="Z0030" <%if contgubun="Z0030" then%>selected<%end if%>>지명경쟁</option>
                          <option value="00000" >----------------</option>
                          <option value="30000" <%if contgubun="30000" then%>selected<%end if%>>지명경쟁</option>
                          <option value="30010" <%if contgubun="30010" then%>selected<%end if%>>지명(연고)</option>
                          <option value="30020" <%if contgubun="30020" then%>selected<%end if%>>지명(지역)</option>
                          <option value="30030" <%if contgubun="30030" then%>selected<%end if%>>지명(우수)</option>
                          <option value="30040" <%if contgubun="30040" then%>selected<%end if%>>지명(수의대상)</option>
                          <option value="30050" <%if contgubun="30050" then%>selected<%end if%>>지명(자격)</option>
                          <option value="30100" <%if contgubun="30100" then%>selected<%end if%>>지명(특수설비·실적)</option>
                          <option value="30200" <%if contgubun="30200" then%>selected<%end if%>>지명[3억(1억)이하]</option>
                          <option value="00000" >----------------</option>
                          <option value="Z0040" <%if contgubun="Z0040" then%>selected<%end if%>>수의계약</option>
                          <option value="00000" >----------------</option>
                          <option value="40000" <%if contgubun="40000" then%>selected<%end if%>>수의계약(기타)</option>
                          <option value="40010" <%if contgubun="40010" then%>selected<%end if%>>수의(하자책임)</option>
                          <option value="40020" <%if contgubun="40020" then%>selected<%end if%>>수의(작업상혼잡)</option>
                          <option value="40030" <%if contgubun="40030" then%>selected<%end if%>>수의(마감공사)</option>
                          <option value="40040" <%if contgubun="40040" then%>selected<%end if%>>수의(소액)</option>
                          <option value="40041" <%if contgubun="40041" then%>selected<%end if%>>수의(여성기업간견적입찰)</option>
                          <option value="40051" <%if contgubun="40051" then%>selected<%end if%>>수의(특수지역)</option>
                          <option value="40070" <%if contgubun="40070" then%>selected<%end if%>>수의(유찰)</option>
                          <option value="40080" <%if contgubun="40080" then%>selected<%end if%>>수의(천재지변등)</option>
                          <option value="40090" <%if contgubun="40090" then%>selected<%end if%>>수의(특허·신기술)</option>
                          <option value="00000" >----------------</option>
                          <option value="50000" <%if contgubun="50000" then%>selected<%end if%>>장기계속</option>
                          <option value="00000" >----------------</option>
                          <option value="Z0060" <%if contgubun="Z0060" then%>selected<%end if%>>일괄ㆍ대안</option>
                          <option value="00000" >----------------</option>
                          <option value="60010" <%if contgubun="60010" then%>selected<%end if%>>일괄입찰</option>
                          <option value="60020" <%if contgubun="60020" then%>selected<%end if%>>대안입찰</option>
                          <option value="90001" <%if contgubun="90001" then%>selected<%end if%>>최저가낙찰제</option>
                          <option value="00000" >----------------</option>
                          <option value="Z0070" <%if contgubun="Z0070" then%>selected<%end if%>>기타협상</option>
                          <option value="00000" >----------------</option>
                          <option value="70010" <%if contgubun="70010" then%>selected<%end if%>>기술제안</option>
                          <option value="70020" <%if contgubun="70020" then%>selected<%end if%>>설계공모ㆍ기술제안</option>
                          <option value="Z0027" <%if contgubun="Z0027" then%>selected<%end if%>>직접입찰</option>
                          <option value="Z0028" <%if contgubun="Z0028" then%>selected<%end if%>>전자입찰</option>
                          <option value="Z0029" <%if contgubun="Z0029" then%>selected<%end if%>>직접생산</option>
                          <option value="00000" >----------------</option>
                          <option value="42" <%if contgubun="42" then%>selected<%end if%>>한전 배전단가 전체</option>
                          <option value="00000" >----------------</option>
                          <option value="43" <%if contgubun="43" then%>selected<%end if%>>배전단가(고압)</option>
                          <option value="44" <%if contgubun="44" then%>selected<%end if%>>배전단가(저압)</option>
                          <option value="45" <%if contgubun="45" then%>selected<%end if%>>배전단가(지중)</option>
                          <option value="00000" >----------------</option>
                          <option value="46" <%if contgubun="46" then%>selected<%end if%>>한전 협력회사 전체</option>
                          <option value="00000" >----------------</option>
                          <option value="47" <%if contgubun="47" then%>selected<%end if%>>가공송전협력회사</option>
                          <option value="49" <%if contgubun="49" then%>selected<%end if%>>지중송전협력회사</option>
                          <option value="48" <%if contgubun="48" then%>selected<%end if%>>변전협력회사</option>
                          <option value="00000" >----------------</option>
                          <option value="30" <%if contgubun="30" then%>selected<%end if%>>한국전력 전체</option>
                          <option value="00000" >----------------</option>
                          <option value="31"  <%if contgubun="31" then%>selected<%end if%>>무정전시공</option>
                          <option value="301" <%if contgubun="301" then%>selected<%end if%>>가공송전공사</option>
                          <option value="302" <%if contgubun="302" then%>selected<%end if%>>지중송전공사</option>
                          <option value="303" <%if contgubun="303" then%>selected<%end if%>>변전공사</option>
                          <option value="305" <%if contgubun="305" then%>selected<%end if%>>변전기자재</option>
                          <option value="306" <%if contgubun="306" then%>selected<%end if%>>배전공사</option>
                          <option value="304" <%if contgubun="304" then%>selected<%end if%>>전력구공사</option>
                          <option value="307" <%if contgubun="307" then%>selected<%end if%>>예방정비공사</option>
                          <option value="308" <%if contgubun="308" then%>selected<%end if%>>한전KPS</option>
                          <option value="300" <%if contgubun="300" then%>selected<%end if%>>지향성압입공사</option>
                          <option value="00000" >----------------</option>
                          <option value="00000" >추정가격(미만)</option>
                          <option value="00000" >----------------</option>
                          <option value="9111" <%if contgubun="9111" then%>selected<%end if%>>1억원 미만</option>
                          <option value="9112" <%if contgubun="9112" then%>selected<%end if%>>3억원 미만</option>
                          <option value="9113" <%if contgubun="9113" then%>selected<%end if%>>10억원 미만</option>
                          <option value="9114" <%if contgubun="9114" then%>selected<%end if%>>30억원 미만</option>
                          <option value="9115" <%if contgubun="9115" then%>selected<%end if%>>50억원 미만</option>
                          <option value="9116" <%if contgubun="9116" then%>selected<%end if%>>70억원 미만</option>
                          <option value="9117" <%if contgubun="9117" then%>selected<%end if%>>100억원 미만</option>
                          <option value="9118" <%if contgubun="9118" then%>selected<%end if%>>300억원 미만</option>
                          <option value="00000" >----------------</option>
                          <option value="00000" >추정가격(이상)</option>
                          <option value="00000" >----------------</option>
                          <option value="9211" <%if contgubun="9211" then%>selected<%end if%>>1억원 이상</option>
                          <option value="9212" <%if contgubun="9212" then%>selected<%end if%>>3억원 이상</option>
                          <option value="9213" <%if contgubun="9213" then%>selected<%end if%>>10억원 이상</option>
                          <option value="9214" <%if contgubun="9214" then%>selected<%end if%>>30억원 이상</option>
                          <option value="9215" <%if contgubun="9215" then%>selected<%end if%>>50억원 이상</option>
                          <option value="9216" <%if contgubun="9216" then%>selected<%end if%>>70억원 이상</option>
                          <option value="9217" <%if contgubun="9217" then%>selected<%end if%>>100억원 이상</option>
                          <option value="9218" <%if contgubun="9218" then%>selected<%end if%>>300억원 이상</option>
                          <option value="00000" >----------------</option>
                          <option value="00000" >추정가격(구간)</option>
                          <option value="00000" >----------------</option>
                          <option value="9311" <%if contgubun="9311" then%>selected<%end if%>>1억~3억미만 </option>
                          <option value="9312" <%if contgubun="9312" then%>selected<%end if%>>3억~10억미만 </option>
                          <option value="9313" <%if contgubun="9313" then%>selected<%end if%>>3억~50억미만 </option>
                          <option value="9314" <%if contgubun="9314" then%>selected<%end if%>>10억~50억미만 </option>
                          <option value="9315" <%if contgubun="9315" then%>selected<%end if%>>10억~100억미만 </option>
                          <option value="9316" <%if contgubun="9316" then%>selected<%end if%>>50억~100억미만 </option>
                          <option value="9317" <%if contgubun="9317" then%>selected<%end if%>>50억~300억미만 </option>
                          <option value="9318" <%if contgubun="9318" then%>selected<%end if%>>100억~300억미만 </option>
                          <option value="00000"  >----------------</option>
                          <option value="88"  <%if contgubun="88" then%>selected<%end if%>>선택한 계약방법 전체</option>
                          <option value="00000"  >----------------</option>
                        </select>
                      </td>
                      <td colspan="3" height="30" align="left">
                        &nbsp;<img src="/image/magnifying1.svg" id="contmag" width="20" height="20" style="fill: #3dad29;position: relative; top: 4px; left: 2px;" onclick="contpopup();findcontauto(1,1);">
                      </td>
                      <td width="45"></td>
                    </tr>
                    <tr>
                      <td height="30">
                        <select name="upjongcode" style="width:95%; margin: 0; padding:0; " data-role="none">
                          <%=upjongview%>                      
                        </select>
                      </td>
                      <td width="25" height="30" colspan="3" align="left">
                        &nbsp;<img src="/image/magnifying1.svg" id="upjongmag" width="20" height="20" style="position: relative; top: 4px; left: 2px;" onClick="upjongtogglecheck(); leftupjongpop(); rightupjongpop('<%=upjongcodes%>','<%=upjongnames%>'); ">    
                      </td>
                      <td ></td>
                    </tr>
                    <tr   style="display:None;" id="upjonginputstr" valign="top" > 
                      <td colspan="5">
                        <div style='position:relative;Z-INDEX: 200; height: 100px;' > 
                          <div id="Layerc101">
                            <!--#includes file="../../include/searchcon/alupjongajax/upjongajax.asp"-->
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td width="30%" height="30" >
                        <select name="jiyukcode" style="margin: 0; padding:0;width: 95%;" onChange="sjiyuk(this);document.form1.gugunname.focus();alert('dd') " onblur="" data-role="none" >                                             
                          <option value="99" <%if jiyukcode = "99" then%> selected <%end if%> >자사지역</option>
                          <option value="00" <%if jiyukcode = "00" then%> selected <%end if%> >지역전체</option>
                          <option value="08" <%if jiyukcode = "08" then%> selected <%end if%> >전국대상</option>
                          <option value="10" <%if jiyukcode = "10" then%> selected <%end if%>  >지역제한</option>
                          <option value="09" <%if jiyukcode = "09" then%> selected <%end if%> >관내제한</option>
                          <option value="00" >--------</option>
                          <option value="12" <%if jiyukcode = "12" then%> selected <%end if%> >서울</option>
                          <option value="13" <%if jiyukcode = "13" then%> selected <%end if%> >경기</option>
                          <option value="14" <%if jiyukcode = "14" then%> selected <%end if%> >인천</option>
                          <option value="15" <%if jiyukcode = "15" then%> selected <%end if%> >부산</option>
                          <option value="16" <%if jiyukcode = "16" then%> selected <%end if%> >대구</option>
                          <option value="17" <%if jiyukcode = "17" then%> selected <%end if%> >광주</option>
                          <option value="18" <%if jiyukcode = "18" then%> selected <%end if%> >대전</option>
                          <option value="19" <%if jiyukcode = "19" then%> selected <%end if%> >울산</option>
                          <option value="20" <%if jiyukcode = "20" then%> selected <%end if%> >강원</option>
                          <option value="21" <%if jiyukcode = "21" then%> selected <%end if%> >충북</option>
                          <option value="22" <%if jiyukcode = "22" then%> selected <%end if%> >충남</option>
                          <option value="23" <%if jiyukcode = "23" then%> selected <%end if%> >전북</option>
                          <option value="24" <%if jiyukcode = "24" then%> selected <%end if%> >전남</option>
                          <option value="25" <%if jiyukcode = "25" then%> selected <%end if%> >경북</option>
                          <option value="26" <%if jiyukcode = "26" then%> selected <%end if%> >경남</option>
                          <option value="27" <%if jiyukcode = "27" then%> selected <%end if%> >제주</option>
                          <option value="11" <%if jiyukcode = "11" then%> selected <%end if%> >세종</option>
                          <option value="00"  >--------</option>
                          <option value="88" <%if jiyukcode = "88" then%> selected <%end if%> >선택지역</option>
                          <option value="00"  >--------</option>
                        </select>
                      </td>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellspacing="0">
                          <tr>
                            <td width="98">
                              &nbsp;<select name="gugunname" style="margin: 0; padding:0; width: 90%;" data-role="none" >
                                <option value="전체" selected>전체</option>
                              </select>
                            </td>
                            <td align="left">
                              &nbsp;<img src="/image/magnifying1.svg" id="jiyukmag" width="20" height="20" style="fill: #3dad29;position: relative; top: 4px;" onclick="jiyukpopup();findjiyuk();">
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td height="30" colspan="2"></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td width="30%" height="30" >
                        <select name="dateselect" style="margin: 0; padding:0; width: 95%; " onChange="changedate()" data-role="none" >
                          <option value="00"   >공고검색 기준</option>
                          <option value="00"   >-------------</option>
                          <option value="13" <% if dateselect = "13" then %> selected <% end if %>>공고게시일자</option>
                          <option value="12" <% if dateselect = "12" then %> selected <% end if %>>입찰개시일자</option>
                          <option value="11" <% if dateselect = "11" then %> selected <% end if %>>입찰마감일자</option>
                          <option value="00" <% if dateselect = "00" then %> selected <% end if %>>개찰일자</option>
                        </select>
                      </td>
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
                    <tr>
                      <td width="30%" height="30">
                          <!-- 공고명/공번 -->
                        <select name="keyfield" id="keyfield" data-enhance="false" data-role="none" style="margin: 0; padding:0; width: 95%; " onChange="searchoption(this);" onKeyDown="if (event.keyCode == 13 && document.form1.keyword.value.length > 0 ) checkfind(1) ">
                          <option value="kongsaname" <%if keyfield = "kongsaname"then%> selected <%end if%> >공고명칭검색</option>
                          <option value="konggono"   <%if keyfield = "konggono"then%> selected <%end if%> >공고번호검색</option>
                          <option value="suyogigwan" <%if keyfield = "suyogigwan"then%> selected <%end if%> >공고기관검색</option>
                          <option value="baljucheo"  <%if keyfield = "baljucheo"then%> selected <%end if%> >수요기관검색</option>
                          <option value="baljusuyo"  <%if keyfield = "baljusuyo"then%> selected <%end if%> >공고+수요검색</option>
                          <option value="amtgubun"   <%if keyfield = "amtgubun"then%> selected <%end if%> >공사금액검색</option>
                        </select>    
                      </td>
                      <td colspan="3" height="30" align="left">
                        <!-- text input -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" >
                          <tr>
                            <td>
                              &nbsp;&nbsp;<input type="text" name="keyword" id="keyword" size="23" maxlength="50"  onKeyDown="if (event.keyCode == 13 && document.form1.keyword.value.length > 0 ) {checkup();checkfind(1)} " onBlur="checkup();"  onKeyUp="checkup();"  onFocus="this.select()"  style="ime-mode:active; font:9pt 돋움; width:90%;height:21; margin:0; border: 1px solid #aaaaa9"  value="<%=keyword1%>">
                            </td>
                          </tr>
                        </table>    
                      </td>
                      <td width="45">
                        <img src="/image/findimg1.svg" width="35" height="21" onclick="checkfind(1);" style="position: relative; top: 3px;">
                      </td>
                    </tr>
                    <tr>
                      <td style="border-bottom: 1px solid #ccccca;" colspan="5" height="10"></td>
                    </tr>
                    <tr>
                      <td height="5"></td>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="70" align="left">
                              <input type="radio" name="jasasub" value="" checked onClick="changejasa(this,1);"  onFocus="this.blur()">
                              <span  onClick="document.form1.jasasub[0].checked=true;changejasa(document.form1.jasasub[0],1);"  id='jasasubdesc' name='jasasubdesc'   style="cursor:pointer;color:ff0000;" >자사</span>
                            </td>
                            <td width="70" align="left" style="position: relative; top: -2px;">
                              <input type="checkbox" name="gwanimgview" id="gwanimgview" <%if gwanlicheck = "1" then%>checked<%end if%> onClick="changecombo(); checkfind(1);" >
                                <label for="gwanimgview" data-role="none"><span style="position: relative; top: 4px;"></span></label>
                                &nbsp;&nbsp;관리
                            </td>
                            <td  colspan="2">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="right" height="30">
                                    <select name="sort" style="margin: 0; padding:0; width: 40%">
                                      <option value="7" >정렬기준</option>
                                      <option value="1"  <%if sort="1" then%>selected<%end if%> >공고게시↓</option>
                                      <option value="2"  <%if sort="2" then%>selected<%end if%> >공고게시↑</option>
                                      <option value="15" <%if sort="15" then%>selected<%end if%> >현설일시↓</option>
                                      <option value="16" <%if sort="16" then%>selected<%end if%> >현설일시↑</option>
                                      <option value="3"  <%if sort="3" then%>selected<%end if%> >참가마감↓</option>
                                      <option value="4"  <%if sort="4" then%>selected<%end if%> >참가마감↑</option>
                                      <option value="13" <%if sort="13" then%>selected<%end if%> >협정제출↓</option>
                                      <option value="14" <%if sort="14" then%>selected<%end if%> >협정제출↑</option>
                                      <option value="5"  <%if sort="5" then%>selected<%end if%> >입찰개시↓</option>
                                      <option value="6"  <%if sort="6" then%>selected<%end if%> >입찰개시↑</option>
                                      <option value="7"  <%if sort="7" then%>selected<%end if%> >입찰마감↓</option>
                                      <option value="8"  <%if sort="8" then%>selected<%end if%> >입찰마감↑</option>
                                      <option value="9"  <%if sort="9" then%>selected<%end if%> >개찰일시↓</option>
                                      <option value="10" <%if sort="10" then%>selected<%end if%> >개찰일시↑</option>
                                      <option value="11" <%if sort="11" then%>selected<%end if%> >기초금액↓</option>
                                      <option value="12" <%if sort="12" then%>selected<%end if%> >기초금액↑</option>
                                      <option value="17" <%if sort="17" then%>selected<%end if%> >추정가격↓</option>
                                      <option value="18" <%if sort="18" then%>selected<%end if%> >추정가격↑</option>
                                    </select>  
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            
            
          <!-- serachtoggle end div -->
          </div> 


          <div id="contpopup" name="contpopup" style="width: 100%; height: 0;"></div>
          <div id="gigwanpopup" name="gigwanpopup" style="width: 100%; height: 0;"></div>
          <div id="jiyukpopup" name="jiyukpopup" style="width: 100%; height: 0;"></div>
          <div id="upjongpopup" name="upjongpopup" style="width: 100%; height: 0;"></div>

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
                          <td   ><font color='#ff0000'><b>축하드립니다!</b></font></td>
                        </tr>
                      </table>
                <% end if %>
                <% if yesnakchalstr = "1" then %> 
                      <table width="96%" border="0" cellspacing="0" cellpadding="0"  class="tableclassnon"   >
                        <tr> 
                          <td   ><a href="javascript:openbid(<%=List("Num")%>,'<%=List("baljucheosimsa_code")%>',<%=i%>,<%=li_num%>,2,'<%=parmbujok%>');openjasa(<%=ipchalno%>,<%=li_num%>,'<%=baljucheosimsa_codebb%>',<%=i%>)" ><font color="#FF0000">[적격서류]</font></a><br>
                            <a href="javascript:openbid(<%=List("Num")%>,'<%=List("baljucheosimsa_code")%>',<%=i%>,<%=li_num%>,2,'<%=parmbujok%>');hyunjang('<%=querystr%>')" ><font color="#FF0000">[공사현장]</font></a></td>
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
                    <%
      if jkpass = "2" then %>
                    <td align="right"><%=jukview%></td>
        <%else%>
                    <td align="right"><%=jukview%></td>
        <%end if%>
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
' spgubun이 1이면(입찰대행회원)
else
%>
            <div class="header2" id="top_fix_Zone" style="height: 55px; "  >
              <table width="102%" border="0" cellpadding="0" cellspacing="0" style="font-size: 10pt; position: relative; top: 12px; left: -2%;">
                <tr>
                  <td width="30">요청</td>
                  <td >공고명</td>
                  <td align="right">추정가격</td>
                  <td align="right" width="80">업종/지역</td>
                </tr>
                <tr>
                  <td></td>
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
         
          

              <div class="konggocontent" id="scrollPosition" name="scrollPosition"  data-role="none" style="border-bottom: 1px solid #ccccca; position: relative; top: -10px; left: -2%;">
                <table width="102%" border="0" cellpadding="0" cellspacing="0" style="font-size: 9pt;line-height: 17px;">
                  <tr>
                    <td height="8"></td>
                  </tr>
                  <tr>
                    <td rowspan="4" width="27">
                      <input type="checkbox" id="tuchalcheck<%=i%>" name="tuchalcheck<%=i%>"  <% if emerge = "1" then%>style="background-color:#ff0000"<%end if%> value="1" <% if  list("biyegayn") = "1"  or list("biyegayn") = "41" or yeswoman = "1" or update_yn = "2"    then%>disabled<%end if%> onClick="tuchalsave(<%=i%>,<%=list("num")%>,'<%=list("konggono")%>','<%=tuchalamtspe%>','<%=passyn%>',1,'<%=mid(replace(list("kongsaname"),"'",""),1,25)%>')"  <% if List("update_yn") <> "2"  then %><%  if yestuchallistspe = "1" then %>checked<% end if %><% end if %>   onFocus="this.blur()">
                      <label for="tuchalcheck<%=i%>" data-role="none"><span></span></label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="colorname<%=i-1%>" width="170" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; word-break: normal; color: #316be6;" onclick="ajaxDetail(<%=num%>,<%=i-1%>,this); visitcolorfunc(<%=i-1%>);"><%=kongsaname%></td>
                        </tr>
                      </table>
                    </td>
                    <td align="right" class="visitcolor<%=i-1%>"><%=formatnumber(chujeongamt,0)%></td>
                    <td align="right" width="80" class="visitcolor<%=i-1%>"><%=mid(upjong,1,4)%>/<%=mid(jiyukf,1,3)%></td>
                  </tr>
                  <tr>
                    <td onclick="ajaxDetail(<%=num%>,<%=i-1%>,this);">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="visitcolor<%=i-1%>" width="170" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; word-break: normal;"><%=konggono%></td>
                        </tr>
                      </table>
                <% if nakchalcheck = "1"   then %>
                      <table width="96%" border="0" cellspacing="0" cellpadding="0"  class="tableclassnon"   >
                        <tr> 
                          <td ><font color='#ff0000'><b>축하드립니다!</b></font></td>
                        </tr>
                      </table>
                <% end if %>
                <% if yesnakchalstr = "1" then %> 
                      <table width="96%" border="0" cellspacing="0" cellpadding="0"  class="tableclassnon"   >
                        <tr> 
                          <td   ><a href="javascript:openbid(<%=List("Num")%>,'<%=List("baljucheosimsa_code")%>',<%=i%>,<%=li_num%>,2,'<%=parmbujok%>');openjasa(<%=ipchalno%>,<%=li_num%>,'<%=baljucheosimsa_codebb%>',<%=i%>)" ><font color="#FF0000">[적격서류]</font></a><br>
                            <a href="javascript:openbid(<%=List("Num")%>,'<%=List("baljucheosimsa_code")%>',<%=i%>,<%=li_num%>,2,'<%=parmbujok%>');hyunjang('<%=querystr%>')" ><font color="#FF0000">[공사현장]</font></a></td>
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
                    <%
      if jkpass = "2" then %>
                    <td align="right"><%=jukview%></td>
        <%else%>
                    <td align="right"><%=jukview%></td>
        <%end if%>
                    <td id="results" align="right" width="80" valign="top"><%=viewresults%></td>
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

<%
  totpage = round(listcount/countview +0.4999999999)
  prenext=""
  
  if pageno = 1 then
  else
    if logincheck=0 then
      prenext = prenext & "<a href='javascript:loginpageview();' class='linkclass'><font color='#316be6' style='font-size:11pt'>이전</font></a>"                     
    else
      prenext = prenext & "<a href='javascript:paging(2)' class='linkclass'><font color='#316be6' style='font-size:11pt'>이전&nbsp;&nbsp;</font></a>"               
    end if
  end if
  
  if totpage <=10 then
    startpage = 1
  else
    if pageno>6 then
      startpage = pageno-5
    else
      startpage=1
    end if
  end if

  for currentpage = startpage to startpage+page_list-1
    
    if currentpage > list.pagecount then
      exit for
    else
      if currentpage = pageno then
        prenext=prenext & "<font color='#666661' style='font-size:11pt'><b>&nbsp;"&currentpage&"&nbsp;</b></font>"               
      ' else
      '   if logincheck=0 then
      '     prenext = prenext & "<a href='javascript:loginpageview();' class='linkclass'><font color='#316be6' style='10pt'>["&currentpage&"]</font></a>"             
      '   else
      '     prenext = prenext & "<a href='akonggosearch.asp?pageno="&currentpage&"&startpage="&startpage&searchparam&"' class='linkclass'><font color='#316be6' style='10pt'>["&currentpage&"]</font></a>"           
      '   end if
      elseif currentpage < pageno then
         prenext = prenext & "<a href='javascript:checkfind(1)' class='linkclass'><font color='#316be6' style='font-size:11pt'>&nbsp;"&currentpage&"&nbsp;</font></a>"
      end if
    end if
  next
  if pageno = totpage then
  else
    if listcount > 0 then
      if logincheck = 0 then
        prenext = prenext & "&nbsp;&nbsp;<a href='javascript:loginpageview();' class='linkclass'><font color='#316be6' style='11pt'>다음</font></a>"      
      else
        prenext = prenext & "&nbsp;&nbsp;<a href='javascript:paging(1)' class='linkclass'><font color='#316be6' style='font-size:11pt'>&nbsp;&nbsp;+더보기</font></a>"     
      end if
    end if
  end if
%>

<div style="text-align: center; font-size: 12pt;">
<%=prenext%>
</div>


           <div style="height: 40px;"></div> 
        </div>
        
      </p>
    </div>
    <!-- ↑tab1끝나는div -->      


                
     <div id="tab2" class="tabcontent" style="width: 95%; ">
      dddd
     </div>


     <div id="tab3" class="tabcontent" style="width: 95%; ">
      fff
     </div>


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


<script type="text/javascript">


function returnaddbalju(codes,names,num)
{
  // if(f1.baljugubun[0].checked == true)  baljucheo_code = "b"+baljucheo_code;
  // else  baljucheo_code = "c"+baljucheo_code;
  
  codes = "b"+codes;
  var f1 = document.form1;
  temp1 = f1.baljucheocode;
  count = temp1.options.length;
  temp1.options[count]=new Option(names,codes)
  temp1.value = codes;
  count++;
  
  var contgubuncf = "";
  if(codes != temp1.value){
    for(i = 0;i<count;i++) {
      if( contgubuncf == "") {
        contgubuncf = temp1.options.value;
      } else {
        contgubuncf = contgubuncf+","+temp1.options.value;
      }
      f1.baljucheocodef.value = contgubuncf;
    }
  }else{
    f1.baljucheocodef.value = codes;
  }
  baljuclose();
}
function returnaddupjong(codes,names,num)
{

  console.log(codes)
  var f1 = document.form1;
  temp1 = f1.upjongcode;

  var codesarr = new Array();
  codesarr = codes.split("^");
  namesarr = names.split("^");

  count = temp1.options.length;
  temp1.options[count++]=new Option("-----------------","")
  temp1.options[count++]=new Option("선택된 업종전체","88")
  temp1.options[count++]=new Option("-----------------","")
  
  if(codes.indexOf("^") != -1){ //복수업종일때 select box option

    for(i=0;i<codesarr.length;i++){
      temp1.options[count++]=new Option(namesarr[i], codesarr[i]);
    }
    temp1.value = "88"; //선택된 업종전체 option value
  }else{ //단일업종일때
    // codes = "c"+codes;
    temp1.options.length=0;
    temp1.options[count++]=new Option(names, codes);
    temp1.value = codes;
  }

  var contgubuncf = "";
  if(codes.indexOf("^") != -1){ //복수업종일때 쿼리문조건
    for(i = 0;i<codesarr.length;i++) {
      if(codesarr) {
        if( contgubuncf == "") {
          contgubuncf = codesarr[i];
        } else {
          contgubuncf = contgubuncf+","+codesarr[i];
        }
      }
    }
  }else{ //단일업종일때
    for(i = 0;i<count;i++) {
      if(temp1.options[i].value) {
        if( contgubuncf == "") {
          contgubuncf = temp1.options[i].value;
        } else {
          contgubuncf = contgubuncf+","+temp1.options[i].value;
        }
      }
    }

  }
  
  f1.upjongcodef.value = contgubuncf;
  

  document.all.upjonginputstr.style.display = "none"; 
  upjongtoggle1 = 0;
  Layerc101.style.visibility  = "hidden";
}

// contproc를 인클루드로 빼면 alert이 안뜸..그래서 빼놨음
function contproc() {

  try {

    // var ff =  top.opener.form1;
    var f1 = document.form1;
    //popcontgubun은 복수계약방법을 선택하는 체크박스 name
    var pcontgubun = f1.popcontgubun;
  
    var ocontgubun = f1.contgubun;
    var ocount = ocontgubun.options.length;

    var delcount = 0;   

    var checkf1 = 0;

    for(i=0;i<ocount;i++) { 
      // 계약방법중에 c로 시작되는 방법이 있다면
      if( ocontgubun.options[i].value.indexOf("c") != -1 ) {
        checkf1 = 1;
        for(j=0;j<pcontgubun.length;j++) {
          if( pcontgubun[j].checked == true ) {
            if(pcontgubun[j].value.indexOf( ocontgubun.options[i].value ) != -1) {
              checkf1 = 0;
            }
          }
        }
  
        if( checkf1 == 1) {
          delcount++;
        }
      }
    }

    if( delcount > 0 ) {
      for(di = 0;di<delcount;di++) {
        checkf1 = 1;
        for(i=0;i<ocount;i++) { 
          if( ocontgubun.options[i].value.indexOf("c") != -1 ) {

            checkf1 = 1;
            for(j=0;j<pcontgubun.length;j++) {
              if( pcontgubun[j].checked == true ) {
                if(pcontgubun[j].value.indexOf( ocontgubun.options[i].value ) != -1) {
                  checkf1 = 0;
                }
              }
            }
      
            if( checkf1 == 1) {
              parmcheckcontgubundel(i);
              break;
            }
          }
        }
      }
    }
  
    ocount = ocontgubun.options.length;
    var checkf2 = 0;
    for(j=0;j<pcontgubun.length;j++) {
      var tempstr = pcontgubun[j].value.split(",");
  
      if(  pcontgubun[j].checked ==  true ) {
        checkf2 = 0;
        for(i=0;i<ocount;i++) {
          if( ocontgubun.options[i].value == tempstr[0]) {
            checkf2 = 1;
          }
        }
        
        if(checkf2 == 0) {
          parmcheckcontgubun(tempstr[0],tempstr[1]);
        }
      }
    }
    
    
  } catch(error) {}
  contclose();

}  

function parmcheckcontgubun(codes,names)  
{
  var f1 = document.form1;
  temp1 = f1.contgubun;
  count = temp1.options.length;
  temp1.options[count]=new Option(names,codes)
  temp1.value = "88";
  count++;
  var contgubuncf = "";
  for(i = 0;i<count;i++) {
    if(temp1.options[i].value.indexOf("c")  != -1 ) {
      if( contgubuncf == "") {
        contgubuncf = temp1.options[i].value.replace('c','');
      } else {
        contgubuncf = contgubuncf+","+temp1.options[i].value.replace('c','');
      }
    }
  }
  f1.contgubunf.value = contgubuncf;
}


function pjiyukprocess() {

  try {
    // var ff = opener.form1;
    var f1 = document.form1;
  
    var pjiyuk = f1.popjiyuk;
  
    var ojiyuk = f1.jiyukcode;
    var ocount = ojiyuk.options.length;
    
    var checkf1 = 0;
    for(i=0;i<ocount;i++) { 
      if( ojiyuk.options[i].value.indexOf("c") != -1 ) {
        checkf1 = 0;
        for(j=0;j<pjiyuk.length;j++) {
          if(  pjiyuk[j].checked ==  true ) {
            if(pjiyuk[j].value.indexOf( ojiyuk.options[i].value ) != -1) {
              checkf1 = 1;
            }
          }
        }
  
        if( checkf1 == 0) {
          parmcheckjiyukdel(i);
        }
      }
    }
  
    var checkf2 = 0;
    for(j=0;j<pjiyuk.length;j++) {
      var tempstr = pjiyuk[j].value.split(",");
  
      if(  pjiyuk[j].checked ==  true ) {
        checkf2 = 0;
        for(i=0;i<ocount;i++) {
          if( ojiyuk.options[i].value == tempstr[0]) {
            checkf2 = 1;
          }
        }
        
        if(checkf2 == 0) {
          parmcheckjiyuk(tempstr[0],tempstr[1]);
        }
      }
    }
    
    
  } catch(error) {}
  jiyukclose();

}

function parmcheckjiyuk(codes,names)  
{
  var f1 = document.form1;
  temp1 = f1.jiyukcode;
  count = temp1.options.length;
  temp1.options[count]=new Option(names,codes)
  temp1.value = "88";
  count++;
  
  var jiyukcf = "";
  for(i = 0;i<count;i++) {
    if(temp1.options[i].value.indexOf("c")  != -1 ) {
      if( jiyukcf == "") {
        jiyukcf = temp1.options[i].value.replace('c','');
      } else {
        jiyukcf = jiyukcf+","+temp1.options[i].value.replace('c','');
      }
    }
  }
  f1.jiyukcodef.value = jiyukcf;
}

function parmcheckjiyukdel(i) { 
  var f1 = document.form1;
  temp1 = f1.jiyukcode;
  temp1.options.remove(i);

  var count = temp1.options.length;
  var jiyukcf = "";
  for(i = 0;i<count;i++) {
    if(temp1.options[i].value.indexOf("c") != -1) {
      if( jiyukcf == "") {
        jiyukcf = temp1.options[i].value.replace('c','');
      } else {
        jiyukcf = jiyukcf+","+temp1.options[i].value.replace('c','');
      }
    }
  }
  f1.jiyukcodef.value = jiyukcf;
}

function upjongprocess() {
  try {
    var upjongcodes = "";
    var upjongnames = "";
    
    if(document.form1.upjongcodes) {
      upjongcodes = document.form1.upjongcodes.value;
      upjongnames = document.form1.upjongnames.value;   
    }
    if(upjongcodes != "") {
      // var ff = opener.form1;
      var f1 = document.form1;
    
      var upjongcodearr = upjongcodes.split("^");
      var upjongnamearr = upjongnames.split("^");
    
      var oupjong = f1.upjongcode;
      var ocount = oupjong.options.length;
      var delcount = 0;

      var checkf1 = 1;
      for(i=0;i<ocount;i++) { 
        if( oupjong.options[i].value.indexOf("c") != -1 || oupjong.options[i].value.indexOf("d") != -1) {
          checkf1 = 1;
          for(j=0;j<upjongcodearr.length;j++) {
            if(upjongcodearr[j].indexOf( oupjong.options[i].value ) != -1) {
              checkf1 = 0;
            }
          }
          
          if( checkf1 == 1) {
            delcount++;
          }
        }
      }


      if( delcount > 0 ) {
        for(di = 0;di<delcount;di++) {
          checkf1 = 1;
          for(i=0;i<ocount;i++) { 
            if( oupjong.options[i].value.indexOf("c") != -1 || oupjong.options[i].value.indexOf("d") != -1 ) {
              checkf1 = 1;
              for(j=0;j<upjongcodearr.length;j++) {
                if(upjongcodearr[j].indexOf( oupjong.options[i].value ) != -1) {
                  checkf1 = 0;
                }
              }
              
              if( checkf1 == 1) {
                parmcheckupjongdel(i);
                //oupjong.options.remove(i);
                break;
              }
            }
          }
        }
      }

      ocount = oupjong.options.length;
      var checkf2 = 0;
      for(j=0;j<upjongcodearr.length;j++) {
        checkf2 = 0;
        for(i=0;i<ocount;i++) {
          if( oupjong.options[i].value == upjongcodearr[j]) {
            checkf2 = 1;
          }
        }
        if(checkf2 == 1) {
          parmcheckupjong("c"+upjongcodearr[j],upjongnamearr[j]);
        }
      }
      upjongtogglecheck();
    } else {
      alert("검색할 업종을 선택하여 주십시오.    ");
    }
  } catch(error) {}
}

function parmcheckupjongdel(i) {
  var f1 = document.form1;
  temp1 = f1.upjongcode;
  temp1.options.remove(i);
 
  var count = temp1.options.length;
  var upjongcf = "";
  pathgo = f1.pathgo.value;
  if (pathgo == "1")  {
    for(i = 0;i<count;i++) {
      if(temp1.options[i].value.indexOf("c")  != -1 ) {
        if( upjongcf == "") {
          upjongcf = temp1.options[i].value.replace('c','');
        } else {
          upjongcf = upjongcf+","+temp1.options[i].value.replace('c','');
        }
      }
    }
  }
  else if (pathgo == "2")  {  
    for(i = 0;i<count;i++) {
      if(temp1.options[i].value.indexOf("d")  != -1 ) {
        if( upjongcf == "") {
          upjongcf = temp1.options[i].value.replace('d','');
        } else {
          upjongcf = upjongcf+","+temp1.options[i].value.replace('d','');
        }
      }
    }
  } 
  f1.upjongcodef.value = upjongcf;
}

function parmcheckupjong(codes,names) 
{
  var f1 = document.form1;
  temp1 = f1.upjongcode;
  count = temp1.options.length;
  temp1.options[count] = new Option(names,codes)
  temp1.value = "88";
  count++;
  var upjongcf = "";
  var vcheck =0;
  for(i = 0;i<count;i++) {
    if(temp1.options[i].value == "88")
      vcheck = 1;

    if(temp1.options[i].value.indexOf("c")  != -1 ) {
    //if(vcheck == 1) {
      if( upjongcf == "") {
        upjongcf = temp1.options[i].value.replace('c','');
      } else {
        upjongcf = upjongcf+","+temp1.options[i].value.replace('c','');
      }
    }
  }
  f1.upjongcodef.value = upjongcf;
}


</script>

<%
  list.close
  set list = nothing

  dbcon.close
  set dbcon = nothing
%>