// Code your solution here
const drivers =[{name:"Bobby", hometown:"Tampa Bay"},        
                {name: "Sammy", hometown:"iten"},
                {name:"Sarah", hometown:"isiolo"},  
                {name: "Sally", hometown:"isiolo"}, 
                {name: "Annette", hometown:"isiolo"}, 
                {name: "Sarah", hometown:"isiolo"}, 
                {name: "bobby", hometown:"Pittsburgh"}, 
            ];
     
        function findMatching(drivers,name){
            return drivers.filter(driver => driver.toLowerCase()=== name.toLowerCase());
        } 
        
        function fuzzyMatch(drivers,letters){
            return drivers.filter(driver => driver.startsWith(letters));
        } 
        
        function  matchName(drivers,name){
            return drivers.filter(driver => driver.name === name);
        }