var navFixed = (function(){
    return{
        init(ele){
            this.ele = document.querySelector(ele);
            this.nav_l = this.ele.offsetLeft;
            this.nav_t = this.ele.offsetTop;
            this.event();
        },
        event(){
            _$this = this;
            window.onscroll = function(){
                scrollT = document.documentElement.scrollTop || document.body.scrollTop;
                console.log(scrollT);
                if(scrollT >= _$this.nav_t){
                    _$this.ele.style.position = "fixed";
                    _$this.ele.style.top = 0;
                    _$this.ele.style.left = _$this.nav_l + 'px';
                }else{
                    _$this.ele.style.position = "relative";
                    _$this.ele.style.left = 0;
                }
            }
        }
    }
}());
navFixed.init('.nav');