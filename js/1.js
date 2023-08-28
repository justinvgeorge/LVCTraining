function jfun2()
{
    var name=form1.name.value;
    var designation=form1.designation.value;
    var email=form1.email.value;
    if(name=="")
    {
        alert("Enter Name");
        form1.name.focus;
        return false;
    }
    else if(email=="")
    {
        alert("Enter Email");
        form1.email.focus;
        return false;
    }
    else
    {
        return true;
    }
    alert(name)
    return true
}

function marks()
 {
    alert("hello")
    var maths=parseInt(document.getElementById("maths").value);
    var science=parseInt(document.getElementById("science").value);
    var computer=parseInt(document.getElementById("computer").value);
    alert(maths+science+computer);
    var result=maths+science+computer
    document.getElementById('result').innerHTML= result;
    document.getElementById('percent').innerHTML= (result/300)*100;
}

function loading()
{
    window.open("instruction.html","","width=300,height=200");
}

function coursePopUp()
{
    var course=document.getElementById("popUpCourse").value;
    if(course=="mern")
    {
        window.open("https://www.mongodb.com/mern-stack","","width=300,height=200");
    }
    if(course=="mean")
    {
        window.open("https://www.mongodb.com/mean-stack","","width=300,height=200");
    }   
    if(course=="mevn")
    {
        window.open("https://www.geeksforgeeks.org/what-is-mevn-stack/","","width=300,height=200");
    } 
}

function subscribe()
{
   var email= prompt("Enter Email");
   while(email=="")
   {
    var email=prompt("Please enter Email")
   }
   var country=prompt("Enter Country")
   if(country.toLowerCase()=="india")
   {
    alert("You are applicable for 50% off")
   }
   else
   {
    alert("thank you")
   }


}

function radioAnswer()
{
    //alert("in the function")
    var ans= document.getElementsByName('r1')
    var marks=0;
    for(i=0;i<3;i++)
    {
        if(ans[i].checked)
        {
            if(ans[i].value=='a')
            {
                alert(ans[i].value)
                marks=marks+2;
            }
        }
    }
    
    ans=document.getElementsByName('r2');
    for(i=0;i<3;i++)
    {
        if(ans[i].checked)
        {
            if(ans[i].value=='1')
            {
                alert(ans[i].value)
                marks=marks+2;
            }
        }
    }
    alert("your marks is: "+marks);
}
