!function(e){"use strict";jQuery("#rev_slider_1").show().revolution({delay:7e3,responsiveLevels:[1400,1200,1140,778,480],gridwidth:[1140,1140,920,700,380],sliderLayout:"fullscreen",navigation:{arrows:{enable:!0,style:"me_arrows",hide_onleave:!1,left:{container:"slider",h_align:"left",v_align:"center",h_offset:60,v_offset:0},right:{container:"slider",h_align:"right",v_align:"center",h_offset:60,v_offset:0}},bullets:{enable:!1}}}),jQuery("#rev_slider_2").show().revolution({delay:7e3,responsiveLevels:[1200,1140,778,480],gridwidth:[1140,920,700,380],sliderLayout:"fullscreen",navigation:{arrows:{enable:!0,style:"me_arrows",hide_onleave:!1,left:{container:"slider",h_align:"left",v_align:"center",h_offset:60,v_offset:0},right:{container:"slider",h_align:"right",v_align:"center",h_offset:60,v_offset:0}},bullets:{enable:!1}}}),jQuery("#rev_slider_3").show().revolution({delay:7e3,responsiveLevels:[1200,1140,778,480],gridwidth:[1140,920,700,380],sliderLayout:"fullscreen",navigation:{arrows:{enable:!0,style:"me_arrows",hide_onleave:!1,left:{container:"slider",h_align:"left",v_align:"center",h_offset:60,v_offset:0},right:{container:"slider",h_align:"right",v_align:"center",h_offset:60,v_offset:0}},bullets:{enable:!1}}});e(".video_popup").magnificPopup({type:"iframe"});var t=!0;if(e(".singlefunfact").appear(),e(".singlefunfact").on("appear",function(){t&&(e(".timer").each(function(){var t=e(this);jQuery({Counter:0}).animate({Counter:t.attr("data-counter")},{duration:3e3,easing:"swing",step:function(){var e=Math.ceil(this.Counter).toString();if(Number(e)>999)for(;/(\d+)(\d{3})/.test(e);)e=e.replace(/(\d+)(\d{3})/,'<span class="countSpan">$1</span>$2');t.html(e)}})}),t=!1)}),e(".client_slider").length>0&&e(".client_slider").owlCarousel({items:4,margin:30,autoplay:!0,nav:!1,responsive:{0:{items:1},560:{items:2},768:{items:3},992:{items:4}}}),e(".team_slider").length>0&&e(".team_slider").slick({autoplay:!0,autoplaySpeed:2e3,slidesToShow:3,dots:!0,arrows:!1,centerMode:!0,centerPadding:"350px",responsive:[{breakpoint:1600,settings:{centerMode:!0,centerPadding:"40px",slidesToShow:4}},{breakpoint:1199,settings:{centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:991,settings:{centerMode:!0,centerPadding:"40px",slidesToShow:2}},{breakpoint:600,settings:{centerMode:!0,centerPadding:"30px",slidesToShow:1}}]}),e(".slider_testimoial").length>0&&e(".slider_testimoial").owlCarousel({items:3,autoplay:!1,nav:!1,dots:!0,dotsContainer:".dots_owl"}),e(".slider_testimoial").length>0&&e(".slider_testimoial li.control_item").on("click",function(){var t=e(this),a=e("a",t).attr("href");e('a[href="'+a+'"]',t).tab("show"),e(".slider_testimoial li.control_item").removeClass("active"),t.addClass("active")}),e("#gmap").length>0){(o=new GMaps({el:"#gmap",lat:40.728157,lng:-74.077644,scrollwheel:!1,zoom:10,zoomControl:!1,panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,clickable:!1})).addMarker({lat:40.728157,lng:-74.077644,icon:"images/marker.png",animation:google.maps.Animation.DROP});var a=[{featureType:"road",stylers:[{color:"#ffffff"}]},{featureType:"water",stylers:[{color:"#ededed"}]},{featureType:"landscape",stylers:[{color:"#f7f7f7"}]},{elementType:"labels.text.fill",stylers:[{color:"transparent"}]},{featureType:"poi",stylers:[{color:"#e5e5e5"}]},{elementType:"labels.text",stylers:[{saturation:1},{weight:.1},{color:"#818181"}]}];o.addStyle({styledMapName:"Styled Map",styles:a,mapTypeId:"map_style"}),o.setStyle("map_style")}if(e("#gmap_2").length>0){var o;(o=new GMaps({el:"#gmap_2",lat:40.728157,lng:-74.077644,scrollwheel:!1,zoom:10,zoomControl:!1,panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,clickable:!1})).addMarker({lat:40.728157,lng:-74.077644,icon:"images/marker.png",animation:google.maps.Animation.DROP});a=[{featureType:"road",stylers:[{color:"#ffffff"}]},{featureType:"water",stylers:[{color:"#ededed"}]},{featureType:"landscape",stylers:[{color:"#f7f7f7"}]},{elementType:"labels.text.fill",stylers:[{color:"transparent"}]},{featureType:"poi",stylers:[{color:"#e5e5e5"}]},{elementType:"labels.text",stylers:[{saturation:1},{weight:.1},{color:"#818181"}]}];o.addStyle({styledMapName:"Styled Map",styles:a,mapTypeId:"map_style"}),o.setStyle("map_style")}if(e("#Grid").themeWar(),e(".Grid").themeWar(),e(".related_slider").length>0&&e(".related_slider").owlCarousel({items:3,autoplay:!0,margin:30,nav:!1,dots:!1,responsive:{0:{items:1},600:{items:2},991:{items:3}}}),e(".searchToggler").length>0){var l=!0;e(".searchToggler").on("click",function(t){t.preventDefault(),l?(e(".searchFixed").fadeIn("slow"),l=!1):(e(".searchFixed").fadeOut("slow"),l=!0)}),e(document).mouseup(function(t){var a=e(".searchForms");a.is(t.target)||0!==a.has(t.target).length||(e(".searchFixed").fadeOut("slow"),l=!0)}),e("#sfCloser").on("click",function(t){t.preventDefault(),e(".searchFixed").fadeOut("slow"),l=!0})}e(function(){e(".singleShopWrap").themeWar()}),e(document).ready(function(){e("#close-popup").on("click",function(t){t.preventDefault(),e("body").removeClass("menu__open show-overlay-nav")}),e(".hamburger").on("click",function(){e(this).toggleClass("is_active"),e("body").toggleClass("menu__open")}),e(document).keyup(function(t){27===t.keyCode&&e(".menu__open .hamburger").click()}),e("#open-overlay-nav").on("click",function(){e("body").toggleClass("show-overlay-nav")}),e(".dl-menu__wrap").dlmenu({animationClasses:{classin:"dl-animate-in-3",classout:"dl-animate-out-3"}})}),e(window).on("scroll",function(){var t,a,o;e(window).scrollTop()>40?e("#header").addClass("fixedHeader animated flipInX"):e("#header").removeClass("fixedHeader animated flipInX"),t=[],a=[],o=e(window).scrollTop(),e(".mainmenu").find(".scroll > a").each(function(){var o=e(this).attr("href");e(o).length>0&&(t.push(e(e(this).attr("href")).offset().top),a.push(e(e(this).attr("href")).offset().top+e(e(this).attr("href")).height()))}),e.each(t,function(a){o>t[a]-200&&e(".mainmenu li.scroll").removeClass("active").eq(a).addClass("active")})}),e(window).load(function(){var t=e(".preloader");t.length>0&&t.delay(800).fadeOut("slow")});var s=e("#backToTop"),n=e("body, html");if(e(window).on("scroll",function(){var t=e(window).height()/2;e(window).scrollTop()>t?s.addClass("showit"):s.removeClass("showit")}),n.on("click","#backToTop",function(e){e.preventDefault(),n.animate({scrollTop:0},800)}),e(".mobilemenu").length>0&&(e(".mobilemenu").on("click",function(){e(window).width();e(this).toggleClass("active"),e(".mainmenu > ul").slideToggle("slow")}),e(window).width()<768&&e(".mainmenu > ul li.menu-item-has-children > a").on("click",function(t){t.preventDefault(),e(this).parent().toggleClass("active"),e(this).parent().children(".sub-menu").slideToggle("slow")})),e(".mainmenu ul li.scroll > a").on("click",function(){return e("html, body").animate({scrollTop:e(this.hash).offset().top-68},1e3,"easeOutCubic"),!1}),e(".dl-menu__wrap ul li.scroll > a").on("click",function(){if(!e(this).parent().hasClass("menu-item-has-children"))return e("html, body").animate({scrollTop:e(this.hash).offset().top-68},1e3,"easeOutCubic",function(){e("body").removeClass("menu__open show-overlay-nav")}),!1;e("html, body").animate({scrollTop:e(this.hash).offset().top-68},1e3,"easeOutCubic")}),e("#contactForm").length>0&&(e("#contactForm").on("submit",function(t){t.preventDefault(),e("#con_submit").html("<span>Processsing...</span>");var a=e("#f_name").val(),o=e("#l_name").val(),l=e("#email").val(),s=e("#phone").val(),n=e("#con_message").val(),i=0;e(".required",this).each(function(){""==e(this).val()?(e(this).addClass("reqError"),i+=1):e(this).hasClass("reqError")&&(e(this).removeClass("reqError"),i>0&&(i-=1))}),0===i?e.ajax({type:"POST",url:"ajax/mail.php",data:{f_name:a,l_name:o,email:l,phone:s,message:n},success:function(t){e("#con_submit").html("<span>Done!</span>"),e("#contactForm input, #contactForm textarea").val(""),setTimeout(function(){e("#con_submit").html("<span>Send Message</span>")},2500)}}):e("#con_submit").html("<span>Failed!</span>")}),e(".required").on("keyup",function(){e(this).removeClass("reqError")})),e(".color_settings").length>0){var i=!0;e(".switch-btn").on("click",function(t){t.preventDefault(),i?(e(this).addClass("active"),e(".color_settings").animate({left:"0px"},400),i=!1):(e(this).removeClass("active"),e(".color_settings").animate({left:"-240px"},400),i=!0)}),e(".color_preset button").on("click",function(t){t.preventDefault();var a=e(this).attr("id");e(".color_preset button").removeClass("active"),e(this).addClass("active"),e("#colorChange").attr("href","css/presets/"+a+".css")})}}(jQuery);