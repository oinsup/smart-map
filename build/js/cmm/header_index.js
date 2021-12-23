$(document).ready(function(){        

    
    $('#loginWrap').click(function() { 
      $('#loginBox').toggle(); 
    });
    
    var mobileMenuFlag =  true;
	  var mobileSearchFlag = false;  //초기엔 비활성화  
    $("#mMenuBtn").click(function() {
		if(mobileMenuFlag) {
			$("body").css({overflow:'hidden'}).on('touchmove', function(e){e.preventDefault()});
			$("#mMenuBox").slideDown(250);
			$("#mMenuBtn").children('img').attr('src', '../images/btn_m_close.png').attr('alt', '메뉴 닫는 버튼');
			mobileMenuFlag = false;
			$("#m_search_dim").hide();
			mobileSearchFlag = false;
		} else {
			$("body").css({overflow:'auto'});
			$("body").off('touchmove');
			$("#mMenuBox").slideUp(250);
			$("#mMenuBtn").children('img').attr('src', '../images/btn_m_menu.png').attr('alt', '메뉴 버튼');
			mobileMenuFlag = true;
			if(mobileSearchFlag){
				$("#m_search_dim").show();
			}else{
				$("#m_search_dim").hide();
			}
		}
	});

    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".contentM")
            .slideUp(200);
          $(".set > a")
            .children('img').attr('src', '../images/ico_plus.png').attr('alt', '메뉴 펼치기');
        } else {
          $(".set > a")
            .children('img').attr('src', '../images/ico_plus.png').attr('alt', '메뉴 펼치기');
          $(this)
            .removeClass("fa-plus")
            .children('img').attr('src', '../images/ico_minus.png').attr('alt', '메뉴 닫기');
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".contentM").slideUp(200);
          $(this)
            .siblings(".contentM")
            .slideDown(200);
        }
    });
	$('.certOpen').on({
		"click":function (e){
			e.preventDefault();
			$(this).closest('.loginLink').siblings('.certChk').toggleClass('active');
		}
	})
});