interface Person{
    Name:string;
    Age:number;
}
class School{
    public lists:Student[]=[];
    schoolName:string="abc";
}
class Student extends School implements Person{

    constructor(public Name:string,public Age:number,public Class:string,public FavSubject:string,public SchoolName:string){
        super();
    }
}

var lists:Student[]=[];

function startGame(){
  
       const input = <HTMLInputElement>document.getElementById('name');
        const input2 = <HTMLInputElement>document.getElementById('class');
        const input3 = <HTMLInputElement>document.getElementById('age');
        const input4 = <HTMLInputElement>document.getElementById('favsubject');
        const input5 = <HTMLInputElement>document.getElementById('schoolName');
        var stud = new Student(input.value,Number(input4.value),input2.value,input3.value,input5.value);
         


        
            if( input.checkValidity() && input2.checkValidity()  && input3.checkValidity() && input4.checkValidity()  && input5.checkValidity() ){
            lists.push(stud);
            console.log(lists.length);
           console.log(stud);
        
            }else{
           
                if( !input.checkValidity() ){
                    alert('Please fill the correct Name...');

                    
                }
                if ( !input2.checkValidity() ) {
                    alert('Please fill the corrct Class.');
                    
                }
                 if( !input3.checkValidity()){
                    alert('Please fill the correct Age...');
                    
                }
                if(!input4.checkValidity() ){
                    alert('Please fill the correct Subject Name...');
                    
                }
                 if( !input5.checkValidity()){
                    alert('Please fill the correct School Name...');
                   
        
                }

        }
    }
        




   
  

   function logPlayer(name:string){
       console.log('Name game starting for player:',name);
   }


document.getElementById('searchbutton')?.addEventListener('click',evt =>{
    const input6 = <HTMLInputElement>document.getElementById('search');
    var regSchool =new RegExp('[A-Za-z ]+');
    if(regSchool.test(input6.value)===false){
        alert('School Name is in  Wrong Format.');
    }
})

    function updateList():void{
        const input6 = <HTMLInputElement>document.getElementById('search');
        var regSchool =new RegExp('[A-Za-z ]+');
        if(regSchool.test(input6.value)===false){
            alert('School Name is in  Wrong Format.');
        }else{
            let output:string ='<h2>List</h2>';

            // console.log(lists.length);
            for(let index=0;index<lists.length;index++){
                const student:Student=lists[index];
            if(input6.value===lists[index].SchoolName){
                output+='<li>';
                output+=(lists[index]).Name;
                output+='</li>';
            }
               
            }
    
            const displayList:HTMLElement=<HTMLElement>document.getElementById('displaylist');
            displayList.innerHTML=output;
        }
        
        
    }
   

 