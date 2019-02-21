var navFixed = (function(){
    return{
        init(ele){
            this.ele = document.querySelector(ele);
            this.nav_t = this.ele.offsetTop;
            this.nav_02 = document.querySelector('.nav_02');
            this.classify = document.querySelector('.classify');
            this.nav_03 = document.querySelector('.nav_03');
            this.navLi = this.nav_03.children;
            this.event();
        },
        event(){
            _$this = this;
            window.onscroll = function(){
                nav_l = _$this.ele.offsetLeft;
                scrollT = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollT >= _$this.nav_t){
                    _$this.ele.style.position = "fixed";
                    _$this.ele.style.top = 0;
                    _$this.ele.style.left = nav_l + "px";
                }else{
                    _$this.ele.style.position = "relative";
                    _$this.ele.style.left = 0;
                }
            }
            _$this.classMouseenter();
            _$this.classMouseleave();
            _$this.popMouseenter();
            _$this.popMouseleave();
        },
        classMouseenter(){
            _$this.classify.onmouseenter = function(){
                _$this.nav_02.style.display = 'block';
            }
        },
        classMouseleave(){
            _$this.classify.onmouseleave = function(){
                _$this.nav_02.style.display = 'none';
            }
        },
        popMouseenter(){
            _$this.nav_02.onmouseenter = function(){
                _$this.nav_02.style.display = 'block';
            }
        },
        popMouseleave(){
            _$this.nav_02.onmouseleave = function(){
                _$this.nav_02.style.display = 'none';
            }
        }
    }
}());
navFixed.init('.nav');