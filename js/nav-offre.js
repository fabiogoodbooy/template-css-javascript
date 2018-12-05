$(document).ready(function(){
    
    $('#liste-services a').click(function(e) {
    
        $('#liste-services a.active').removeClass('active') ;
        $(this).addClass('active') ;
    
 e.preventDefault();
                  return false;
});
       $('#Web').show();
    $('#Marketing').hide();
    $('#E-commerce').hide();
    $('#Logo').hide();
    
     $('.web').click(function(){ 
    $('#Web').show('slow');
    $('#Marketing').hide();
    $('#E-commerce').hide();
    $('#Logo').hide();
    });
    
    $('.marketing').click(function(){ 
    $('#Web').hide();
    $('#Marketing').show('slow');
    $('#E-commerce').hide();
    $('#Logo').hide();
    });
    
    $('.e-commerce').click(function(){ 
    $('#Web').hide();
    $('#Marketing').hide();
    $('#E-commerce').show('slow');
    $('#Logo').hide();
    });
    
    $('.logo').click(function(){ 
    $('#Web').hide();
    $('#Marketing').hide();
    $('#E-commerce').hide();
    $('#Logo').show('slow');
    });
                 
    
});
    
