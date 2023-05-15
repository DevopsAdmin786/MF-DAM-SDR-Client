
function tableResult(id){
    
    switch(id) {
        case "activeProject":
            var activeItem = document.getElementById(id);
            if(!activeItem.classList.contains('bg-light')){
                activeItem.classList.add('bg-light');
            }else{
                activeItem.classList.remove('bg-light');
            }
        break;
        case "needAttention":
            var activeItem = document.getElementById(id);
            if(!activeItem.classList.contains('bg-light')){
                activeItem.classList.add('bg-light');
            }else{
                activeItem.classList.remove('bg-light');
            }
        break;
        case "toDo":
            var activeItem = document.getElementById(id);
            if(!activeItem.classList.contains('bg-light')){
                activeItem.classList.add('bg-light');
            }else{
                activeItem.classList.remove('bg-light');
            }
        break;
        case "dueSoon":
            var activeItem = document.getElementById(id);
            if(!activeItem.classList.contains('bg-light')){
                activeItem.classList.add('bg-light');
            }else{
                activeItem.classList.remove('bg-light');
            }
        break;
        case "inProgress":
            var activeItem = document.getElementById(id);
            if(!activeItem.classList.contains('bg-light')){
                activeItem.classList.add('bg-light');
            }else{
                activeItem.classList.remove('bg-light');
            }
        break;
        default:
            var activeItem = document.getElementById('activeProject');
            activeItem.classList.add('bg-light'); 
      }

}
// save filter popup
$(document).ready(function(){
    $("#FilterNameModal").on('shown.bs.modal', function(){
        $(this).find('#filterName').focus();
    });
});

// selected dropdown
$(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $('a.active').removeClass('active');
    $(this).addClass('active');    
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

$("#exposedSettings a").click(function(){
    var selText = $(this).text();
    $('a.active').removeClass('active');
    $(this).addClass('active');    
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

// $("#actingTeamDropdown a").click(function(){
//     var selText = $(this).text();
//     $('a.active').removeClass('active');
//     $(this).addClass('active');   
//     $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
// });

// $('#ActingforTeam').click(function(){
//     $('#searchTeam input').focus();
// })
//End selected dropdown

// selected language
$("#languageDropdown .dropdown-menu a").click(function(){
    var selText = $(this).html();
    $('a.active').removeClass('active');
    $(this).addClass('active');    
    $(this).parents('#languageDropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

// movable item
$(function() {
    $( "#moveItems" ).sortable();
    $( "#moveItems" ).disableSelection();
  });
// End movable item

$("#showProjectAssets").click(function(){
    $(this).toggleClass('activeBtn');
    $("#project-assetsTabContent").slideToggle("slow");
});

$("#showProjectAssetsModal").click(function(){
    $(this).toggleClass('activeBtn');
    $("#project-assetsTabContentModal").slideToggle("slow");
});

$("#showSourceArtwork").click(function(){
    $(this).toggleClass('activeBtn');
    $("#source-artworkTabContent").slideToggle("slow");
});

$("#showSourceArtworkModal").click(function(){
    $(this).toggleClass('activeBtn');
    $("#source-artworkTabContentModal").slideToggle("slow");
});
// mobile scrollspy
var lastId,
 topMenu = $("#navbarSettingsMobile"),
 topMenuHeight = $("#header").outerHeight()+1, 
 menuItems = topMenu.find("a"),
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

$(window).scroll(function(){  
   var fromTop = $(this).scrollTop()+topMenuHeight;   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });   
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;       
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

$("#roleInherited").change(function() {
    if(this.checked) {
        $('#roleInheritedNo').css('display', 'none');
        $('#roleInheritedYes').css('display', 'inline-block');
    }else{
        $('#roleInheritedNo').css('display', 'inline-block');
        $('#roleInheritedYes').css('display', 'none');
    }
});

$(document).ready(function(){
    $('#myselection').on('change', function(){
    	var demovalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });
});