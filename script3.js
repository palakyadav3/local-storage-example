let name1=document.getElementById("Name");
let age=document.getElementById("Age");
let button= document.getElementById("button");
let emessage=document.getElementById("Error");
let emessage1=document.getElementById("Error1");
let a=[];

function add(){
    if ((name1.value.trim()=="" || name1.value==null) && (age.value=='' || age.value==null)){
        emessage.innerHTML="Error: Enter the Name !";
        emessage1.innerHTML="Error: Enter the Age!";
    }
    else if((name1.value!=="" || name1.value!==null)&&(age.value=='' || age.value==null)) {
        emessage.innerHTML="";
        emessage1.innerHTML="Error: Enter the Age!";
        
    }
    else if ((name1.value=="" || name1.value==null)&&(age.value!=='' || age.value!==null)){
        emessage.innerHTML="Error: Enter the Name !";
        emessage1.innerHTML="";
        
    }
    else{ 
        emessage.innerHTML="";
        emessage1.innerHTML="";
        let UniqId=1;
        if(a.length==0){
            
            a.push({id:UniqId,
                name:name1.value,
                Age:age.value});
                
             localStorage.setItem("details",JSON.stringify(a));
        }
        else {
            const already=a.some(arr=>arr.name===name1.value)
            if (already){
                emessage.innerHTML="Name cannot be duplicate";
                name1.value="";
                age.value="";
                return false;
            }
            else
            {
                let max=0;
                for(let i=0;i<a.length;i++){
                    let a_id=a[i].id;
                    if(max<a_id){
                        max=a_id;
                    }
                }
                UniqId=max;
                UniqId++;
                a.push({id:UniqId,
                    name:name1.value,
                    Age:age.value})
                      
            localStorage.setItem("details",JSON.stringify(a));
            
            }
    }
        name1.value="";
        age.value="";
        let Trow=document.createElement('tr');    
        let tid=document.createElement('td');
        let tname=document.createElement('td');
        let tage=document.createElement('td');

        let tdelete=document.createElement('td');
        let createbutton=document.createElement('button');
        createbutton.innerText='delete';
        const tBody=document.getElementById('tbody');
        tdelete.append(createbutton);
        Trow.append(tid,tname,tage,tdelete);
        tBody.append(Trow);
    
        for(let i=a.length-1;i<a.length;i++){
            
            tid.append(a[i].id);
            tname.append(a[i].name);
            tage.append(a[i].Age);
        }
    name1.value="";
    age.value="";
    
    tdelete.addEventListener("click",deletes);

    function deletes(event) {
        let tr=event.target.parentNode.parentNode;
        let tid_table= tr.childNodes[0].innerHTML;
        for(let i=0;i<a.length;i++){
            if(tid_table==a[i].id){
                a.splice(i,1);
            }
        }
        tr.parentNode.removeChild(tr);
        console.log(tr);
        localStorage.setItem("details",JSON.stringify(a));   
         
    }
    
    }
}
button.addEventListener("click",add);
let pal=JSON.parse(localStorage.getItem("details"));
if(pal!==null ){
    for(let i=0;i<pal.length;i++){
        let Trow=document.createElement('tr');
        let tid=document.createElement('td');
        let tname=document.createElement('td');
        let tage=document.createElement('td');

        let tdelete=document.createElement('td');
        let createbutton=document.createElement('button');
        createbutton.innerText='delete';
        const tBody=document.getElementById('tbody');

        tdelete.append(createbutton);
        Trow.append(tid,tname,tage,tdelete);
        tBody.append(Trow);
        
        tid.append(pal[i].id);
        tname.append(pal[i].name);
        tage.append(pal[i].Age);

        tdelete.addEventListener("click",deletes); 
    }
    a=pal;
    
    console.log(a); 
}
function deletes(event) {
    let tr=event.target.parentNode.parentNode;
    let tid_table= tr.childNodes[0].innerHTML;
    for(let i=0;i<a.length;i++){
        if(tid_table==a[i].id){
            a.splice(i,1);
        }
    }
    tr.parentNode.removeChild(tr);
    console.log(tr);
    localStorage.setItem("details",JSON.stringify(a));   
     
}


    