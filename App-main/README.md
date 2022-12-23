# App

Introducing EduTracker, the ultimate tool to help fast track your success through school! 

Created using the Angular CLI and libraries. 

Hosted at http://edutracker.eastus.cloudapp.azure.com:4200/home using an Azure Virtual Machine. 

## Inspiration:
As students that spend most of our day at school and study whenever we get a chance, we depend on good grades in order to judge our academic success. However, unlike a physical manifestation, our future grades are very difficult to predict. With no guarantees as to what our future marks may be, we are left with stress and anxiety until we wait until long after the exam or test is completed to receive our marks. After being left in the dark for so long, this built up stress can lead to mental health issues. We wanted to solve this issue by giving a way for students to not have to worry about their test scores round the clock, and be able to study more effectively. In order to ease the burden of students and help improve their in person learning experience by helping them study, we created EduTracker.

## What it does
EduTracker is a real time prediction and cheat sheet to mitigating the stress involved in schoolwork and fast tracking your way to success with in-person learning. Our real time prediction tool uses state of the art machine learning models, trained with a dataset with hundreds of thousands of student grades, to help students accurately predict their next grades. EduTracker also doubles as a resource hub, providing collaborative and note-taking learning tools to augment the in person learning experience. We also provide tutoring support for students in need of guidance for studying. 

## How we built it
For our front-end, we used the Angular framework (wrapped in HTML/CSS) along with a few libraries such as Angular Flex-Layout and Angular Material. For the back-end, we used typescript to relay messages across the full stack, and to communicate with the machine learning API, a fastAPI endpoint deployed using Uvicorn. Both the web application and the API endpoint were deployed on an Azure virtual machine for ease of access. 
Within our front-end team, we worked on providing the best user experience for students to allow them to easily find resources to help them do well in school. We went with a minimalistic design to remove the stress of accessing excessive pages and links so that users can spend less time stressing and spend more time studying effectively. 
In order to integrate machine learning into our project, we first looked at papers outlining mark prediction algorithms. We then compiled a comprehensive dataset composed of hundreds and thousands of student scores, with features of their previous and latest scores. We performed an exploratory data analysis and feature regression on the dataset, and trained state of the art pretrained machine learning models provided by Tensorflow and Scikit-learn. We fit the models using large amounts of data in order to create high accuracy and RMSE and MAE scores (the main metrics used for this problem). Finally, we saved our best model, and used it for inference in our API endpoint. We also used an imputation algorithm to deal with any missing or extra values in our input features, in case the result shape didn’t match up with the shape of the trained model. 

## Challenges we ran into
Learning Angular as a frontend framework had quite a steep learning curve, since it had quite different syntax, styling, and components to native HTML/CSS/JS, but we were able to learn it quite effectively, and even use Angular libraries quite well. We had some issues connecting the front end and back end, and solved them with streamlining Typescript with the rest of the stack. 
We also had to figure out how to set up a FastAPI endpoint for inference related to our machine learning model, and how to connect that to the initial web application. We figured out how to make HTTP request calls, but faced a CORS error when trying to query from the site. We worked around this by using a CORS chrome extension to mitigate any CORS middleware errors coming from the web app. While performing an exploratory data analysis of the dataset, we had trouble tuning the dataset to ensure that scores wouldn’t be skewed in an unfair way within the realm of reasoning. We also had to make sure that our scores were distributed correctly and outliers did not skew our data too much. Finally, we had challenges with training our machine learning model to have high accuracy and low errors (RMSE and MAEs). Thus, we used cross validation and feature regression to improve our accuracies, but there is still more that we can do to perform more accurate predictions. 

## Accomplishments that we're proud of
Through this project we learnt to overcome certain challenges and to be quick on our feet. During our brainstorming session we realized that our project lacked a unique element and was much too simple. After a long discussion, our team came up with the idea of incorporating a grade predictor that could be useful in terms of motivating students and helping them figure out where they lack. This project helped us think outside the box and come up with a solution that isnt readily available in common websites. In addition to that, our team was able to explore and learn how to do back end programming. Not many of us were experienced with languages such as Angular and Typescript. However, with the help of this project, we were able to expand on our coding knowledge and learn something new along the way. Last but not the least was the completion of our project. Even though we encountered many errors while merging our project, we were successfully able to debug most, if not all of them within the time limit. 

## What we learned
For most of our team members it was our first time working with the Angular framework. At first we had trouble hosting our own local server, but we got aquainted to the Angular CLI well.
We learned how to animate using TypeScript, utilizing components such as FlexFx. In addition to that, we also learnt how to use flex box, bootstrap, and other faster methods of coding. Finally, we learned many techniques for regression problems in machine learning, and how to set up a production level API endpoint, and how CORS works! 

## What's next for EduTracker
We hope to continue to empower high school and post secondary students, and promote a healthy studying environment, by adding even more resources and information to the resource hub, and even add more features. We want to help students work to develop goals to keep them in line to continue to help them be more successful. We hope that EduTracker can become a hub for students to study more effectively and relieve stress from their day to day activities! 
We also hope to refine our machine learning algorithm as well. There is still a lot of research and model development related to mark prediction and regression techniques, and there definitely is a market for doing so. In the future, we could perform more wrangling on the data, look at more ensembling regression techniques, and look at other papers and Kaggle discussions for more inspiration. 

## References

https://www.researchgate.net/publication/319350236_Machine_Learning_Based_Student_Grade_Prediction_A_Case_Study

https://www.igbr.org/wp-content/uploads/articles/GJBP_Vol_1_No_3_2017-pgs-13-22.pdf

https://www.scinapse.io/papers/3176795340

https://arxiv.org/pdf/1902.10213

https://arxiv.org/pdf/2208.04351
