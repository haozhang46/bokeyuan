;jQuery.fn.extend({
	change:function(zhenze) {	
          var x=zhenze.test($(this).val());
      		// console.log(x)
      		// console.log($(this).next().find(".no")[0]);
      		if(x==true){
      			$(this).next().find(".suc").show().siblings().hide();
      			// console.log($("#email .suc")[0]);
      			// console.log(1);
     		 }
      		if(x==false){
      			$(this).next().find(".gantan").show().siblings().hide();
      		}
      		// console.log($(this).val());
      		// if(this.val()==""){
      		// 	$(this).next().find(".no").show().siblings().hide();
      		// }
         var conf=$("#pwd input").val();
	},
	blur_b:function(){
		  this.on("blur",function(){
			// console.log(1);
      // console.log($(this).val());
			if($(this).val()==""){
          // console.log(2);
				  $(this).next().find(".no").show().siblings().hide();	
			  }
			  })
			},

   confirm_b:function(){
    
    console.log(conf);
    this.on("input",function(){

      if($(this).val()==conf){
        console.log(1);
        $(this).next().find(".suc").show().siblings().hide();
      }
      if($(this).val()!=conf){
        $(this).next().find(".gantan").show().siblings().hide();
      }
    })
    return this;
   },
	
	
})