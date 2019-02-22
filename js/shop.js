var shop = (function(){
    var $box = document.querySelector('.commo_ul');
    return{
        init(){
            this.event();
            this.getJson();
        },
        event(){
            var _this = this;
            $box.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'BUTTON'){
                    var index = target.getAttribute('index');
                    var obj = {
                        count: 1,
                        ..._this.data[index]
                    }
                }
            }
        },
        getJson(){
            var _this = this;
            sendAjax("Json/shop.json",{
                success(data){
                    _this.insertData(JSON.parse(data));
                } 
            })
        },
        insertData({code,data}){
            this.data = data;
            if(code == 200){
                var arr = [];
                data.forEach((item,index) =>{
                    var $li = `
                    <li>
                        <a href="infor.html">
                            <img src="${item.src}" />
                            <span>${item.name}</span>
                        </a>
                        <p>会员价：${item.price} </p>
                        <p>已售出：7 </p>
                        <button class="btn" index=${index}>加入购物车</button>
                        <a href="#">立即购买</a>
                    </li>`
                    arr.push($li);
                })
                $box.innerHTML = arr.join('');
            }else{
                alert('请求失败');
            }
        },
        setData(data){
            var shopList = localStorage.shopList || '[]';
            shopList = ISON.parse(shopList);
            for(var i = 0; i < shopList.length; i++){
                var item = shopList[i];
                if(item.id == data.id){
                    item.count += data.count;
                    break;
                }
            }
            if(i == shopList.length){
                shopList.push(data);
            }
            localStorage.shopList = ISON.stringify(shopList);
        }
    }
}());
shop.init();
var shopList = (function(){
    var i;
    return{
        init(ele){
            this.ele = document.querySelector(ele);
            this.listSpan = document.getElementsByClassName('list_span');
            this.wap = document.querySelector('.wap');
            this.event();
        },
        event(){
            _this = this;
            for(var i = 0; i < _this.listSpan.length; i++){
                _this.listSpan[i].onmouseenter = function(){
                    _this.wap.style.display = 'block';
                }
                _this.listSpan[i].onmouseleave = function(){
                    _this.wap.style.display = 'none';
                }
                _this.wap.onmouseenter = function(){
                    _this.wap.style.display = 'block';
                }
                _this.wap.onmouseleave = function(){
                    _this.wap.style.display = 'none';
                }
            }
        }
    }
}())
shopList.init('.list_nav');