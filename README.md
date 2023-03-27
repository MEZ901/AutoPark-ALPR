# AutoPark-ALPR

Automatic License Plate Recognition based Parking Garage Management System

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Requirements

This project was built with React and Firebase and requires the following:
- Node.js (v14 or higher)
- Firebase account and project setup
- Firebase authentication (with email and password & Google) and Firestore database enabled

## Installation
To get started with the project, follow these steps:
1. Clone the repository:
```bash
git clone git@github.com:MEZ901/AutoPark-ALPR.git
```
2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```
3. Make copy of ``.env.example`` file and remove ``.example`` then config your Firebase.
4. Start the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```
5. Open the app in your browser at ``http://127.0.0.1:5173/``.
6. Create admin account by creating normal account then go to Firestore and change the ``role`` to ``admin``.

## Usage

To use the app, follow these instructions:

1. Sign up for an account or log in if you already have one.
2. View the current number of vehicles in the garage and the total capacity of the garage on the dashboard.
3. Filter the list of vehicles by license plate number using the search bar.
4. View the log of all vehicle entries and exits, including the license plate number, time of entry, and time of exit.
5. Super admins can add, edit, and delete entries in the log.
6. Users can only view the current list of vehicles in the garage and the log of their own vehicle's entries and exits.

## Features

This project includes the following features:
- Firebase authentication for user sign up and login
- Authentication using Google
- Firestore database to store vehicle data and log entries
- Filtering of vehicle list by license plate number
- User roles and permissions for super admins and regular users
- Fully responsive web design
- Single page application
- The app load and perform efficiently
