function scrollto(div)
{
 $('html,body').animate(
 {
  scrollTop: $("#"+div).offset().top + 2
 },'slow');
}