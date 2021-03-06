# Cresecent City Donuts

## Description

Crescent City Donuts is a factitious New Orleans staple serving amazing fried confections since 1967. Located in the Garden District, and serving the local community, Crescent City Donuts is a Big Easy tradition.

## Brief Example

![alt text](https://github.com/wheresronald0/Crescent_City_Donuts/blob/master/index_view.png "Screenshot for Application")

## This project is / should be used for

This web application was created to practice Redux in React

This is a Point-of-Sale (POS) system with basic Customer Relationship Management (CRM) capabilities. The application is geared for a small proprietor of donuts/confections. It helps track order fulfillment, through to payment, and customer information tracking

Project is not mobile-first/responsive as it's meant to be viewed on a large stationary POS display

## User Stories

- User is a business user
- User utilizes the point of sale (POS) system to fulfill customer donut orders
- User selects amount of donut and donut type
- User sees donut count per type, and visual representation of unfulfilled order, similar to a physical customer-facing order fulfillment experience beginning with an empty box/order count

## Features - Pseudo Code (MVP/Bronze)

### Index

- Three buttons- “look-up”, “enter new customer data”, and “order now” to prepare the order

### Customer Data Search

- Search bar to search for a customer name in the db (first, last, and email)
- Results will be displayed in list elements directly below
- User will be able to click on customer data to load
- Once data is clicked, order page is displayed with customer name at the top

### New Customer Data

- Form to complete basic customer information (name and address)
- Once for is filled out, order page is displayed with customer name at the top

### Order page

- Buttons displaying total number of donuts to be ordered in increments of one dozen, half dozen, and single
- Thumbnails of donuts with plus and minus increment counters for each
- Once order amount is clicked, A top view is displayed of shadowed/grey donuts to indicate amount to be fulfilled
- As each donut is added to order, said donut will replace greyed out placeholder
- A counter will be displayed to tally each of the flavors of donuts ordered
- A total counter is displayed
- Once order count is completed, a button is displayed to view order in a modal

### Order Summary

- Modal displays order total, cost, and a complete order button, that when pressed will take you back to customer lookup page OR a completed order status page

## Advanced Features (Silver/Gold)

- Total based on discount is dozen ordered, or new customer coupon applied (not completed)
- Customer Data Search with multiple data inputs to search on (email, etc.)(completed)
- Store order with customer data (not completed)
- Display order history with querying customer (not completed)
- Sales tax (completed)
- Total cost (completed)
- Employee login (not completed)
- Additional products (not completed)
- PayPal payment integration (not completed)

## List of Technologies Used

- JavaScript
- React
- Redux
- Node.js
- Express
- Mongoose
- MongoDB
- React-Bootstrap
- CSS
- HTML

## Installation Instructions / Getting Started

This project was bootstrapped with Create React App. Please visit this link for instruction on running this application (https://github.com/wheresronald0/Crescent_City_Donuts/blob/master/cresent-city-donuts/README.md)

## Contribution Guidelines

If you'd like to contribute to this project, please checkout a branch

## Project's main repository

(https://github.com/wheresronald0/Crescent_City_Donuts)

## Project's Node.js/MongoDB repository

(https://github.com/wheresronald0/Crescent_City_Donuts_MongoDb_Backend)

## Project's issue tracker

(https://github.com/wheresronald0/Crescent_City_Donuts/issues)
