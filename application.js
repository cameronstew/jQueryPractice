$(function(){
  $('.red').hover(function(){
    $(this).toggleClass("green");
  });

  $('#btn-bg').on('click', function(){
    $('body').css("background", "hotpink");
  });

  $('body').dblclick(function(){
    alert("DOUBLE CLICKING IS SERIOUS BUSINESS!");
  });


  $('#hotdog').on('click', function(){
    var image = $(this);
    for (var i = 1; i < 1000; i++){
      $('body').append('<img src="https://t0.gstatic.com/images?q=tbn:ANd9GcS59Hex-EQDMjCNGefJVQQYiES4Oy0xjExi6HuKJAgvWwSd_ExtBw" alt="Smiley face" height="42" width="42" id="hotdog">');
    }
  });

  $('#up').on('click', function(){
    $('p').prev().slideUp();
  });

  $('#list').on('click', function(){
    $('ul li:nth-child(1)').css("color", "red");
    $('ul li:nth-child(2)').css("color", "green");
    $('ul li:nth-child(3)').css("color", "blue");
  });

  $('#random').on('click', function(){
    var colors = ['green', 'red', 'blue', 'purple', 'orange', 'hotpink'];
    var color = colors[Math.floor(colors.length * Math.random())];
    $(this).css('color', color);
  });

  $('#number').on('click', function(){
    $(this).text('');
    for(var i = 0; i <= 50; i++){
      var number = (Math.floor(Math.random() * 1000) + 1);
      $(this).append(number+" ");
    }
  });
});
