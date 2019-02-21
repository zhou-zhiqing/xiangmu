var bannerSwiper = (function(){
    return {
        init(ele){
            this.ele = document.querySelector(ele);
            this.bannerBox = document.querySelector('.banner');
            this.orderBox = document.querySelector('.order');
            this.bannerImg = this.bannerBox.children;
            this.orderImg = this.orderBox.children;
            for(let i = 0; i < this.orderImg.length; i++){
                this.orderImg[i].index = i;
            }
            this.pointer = 0;
            this.event();
        },
        event(){
            _this = this;
            setInterval(autoPaly,2000);
            function autoPaly(){
                for(let i = 0; i < _this.bannerImg.length; i++){
                    animate({
                        ele:_this.bannerImg[i],
                        param:{
                            opacity:0
                        }
                    });
                    _this.orderImg[i].className = '';
                }
                if(_this.pointer == _this.bannerImg.length-1){
                    _this.pointer = 0;
                }else{
                    _this.pointer++;
                }
                animate({
                    ele:_this.bannerImg[_this.pointer],
                    param:{
                        opacity:100
                    }
                });
                _this.orderImg[_this.pointer].className = 'round';
            }
            _this.orderBox.addEventListener('click',function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'LI'){
                    _this.index = target.index;
                    _this.showImage();
                }
            },false)
        },
        showImage(){
            _this.pointer = _this.index - 1;
        }
    }
}());
bannerSwiper.init('#banner');