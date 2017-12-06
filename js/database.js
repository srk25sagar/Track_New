  //prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         
         const sagarData = [
           // { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
           // { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
         ];
		 const users = [
           // { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
           // { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
         ];
         var db;
         var request = window.indexedDB.open("newDatabase", 1);
         
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: "+ db);
         };
         
         var id=1; 

         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("sagarData", {keyPath: "id", autoIncrement:true });
            
            for (var i in sagarData) {
               objectStore.add(sagarData[i]);
            }

         }

         function add() {
		
          var Ordername = document.getElementById("selecttag").value;
           var Form = document.getElementById("selecttag1").value;
					var To = document.getElementById("selecttag2").value;
					var Ordertype = document.getElementById("selecttag3").value;
					var FromAddrees = document.getElementById("selecttagadd").value;
					var ToAddress = document.getElementById("selecttagadd1").value;
					var Itemcount = document.getElementById("selecttagitem").value;
				
            var request = db.transaction(["sagarData"], "readwrite")
            .objectStore("sagarData")
			
            .add({  Ordername:Ordername, Form:Form, To:To ,Ordertype:Ordertype,FromAddrees:FromAddrees, ToAddress :ToAddress, Itemcount:Itemcount});
            //id1++;
			
            request.onsuccess = function(event) {
               alert("added to your database.");
          
            };
            
            request.onerror = function(event) {
               alert("Unable to add data\r\n aready exist in your database! ");
            }
         }
		 
function UnLoadWindow() {    
			var request = db.transaction(["sagarData"], "readwrite")
                .objectStore("sagarData")
                .clear();	
        }
 window.onbeforeunload = UnLoadWindow;
 