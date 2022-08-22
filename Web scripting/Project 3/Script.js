
var Project3 = (function(){


    
	var classes = null;

    return {

		start: function () {
			// call function for the ajax 
			var that = this;

			if (classes === null) {

				//alert("Getting current rates ...");

			    // gets rates from URL
				$.ajax({
					url:'http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/search?subjectid',
					method: 'GET',
					dataType: 'json',
					success: function(response){
						//alert(JSON.stringify(response));
						//classes = response;
						
						that.init(response);
					}
				})
			}

			else {

				//alert("Already have classes!");
				this.init();

			}

		},

        init: function (json) {

            //alert(JSON.stringify(json));

            var html = " ";
			var sub	= " ";
 			var nums = " ";
			var desc = " ";
			var inst = " ";
            for (var i = 0; i < json.length; i++) {


                var course = json[i++];
				
				
               
                html += "<option value =' " +  course.scheduletype + " '>" + course.scheduletype  + "</option>";
                sub +=  "<option value =' " +  course.subjectid + " '>" + course.subjectid  + "</option>";
				nums +=  "<option value =' " +  course.num + " '>" + course.num  + "</option>";
				desc +=  "<option value =' " +  course.description + " '>" + course.description  + "</option>";
				inst += course.instructor;
            }
    		
            $("#schedule").html(html);
            $("#subject").html(sub);
			$("#num").html(nums);
			$("#desc").html(desc);
          // +  + "</p>" "<p>" + "<p>" +
        },

		convert: function() {

		var targetSubject = $("#subject").find(":selected").val();
		var targetdesc =  $("#desc").find(":selected").val();
		var targetschedule =  $("#schedule").find(":selected").val();
		var targetnum =  $("#num").find(":selected").val();
		var targetStime = $("#sTime").find(":selected").val();
		var targetMtime = $("#mTime").find(":selected").val();
		var targetam = $("#am").find(":selected").val();
		var targetFtime = $("#fTime").find(":selected").val();
		var targetmitime = $("#miTime").find(":selected").val();
		var targetpm = $("#pm").find(":selected").val();	
		//var targetdays = " " ;
		if ($("#Monday").is(":checked")) {
			 var tMon = $("#Monday").val();
		}
			else {
			tMon = " ";
			}
		if ($("#Tuesday").is(":checked")) {
			var tTues = $("#Tuesday").val();
		   }
	   		else {
		     tTues = " ";
	  		 }
	    if ($("#Wednesday").is(":checked")) {
			var tWed = $("#Wednesday").val();
   			}
   			else {
		 		tWed = " ";
		   	}
   	    if ($("#Thursday").is(":checked")) {
				var tThurs = $("#Thursday").val();
			}
			else {
			 tThurs = " ";
			}
		if ($("#Friday").is(":checked")) {
		 		var tFri = $("#Friday").val();
			}
		   else {
				 tFri = " ";
		   	}

		
		
		$("#output").html( targetdesc + "|" + targetSubject + " | " + targetnum + "|"+ targetschedule
		+ "|" + targetStime + ":"+ targetMtime + " " + targetam + "|" + targetFtime + ":" + targetmitime + " "+ targetpm + "|" + tMon + " " +  tTues
		+ " " +  tWed + " " +  tThurs + " " +  tFri);


		},

		onClick: function (){

			this.convert();
		}


    }
    })();