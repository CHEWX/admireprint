var items=[],page=0;angular.module("admirePrint",[]),function(e){function t(e,t,a){var t=encodeURIComponent(t),e=encodeURIComponent(e),n='<a href="http://www.facebook.com/sharer.php?u='+t+"&t="+e+'" class="item__share--facebook fa icon-facebook" target="_blank"></a>';return n+='<a href="https://twitter.com/share?url='+t+"&text="+e+"&via="+a+'" class="item__share--twitter fa icon-twitter" target="_blank"></a>'}function a(e){var t,a=Math.round((+new Date-e)/1e3),i=new Array;i[0]=[31536e3,"year"],i[1]=[2592e3,"month"],i[2]=[604800,"week"],i[3]=[86400,"day"],i[4]=[3600,"hr"],i[5]=[60,"min"];var r=0,c=i.length;for(r=0;c>r&&(s=i[r][0],n=i[r][1],0==(xj=Math.floor(a/s)));r++);return t=1==xj?"1 "+n:xj+" "+n+"s",c>r+1&&(s2=i[r+1][0],n2=i[r+1][1],0!=(xj2=Math.floor((a-s*xj)/s2))&&(t+=1==xj2?" + 1 "+n2:" + "+xj2+" "+n2+"s")),t+=" ago"}PinterestFeedObject=function(e,t){this.create(e,t)},e.extend(PinterestFeedObject.prototype,{create:function(n,i){var r=e.extend(!0,this.defaults,i),s=r.id.split("/"),c=s.length>1?"/rss":"/feed.rss",o="http://www.pinterest.com/"+r.id,d="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num="+r.results+"&callback=?&q="+encodeURIComponent(o+c);jQuery.ajax({url:d,cache:!0,dataType:"jsonp",success:function(n){n=n.responseData.feed.entries,e.each(n,function(n,i){if(n<r.results){var s=i.publishedDate,c=e("img",i.content).attr("src"),c=c.replace("236x","736x"),o='<img src="'+c+'" alt="" />',d='<article class="item">'+o+'<a href="'+i.link+'" class="item__link" target="_blank"></a><div class="item__content"><div class="item__text">'+i.contentSnippet+"</div>";d+='<div class="item__share"> '+t(i.contentSnippet,i.link,r.tweetId)+"</div>",s=""!=s?d+='<div class="item__date">Added '+a(new Date(s).getTime())+"</div></div></article>":""}items.push(d)}),e(".app .preloader").fadeOut(function(){var t=items.slice(0,10);e(".app").append(t).hide(),e(".app > *").hide(),e(".app").show(),e(".app .item").each(function(t){e(this).delay(250*t).fadeIn("250")})}),page++},complete:function(){e(n).click(function(t){if(e(this).parent().hasClass("section-share")){var a=e(this).attr("href");return window.open(a,"sharer","toolbar=0,status=0,width=626,height=436"),!1}external&&(this.target="_blank")})}})}}),e.fn.dcPinterestFeed=function(t,a){var n={};return this.each(function(){var i=e(this);n=i.data("pinterestfeed"),n||(n=new PinterestFeedObject(this,t,a),i.data("pinterestfeed",n))}),n}}(jQuery);