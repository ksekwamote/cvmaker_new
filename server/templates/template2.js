module.export = ({firstname, surname,email,phoneNumber,dob,address,objective,employer,jobObjective,jobTitle,jstartDate,jendDate,qualities , interests,fieldOfStudy,startDate,gradDate,schoolName,rname,roccupation,remployer,remail,rphone}) =>{
    return 
    `
    <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

/* Create two unequal columns that floats next to each other */
.column {
  float: left;
  padding: 0px;
}

.left {
  width: 13%;
}

.right {
  width: 87%;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
+  padding: 0px;
}
ul{
			display:inline-block;
			padding-right:20px;
	
o87o		}
</style>
</head>
<body style="font-family:Arial; font-size:12px;">

<h1>${firstname} ${surname}</h1>

<hr>

<!---CONTACTS--->
<div class="row">
  <div class="column left">
    <h4 style="background-color:#000; color:#FFF; width:45%;">CONTACT</h4>
  </div>
  <div class="column right">
  	<div style="float:right;">
    <p style="margin:0;"><b>Email:</b> &nbsp; ${email}</p>
    <p style="margin:0;"><b>Website:</b> &nbsp; https://github.com/ksekwamote</p>
    <p style="margin:0;"><b>Phone:</b> &nbsp; ${phoneNumber}</p>
    </div>
  </div>
</div>

<!---OBJECTIVE--->
<div class="row">
  <div class="column left">
    <h4 style="background-color:#000; color:#FFF; width:45%;">OBJECTIVE</h4>
  </div>
  <div class="column right">
  	<div>
		<p>${objective}</p>
    </div>
  </div>
</div>

<!---WORK EXPERIENCE--->
<div class="row">
  <div class="column left">
    <h4 style="background-color:#000; color:#FFF; width:45%;">WORK EXPERIENCE</h4>
  </div>
       <!------WORK----->
  <div class="column right">pp
  		<div class="column left" style="width:75%;">    		
                <p><b>${employer}</b></p>
        <p>${jobTitle}</p>
        <ul style="margin-top:0px;">
                		<li> ${jobObjective}</li>
                <li>${jobObjective}</li>
        </ul>     
        </div>
         <div class="column right" style="width:25%; float:right;">
        		<p><b>${jstartDate} -- ${jendDate}</b></p> 
         </div>
         
         
  </div>
  
 <!----------------QUALIFICATIONS--------------->
<div class="row">
  <div class="column left">
    <h4 style="background-color:#000; color:#FFF; width:45%;">QUALIFICATIONS</h4>
  </div>
  <div class="column right">
	
	 <div id="C">	
			<ul id="list">	
			<li>${qualities}</li>
			<br>
			</ul>
			
			<ul id="list">	
			<li>JAVASCRIPT</li>
			<li>JQUERY</li>
			<li>PHOTOSHOP</li>
			<li>JOOMLA</li>
			<li>WORDPRESS</li>
			<br>
			</ul>

			<ul id="list">	
			<li>Microsoft SQL Server</li>
			<li>HTML</li>
			<li>SQL</li>
			<li>CSS</li>
			<li>ASP.NET</li>
			<br>
			</ul>
		
	 </div>
  		
  </div>
</div>

<!---------------EDUCATION----------------->
<div class="row">
  <div class="column left">
    <h4 style="background-color:#000; color:#FFF; width:45%;">EDUCATION</h4>
  </div>
       <!------WORK----->
  <div class="column right">
  		<div class="column left" style="width:70%;">    		
                <p><b>${fieldOfStudy}</b></p>
        <p>${schoolName}</p>
        <ul style="margin-top:0px;">
                		<li> Advanced System Analysis and Designs</li>
                <li>Networking and Database Management</li>
		<li>Applied Systems Implementation
</li>
        </ul>     
        </div>
         <div class="column right" style="width:30%; float:right;">
        		<p><b>${startDate} -- ${gradDate}</b></p> 
         </div>
         
         
         <div class="column left" style="width:70%;">        		
                <p><b>Bachelor of Science Honors(Computer Science)</b></p>
        <p>University Of Kwazulu-Natal</p>    
		<ul style="margin-top:0px;">
                		<li> Artificial Intelligence</li>
                <li>Cryptography & Network Security</li>
		<li>Machine Learning
</li>
		<li>Optimization and Modelling
</li>
        </ul>            
        </div>
         <div class="column right" style="width:30%; float:right;">       
        		<p><b>January 2018 -- December 2018</b></p>            
         </div>
         
  </div>

<!------------INTERESTS------------>
<div class="row">
  <div class="column left">
    <h4 style="background-color:#000; color:#FFF; width:45%; margin:0;">INTERESTS</h4>
  </div>
  <div class="column right">
  	<div>
		<p style="margin-top:0px;">${interests}</p>
    </div> 
  </div>
</div>

<!------------REFERENCE------------>
<div class="row">
  <div class="column left">
    <h4 style="background-color:#000; color:#FFF; width:45%; margin:0;">REFERENCE</h4>
  </div>
  <div class="column right">
  	<div>
    
    		<p style="margin:0;">${rname} , ${roccupation} at ${remployer}</p>
            	<p style="margin:0;"><b>Email:&nbsp;</b> ${remail}</p>
            	<p style="margin:0;" ><b>Phone:&nbsp;</b> ${rphone}</p>
                
                	<br>
		<p style="margin:0;">Mr Edgar Jembere , Lecture at University Of Kwazulu Natal</p>
            	<p style="margin:0;"><b>Email:&nbsp;</b> jemberee@ukzn.ac.za</p>
            	<p style="margin:0;"><b>Phone:&nbsp;</b> +27 31 260 1035</p>
		
	

	
    </div>
  </div>
</div>

</div>     
               
  </div>
</div>


</body>
    </html>

    `


}