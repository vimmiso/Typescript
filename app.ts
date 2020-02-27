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
   
    // console.log(lists.length);
       const input = <HTMLInputElement>document.getElementById('name');
        const input2 = <HTMLInputElement>document.getElementById('class');
        const input3 = <HTMLInputElement>document.getElementById('favsubject');
        const input4 = <HTMLInputElement>document.getElementById('age');
        const input5 = <HTMLInputElement>document.getElementById('schoolName');
        var stud = new Student(input.value,Number(input4.value),input2.value,input3.value,input5.value);
         

        // // const input8 = <HTMLInputElement>document.getElementById('schoolName');
        let eSchool = input5.value;
        let eAge = (input4.value).toString();
        let eClass= input2.value;
        let eName = input.value;
        let eFav = input3.value;
        
        var regName = new RegExp('[A-Za-z ]+');
        var regSchool =new RegExp('[A-Za-z ]+');
        var regAge = new RegExp('[0-9]+');
        var regClass = new RegExp('[A-Za-z0-9 ]+');
        var regFav = new RegExp('[A-Za-z ]+');

        
        if( regName.test(eName)===true&& regFav.test(eFav)===true && regSchool.test(eSchool)===true && regAge.test(eAge)===true && regClass.test(eClass)===true){
            
            lists.push(stud);
            console.log(lists.length);
           console.log(stud);
        }else{
            if(regName.test(eName)===false){
                alert('Please fill the correct Name...');
            }
            if (regClass.test(eClass)===false) {
                alert('Please fill the corrct Class.');
            }
             if(regAge.test(eAge)===false){
                alert('Please fill the correct Age...');
            }
            if(regSchool.test(eFav)===false){
                alert('Please fill the correct Subject Name...');
    
            }
             if(regSchool.test(eSchool)===false){
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
            // alert('School Name is in  Wrong Format.');
        }else{
            let output:string ='<h2>List</h2>';

            // console.log(lists.length);
            for(let index=0;index<lists.length;index++){
                const student:Student=lists[index];
            if(input6.value===lists[index].SchoolName){
                output+='<h4>';
                output+=(lists[index]).Name;
                console.log((lists[index]).Name);
                output+='</h4>';
            }
               
            }
    
            const displayList:HTMLElement=<HTMLElement>document.getElementById('displaylist');
            displayList.innerHTML=output;
        }
        
        
    }
   

 