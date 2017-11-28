
try {
    var els=document.getElementsByName("usrid");
    for (var i=0;i<els.length;i++) {
    els[i].value = localStorage.getItem("logid");}
} catch (error) {
    
}

function myFunction1() {
    // alert("1");
     var x = document.getElementById("myBlock");
     x.style.display = "none";
     var y = document.getElementById("myBlock2");
     y.style.display = " block";
    
 }
 function myFunction2() {

     var x = document.getElementById("myBlock2");
     x.style.display = "none";
     var y = document.getElementById("myBlock");
     y.style.display = " block";
    
 }
function dropdownload() {
var y = document.getElementById("myDropdown");
     y.style.display = "block";
    document.getElementById("myDropdown").classList.toggle("show");    
}

function loadmain2() {
    
       var main111= document.getElementById("page1");
        main111.style.display = "none";
        var main111= document.getElementById("page3");
        main111.style.display = "none";
        var main111= document.getElementById("page4");
        main111.style.display = "none";
       var z= document.getElementById("page2");
        z.style.display = "block";
        var a= document.getElementById("img2");
       a.style.opacity=1;
       var b= document.getElementById("img1");
       b.style.opacity=0.5;
       var c= document.getElementById("img3");
       c.style.opacity=0.5;
       var d= document.getElementById("img4");
       d.style.opacity=0.5; 
      //document.getElementById("main4").classList.toggle("show");
   }

function loadmain3() {
 
	var main111= document.getElementById("page1");
     main111.style.display = "none";
     var main111= document.getElementById("page2");
     main111.style.display = "none";
     var main111= document.getElementById("page4");
     main111.style.display = "none";
	var z= document.getElementById("page3");
     z.style.display = "block";
     var c= document.getElementById("page5");
     c.style.display = "block";
     var t= document.getElementById("page6");
     t.style.display = "none";
     var a= document.getElementById("img3");
    a.style.opacity=1;
    var b= document.getElementById("img1");
    b.style.opacity=0.5;
    var c= document.getElementById("img2");
    c.style.opacity=0.5;
    var d= document.getElementById("img4");
    d.style.opacity=0.5; 
    var h= document.getElementById("package");
    h.style.opacity=1; 
   //document.getElementById("main4").classList.toggle("show");
}
function loadmain4() {
    
       var main111= document.getElementById("page1");
        main111.style.display = "none";
        var main111= document.getElementById("page2");
        main111.style.display = "none";
        var main111= document.getElementById("page3");
        main111.style.display = "none";
       var z= document.getElementById("page4");
        z.style.display = "block";
        var a= document.getElementById("img4");
       a.style.opacity=1;
       var b= document.getElementById("img1");
       b.style.opacity=0.5;
       var c= document.getElementById("img3");
       c.style.opacity=0.5;
       var d= document.getElementById("img2");
       d.style.opacity=0.5; 
      //document.getElementById("main4").classList.toggle("show");
   }
   
   function loadmain6() {
    var main111= document.getElementById("page1");
    main111.style.display = "none";
    var main111= document.getElementById("page2");
    main111.style.display = "none";
    var main111= document.getElementById("page4");
    main111.style.display = "none";
   var z= document.getElementById("page3");
    z.style.display = "block";
    var c= document.getElementById("page6");
    c.style.display = "block";
    var t= document.getElementById("page5");
    t.style.display = "none";
    var a= document.getElementById("img3");
   a.style.opacity=1;
   var b= document.getElementById("img1");
   b.style.opacity=0.5;
   var c= document.getElementById("img2");
   c.style.opacity=0.5;
   var d= document.getElementById("img4");
   d.style.opacity=0.5; 
   var h= document.getElementById("package");
   h.style.opacity=0.5; 
   var h= document.getElementById("addpackage");
   h.style.opacity=1; 
  //document.getElementById("main4").classList.toggle("show");
      //document.getElementById("main4").classList.toggle("show");
   }
function validateLogin() {

    if(document.getElementById("username-login").value=="")
    {
    alert( "Please provide Usename!" );
    return false;
    }

    if(document.getElementById("password-login").value=="")
    {
    alert( "Please enter password-login" );
    return false;
    }
    localStorage.setItem("logid", document.getElementById("username-login").value);
    newDoc();

}

function newDoc() {
    window.location.assign("trackpage.html")
}
	function validatecreate() {

    if(document.getElementById("name-create").value=="")
    {
    alert( "Please provide Name!" );
    return false;
    }

    if(document.getElementById("password-create").value=="")
    {
    alert( "Please enter password" );
    return false;
    }
	if(document.getElementById("email-address-create").value=="")
    {
    alert( "Please provide email address" );
    return false;
    }
    
    newDoc1();
    }
    
    function newDoc1() {
        window.location.assign("index.html")
    }
 function loadNextPage() 
 {
	 localStorage.setItem("loginid", "Smith");
	 
     //window.navigate("index.html");

 }
function validate() {

    if(document.getElementById("selecttag").value=="")
    {
    alert( "Please provide Order name!" );
    return false;
    }

    if(document.getElementById("selecttag1").value=="select")
    {
    alert( "Please Select Form address!" );
    return false;
    }

    if(document.getElementById("selecttag2").value=="select")
    {
    alert( "Please Select To address!" );
    return false;
    }
    if(document.getElementById("selecttag3").value=="select")
    {
    alert( "Please Select Order type!" );
    return false;
    }
    if(document.myform.Address.value=="")
    {
    alert( "Please provide Address!" );
    return false;
    }
    if(document.myform.Address1.value=="")
    {
    alert( "Please provide Address!" );
    return false;
    }
    if(document.myform.ItemCount.value=="")
    {
    alert( "Please provide Item Count!" );
    return false;
    }
    add();
    myform.reset();
}



