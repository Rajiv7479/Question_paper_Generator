# Question_paper_Generator : Backend Project
      Tech stack used : Javascript
      

## Setup
    
     1. clone the repository : git clone
     2. download the dependencies : npm install
     3. run the application : num start
     4. start postman application
     5. send a POST request to this url (http://localhost:3000/questions) to get the requied question paper
      before sending request set body in postman as shown below:
    
      
  ![Screenshot 2023-11-21 112220](https://github.com/Rajiv7479/Question_paper_Generator/assets/76935061/fb380427-8d68-4046-891f-0aa7dd95709f)
  
## Assumptions
    1. Question will be of difficulty : Easy ,Medium ,Hard
    2. Marks distribution for each question will be :
      Easy : 5 Marks ,
      Medium: 10 Marks ,
      Hard : 15 Marks ,
    3. Sample questions are  generated randomly

## Question Schema

    {
     Question:string,
     Subject:string,
     Topic:string,
     Difficulty:string,
     Marks:Number
    }

    Example : {“What is the speed of light”, “Physics”, “Waves”, “Easy”, 5}

## Query Formate

     {
      "totalMarks":100,   
      "Hard":30,          // 30%
      "medium":50,        // 50%
      "easy":20           // 20%
    }
    
    Explanation: generate a question paper of 100 marks total of which 20% (ie, 20 marks) 
    worth of questions should have the Difficulty = Easy, 50% having  Difficulty = Medium
    and 30% having Difficulty = Hard

      
## Edge Cases
    1. if totalMarks field is missing then throw error "Total marks field is required"
    2. Sum of percentage of all the difficulty must be equal to 100%
    3. if number of question of a particular difficulty exist in data is smaller than
       the number of question of that difficulty required in question paper then throw
       error " No. question of difficulty : {Difficulty} is lesser then required number "
       Example :
         required No. of question of difficulty Hard : 30
         No. of question in data of difficulty Hard : 25

         error thrown : " No. question of difficulty : Hard is lesser then required number "
       
      

