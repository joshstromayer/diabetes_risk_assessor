# Diabetes Risk Assessor
A simple model to inform users on the associated risk that their demographic and biological data has on the likelihood of developing diabetes.

## Description

There are many factors that can effect the development of diabetes, each with unique contribution. Creating a model that simply predicts whether or not one may have diabetes may be problematic. The classification "Yes" or "No" could be missleading, in reference to the accuracy of the classification, and the parameters that influence the classification the most. Popular models tell users whether or not they have diabetes, and in order for them to identify any characteristics that put them at risk, they must speak to professionals, which is not always convenient. 

This webpage has been created to solve that issue. After inputting your data the model does not tell you whether or not you have diabetes. Rather, the webpage tells you how each individual factor affects this outcome, indicating towards potential adjustments one can make in order to lower their risk. 

## How to use it 

We've created an interractive webpage, focusing on the UI to optimise the experience for our users. With a maximum of 6 inputs - it is not required to fill each one, a user will recieve a detailed report on how their data affects the liklihood of developing diabetes. 

## How we made it

Using a dataset with 100,000 entries, we used Machine Learning techniques to find all the precise patterns between somebody's data, and whether or not they have diabetes. These Supervised Learning models were used to predict whether or not the user had diabetes. Logistic Regression, Decision Tree Classifier, and Random Forest Classifier each achieved >95% accuracy. However only the Logistic Regression model has the feature we need most, the "weights" feature.

This feature shows the direct influence between an input and the model's output. We used these "weights" to identify precisely how each paramater would affect the development of diabetes. This allowed us to write the logic into JavaScript code, a very simply implementation onto a website. Each form filled from a user, would simply be ran through algorithms created from the fixed list of weights. Meaning we would not have to run the model each time, which would save us, and the user, plenty of resources.

## Installation

If you would wish to download and run the model yourself, there are a few simple steps you must follow: 
1. Clone the repository: 
- Navigate to the desired folder in your terminal ("cd ~/Documents/Example")
- Clone the repository, "git clone https://github.com/joshstromayer/diabetes_risk_assessor.git"
- Navigate to new folder "diabetes_risk_assessor:
- Open in IDE "code .", or simply open IDE and 'Open Folder'.

2. Run the notebook: 
- In the first cell, there is a commented code: "pip3 install (...)", run this cell in your terminal. (If on windows use pip rather than pip3)
- Once all libraries are downloaded, run the rest of the notebook! 

All the Pre-Processing code, plots, and model creation are in that one notebook! Enjoy.

## Contributing 
If you'd like to contribute, feel free to fork the repostitory and make all the changes you'd like. 
Here are some ideas for you to get started: 
- Use a different dataset, train the model on different data, possibly with different parameters.
- Change the styling of the website
- Adjust the JavaScript logic in defining the weights and their calculated output onto the website
