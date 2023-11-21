import { questions } from "../data.js";

//My assumptions
// Marks for each hard question : 15
// Marks for each medium question : 10
// Marks for each easy question : 5

const marks = {
  easy: 5,
  medium: 10,
  Hard: 15,
};

export const questionPaper = (req, res) => {
  let { totalMarks, ...difficultyDistribution } = req.body;
  console.log(difficultyDistribution);
  let questionPaper = [];

  try {
    let leftMarks = 0; // marks for which we cant assign the question of a particular difficulty
    //  Example : medium : 45 marks    leftMarks= 45%10 = 5 marks
    //  we cann't assigne medium question for 5 marks;

    if (!totalMarks) {
      console.error(`Total Marks field must not be empty!!!`);
      return;
    }

    let totalPercentage = 0;
    for (const percentage in difficultyDistribution) {
      totalPercentage += difficultyDistribution[percentage];
    }
    if (totalPercentage != 100) {
      console.log(
        `Total Percentage :${totalPercentage} , Sum of percentage of all the difficulty must be equal to 100%`
      );
      return;
    }

    for (const difficulty in difficultyDistribution) {
      const percentage = difficultyDistribution[difficulty];
      const requiredMarks = Math.round((totalMarks * percentage) / 100);
      const requiredQuestion = Math.floor(
        (requiredMarks + leftMarks) / marks[difficulty]
      );
      leftMarks = requiredMarks % marks[difficulty];

      console.log(percentage, requiredMarks);

      const questionsOfDifficulty = questions.filter(
        (question) => question.Difficulty == difficulty
      );

      if (requiredQuestion > questionsOfDifficulty.length) {
        console.error(`Insufficient questions of difficulty ${difficulty}`);
        return;
      }
      // console.log(questionsOfDifficulty);

      // Shuffle the array to randomize the selection
      questionsOfDifficulty.sort(() => Math.random() - 0.5);
      const no_of_question = Math.min(
        questionsOfDifficulty.length,
        requiredQuestion
      );
      console.log(no_of_question);

      const listOfQuestions = questionsOfDifficulty
        .sort(() => Math.random() - Math.random())
        .slice(0, no_of_question);

      questionPaper.push(listOfQuestions);
    }
    // // Shuffle the entire question paper to randomize the order
    questionPaper = questionPaper.flat();
    questionPaper.sort(() => Math.random() - 0.5);

    res.status(200).json(questionPaper);
    // res.send(questionPaper);
  } catch (error) {
    console.log(error.message);
  }
};
