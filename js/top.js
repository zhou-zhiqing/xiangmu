var smallSwiper = (function(){
    return {
        init(ele){
            this.ele = document.querySelector(ele);
            this.index = 0;
            this.liAll = this.ele.children;
            this.event();
            _this = this;
        },
        event(){
            setInterval(animatePlay,2000);
            function animatePlay(){
                if(_this.index == _this.liAll.length-1){
                    _this.ele.style.left = 0;
                    _this.index = 1;

                }else{
                    _this.index++;
                }
                var obj = {
                    ele:_this.ele,
                    param:{
                        left:-_this.index*210
                    },
                    speedTime:20
                }
                animate(obj);
            }
        }
    }
}());