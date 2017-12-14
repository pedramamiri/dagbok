$(document).ready(function(){
    var form = [ ]
    sessionStorage.mylist;   
    $(".save").click(function(){
        if(sessionStorage.mylist == null){        
        dag = {
                rubrik : $(".rubrik").val(),
                datum :  $(".datum").val(),
                text : $(".text").val() 
            };
            form.push(dag);
            sessionStorage.mylist = JSON.stringify(form);
            console.log("yess");
            list();
            delet();
        }
        else {
            dag = {
                rubrik : $(".rubrik").val(),
                datum :  $(".datum").val(),
                text : $(".text").val() 
            };
            showForms = JSON.parse(sessionStorage.mylist);
            showForms.push(dag);
            showForms.sort(function(a, b){
                    var dateA=new Date(a.datum), dateB=new Date(b.datum);
                     return dateA-dateB;
                 });   
            sessionStorage.mylist = JSON.stringify(showForms);
            console.log("yes yes");
            list();
            delet();
 
            
        };          
    });

    console.log(sessionStorage.mylist);
    if(sessionStorage.mylist !== undefined ){ 
    list();
    }
    
    function list(){
        $(".listCards").empty();
        showList = JSON.parse(sessionStorage.mylist);         
        for (var i=0; i<showList.length;i++){
        boxrubrik = showList[i].rubrik;
        boxdatum = showList[i].datum;
        boxtext = showList[i].text;
        x = i;
        $(".listCards").append('<div class="card" id='+x+' style="min-width:20%"><h4 class="card-title" atr="yes">'+boxrubrik + '</h4><p class="card-text"> '+boxtext+'</p><p class="card-datum">'+boxdatum+'</div>' );
       };
    };
    
    $(".clear").click(function(){
        sessionStorage.clear();
        location.reload(); 
    });
    delet();
    function delet(){
    $(".card").click(function(){
        $(this).fadeOut(200);
        showForms = JSON.parse(sessionStorage.mylist);
        y = $(this).attr("id");
        showForms.splice(y, 1);
        sessionStorage.mylist = JSON.stringify(showForms);
               
    });
}    
});



