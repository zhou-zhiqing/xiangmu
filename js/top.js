var smallSwiper = (function(){
    return {
        init(ele){
            this.ele = document.querySelector(ele);
            this.index = 0;
            this.liAll = this.ele.children;
            this.event();
        },
        event(){
            $this = this;
            setInterval(animatePlay,2000);
            function animatePlay(){
                if($this.index == $this.liAll.length-1){
                    $this.ele.style.left = 0;
                    $this.index = 1;

                }else{
                    $this.index++;
                }
                var obj = {
                    ele:$this.ele,
                    param:{
                        left:-$this.index*210
                    },
                    speedTime:20
                }
                animate(obj);
            }
        }
    }
}());
smallSwiper.init('.h_right_ban');