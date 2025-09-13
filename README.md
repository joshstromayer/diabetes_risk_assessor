# Diabetes Risk Assessor
A simple model to inform users on the associated risk that their demographic and biological data has on the likelihood of developing diabetes.

## Description

There are many factors that can effect the development of diabetes, each with unique contribution. Creating a model that simply predicts whether or not one may have diabetes may be problematic. The classification "Yes" or "No" could be missleading, in reference to the accuracy of the classification, and the parameters that influence the classification itself. Popular models tell users whether or not they have diabetes, and in order for them to identify the specific characteristics that put them at risk, they must speak to professionals, which is not always convenient. 

This webpage has been created to solve that issue. After inputting your data, the model does not tell you whether or not you have diabetes. Rather, it tells you how each individual factor affects this outcome, indicating towards potential adjustments one can make in order to lower their risk. 

## How to use it 

We've created an interractive webpage, focusing on the UI to optimise the experience for our users. With a maximum of 6 inputs - it is not required to fill each one, a user will recieve a detailed report on how their data affects the liklihood of developing diabetes. 

## How we made it

Using a dataset with 100,000 entries, we used Machine Learning techniques to find all the precise patterns between somebody's data, and whether or not they have diabetes. The following Supervised Learning models were used to predict whether or not the user had diabetes: Logistic Regression, Decision Tree Classifier, and Random Forest Classifier. Each of these models achieved >95% accuracy. 

However, only the Logistic Regression model contains the feature we need, the "weights" feature. This feature shows the direct influence between an input and the model's output. We used these "weights" to precisely identify how each paramater would affect the development of diabetes. 

Although, uploading a machine learning model to a webpage has its caveats; mainly, it would not be efficient to run each time a user fills out the form. For that reason, we decided to copy the weight of each feature into a JavaScript array. In consequence, we would not have to use the model directly. 

This allowed us to write the logic into JavaScript code, a simple implementation onto a website. Each form filled from a user, is ran through algorithms using the array of weights to create an interpretable value for the influence of each, individual feature.

## Installation

If you would wish to download and run the model yourself, there are a few simple steps you must follow: 
1. Clone the repository: 
- Navigate to the desired folder in your terminal ("cd ~/Documents/Example").
- Clone the repository, "git clone https://github.com/joshstromayer/diabetes_risk_assessor.git".
- Open new folder "diabetes_risk_assessor" in your preferred IDE.

2. Run the notebook: 
- In the first cell, there is a commented line of code: "pip3 install (...)", run this cell in your terminal. (If on windows use pip rather than pip3).
- Once all libraries are downloaded, run the rest of the notebook! 

All the Pre-Processing code, plots, model creation and testing are in that one notebook! 

## Contributing 
If you would like to contribute, feel free to 'fork' the repostitory and make all the changes you would like. 
Here are some ideas for you to get started: 
- Use a different dataset, to trainand test the model on different data, possibly with different parameters.
- Change the styling of the website, make it custom to your liking...
- Adjust the JavaScript code to change the output to the user. (numerical output, a graph, etc.)
