
$(document).ready(function () {
  //모바일 메뉴버튼
  var mobileMenuFlag = true;
  var mobileSearchFlag = false;  //초기엔 비활성화  
  $("#mMenuBtn").click(function () {
    if (mobileMenuFlag) {
      $("body").css({ overflow: 'hidden' }).on('touchmove', function (e) { e.preventDefault() });
      $("#mMenuBox").slideDown(250);
      $("#mMenuBtn").children('img').attr('src', '../../images/btn_m_close.png').attr('alt', '메뉴 닫는 버튼');
      mobileMenuFlag = false;
      $("#m_search_dim").hide();
      mobileSearchFlag = false;
    } else {
      $("body").css({ overflow: 'auto' });
      $("body").off('touchmove');
      $("#mMenuBox").slideUp(250);
      $("#mMenuBtn").children('img').attr('src', '../../images/btn_m_menu.png').attr('alt', '메뉴 버튼');
      mobileMenuFlag = true;
      if (mobileSearchFlag) {
        $("#m_search_dim").show();
      } else {
        $("#m_search_dim").hide();
      }
    }
  });

  /* 테이블 안의 내용 토글*/
  $('.btnInTable').on({
    "click":function (){
      $(this).toggleClass('active').closest('.innerTb').toggleClass('active').closest('tr').siblings('tr').find('.innerTb').removeClass('active').find('.btnInTable').removeClass('active');
    }
  })

  /* 탭 토글 */
  $('.tabList li').on({
    "click":function(){
      var idx = $(this).index();
      $(this).addClass('active').siblings('li').removeClass('active');
      $(this).closest('.tabNav').siblings('.tabCont').removeClass('active').eq(idx).addClass('active');
    }
  });

  //모바일 메뉴

  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".contentM")
        .slideUp(200);
      $(".set > a")
        .children('img').attr('src', '../../images/ico_plus.png').attr('alt', '메뉴 펼치기');
    } else {
      $(".set > a")
        .children('img').attr('src', '../../images/ico_plus.png').attr('alt', '메뉴 펼치기');
      $(this)
        .removeClass("fa-plus")
        .children('img').attr('src', '../../images/ico_minus.png').attr('alt', '메뉴 닫기');
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".contentM").slideUp(200);
      $(this)
        .siblings(".contentM")
        .slideDown(200);
    }
  });


  $(".layer").click(function () {
    $(this).toggleClass('layer_on');
  });

  $('#listBox').click(function () {
    $('#listMD').toggle();
  });

  // tab
  $('.panel:not(:first)').hide();
  $('#tab a:first').addClass('on');
  $('#tab a').click(function () {
    $('.panel').hide();
    var link_id = $(this).attr('title');
    $('#' + link_id).show();

    $('a').removeClass('on');
    $(this).addClass('on');
    $(this).focus();
  });

  // toggle 열기 접기
  $('#toggleInner').hide();
  $('#toggle').click(function () {
    $('#toggleInner').slideToggle(200);
    $(this).html($(this).html() == '<div>개요정보 직접닫기<img src="../../images/ico_arrow_up.png" alt="열기"></div>' ? '<div>개요정보 직접입력<img src="../../images/ico_arrow_down.png" alt="열기"></div>' : '<div>개요정보 직접닫기<img src="../../images/ico_arrow_up.png" alt="열기"></div>');
  });



  $('.btnLike').focus(function () {
    $('.btnLike').addClass('file_focus');
  });

  //화일업로드 : 찾아보기에 outline 생기기 
  var $fileBox = null;

  $(function () {
    init();
  })

  function init() {
    $fileBox = $('.box_upload');
    fileLoad();
  }

  function fileLoad() {
    $.each($fileBox, function (idx) {
      var $this = $fileBox.eq(idx),
        $btnUpload = $this.find('[type="file"]'),
        $label = $this.find('.btnLike');

      // $btnUpload.on('change', function() {
      //   var $target = $(this),
      //       fileName = $target.val(),
      //       $fileText = $target.siblings('.file_name');
      //   $fileText.val(fileName);
      // })

      $btnUpload.on('focusin focusout', function (e) {
        e.type == 'focusin' ?
          $label.addClass('file_focus') : $label.removeClass('file_focus');
      })

    })
  }

  // 익스 엔터키 되게 하기
  //IE는 input:file 입력란에서 Enter 키를 누르면 form submit 되는데 이 동작 막고 file browsing
  if (!!navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/MSIE/i)) {
    $("input:file").on('keypress', function (e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode == 13) { // Checks for the enter key
        e.preventDefault(); // Stops IE from triggering the button to be clicked
        $(this).trigger("click");
      }
    });
  }


  /* btnClose클릭시 팝업 닫힘 */
  $(".layerPopup .btnClose").on({
    "click": function click() {
      $(this).closest('.layerPopup').hide();
      $('#dimmed').remove();
    }
  });
  $(".alert .btnClose").on({
    "click": function click() {
      $(this).closest('.alert').hide();
      $('#dimmed').remove();
    }
  });
  $(document).on('click', '#dimmed', function () {
    $(this).remove();
    $('.layerPopup').hide();
    $('.alert').hide();
  });
  
  //팝업 열기 닫기
  // $('#branchPopup').hide();
  // $('#dimmed').hide();
  // $('#confirmPopup').hide();
  // $('#dataPop').hide();

  $('#branch').click(function () {
    $('#branchPopup').show();
    $('#dimmed').show();
  });
  $('#confirm').click(function () {
    $('#confirmPopup').show();
  });
  $('#layerClick').click(function () {
    $('#dataPop').show();
  });
  $('#layerClick_02').click(function () {
    $('#dataPop_02').show();
  });
  $('#infoSpace').click(function () {
    $('#sortPop').show();
  });
  $('#modify').click(function () {
    $('#dataPop_m').show();
  });
  $('#pwChange').click(function () {
    $('#pwPop').show();
  })
  $('#change').click(function () {
    $('#changePop').show()
  })
  $('#downForm').click(function () {
    $('#dataPop_m').show();
  })

  //hide
  $('#btnPop_01').click(function () {
    $('#dataPop').hide();

    $('#confirmPopup').hide();
    $('#pwPop').hide();
    $('#changePop').hide();
  });

  $('#btnPop_02').click(function () {
    $('#sortPop').hide();
    $('#branchPopup').hide();
    $('#dataPop_02').hide();
  });

  $('#btnPop_03').click(function () {
    $('#dataPop_m').hide();
  });

  $('#closePopup').click(function () {
    $('#dataPop_m').hide();
  });



  //로그인 창 
  $('#loginWrap').click(function () {
    $('#loginBox').toggle();
  });

  //draggable
  $('.layerPopup,.alert,.popup').draggable({
    cancel: '.popCont',
    containment: "window"
  });

  //height 맞추기

  var obj1 = document.getElementById('sectionRight');
  var obj2 = document.getElementById('sectionLeft');
  if (obj1 != null) {

    var obj1_height = obj1.offsetHeight;
    var obj2_height = obj2.offsetHeight;

    if (obj1_height > obj2_height) { obj2.style.height = obj1_height + 'px'; }
    else { obj1.style.height = obj2_height + 'px'; };
  }



  $('.certOpen').on({
    "click":function (e){
      e.preventDefault();
      $(this).closest('.loginLink').siblings('.certChk').toggleClass('active');
    }
  })
});








