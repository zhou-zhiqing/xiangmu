var bannerSwiper = (function(){
    return {
        init(ele){
            this.ele = document.querySelector(ele);
            this.bannerBox = document.querySelector('.banner');
            this.orderBox = document.querySelector('.order');
            this.bannerImg = this.bannerBox.children;
            this.orderImg = this.orderBox.children;
            this.index = 0;
            this.event();
        },
        event(){
            _this = this;
            setInterval(autoPaly,3000);
            function autoPaly(){
                
                for(let i = 0; i < _this.bannerImg.length; i++){
                    animate({
                        ele:_this.bannerImg[i],
                        param:{
                            opacity:0
                        }
                    });
                }
                if(_this.index == _this.bannerImg.length-1){
                    _this.index = 0;
                }else{
                    _this.index++;
                }
                animate({
                    ele:_this.bannerImg[_this.index],
                    param:{
                        opacity:100
                    }
                });
            }
        }
    }
}());
bannerSwiper.init('#banner');