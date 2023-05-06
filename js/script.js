$("#tab-contents .tab[id!="tab1"]").hide();

$('tab1-menu a').on('click',function(event){
  $("#tab-contents .tab").hide();
  $("#tab-menu .activ").removeClass("activ");
  $(this).addClass('activ');
  $($(this).attr('href')).show();
  event.preventDefault();
});