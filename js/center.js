;(function(){
    $(function(){
        // 设置左侧导航栏的点击效果
        $(".center-left-ul li").click(function(){
            $(this).addClass("on"+$(this).index())
                .siblings().each(function(i,item){
                    $(item).removeClass("on"+$(item).index())
                })
            // 同时控制右侧内容的显示和隐藏
            $(".app-div").eq($(this).index()).fadeIn().siblings().hide();
        });
        // 设置鼠标的移入移出的效果
        // $(".rem-app-ul li").hover(function(){
        //     $(this).find(".hover-details").stop().slideDown();
        // },function(){
        //     $(this).find(".hover-details").stop().slideUp("fast");
        // });
        
        // 设置全部应用选项卡界面的左右轮播切换
        // 给右边的按钮绑定单击事件
        end(".tj-btn-r",".tj-btn-l",".rem-app-ul-fa1");
        end(".mf-btn-r",".mf-btn-l",".rem-app-ul-fa2");
        end(".sf-btn-r",".sf-btn-l",".rem-app-ul-fa3");
        function end(ele1,ele2,ele3){
            $(ele1).click(function(){
                // 控制胶卷的移动
                $(ele3).stop().animate({ "left": -745});
                // 让右边的按钮变灰，同时左按钮颜色加深
                // 初始位置的按钮颜色，只有两个列表
                // .app-btn-left{
                //     background: url(../images/app_slide_btn.png) no-repeat 0 -26px;
                // }
                // .app-btn-right{
                //     background: url(../images/app_slide_btn.png) no-repeat -29px 0;
                // }
                $(this).css("background-position","-29px -26px")
                $(ele2).css("background-position","0 0")
            })
            // 给左按钮绑定单击事件
            $(ele2).click(function(){
                // 控制胶卷的移动
                $(ele3).stop().animate({ "left": 0});
                // 让左边的按钮变灰，同时右按钮颜色加深
                $(this).css("background-position","0 -26px")
                $(ele1).css("background-position","-29px 0")
            })
        }
    })
})(jQuery)